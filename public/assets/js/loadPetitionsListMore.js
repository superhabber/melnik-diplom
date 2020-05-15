"use strict"; // todo: obtain from config

var paginationOffset = 6;
var paginationNextOffset = 6;

function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      //todo refactor, should be based on data
      if (this.responseText.trim() === "") {
        document.getElementById('more-pet-list').hidden = true;
      } else {
        // document.getElementById("demo").innerHTML = this.responseText;
        document.getElementById('page__petition__item').innerHTML += this.responseText;
        paginationOffset += paginationNextOffset; //todo refactor, remove code duplication

        InitSliders();
      }
    } //todo on error

  };

  xhttp.open("GET", "/petitionslistmore?pgn=" + paginationOffset, true);
  xhttp.send();
}

function loadPetitionsListMore() {
  // todo refactor, remove layers
  // listDiv = document.getElementById('page__petition__item');
  loadDoc(); // InitSliders();
}