export default function ({ store, redirect }) {
	console.log(store.state.loggedIn);
	if(store.state.loggedIn){
		return redirect("/videos");
	} else {
		return redirect("/login");
	} 
}