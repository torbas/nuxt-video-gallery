<template>
  <b-list-group-item>
  <h5 class="header">{{ videosSection.title }}</h5>
  <p class="snippet">
      {{ videosSection.description }}
  </p>
  </b-list-group-item>
</template>

<script>
  export default {
      props: ['videosSection'],
  }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-body {
  font-family: "granville",Georgia,"Times New Roman",serif;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

button.btn.btn-primary[type=submit]{
  background-color: #023B30;
}
</style>