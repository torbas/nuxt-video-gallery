<template>
  <b-nav align="right">
    <NuxtLink v-if="showVideosLink" to="/videos">
      <b-button variant="outline-primary">Videos</b-button>
    </NuxtLink>
    <NuxtLink v-if="showLoginLink" to="/login">
      <b-button v-on:click="checkLogout" class="logout" variant="outline-primary">{{ checkLogin }}</b-button>
    </NuxtLink>
  </b-nav>
</template>

<script>

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  computed: {
    checkLogin(){

      if(this.$store.state.loggedIn){
          return "Logout";
      } else {
          return "Login";
      }
    
    },
    showVideosLink(){
      if(this.$route.path == "/videos" || this.$route.path == "/login"){
        return false;
      } else {
        return true;
      }

    },
    showLoginLink(){
      if(this.$route.path == "/login"){
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    checkLogout(){
      if(this.$store.state.loggedIn){
          this.$store.dispatch('logout');
      }
    }
  },
}

</script>

<style>

.nav{
  padding-top:10px;
  padding-right:10px;
}

.nav button{
  border-color:#023B30;
  color:#023B30;
  margin-left:10px;
}

.nav button:hover{
  background-color:#023B30;
  color:#FFF;
}

</style>