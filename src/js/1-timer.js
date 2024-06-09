import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

// Елементи інтерфейсу
const button = document.querySelector('.timer-btn');
const input = document.querySelector('#datetime-picker');
const values = document.querySelectorAll('.value');
let selectedTime = new Date();

// Опції
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0];
    if (!validation()) {
      button.setAttribute('disabled', true);
      iziToast.show({
        class: 'toast',
        title: 'Error',
        titleColor: '#FFFFFF',
        message: 'Please choose a date in the future',
        messageColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
        iconUrl: '../img/error.svg',
      });
    } else button.removeAttribute('disabled');
  },
};

// функції
function handleClick() {
  let currentTime;
  let deltaTime;
  button.setAttribute('disabled', true);
  input.setAttribute('disabled', true);
  const intervalID = setInterval(() => {
    currentTime = new Date().getTime();
    deltaTime = selectedTime.getTime() - currentTime;
    let { days, hours, minutes, seconds } = convertMs(deltaTime);
    values[0].textContent = addLeadingZero(days);
    values[1].textContent = addLeadingZero(hours);
    values[2].textContent = addLeadingZero(minutes);
    values[3].textContent = addLeadingZero(seconds);
    if (deltaTime < 1000) {
      clearInterval(intervalID);
      input.removeAttribute('disabled');
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function validation() {
  const currentTime = new Date().getTime();
  if (selectedTime > currentTime) return true;
  else return false;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr('#datetime-picker', options);

button.addEventListener('click', handleClick);
