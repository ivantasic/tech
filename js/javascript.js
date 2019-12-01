document.onscroll = function () {
    if ($(window).scrollTop() > $('header').height()) {
        $('nav > div.navbar-inverse').removeClass('navbar-relative-top').addClass('navbar-fixed-top');
    } else {
        $('nav > div.navbar-inverse').removeClass('navbar-fixed-top').addClass('navbar-relative-top');
    }
};
// brzina carousela, slajdera
$('.carousel').carousel({
    interval: 8000
});
//alert za uspesnu narudzbinu
function narucite() {
    alert("Uspešno ste naručili ovaj proizvod!");
  }

//narudzbina
function openForm() {
    document.getElementById("loginPopup").style.display="block";
  }
  
  function closeForm() {
    document.getElementById("loginPopup").style.display= "none";
  }
  window.onclick = function(event) {
    var modal = document.getElementById('loginPopup');
    if (event.target == modal) {
      closeForm();
    }
  }