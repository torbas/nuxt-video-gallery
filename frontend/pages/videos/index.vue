<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12"><h1 class="title">Welcome to Our Video Library</h1></b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-list-group class="main-video-list">
          <VideoSummary
            v-for="video in videos"
            :key="video.id"
            :videosSection="video"
           />
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  middleware: 'redirect',
  data() {
    return {
      videos: this.$store.state.videos,
    };
  },
}
</script>

<style>

.list-group-item:hover {
  background-color:#E0E0E0;
}

.title {
  display: block;
  font-weight: 50;
  font-size: 25px;
  color: #023B30;
  letter-spacing: 1px;
  padding-left:10px;
  background-color:#FFF;
}

.main-video-list{
  width:80%;
  margin-left:auto;
  margin-right:auto;
  margin-top:25px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #023B30;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
