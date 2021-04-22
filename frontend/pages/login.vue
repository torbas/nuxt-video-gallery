<template>
  <b-container>
    <client-only>
  		<LoginForm />
  	</client-only>
  </b-container>
</template>

<script>

  export default {
    middleware: 'loginState',
  }

</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container, .container-fluid {
  font-family: "granville",Georgia,"Times New Roman",serif;
}

.links {
  padding-top: 15px;
}

.errors{
	color:red;
}

</style>
