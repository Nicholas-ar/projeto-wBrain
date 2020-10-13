var indiceControl = 0;
var btnElementNext = document.getElementsByClassName('btn-next');
var btnElementPrevious = document.getElementsByClassName('btn-previous');
var itemsText = document.getElementsByClassName('item-text');

itemsText[0].style.display = 'block';

window.onscroll = function() {scrollable()}
btnElementNext[0].addEventListener("click", next);
btnElementPrevious[0].addEventListener("click", previous);

function next() {
  if (indiceControl < itemsText.length - 1) {
    hideAll();
    indiceControl++;
    itemsText[indiceControl].style.display = "block";
  }
}

function previous() {
  if (indiceControl >= 1) {
    hideAll();
    itemsText[--indiceControl].style.display = "block";
  }
}

function hideAll() {
   for (let i =0; i < itemsText.length; i++) {
     itemsText[i].style.display = 'none';
   }
}

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