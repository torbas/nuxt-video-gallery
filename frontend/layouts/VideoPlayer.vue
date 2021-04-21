<template>
  <div class="container-fluid">
    <h1 class="header title">{{ video.title }}</h1>
    <hr />
    <b-embed type="video" aspect="16by9" controls poster="https://via.placeholder.com/1600x900.png">
      <source :src="video.video_id + '.mp4'" type="video/mp4">
    </b-embed>
    <br/>
    <div class="video-description">
      <h5 class="subtitle">Description</h5>
      <p class="snippet">
        {{ video.description }}
      </p>
    </div>
  </div>
</template>

<script>

//poster uses placeholder image 

import { mapGetters } from 'vuex'
    export default {
        middleware: 'redirect',
        computed: {
            video() {
                return this.$store.getters.getVideoById(this.$route.params.id);
            }
        },
        async fetch() {
          //videos in example don't seem to exist
          //let { data } = await this.$axios.get("https://api.wistia.com/v1/medias/v80gyfkt28.json");
          //console.log(data.data);
        },
    }
</script>

<style>
.container-fluid {
  font-family: "granville",Georgia,"Times New Roman",serif;
}

.embed-responsive{
  width:75%;
  margin-left: auto;
  margin-right: auto;
}

.video-description{
  width:75%;
  margin-left: auto;
  margin-right: auto;
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
  font-size: 25px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
