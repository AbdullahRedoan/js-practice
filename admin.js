let isLoggedIn = false;
let isAdmin = true;

if(isLoggedIn){
    if(isAdmin){
        console.log("Admin Dashboard")
    }else{
        console.log("User Dashboard")
    }
}else{
    console.log("Please Login.")
}