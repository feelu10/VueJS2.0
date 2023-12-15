<template>
  <div class="signup-container">
    <div class="signup-form">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <!-- Input fields for username and password -->
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="input-field"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="input-field"
          />
        </div>
        <!-- Role selection dropdown -->
        <div class="form-group" id="select">
          <label for="role">Role:</label>
          <select v-model="role" id="role" class="select-field">
            <option value="aq-<[%dF$2vkxv[jJ{[P~IE8nme=.Zn">Admin</option>
            <option value="s6Z-8Gu.xW#yguh]Mle52T?Hg3_6Hhr">Shipper</option>
            <option value="ciV2dWsIS2LdJUCMfXl9,i={6*C6aQqr">Carrier</option>
          </select>
        </div>
        <!-- Additional input fields based on the selected role -->
        <div v-if="role === 'shipper'" class="form-group">
          <label for="shippername">Shipper Name:</label>
          <input
            v-model="shippername"
            type="text"
            id="shippername"
            class="input-field"
          />
        </div>
        <div v-if="role === 'carrier'" class="form-group">
          <label for="carriername">Carrier Name:</label>
          <input
            v-model="carriername"
            type="text"
            id="carriername"
            class="input-field"
          />
        </div>
        <!-- Centered button -->
        <div class="form-group text-center">
          <button type="submit" class="submit-button" :disabled="loading">
            Register
          </button>
          <!-- Display loader while processing -->
          <div v-if="loading" class="loader-container">
            <div class="loader"></div>
          </div>
          <!-- Display success message -->
          <p v-if="successMessage" style="color: rgb(0, 0, 0)">
            {{ successMessage }}
          </p>
          <!-- Display error message -->
          <p v-if="errorMessage" style="color: rgb(0, 0, 0)">
            {{ errorMessage }}
          </p>
        </div>
        <div class="form-group" id="reg-div">
          <p>Have an account?</p>
          <p>
            <router-link to="/" class="register-link"> Login</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
  <FooterPage></FooterPage>
</template>

<style scoped>
.text-center {
  text-align: center;
}

button {
  width: 100%;
}
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.signup-form {
  max-width: 400px;
  width: 100%;
  padding: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #343a40;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 1.2em;
  color: #495057;
}

.input-field {
  width: 93%;
  padding: 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1em;
  color: #495057;
}
.select-field {
  width: 25%;
  padding: 5px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1em;
  color: #495057;
}

.submit-button {
  background-color: #007bff;
  color: #ffffff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

#reg-div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.register-link {
  text-align: center;
  color: #007bff;
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.3s ease;
  margin-left: 0.2rem;
}

.register-link:hover {
  color: #0056b3;
}

.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
}
.loader {
  border: 4px solid #d4d4d4;
  border-top: 4px solid #0987db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
import FooterPage from "@/components/FooterPage.vue";
import axios from "axios";

export default {
  components: {
    FooterPage,
  },
  data() {
    return {
      username: "",
      password: "",
      role: "",
      shippername: "",
      carriername: "",
      errorMessage: "",
      successMessage: "",
      loading: false,
    };
  },
  methods: {
    register() {
      this.loading = true;
      const userData = {
        username: this.username,
        password: this.password,
        role: this.role,
        shippername: this.shippername,
        carriername: this.carriername,
      };

      axios
        .post(
          "https://us-central1-jakebrakelogistics-2e451.cloudfunctions.net/api/signup",
          // "http://127.0.0.1:5001/jakebrakelogistics-2e451/us-central1/api/signup",
          userData,
          {
            headers: {
              password: "2023", // Your server password
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            const successMessage = response.data.message;
            this.errorMessage = "";
            this.successMessage = successMessage;
            this.username = "";
            this.password = "";
            this.role = "";
            this.shippername = "";
            this.carriername = "";
          } else {
            this.errorMessage = response.data.message || "Registration failed";
          }
        })
        .catch(() => {})
        .finally(() => {
          this.loading = false;
        });
    },
    clearErrorMessage() {
      this.successMessage = "";
    },
  },
};
</script>
