

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCSxHUCwl73cwnw85zBaQi-5bo5oEArcCE",
      authDomain: "letschatweb-app-adc12.firebaseapp.com",
      databaseURL: "https://letschatweb-app-adc12-default-rtdb.firebaseio.com",
      projectId: "letschatweb-app-adc12",
      storageBucket: "letschatweb-app-adc12.appspot.com",
      messagingSenderId: "766257870099",
      appId: "1:766257870099:web:56fb4d751f06c8bdd956e6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");




 function back(){
  window.location = "room2.html";
 }

 function send(){

//take the value of the text input from html-- document.getElementById('msg').value
 msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }


    //Add the code for the logout button
    
function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");    
window.location="index.html";


}