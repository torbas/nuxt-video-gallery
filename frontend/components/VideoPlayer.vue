<template>
  <div class="video-player">
    <h1 class="header title">{{ video.title }}</h1>
    <hr />

	<script :src="'//fast.wistia.com/embed/medias/' + `${video.video_id}` + '.jsonp'" async></script>
	<script src="//fast.wistia.com/assets/external/E-v1.js" async></script>
	<div class="wistia_responsive_padding">
		<div class="wistia_responsive_wrapper">
			<div :class="'wistia_embed wistia_async_' + `${video.video_id}` + ' seo=false videoFoam=true'" style="height:75%;width:75%;">&nbsp;</div>
		</div>
	</div>

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
	
    export default {
        computed: {
            video() {
            	//get id of video via url params
              var video = this.$store.getters.getVideoById(this.$route.params.id);
              //add to viewed videos
              this.$store.commit('addViewed', video.video_id);
              return video;
            }
        },
    }
</script>

<style>

.wistia_responsive_wrapper{
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