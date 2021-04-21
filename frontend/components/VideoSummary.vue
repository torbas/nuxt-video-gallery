<template>
  <b-list-group-item>
  <b-row>
    <b-col>
      <NuxtLink :to="`/videos/${videosSection.id}`">
        <h5 class="header">{{ videosSection.title }}</h5>
      </NuxtLink>
      <hr />
      <div class="description">
          <h5 class="subtitle">Description</h5>
          <p class="snippet">
            {{ videosSection.description }}
          </p>
      </div>
    </b-col>
    <b-col>
      <div class="thumbnail">
        <b-img src="https://via.placeholder.com/300x150.png" fluid alt="Fluid image"></b-img>
      </div>
    </b-col>
  </b-row>
  </b-list-group-item>
</template>

<script>
  //currently thumbnails are placeholder images

  export default {
      //links to videosSection in v-for loop in videos/index
      props: ['videosSection'],
  }
</script>

<style>

.description .subtitle{
  color: #023B30;
}

.thumbnail{
  float: right;
}

</style>