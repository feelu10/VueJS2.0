<template>
  <div class="dashboard">
    <!-- <h2 style="text-align: center">Dashboard</h2> -->
    <!-- <div class="float-right">
      <LogoutMethod @logout="logout" />
    </div> -->
    <!-- <p v-if="role">
      Welcome, {{ role.charAt(0).toUpperCase() + role.slice(1) }}
      {{ username }}!
    </p> -->

    <div v-if="role === 'aq-<[%dF$2vkxv[jJ{[P~IE8nme=.Zn'">
      <aside>
        <!-- <MiddleContainer /> -->
        <AdminDash :deletedData="deletedData" />
      </aside>
    </div>

    <div v-if="role === 'ciV2dWsIS2LdJUCMfXl9,i={6*C6aQqr'">
      <aside>
        <h1>this is a sample for carrier</h1>
      </aside>
    </div>

    <!-- <div v-if="!role">
      <img
        src="https://www.facebook.com/messenger_media?attachment_id=333697775944672&message_id=mid.%24gABjpSVxXQl6R6xWZ02LudBPy78Xx&thread_id=7011900732162654"
        alt=""
      />
    </div> -->
    <FooterPage />
  </div>
</template>

// Dashboard.vue
<script>
import FooterPage from "@/components/FooterPage.vue";
import AdminDash from "@/components/AdminDash.vue";
import axios from "axios";

export default {
  name: "DashboardPage",
  components: {
    FooterPage,
    AdminDash,
  },
  data() {
    return {
      role: this.getCookie(
        "iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmwiLCJlbmNyeXB0ZWRVc2VyRGF0YSI6IkZLOFp1ZmJLOHg2YURGQXlDd3AzT3NWU1hIOG5aSWpET01oL0s5dExsZjduWTdYaVpqQml5aEZLL0F4ODNxRXZQblJaMFoxT3JTYlBDT1d1RFNzTHBRRTRTZmp2cmJuV1FmQzhjQ2ZSRXdRcnRwUm00VVpTUmZsa3Mra0J5ZnF5MGpYUUxuZXBlTjJWallURE43OeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmwiLCJlbmNyeXB0ZWRVc2VyRGF0YSI6IkZLOFp1ZmJLOHg2YURGQXlDd3AzT3NWU1hIOG5aSWpET01oL0s5dExsZjduWTdYaVpqQml5aEZLL0F4ODNxRXZQblJaMFoxT3JTYlBDT1d1RFNzTHBRRTRTZmp2cmJuV1FmQzhjQ2ZSRXdRcnRwUm00VVpTUmZsa3Mra0J5ZnF5MGpYUUxuZXBlTjJWallURE43OFdFWitCTVBjNURmR1Z6ZFM1c2Q4dDRNUEVQTnZwbHhrSkJtZlNxWGJrVy9tbnFNTjdQZlhscHdoWUcvRm0vVDdTOWc9PSIsImlhdCI6MTcwMTA5NDc1MywiZXhwIjoxNzAxMDk4MzUzfQ.CmATsYn2BaJ8ZU_jw6-B3C1BEpBGQiUZ_NsC0drUlwo"
      ),
      username: this.$route.query.username,
      deletedData: [],
    };
  },
  created() {
    this.fetchDeletedData();
  },
  methods: {
    getCookie(name) {
      const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return undefined;
    },
    fetchDeletedData() {
      axios
        .get(
          // "http://127.0.0.1:5001/jakebrakelogistics-2e451/us-central1/api/sample_loads",
          "https://us-central1-jakebrakelogistics-2e451.cloudfunctions.net/api/sample_loads",
          {
            headers: {
              password: "2023",
            },
          }
        )
        .then((response) => {
          this.deletedData = response.data;
          // console.log("iwant to view", response);
        })
        .catch((error) => {
          console.error("Error fetching deleted data:", error);
        });
    },
    logout() {
      if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("userToken");
        this.setCookie("authToken", "", -1);
        this.$router.push({ name: "HomeView" });
      }
    },
    setCookie(name, value, days, secure) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie =
        name +
        "=" +
        (value || "") +
        expires +
        "; path=/" +
        (secure ? "; Secure" : "") +
        "; HttpOnly";
    },
  },
  mounted() {
    this.username = this.$route.query.username;
    this.role = localStorage.getItem(
      "iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmwiLCJlbmNyeXB0ZWRVc2VyRGF0YSI6IkZLOFp1ZmJLOHg2YURGQXlDd3AzT3NWU1hIOG5aSWpET01oL0s5dExsZjduWTdYaVpqQml5aEZLL0F4ODNxRXZQblJaMFoxT3JTYlBDT1d1RFNzTHBRRTRTZmp2cmJuV1FmQzhjQ2ZSRXdRcnRwUm00VVpTUmZsa3Mra0J5ZnF5MGpYUUxuZXBlTjJWallURE43OeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhcmwiLCJlbmNyeXB0ZWRVc2VyRGF0YSI6IkZLOFp1ZmJLOHg2YURGQXlDd3AzT3NWU1hIOG5aSWpET01oL0s5dExsZjduWTdYaVpqQml5aEZLL0F4ODNxRXZQblJaMFoxT3JTYlBDT1d1RFNzTHBRRTRTZmp2cmJuV1FmQzhjQ2ZSRXdRcnRwUm00VVpTUmZsa3Mra0J5ZnF5MGpYUUxuZXBlTjJWallURE43OFdFWitCTVBjNURmR1Z6ZFM1c2Q4dDRNUEVQTnZwbHhrSkJtZlNxWGJrVy9tbnFNTjdQZlhscHdoWUcvRm0vVDdTOWc9PSIsImlhdCI6MTcwMTA5NDc1MywiZXhwIjoxNzAxMDk4MzUzfQ.CmATsYn2BaJ8ZU_jw6-B3C1BEpBGQiUZ_NsC0drUlwo"
    );
  },
};
</script>

<style scoped>
.float-right {
  float: right;
  margin-right: 2rem;
}

.deleted-list {
  list-style-type: none;
  padding: 0;
}

.deleted-item {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}

.deleted-item div {
  margin-bottom: 5px;
}
</style>
