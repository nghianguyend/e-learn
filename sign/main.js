// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGwny_UK3E_kDlM6S80wcyQzGgPGZX9WY",
  authDomain: "e-learn-sign.firebaseapp.com",
  projectId: "e-learn-sign",
  storageBucket: "e-learn-sign.appspot.com",
  messagingSenderId: "843941050448",
  appId: "1:843941050448:web:1658c87c4b902cb2263955",
  measurementId: "G-RTPJBW0CG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
     
             //code
             const db = getDatabase();
             const user = document.getElementById('su-user');
             const email = document.getElementById('su-email');
             const username = document.getElementById('su-user');
             const pass = document.getElementById('su-pass');
             const submit = document.getElementById('su-btn');
     
             function isEmptyOrSpace(str) 
             {
                 return str === null || str.match(/^ *$/) !== null;
             }
             function Validation(){
                 let nameregex = /^[a-zA-Z\s]+$/;
                 let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
                 let userregex = /^[a-zA-Z0-9]{8,}$/;
                 
                 if(isEmptyOrSpace(user.value) || isEmptyOrSpace(email.value)|| isEmptyOrSpace(username.value)|| isEmptyOrSpace(pass.value))
                 {
                     alert("You can not let any field empty");
                     return false;
                 }
             
                 if(!nameregex.test(user.value)){
                     alert("the name should only contain alphabets");
                     return false;
                 }
     
                 if(!emailregex.test(email.value)){
                     alert("enter a valid email");
                     return false;
                 }
     
                 if(!userregex.test(username.value)){
                     alert("-user name can only be alphanumeric \n-username must aleast 8 characters \n-username can not contain space");
                     return false;
                 }
                 return true;
             }
     
             function RegisterUser () {
                 if(!Validation()){
                     return;
                 };
                 const dbRef = ref(db);
                 get(child(dbRef, "UserList/" + username.value)).then((snapshot)=> {
                     if(snapshot.exists()){
                         alert("Account already exist");
                     }
                     else{
                         set(ref(db,"UserList/" + username.value),
                         {
                             fullname: user.value,
                             email: email.value,
                             username: username.value,
                             password: encPass()
                         })
                         .then(()=> {
                             alert("User added successfully");
                         })
                         .catch((error)=> {
                             alert("error" + error);
                         } )
                     }
                 });
             }
             function encPass(){
                 var passEnc = CryptoJS.AES.encrypt(pass.value, pass.value);
                 return passEnc.toString();
             }
     
             submit.addEventListener('click', RegisterUser);
             
     