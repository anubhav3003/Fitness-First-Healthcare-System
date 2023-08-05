document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("index.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value 
    firebase.auth().signInWithEmailAndPassword(email, password)
}