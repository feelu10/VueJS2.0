<template>
  <div>
    <li class="sidebar-list-item">
      <a href="#" @click="confirmLogout">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-log-out"
        >
          <path
            d="M9 14h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zM2 18h14"
          ></path>
          <path d="M10 12l4 4l-4 4"></path>
          <path d="M14 16H2"></path>
        </svg>
        <span>Logout</span>
      </a>
    </li>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { setAuthenticated } from "@/auth";

export default {
  methods: {
    async confirmLogout() {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log me out!",
      });

      if (result.isConfirmed) {
        // Clear session and local storage
        sessionStorage.clear();
        localStorage.clear();

        // Set authenticated to false
        setAuthenticated(false);

        // Redirect to the home page
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/admin_dash.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
