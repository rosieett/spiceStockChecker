const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;


if( inStock.includes(search) ){
message = `Yes, we have ${search}`;
} else {
  message = `Sorry, we don't have ${search}`
}

document.querySelector('main').innerHTML = `<p>${message}</p>`
