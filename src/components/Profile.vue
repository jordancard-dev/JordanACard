<script setup lang="ts">
</script>

<template>
  <div class="greetings">
    <h1 class="green">Jordan Card</h1>
    <h2>Full Stack Developer</h2>
    <p>
      “It’s not the load that breaks you down, it’s the way you carry it.” — Lena Horne
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
