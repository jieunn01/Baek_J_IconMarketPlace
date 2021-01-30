// this is JavasScript module syntax
// IIFE (this is the texhnical name)
(() => {
  // stub
  console.log('JS is linked!');

  let theBadge = document.querySelector('.wrapper img'),
      theBadges = document.querySelectorAll('.wrapper img');

  let theButton = document.querySelector(".icon-button");

  //put your functions here
  function logMyId() {
    console.log('clicked on an image!');
    console.log("my id:", this.id);
  }

  //event handling at the bottom
  theBadge.addEventListener("click", logMyId);

  theBadges.forEach(badge => badge.addEventListener("click", logMyId));
})()
