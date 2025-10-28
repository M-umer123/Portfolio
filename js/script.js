

var typed = new Typed('.auto-type', {
        
        strings: ['UI UX Designer', 'Frontend Designer', "Backend Developer"],
        typeSpeed: 130,
        backSpeed: 130,
        loop: true,
      });;


$(document).ready(function () {

let up = $(".scroll_up");

  up.click(function(){
    $(window).scrollTop(0);
  });

  $(window).scroll(function(){

    if($(window).scrollTop() > 200){

      up.fadeIn();
      up.css("display","flex");
    } else{
  
      up.fadeOut();
    up.css("display","none");
    }

  });


  let responsiveNavbarBtn = $(".responsive-nav");
  let barsIcon = $(".barsIcon");

  responsiveNavbarBtn.click(function(){

    if(barsIcon.hasClass("fa-bars")){

      $(window).scrollTop(0);

      $(".responsiveHeader").css("transform", "translateX(0)");

      barsIcon.removeClass("fa-bars");
      barsIcon.addClass("fa-times");

    } else{

         $(".responsiveHeader").css("transform", "translateX(-100%)");

         barsIcon.removeClass("fa-times");
      barsIcon.addClass("fa-bars");
    }

    

  });

  let form = $("form");

  form.submit(function(e){

    e.preventDefault();
    
    const name = $("#contact_name").val();
    const email = $("#contact_email").val();
    const subject = $("#contact_subject").val();
    const msg = $("#contact_msg").val();
  
    if($.trim(name) !== "" && $.trim(email) !== "" && $.trim(subject) !== "" && $.trim(msg) !== ""){
      $(".errorMsg").css("display", "none")
    }
    else{
      $(".errorMsg").css("display", "block")
      
    }

  });


  let loadingImg = $(".loading");
  let body = $("body");

// Hide loader when page is fully loaded
$(window).on("load", function() {
  loadingImg.fadeOut(500); // fade out in 0.5s
  body.css("overflow", "auto"); // fade out in 0.5s
});





 

});
