firebase.auth().onQAuthStateChanged((user)=>{
     if(!user){
         location.replace("loginpage.html")
     }
})