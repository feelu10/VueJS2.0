<template>
  <div>
    <div v-if="success" class="success-message">{{ success }}</div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      success: "",
      error: "",
    };
  },
  methods: {
    showSuccess(message) {
      this.success = message;
      this.error = "";
      setTimeout(() => {
        this.success = "";
      }, 3000); // Hide success message after 3 seconds
    },
    showError(message) {
      this.error = message;
      this.success = "";
    },
  },
};
</script>

<style scoped>
.success-message {
  color: green;
}

.error-message {
  color: red;
}
</style>
