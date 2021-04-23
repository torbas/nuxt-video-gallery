<template>
  <b-navbar variant="faded" type="light">
    <b-navbar-brand>AlgaeCal</b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item right>
          <NuxtLink v-if="showVideosLink" to="/videos">
            <b-button class="videos-link" variant="outline-primary">Videos</b-button>
          </NuxtLink>
        </b-nav-item>
        <b-nav-item right>
          <NuxtLink v-if="showLoginLink" to="/login">
            <b-button v-on:click="checkLogout" class="logout" variant="outline-primary">{{ checkLogin }}</b-button>
          </NuxtLink>
        </b-nav-item>

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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

.nav-item{
  padding-top:10px;
  padding-right:10px;
}

.navbar-brand{
  font-family: "granville",Georgia,"Times New Roman",serif;
  font-size:30px; 
  padding-left:10px; 
}

.nav-item button{
  border-color:#023B30;
  color:#023B30;
  margin-left:10px;
}

.nav-item button:hover, .nav-item button:active, .nav-item button:focus{
  background-color:#023B30 !important;
  color:#FFF;
}

</style>