(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Courses carousel
    $(".courses-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });


    // Related carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery); 
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYMRreTS9lzPuaC8kgKDs2UgTSLhHa7qQ",
  authDomain: "jsi-daniel.firebaseapp.com",
  projectId: "jsi-daniel",
  storageBucket: "jsi-daniel.appspot.com",
  messagingSenderId: "523679972162",
  appId: "1:523679972162:web:ae49e9b880229f88ffa6db"
};

const app = initializeApp(firebaseConfig);

function signup(e){
    event.preventDefault();

var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var pass = document.getElementById('password').value; 

var user = {
    email: email,
    username: username,
    passowrd: pass,
};

var json = JSON.stringify(user);
localStorage.setItem(username, json);
console.log('user added'); 

function Validation(){
    let nameregex = /^[a-zA-Z\s]+$/;
    let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
    let userregex = /^[a-zA-Z0-9]{5,}$/;
    
    if(isEmptyOrSpace(name.value) || isEmptyOrSpace(email.value)|| isEmptyOrSpace(username.value)|| isEmptyOrSpace(pass.value))
    {
        alert("You can not let any field empty");
        return false;
    }

    if(!nameregex.test(name.value)){
        alert("the name should only contain alphabets");
        return false;
    }

    if(!emailregex.test(email.value)){
        alert("enter a valid email");
        return false;
    }

    if(!userregex.test(username.value)){
        alert("-user name can only be alphanumeric \n-username must aleast 5 characters \n-username can not contain space");
        return false;
    }
    return true;
}}


function loginfunc(e){
    event.preventDefault();
 
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        result.innerHTML = 'wrong username';
    }else if(username == data.username && pass == data.passowrd){
        result.innerHTML = 'logged in '; 
    }else{
        result.innerHTML = 'wrong password'
    }


}