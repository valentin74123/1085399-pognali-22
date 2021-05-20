const chooseCountry = document.querySelector('.choose-country');
const chooseButton = document.querySelector('.choose-country__button');

chooseButton.addEventListener('click', function() {
  if (chooseCountry.classList.contains('choose-country--closed')) {
    chooseCountry.classList.remove('choose-country--closed');
    chooseCountry.classList.add('choose-country--opened');
  } else {
    chooseCountry.classList.add('choose-country--closed');
    chooseCountry.classList.remove('choose-country--opened');
  }
});
