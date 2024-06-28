function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("signed up")//signup function 
}

function signin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));

    promise.then(( userCredential) =>{
        alert("signing in...");
       auth.onAuthStateChanged(function(user){
        if(user){
            var email = user.email;
            alert("user" + email);
            //is signed in
            var user = userCredential.user;
            var useruid = firebase.auth().currentUser.uid;
            localStorage.setItem("uid",useruid);
    
    
        }else{
            //no user is signed in
        }

    });

        window.location.href="index2.html"
    })}

        

        function signout(){
            auth.signOut().then(()=>
           { alert("Thanks a lott!!");
           window.location.href="index.html";})
         }