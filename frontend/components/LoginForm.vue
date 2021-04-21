<template>
  <div class="container">
    <div>
      <b-card
        title = "Welcome To Our Video Library"
        sub-title = "Please Log In"
      >
        <br/>
        <b-alert :show="showDismissibleAlert" ref="error" variant="danger" dismissible>
          Sorry, that username is not found
        </b-alert>
        <ValidationObserver tag="form" v-slot="{ valid }">
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Username:"
              label-for="input-1"
              label-cols-sm="4"
              label-cols-lg="4"
            >
              <ValidationProvider rules="required|min:3" v-slot="{ errors }">
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                required
                placeholder="Enter username"
                label-cols-sm="6"
                label-cols-lg="6"
              ></b-form-input>
              <span>{{ errors[0] }}</span>
              </ValidationProvider>
            </b-form-group>
            <b-button :disabled="!valid" type="submit" variant="primary">Submit</b-button>
          </b-form>
        </ValidationObserver>
      </b-card>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      users: [],
      form: {
        username: ''
      },
      showDismissibleAlert: false,
    };
  },
  async fetch() {
    let { data } = await this.$axios.get("/users");
    this.users = data.data;
  },
  methods: {
    onSubmit(){
      
      event.preventDefault();
      var username = this.form.username;
      
      var users = this.users;
      var userFound = false;
      Object.keys(users).forEach(key => {
        //loop through users list
        if(username == users[key].username){
          //console.log("match");

          userFound = true;

          //quick and dirty login TODO: make it more secure
          this.$store.dispatch('login');
          this.$router.push('/videos');
        } 

        if(!userFound){
          this.showDismissibleAlert=true;
        }
      });
    
    },
  },
}
</script>

<style>

button.btn.btn-primary[type=submit]{
  background-color: #023B30;
}
</style>