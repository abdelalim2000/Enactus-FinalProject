const navbar=document.getElementById("navbar"),menu=document.querySelector(".menu"),collapseNavbar=document.getElementById("collapse-navbar"),navItem=document.querySelectorAll(".navitem");window.addEventListener("scroll",function(){navbar.classList.toggle("scrolled",window.scrollY>=70)}),menu.addEventListener("click",function(){collapseNavbar.classList.toggle("open")}),navItem.forEach(function(e){e.addEventListener("click",function(){collapseNavbar.classList.remove("open")})});const modalBTN=document.querySelectorAll(".modal-trigger");modalBTN.forEach(function(e){e.addEventListener("click",function(){const t=e.getAttribute("data-trigger");document.getElementById(t).classList.add("open")})});const joinModal=document.getElementById("join-modal");joinModal.addEventListener("click",function(e){e.target.classList.contains("modal")&&joinModal.classList.remove("open")});const appModal=document.getElementById("app-modal");appModal.addEventListener("click",function(e){e.target.classList.contains("modal")&&appModal.classList.remove("open")});const boardModal=document.getElementById("our-board");boardModal.addEventListener("click",function(e){e.target.classList.contains("modal")&&boardModal.classList.remove("open")});const eventModal=document.getElementById("event-modal");eventModal.addEventListener("click",function(e){e.target.classList.contains("modal")&&eventModal.classList.remove("open")});const eventCTA=document.querySelector(".form-cta");eventCTA.addEventListener("click",function(){eventModal.classList.remove("open")});const eventForm=document.getElementById("event-form");eventForm.addEventListener("click",function(e){e.target.classList.contains("modal")&&eventForm.classList.remove("open")});