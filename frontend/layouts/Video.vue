<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <b-button v-on:click="$router.go(-1)" class="back-button" variant="outline-primary">Back</b-button>
      <VideoPlayer />
    </div>
  </div>
</template>

<script> 
//TODO: add persist to back button
import { mapGetters } from 'vuex'
    export default {
        middleware: 'redirect',
    }
</script>

<style>

body {
  width:80%;
  margin-right:auto;
  margin-left:auto;
}

.back-button{
  border-color:#023B30;
  color:#023B30;
  margin-left:10px;
  margin-bottom:10px;
}

.back-button:hover, .back-button:active{
  background-color:#023B30 !important;
  color:#FFF;
}
</style>
