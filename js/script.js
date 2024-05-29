// Pilih Subkonten Utama 1
slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide1");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}




// Pilih Subkonten Utama 2
slideSubKonUtama = 1;
showSKUDivs(slideSubKonUtama);

function directDivs(n) {
    showSKUDivs(slideSubKonUtama += n);
}

function showSKUDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide2");
    if (n > x.length) {slideSubKonUtama = 1}
    if (n < 1) {slideSubKonUtama = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideSubKonUtama-1].style.display = "block";  
}





// Pilih Subkonten Utama 3
slideSubKon3 = 1;
showSK3Divs(slideSubKon3);

function direct3Divs(n) {
    showSK3Divs(slideSubKon3 += n);
}

function showSK3Divs(n) {
    var i;
    var x = document.getElementsByClassName("slide3");
    if (n > x.length) {slideSubKon3 = 1}
    if (n < 1) {slideSubKon3 = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideSubKon3-1].style.display = "block";  
}





// Pilih Konten Utama
function konten(kontenya) {
    var i;
    var x = document.getElementsByClassName("jenis_konten");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(kontenya).style.display = "block";  
  }
