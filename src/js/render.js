import refs from "../js/get-refs";
import countryCardTpl from "../templates/country-card.hbs";
import countryListTpl from "../templates/country-list.hbs";

export function renderCountryList(list) {
  const markup = countryListTpl(list);
  refs.cardContainer.innerHTML = markup;
}

export function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  refs.cardContainer.innerHTML = markup;
}
