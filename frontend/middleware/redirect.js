export default function ({ store, redirect }) {
	console.log('redirect',store.state.loggedIn);
	if(!store.state.loggedIn){
		//return redirect("/login");
	} 
}