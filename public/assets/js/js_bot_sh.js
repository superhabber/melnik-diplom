"use strict";

function open_search(par) {
  if (open_search_win == 0) {
    $(".fon-block-win").fadeIn(500); //19.04
    // block_screen(".fon-block-win");

    $(".win-search").slideDown(500);
    document.getElementById('swords').focus();
    open_search_win = 1;
  } else {
    open_search_win = 0;
    $(".fon-block-win").css("display", "none");
    $(".win-search").slideUp(500);
    un_block_screen();
  }

  if (par == 1) {
    $(".search-pet").css("background-image", "none");
  }
}

$(document).mouseup(function (e) {
  var container = $(".win-search");

  if (container.has(e.target).length === 0) {
    container.slideUp(500);
  }
});

function OpenSaveWindow(outstr) {
  if ("" == var_html || undefined === var_html) {
    var_html = $(".block-window-save").html();
  }

  $(".parent-window-save").fadeIn(500);

  document.onmousewheel = document.onwheel = function () {
    return false;
  };

  document.addEventListener("MozMousePixelScroll", function () {
    return false;
  }, false);

  document.onkeydown = function (e) {
    if (e.keyCode >= 33 && e.keyCode <= 40) return false;
  };

  outstr = outstr + var_html;
  $(".block-window-save").html(outstr);
  openSaveWin = 1;
}

function closeSaveWindow() {
  $(".parent-window-save").fadeOut(500);

  document.onmousewheel = document.onwheel = function () {
    return true;
  };

  document.addEventListener("MozMousePixelScroll", function () {
    return true;
  }, true);

  document.onkeydown = function (e) {
    if (e.keyCode >= 33 && e.keyCode <= 40) return true;
  };
} // error


var openErrorWin = 0;

function OpenErrorWindow(outstr) {
  $(".parent-window-error").css("display", "block");
  block_screen(".parent-window-error");
  outstr = outstr + $(".block-window-error").html();
  $(".block-window-error").html(outstr);
  openErrorWin = 1;
  /*setTimeout(function () {
      closeErrorWindow();
  }, 10000)*/
}

function closeErrorWindow() {
  $(".parent-window-error").fadeOut(500);
  un_block_screen();
}

function show_menu() {
  $(".top-menu-bot").toggleClass("active-btn-ls");
  $(".top-menu-xs").toggleClass("active-btn-ls");
  $(".top-menu-list").toggleClass("active-btn-ls");
}
/* РїРѕРґСЃРєР°Р·РєРё РїРѕ РЅР°РІРµРґРµРЅРёСЋ РЅР° РіР»Р°РІРЅРѕР№ СЃС‚СЂ.*/


var over_key = 0;

function show_main_txt(num_show, key_over) {
  var strok_class = ".float-st" + num_show;

  if (over_key == key_over) {
    return 1;
  } else {
    over_key = key_over;
    $(strok_class).toggleClass("show-txt-main");
  }
}

function block_on_off(name_class) {
  var name_cl = "." + name_class;
  $(name_cl).toggleClass("show-txt-main");
}
/*var el = document.getElementById('float-block');
 scrollFloat.init(el);*/


function un_block_screen() {
  document.onmousewheel = document.onwheel = function () {
    return true;
  };

  document.addEventListener("MozMousePixelScroll", function () {
    return true;
  }, true);

  document.onkeydown = function (e) {
    if (e.keyCode >= 33 && e.keyCode <= 40) return true;
  };
}

function block_screen(id_div_name) {
  $(id_div_name).css("top", document.documentElement.scrollTop);

  document.onmousewheel = document.onwheel = function () {
    return false;
  };

  document.addEventListener("MozMousePixelScroll", function () {
    return false;
  }, false);

  document.onkeydown = function (e) {
    if (e.keyCode >= 33 && e.keyCode <= 40) return false;
  };
}

if (window.location.pathname == '/search/') {
  $('.fon-block-win-load').show();
  block_screen('.fon-block-win-load');
}