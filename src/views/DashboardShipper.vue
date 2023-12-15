<template>
  <div class="dashboard">
    <h2 style="text-align: center">Dashboard</h2>
    <div class="float-right">
      <LogoutMethod @logout="logout" />
    </div>
    <p>Welcome, Shipper!</p>
    <!-- <p v-if="role === 'shipper'">Welcome, Shipper {{ username }}!</p>
        <p v-if="role === 'carrier'">Welcome, Carrier {{ username }}!</p> -->

    <aside>
      <MiddleContainer />
    </aside>
    <div v-if="!role">
      <img
        src="https://www.facebook.com/messenger_media?attachment_id=333697775944672&message_id=mid.%24gABjpSVxXQl6R6xWZ02LudBPy78Xx&thread_id=7011900732162654"
        alt=""
      />
    </div>
    <FooterPage />
  </div>
</template>

<script>
import FooterPage from "@/components/FooterPage.vue";
import LogoutMethod from "@/components/LogoutMethod.vue";
import MiddleContainer from "@/components/MiddleContainer.vue";
import axios from "axios";

export default {
  name: "DashboardShipper",
  components: {
    LogoutMethod,
    FooterPage,
    MiddleContainer,
  },
  data() {
    return {
      role: "",
      username: "",
      deletedData: [],
    };
  },
  created() {
    // Fetch deleted data automatically when the component is created
    this.fetchDeletedData();
  },
  methods: {
    fetchDeletedData() {
      axios
        .get(
          "https://us-central1-jakebrakelogistics-2e451.cloudfunctions.net/api/sample_loads",
          {
            headers: {
              password: "2023",
            },
          }
        )
        .then((response) => {
          console.log(response.data); // Log the API response

          this.deletedData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching deleted data:", error);
        });
    },
    logout() {
      if (confirm("Are you sure you want to log out?")) {
        // Clear the auth token cookie
        this.setCookie("authToken", "", -1);
        // Redirect to the HomeView
        this.$router.push({ name: "HomeView" });
      }
    },
    setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
  },
  mounted() {
    // Set role and username when the component is mounted
    if (this.$route.query.role) {
      this.role = this.$route.query.role;
    }

    if (this.$route.query.username) {
      this.username = this.$route.query.username;
    }

    // Fetch deleted data automatically when the component is created
    this.fetchDeletedData();
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px 0;
}

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
