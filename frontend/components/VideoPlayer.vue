<template>
  <div class="video-player">
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
	//TODO: style embed player
    export default {
        middleware: 'redirect',
        computed: {
            video() {
            	//get id of video via url params
                return this.$store.getters.getVideoById(this.$route.params.id);
            }
        },
    }
</script>

<style>

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

</style>