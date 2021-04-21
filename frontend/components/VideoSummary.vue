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
        console.log(this.videoInfo);
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

</style>