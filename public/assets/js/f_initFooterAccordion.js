"use strict";

function initFooterAccordion() {
  var footerAccordion = document.querySelectorAll('.accordion-footer__icn');

  if (footerAccordion) {
    $('.accordion-footer__icn').on('click', function (event) {
      $(this).parent().toggleClass('active');
    });
  }
}

$(document).ready(function () {
  initFooterAccordion();
});