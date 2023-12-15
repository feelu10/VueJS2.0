<template>
  <div class="not-found-container">
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for might be in another universe.</p>
    <router-link to="/" class="back-to-home">Back to Home</router-link>
  </div>
</template>

<style scoped>
.not-found-container {
  text-align: center;
  margin-top: 100px;
  font-family: "Arial", sans-serif;
}

h1 {
  font-size: 3em;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #777;
}

.back-to-home:hover {
  background-color: #2980b9;
}
</style>
