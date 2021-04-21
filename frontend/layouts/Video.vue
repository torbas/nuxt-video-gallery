<template>
  <div class="container-fluid">
    <VideoPlayer />
  </div>
</template>

<script>

//poster uses placeholder image 

import { mapGetters } from 'vuex'
    export default {
        middleware: 'redirect',
    }
</script>

<style>

html, .container, .container-fluid{
  font-family: "granville",Georgia,"Times New Roman",serif; 
}

.links {
  padding-top: 15px;
}
</style>
