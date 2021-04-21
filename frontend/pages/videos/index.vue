<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="title">Welcome to Our Video Library</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <b-list-group>
          <VideoSummary
            v-for="video in videos"
            :key="video.id"
            :videosSection="video"
           />
        </b-list-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //middleware: 'redirect',
  data() {
    return {
      videos: this.$store.state.videos,
    };
  },
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

.list-group-item:hover {
  background-color:#E0E0E0;
}

.title {
  display: block;
  font-weight: 50;
  font-size: 50px;
  color: #023B30;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
