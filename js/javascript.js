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