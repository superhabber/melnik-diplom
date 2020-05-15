"use strict";

var carousel = $('#carousel-example-generic');

window.onload = function () {
  $.ajax({
    url: window.location.origin + '/api/v2/news/index.php',
    method: 'GET',
    success: function success(res) {
      if (res && res.length > 0) {
        var carouselInner = $(carousel).find('.carousel-inner');
        var carouselControl = $(carousel).find('.carousel-indicators');
        carouselInner.html('');
        carouselControl.html('');
        var resTitle;
        var maxCount = 24;

        if (window.matchMedia('(min-width: 768px) and (max-width: 1200px)').matches) {
          maxCount = 34;
        } else {
          maxCount = 24;
        }

        for (var i = 0; i < res.length; i++) {
          if (res[i].title.length > maxCount) {
            resTitle = res[i].title.slice(0, maxCount - 1) + '...';
          } else {
            resTitle = res[i].title;
          }

          carouselInner.append('<div class="item" style="background-image: url(' + res[i].image + ');">' + '<div class="title-main-news-box"><a href="' + res[i].link + '">' + resTitle + '</a></div>' + '</div>');
          carouselControl.append('<li data-target="#carousel-example-generic" data-slide-to="' + i + '"></li>');
        }

        carouselInner.find('.item:first-child').addClass('active');
        carouselControl.find('li:first-child').addClass('active');
      }
    },
    error: function error(res) {}
  });
};