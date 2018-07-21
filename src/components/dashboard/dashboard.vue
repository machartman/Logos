<template>
  <div id="dashboard" class = "container">
    
    <div class="row">

    <div class="col-md-4">
        <div class="card text-center">
          <div class="card-header dashboard-header">
            {{username}}'s Dashboard
          </div>
          <div class="card-body">
           <h6 class="card-subtitle stock-list-header">Stock List</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="stock in stocks" v-bind:class="{active : activeStock === stock}"   :key="stock" :id="stock" @click="stockSelected = true">
                  <a @click="selectStock(stock)" :id="stock" :preventClick="edit">{{stock}}</a>
                  <button v-if="edit" @click="deleteStock(stock)" class="btn btn-outline-dangerr">DELETE</button>
                </li>
              </ul>
          </div>
          <div class="card-footer text-muted">
            <div class="input" :class="{invalid: $v.newStock.$error}">
              <label for="password">Add a stock</label>
              <input
                  type="newStock"
                  id="newStock"
                  @blur="$v.newStock.$touch()"
                  v-model="newStock"
                  :preventClick="edit">
              <p v-if="!$v.newStock.unique">This stock is already on your watchlist</p>
              <p v-if="!$v.newStock.exists">This is not a valid NASDAQ Ticker</p>
            </div>
            <div class="justify-content-between">
            <button class="btn btn-outline-success btn-buffer" @click="addStock()" :disabled="$v.$invalid"
             type="button">ADD</button>
            <button class="btn btn-outline-danger btn-buffer" @click="edit = !edit" type="button">EDIT</button>
            
            </div>
          </div>
        </div>

      </div>



      <div class="col-md-8">
        <div class="card text-center">
          <div class="card-header dashboard-header">
            {{activeStock}}
          </div>
          <div class="card-body">
            <h5 v-if="!stockSelected" class="card-title">Price Information</h5>

            <div v-if="stockSelected">
              
              <a 
              @click="displayData = true" 
              v-bind:class="{active: displayData===true}"
              v-bind:id="{active: displayData===true}"
              :preventClick="this.edit"
              >
              Data
              </a>
              <a 
              @click="displayData = false"
              v-bind:class="{active: displayData===false}"
              v-bind:id="{active: displayData===false}"
              :preventClick="this.edit"

               >
               News
               </a>

              <div v-if="displayData">
                <div  v-for="(days, key,index) in stockData" :key="index">
                  <div class="list-group">
                    <div class="dates">
                      {{key}}
          
                    </div>
                   
                    <table style="width:100%" class = "mb-1">
                      
                      <tr>
                        <th>Open</th>
                        <th>Close</th> 
                        <th>High</th>
                        <th>Low</th>
                        <th>Adjusted Close</th>
                        <th>Volume</th>
                      </tr>
                      <tr>
                        <td>{{days["1. open"]}}</td>
                        <td>{{days["4. close"]}}</td> 
                        <td>{{days["2. high"]}}</td>
                        <td>{{days["3. low"]}}</td>
                        <td>{{days["5. adjusted close"]}}</td> 
                        <td>{{days["6. volume"]}}</td>
                      </tr>
                      
                    </table>
                    </div>
                </div>
              </div>


              <div v-if="!displayData">
                <div v-for="num in 10" :key="num">
                  <div class = "article">
                    <h4>{{stockNews.data.articles[num].title}} </h4>
                    <p> Source: {{stockNews.data.articles[num].source.name}} </P>
                    <p>Author: {{stockNews.data.articles[num].author}}</p>
                    <p>Description: {{stockNews.data.articles[num].description}}</p>
                    <a target="_blank" :href="stockNews.data.articles[num].url">Article</a>
                    <br>
                    <hr>
                   </div>
                </div>


              </div>

            </div>


          </div>
        </div>

      </div>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
import stockTickers from "../../data/stockTickers.js";
import stockNames from "../../data/stockNames.js";
import { required, requiredUnless } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      newStock: "",
      stockTickers: stockTickers,
      stockNames: stockNames,
      edit: false,
      stockSelected: false,
      displayData: true
    };
  },
  computed: {
    
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    stocks() {
      return !this.$store.getters.user
        ? false
        : this.$store.getters.user.stocks;
    },
    username() {
      return !this.$store.getters.user
        ? false
        : this.$store.getters.user.username;
    },
    activeStock() {
      return !this.$store.getters.user
        ? false
        : !this.$store.getters.selectedStock
          ? "Select a Stock"
          : this.$store.getters.selectedStock;
    },
    stockData() {
      return !this.$store.getters.user ? false : this.$store.getters.stockData;
    },

    stockKeys(stockData){
      return !this.$store.getters.user ? false : this.$store.getters.stockKeys;
    },

    stockNews(){
      return !this.$store.getters.user ? false : this.$store.getters.stockNews;

    }
    
  },
  validations: {
    newStock: {
      required,
      exists: val => {
        if (val === "") return true;
        const stockCompare = val.toUpperCase();
        //console.log(stockCompare);
        if ($.inArray(stockCompare, stockTickers) === -1) {
          return false;
        } else {
          return true;
        }
      },
      unique: val => {
        if (val === "") return true;
        const stockCompare = val.toUpperCase();
        //console.log(stockCompare);
        const stockList = localStorage.getItem("stockList");
        const stockListArray = stockList.split(",");
        //console.log(stockList);
        //console.log($.inArray(stockCompare, stockList));
        if ($.inArray(stockCompare, stockListArray) != -1) {
          return false;
        } else {
          return true;
        }
      }
    }
  },

  methods: {
    selectStock(stock) {
      this.$store.commit("selectStock", stock);
      this.$store.dispatch("getStockData", stock);
      this.$store.dispatch("getStockNews", stock);
    },
    displayTickers() {
      //console.log(stockTickers);
    },
    addStock() {
      //console.log("New Stock to be Added: " + this.newStock.toUpperCase());
      this.$store.commit("addStock", this.newStock.toUpperCase());
      this.$store.dispatch("updateStocks");
      this.newStock = "";
    },
    deleteStock(stock) {
      //console.log("This is the stock to be deleted: " + stock);
      this.$store.commit("deleteStock", stock);
      this.$store.dispatch("updateStocks");
    }
  }
};
</script>


<style scoped>
.row{
  padding: 15px;
}
h1,
p {
  text-align: center;
}

p {
  color: #521751;
}
.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.dashboard-footer{
  background-color: 4e4e4e;
}
.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}


.stock-list-header{
  color: 521751;
}

.dashboard-header{
  background-color:#521751 ;
  color:white;
  font-weight:bold;
  font-size: 20px;
}


.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}



.input select {
  border: 1px solid #ccc;
  font: inherit;
}


a {
  width: 400px;
  margin: auto;
  text-align: center;
  font-weight:bold
}
#active{
  color:white;
}

a {
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #521751;
  border-radius: 3px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: #521751;
}

a:hover,
a:active {
  background-color: #521751;
  color: white;
}
.active{
    background-color:  #521751;
    color: white !important;
}
tr:hover {background-color: #f5f5f5;}
tr{
  padding:5px
}
th {
    background-color: #521751;
    color: white;
    text-align:center;
}
td{
  text-align: center;
}
table, th, td {
    border: 1px solid #521751;
}
</style>