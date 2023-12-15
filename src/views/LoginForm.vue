<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
        <div v-if="loading" class="loader-container">
          <div class="loader"></div>
        </div>
        <div
          v-if="message"
          :class="{ 'error-message': !loginSuccess }"
          class="form-group"
        >
          <p>{{ message }}</p>
        </div>
        <div class="form-group" id="reg-div">
          <p>Haven't an account?</p>
          <p>
            <router-link to="/signup" class="register-link">
              Register</router-link
            >
          </p>
        </div>
      </form>
    </div>
  </div>
  <FooterPage></FooterPage>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.login-form {
  max-width: 400px;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8em;
  margin-bottom: 30px;
  color: #343a40;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1em;
  color: #495057;
}

button {
  background-color: #007bff;
  color: #ffffff;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
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

#reg-div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.error-message {
  color: #dc3545;
  font-size: 1.1em;
  text-align: center;
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
  background: rgba(255, 255, 255, 0.8);
}

.loader-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
import axios from "axios";
import FooterPage from "@/components/FooterPage.vue";
import { setAuthenticated, setAuthToken } from "@/auth";

export default {
  components: {
    FooterPage,
  },
  data() {
    return {
      username: "",
      password: "",
      message: "",
      loginSuccess: false,
      loading: false,
    };
  },
  watch: {
    username() {
      this.clearErrorMessage();
    },
    password() {
      this.clearErrorMessage();
    },
  },
  methods: {
    showSuccess(message) {
      message;
    },
    clearErrorMessage() {
      this.message = "";
    },
    // Inside the login method
    login(event) {
      event.preventDefault();

      this.loading = true;

      const tokens = [
        "U2FsdGVkX1+Gn2wR7zJgkZ1r3Y0c5UzQe5g1l6LHgRvDm1qXW3Z9qoK9ZtXr2pJnU3b1rOe9mNWj5Zp7Z1r3Y0c5UzQe5g1l6LHgRvDm1qXW3Z9qoK9ZtXr2pJnU3b1rOe",
        "U2FsdGVkX18sP2JZPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn",
        "5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz",
        "3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9f",
        "M2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3s",
        "VW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3",
        "bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5",
        "CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3",
        "dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2",
        "dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW",
        "9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ",
        "3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD",
        "3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn",
        "5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz",
        "3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9f",
        "M2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3bFZ3sVW9fM2dEz3dPn5CfD3",
      ];

      const randomIndex = Math.floor(Math.random() * tokens.length);

      axios
        .post(
          "https://us-central1-jakebrakelogistics-2e451.cloudfunctions.net/api/login",
          new URLSearchParams({
            username: this.username,
            password: this.password,
          }),
          {
            headers: {
              password: "2023",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          this.message = response.data.message;
          this.loginSuccess = response.data.success;

          if (response.data.success) {
            this.showSuccess("Login successful");
            // console.log(response);

            setAuthenticated(tokens[randomIndex]);
            sessionStorage.setItem("username", response.data.username);

            // Store the JWT token in local storage
            setAuthToken(response.data.token);

            // Use localStorage to store the user role
            localStorage.setItem(
              "iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmwiLCJlbmNyeXB0ZWRVc2VyRGF0YSI6IkZLOFp1ZmJLOHg2YURGQXlDd3AzT3NWU1hIOG5aSWpET01oL0s5dExsZjduWTdYaVpqQml5aEZLL0F4ODNxRXZQblJaMFoxT3JTYlBDT1d1RFNzTHBRRTRTZmp2cmJuV1FmQzhjQ2ZSRXdRcnRwUm00VVpTUmZsa3Mra0J5ZnF5MGpYUUxuZXBlTjJWallURE43OeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmwiLCJlbmNyeXB0ZWRVc2VyRGF0YSI6IkZLOFp1ZmJLOHg2YURGQXlDd3AzT3NWU1hIOG5aSWpET01oL0s5dExsZjduWTdYaVpqQml5aEZLL0F4ODNxRXZQblJaMFoxT3JTYlBDT1d1RFNzTHBRRTRTZmp2cmJuV1FmQzhjQ2ZSRXdRcnRwUm00VVpTUmZsa3Mra0J5ZnF5MGpYUUxuZXBlTjJWallURE43OFdFWitCTVBjNURmR1Z6ZFM1c2Q4dDRNUEVQTnZwbHhrSkJtZlNxWGJrVy9tbnFNTjdQZlhscHdoWUcvRm0vVDdTOWc9PSIsImlhdCI6MTcwMTA5NDc1MywiZXhwIjoxNzAxMDk4MzUzfQ.CmATsYn2BaJ8ZU_jw6-B3C1BEpBGQiUZ_NsC0drUlwo",
              response.data.role
            );

            // Set the role in the component data
            this.role = response.data.role;

            setTimeout(() => {
              this.$router.push({ name: "Dashboard" });
            }, 100);
          }
        })
        .catch(() => {
          this.message = "Login failed. Please check your credentials.";
          this.loginSuccess = false;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
