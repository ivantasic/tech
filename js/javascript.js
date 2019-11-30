document.onscroll = function () {
    if ($(window).scrollTop() > $('header').height()) {
        $('nav > div.navbar-inverse').removeClass('navbar-relative-top').addClass('navbar-fixed-top');
    } else {
        $('nav > div.navbar-inverse').removeClass('navbar-fixed-top').addClass('navbar-relative-top');
    }
};

$('.carousel').carousel({
    interval: 8000
});

function narucite() {
    alert("Uspešno ste naručili ovaj proizvod!");
  }


function openForm() {
    document.getElementById("loginPopup").style.display="block";
  }
  
  function closeForm() {
    document.getElementById("loginPopup").style.display= "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    var modal = document.getElementById('loginPopup');
    if (event.target == modal) {
      closeForm();
    }
  }