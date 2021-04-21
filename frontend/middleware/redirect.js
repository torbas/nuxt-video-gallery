export default function ({ store, redirect }) {
	console.log('redirect',store.state.loggedIn);
	if(store.state.loggedIn){
		//need to take a better look at routing 
		//return redirect("/videos");
	} else {
		return redirect("/login");
	} 
}