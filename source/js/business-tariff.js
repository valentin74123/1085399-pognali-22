const businessTariff = document.querySelector('.business-tariff');
const openTarif = document.querySelector('.add-profile__business-tariff');
const closeTariff = document.querySelector('.business-tariff__button');

openTarif.onclick = function() {
  businessTariff.style.display = 'block';
}

closeTariff.onclick = function() {
  businessTariff.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == businessTariff) {
    businessTariff.style.display = 'none';
  }
}
