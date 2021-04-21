<template>
  <b-list-group-item>
  <NuxtLink :to="`/videos/${videosSection.id}`">
    <h5 class="header">{{ videosSection.title }}</h5>
  </NuxtLink>
  <p class="snippet">
      Description: {{ videosSection.description }}
  </p>
  </b-list-group-item>
</template>

<script>
  export default {
      props: ['videosSection'],
  }
</script>

<style>

</style>