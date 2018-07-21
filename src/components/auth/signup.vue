<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input" :class="{invalid: $v.firstName.$error}">
          <label for="firstName">First Name</label>
          <input
                  type="firstName"
                  id="firstName"
                  @blur="$v.firstName.$touch()"
                  v-model="firstName">
        </div>
         <div class="input" :class="{invalid: $v.lastName.$error}">
          <label for="lastName">Last Name</label>
          <input
                  type="lastName"
                  id="lastName"
                  @blur="$v.lastName.$touch()"
                  v-model="lastName">
        </div>
         <div class="input" :class="{invalid: $v.username.$error}">
          <label for="username">Username</label>
          <input
                  type="username"
                  id="username"
                  @blur="$v.username.$touch()"
                  v-model="username">
        </div>
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
          <p v-if="!$v.email.email">Please provide a valid email address.</p>
          <p v-if="!$v.email.unique">This email address is already taken. Please try another.</p>

        </div>
        
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  @blur="$v.confirmPassword.$touch()"
                  v-model="confirmPassword">
                   <p v-if="!$v.confirmPassword.sameAs">Passwords do not match.</p>
        </div>
        <div class="submit">
          <button type="submit" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  minValue,
  minLength,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
import axios from "axios";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      stocks: ["MSFT", "AAPL", "TSLA"]
    };
  },
  validations: {
    email: {
      required,
      email,
      unique: val => {
        if (val === "") return true;
        return axios
          .get('/users.json?orderBy="email"&equalTo="' + val + '"')
          .then(res => {
            return Object.keys(res.data).length === 0;
          });
      }
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      //        sameAs: sameAs('password')
      sameAs: sameAs(vm => {
        return vm.password;
      })
    },
    firstName: {
      required
    },

    lastName: {
      required
    },

    username: {
      required
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        stocks: this.stocks
      };
      //console.log("This is form data from signup component: " + formData);
      this.$store.dispatch("signup", formData);
    }
  }
};
</script>

<style scoped>
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
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

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input.invalid label {
  color: red;
}

.input.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>