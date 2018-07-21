import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    userEmail: null,
    user: null,
    selectedStock: null,
    dashPage: '',
    stockNews:'',
    stockData: '',
    stockKeys:'',
    logInError: false
  },
  mutations: {
    logInError(state, val){
      state.logInError = val;
    },

    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
      //state.email = userData.email
    },

    authUser1(state, userData) {
      state.userEmail = userData.email
    },

    storeUser(state, user) {
      state.user = user
    },

    clearAuthData(state) {
      state.idToken = null
      state.userId = null
      state.userEmail = null
    },

    deleteStock(state, stock){

      const stockIndex = state.user.stocks.indexOf(stock);
      const stockList = state.user.stocks;
      //console.log("This is stock list: " + stockList)
      //console.log("This is stockIndex: " + stockIndex)
      const removedStocks = stockList.splice(stockIndex,1);
      //console.log("This is removed stock: " + removedStocks)
      //console.log("This is new stock array: " + stockList)
      state.user.stocks = stockList

    },

    stockKeys(state,stockKeys){
      state.stockKeys = stockKeys
    },

    stockNews(state, stockNews){
      state.stockNews = stockNews
    },

    selectStock(state, stock){
      state.selectedStock = stock
    },

    addStock(state, addStock){
      //console.log(state.user.stocks)
      if(state.user.stocks === undefined){
        state.user.stocks = [addStock]
      }else{
        state.user.stocks.push(addStock)
        //console.log("New array of stocks from mutation: " + state.user.stocks.push(addStock))
      }
    },

    stockData(state,stockData){
      state.stockData = stockData;
    }

  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    },

    signup({ commit, dispatch }, authData) {
      axios.post('/signupNewUser?key=AIzaSyA1VCVHvWdaU8KfrMFomHrcNRqg2WQJ84E', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          commit('authUser1', res.data)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
          })
          //console.log("sign up res.data: " + res.data)
          dispatch('storeUser', authData);


          // {
          //   token: res.data.idToken,
          //   userId: res.data.localId,
          //   userEmail: res.data.email
          // }

          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('Email', res.data.email)
          localStorage.setItem('stockList', authData.stocks)

          localStorage.setItem('expirationDate', expirationDate)
          //console.log("sign up is firing")
          dispatch('setLogoutTimer', res.data.expiresIn);

        })
        .catch(error => console.log(error))
    },

    login({ commit, dispatch }, authData) {
      axios.post('/verifyPassword?key=AIzaSyA1VCVHvWdaU8KfrMFomHrcNRqg2WQJ84E', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {


          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('Email', res.data.email)
          localStorage.setItem('expirationDate', expirationDate)
          commit('logInError', false)

          commit('authUser1', res.data)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
          })
          dispatch('setLogoutTimer', res.data.expiresIn)
          dispatch('fetchUser', res.data.email)

        })
        .catch(error => {
          console.log(error)
          commit('logInError', true)
         } )
    },


    tryAutoLogin({ commit, dispatch }) {
      const token = localStorage.getItem('token')
      //console.log("This is token: " + token)
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      const email = localStorage.getItem('Email')

      commit('authUser', {
        token: token,
        userId: userId
      })
      commit('authUser1', email)
      dispatch('fetchUser', email)
      //console.log("hitting")
    },

    logout({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('Email')
      localStorage.removeItem('stockList')


      router.replace('/signin')
    },

    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      commit('storeUser',userData)
      const emailKey = userData.email.replace(".", ",");
      globalAxios.patch('/users/' + emailKey + '.json' + '?auth=' + state.idToken, userData)
        .then(res => {
          //console.log("store user is firing")
          //console.log("Data from store user: " + res.data)
          router.replace('/dashboard');
        }

        )
        .catch(error => console.log(error))
    },

    updateStocks({commit, state}){
      const emailKey = state.userEmail.replace(".", ",");
      //console.log("This is emailKey: " + emailKey)
      //console.log("This is stock array: " + state.user.stocks)
      globalAxios.put('users/'+ emailKey + '/stocks.json' + '?auth=' + state.idToken , state.user.stocks)
        .then(res => {
          //console.log(res)
        })
        .catch(err => (console.log(err)))
    },


    fetchUser({ commit, state }, email) {
      if (!state.idToken) {
        return
      }
      // '/users.json?orderBy="email"&equalTo="' + val + '"' + '?auth=' + state.idToken
      // globalAxios.get('/users.json' + '?auth=' + state.idToken)
      const emailKey = email.replace(".", ",");
      globalAxios.get('/users/' + emailKey + '.json')
        .then(res => {
          //console.log(res)
          //console.log('Fetch User is Firing')
          const user = res.data
          localStorage.setItem('stockList', res.data.stocks)

          commit('storeUser', user)
          router.replace('/dashboard')
        })
        .catch(error => console.log(error))
    },

    goToDashboard({ commit, state }) {
      router.replace('/dashboard')
    },

    getStockData({commit,state}, stock){
      const queryURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + stock + '&outputsize=compact&apikey=WITF0ARPLHOVB22A'
      //console.log("This is queryURL: "+ queryURL)
      return axios.get(queryURL
       )
        .then(res => {
        //console.log(JSON.stringify(res))
        const data= JSON.stringify(res)
        const newData = data
        const new1Data = JSON.parse(newData)
        const new2Data = new1Data.data["Time Series (Daily)"]
        //console.log(Object.keys(new2Data))
        const stockKeys = Object.keys(new2Data)
       
     
        commit("stockKeys", stockKeys)
        commit("stockData",new2Data )
        })
        .catch(error => console.log(error))
    },

    getStockNews({commit,state}, stock){
      const queryURL = 'https://newsapi.org/v2/everything?q=' + stock + '&apiKey=4a32ab141cc14d49b655e8e7518b9777'
      //console.log("This is queryURL: "+ queryURL)
      return axios.get(queryURL
       )
        .then(res => {
        const stockNews = JSON.stringify(res)
        const stock1News = JSON.parse(stockNews)
        //console.log("This is news data: " + stock1News)
        commit("stockNews",stock1News)
        })
        .catch(error => console.log(error))
    }


  },

  getters: {

    user(state) {
      return state.user
    },

    isAuthenticated(state) {
      return state.idToken !== null
    },

    selectedStock(state){
      return state.selectedStock
    },
    
    stockList(state){
      return state.user.stocks
    },
    stockData(state){
      return state.stockData
    },
    stockKeys(state){
      return state.stockKeys
    },
    stockNews(state){
      return state.stockNews
    },
    logInError(state){
      return state.logInError
    }

  }

})