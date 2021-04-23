<template>
  <b-list-group-item>
  <b-row>
    <b-col>
      <b-row>
        <b-col>
          <NuxtLink :to="`/videos/${videosSection.id}`">
            <h5 class="header">
              {{ videosSection.title }} 
            </h5> 
          </NuxtLink>
        </b-col>
        <b-col cols=1>
          <b-badge v-if="checkViewed" class="viewed">Viewed</b-badge>
        </b-col>
      </b-row>
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
        <b-img :src="`${this.videoInfo.thumbnail_url}`" fluid alt="Fluid image"></b-img>
      </div>
    </b-col>
  </b-row>
  </b-list-group-item>
</template>

<script>

  export default {
      //links to videosSection in v-for loop in videos/index
      props: ['videosSection'],
      data() {
        return {
          videoInfo: [],
        };
      },
      async fetch() {
        var url = 'http://fast.wistia.net/oembed?url=http://home.wistia.com/medias/' + this.videosSection.video_id + '?embedType=async&videoWidth=240';
        let { data } = await this.$axios.get(url);
        this.videoInfo = data;
      },
      computed: {
        checkViewed(){

          var wasViewed = this.$store.getters.checkViewed(this.videosSection.video_id);
          console.log("viewed", wasViewed);
          if(wasViewed === -1){
            return false;
          } else {
            return true;
          }
        
        },
      },

  }
</script>

<style>

.description .subtitle{
  color: #023B30;
}

.thumbnail{
  float: right;
}

.badge.viewed {
  background-color: #023B30;

}

</style>