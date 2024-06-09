import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

// Елементи інтерфейсу
const form = document.querySelector('.form');
const radioButtons = document.getElementsByName('state');
const input = document.querySelector('[name="delay"]');

// Функції
const handleSubmit = e => {
  e.preventDefault();

  // Збереження значень перед скиданням форми
  const delay = Number(input.value);
  const selectedState = Array.from(radioButtons).find(
    radio => radio.checked
  ).value;

  form.reset();

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delay);
      } else if (selectedState === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        backgroundColor: '#59A10D',
        position: 'topRight',
        messageColor: 'white',
        titleColor: 'white',
      });
    })
    .catch(delay => {
      iziToast.show({
        title: 'Rejected',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: 'white',
        titleColor: 'white',
      });
    });
};

form.addEventListener('submit', handleSubmit);
