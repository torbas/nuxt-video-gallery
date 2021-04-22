export default function ({ app }) {

	var cookie = app.$cookies.get("loggedIn");

	if(typeof cookie == "undefined" || app.$cookies.get('loggedIn')){
		app.$cookies.set("loggedIn", false, {
	      path: "/"
	    });
	}




	//console.log(typeof app.$cookies.get('loggedIn'));
}