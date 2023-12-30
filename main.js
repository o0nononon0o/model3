'use strict';
{

  const btnElement = document.querySelector('#btn');

  window.addEventListener('scroll', () => {
    if (document.querySelector('#hero').getBoundingClientRect().top < 0) {
      btnElement.classList.add('fixed');
      btnElement.classList.remove('absolute');
      document.querySelector('#btn img').classList.remove('big');
    } else {
      btnElement.classList.add('absolute');
      btnElement.classList.remove('fixed');
      document.querySelector('#btn img').classList.add('big');
    }
  });


  let num = 1;

  setInterval(() => {
    document.querySelector(`#pic${num}`).classList.remove('fadein');
    if (num === 3) {
      num = 1
    } else {
      num++;
    }
    document.querySelector(`#pic${num}`).classList.add('fadein');
  }, 4000);


  const secElements = document.querySelectorAll('section img');

  window.addEventListener('scroll', () => {
    secElements.forEach(secElement => {
      if (secElement.getBoundingClientRect().top < window.innerHeight * 0.8) {
        secElement.classList.add('fade');
      }
    })
  });

  window.addEventListener('scroll', () => {
    if(document.querySelector('#gallery img').getBoundingClientRect().top < window.innerHeight * 0.8) {
      document.querySelector('#gallery h3').classList.add('fade');
    }
  });



  document.querySelector('.slide-r1').addEventListener('click', () => {
    if (document.querySelector('.inner1').classList.contains('slide1')) {
      document.querySelector('.inner1').classList.remove('slide1');
      document.querySelector('.inner1').classList.add('slide2');
    } else {
      document.querySelector('.inner1').classList.add('slide1');
    }
  });

  document.querySelector('.slide-r2').addEventListener('click', () => {
    if (document.querySelector('.inner2').classList.contains('slide1')) {
      document.querySelector('.inner2').classList.remove('slide1');
      document.querySelector('.inner2').classList.add('slide2');
    } else {
      document.querySelector('.inner2').classList.add('slide1');
    }
  });


  document.querySelector('.slide-l1').addEventListener('click', () => {
    if (document.querySelector('.inner1').classList.contains('slide2')) {
      document.querySelector('.inner1').classList.remove('slide2');
      document.querySelector('.inner1').classList.add('slide1');
    } else {
      document.querySelector('.inner1').classList.remove('slide1');
    }
  });

  document.querySelector('.slide-l2').addEventListener('click', () => {
    if (document.querySelector('.inner2').classList.contains('slide2')) {
      document.querySelector('.inner2').classList.remove('slide2');
      document.querySelector('.inner2').classList.add('slide1');
    } else {
      document.querySelector('.inner2').classList.remove('slide1');
    }
  });

  const form = document.querySelector('form');
  const btn = document.querySelector('form .btn');

  form.addEventListener('input', update);
  form.addEventListener('change', update);

  function update() {
    const isRequired = form.checkValidity();
    if (isRequired) {
      btn.disabled = false;
      btn.style.opacity = 1;
      btn.style.cursor = "pointer";
      return;
    } else {
      btn.disabled = true;
      btn.style.opacity = .2;
      btn.style.cursor = "not-allowed";
    }
  }
  


}

