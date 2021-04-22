<template>
  <div class="container-fluid">
  	<Navbar />
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

body {
  width:80%;
  margin-right:auto;
  margin-left:auto;
}

.links {
  padding-top: 15px;
}
</style>
