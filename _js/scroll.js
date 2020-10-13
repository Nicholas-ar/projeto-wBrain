window.onscroll = function() {scrollable()}

function scrollable() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-page").style.top = "-24px";
    document.getElementById("header-page").classList.add('scrollable');
  } else {
    document.getElementById("header-page").style.top = "0";
    document.getElementById("header-page").style.backgroundColor = "transparent";
    document.getElementById("header-page").classList.remove('scrollable');
  }
}