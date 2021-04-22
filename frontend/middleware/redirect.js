export default function ({ app, redirect }) {
	//console.log('redirect',store.state.loggedIn);

	var loginCookie = app.$cookies.get("loggedIn");

	if(!loginCookie){
		//sync cookie to store login state
		app.store.dispatch('logout');
		return redirect("/login");
	} else {
		//sync cookie to store login state
		app.store.dispatch('login');
	}
}