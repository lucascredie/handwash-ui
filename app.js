const input = document.querySelector('input');
const submitButton = document.querySelector('button');

const API_URL = 'http://89fa9f07.ngrok.io/signup';

input.addEventListener('input', updateValue);
submitButton.addEventListener('click', submit);

let phoneNumber;

function updateValue(e) {
  phoneNumber = e.target.value;
}

function submit() {
  console.log(phoneNumber)
  const payload = {
    number: phoneNumber
  }
  postData(API_URL, payload);
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
