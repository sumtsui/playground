export function getDog() {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
}