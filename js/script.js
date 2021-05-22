let gender_female    = document.querySelector('#gender-female'),
    gender_male      = document.querySelector('#gender-male'),
    age              = document.querySelector('#age'),
    height           = document.querySelector('#height'),
    weight           = document.querySelector('#weight'),
    activity_low     = document.querySelector('#activity-low'),
    activity_medium  = document.querySelector('#activity-medium'),
    activity_high    = document.querySelector('#activity-high'),
    activity_maximal = document.querySelector('#activity-maximal'),
    submit           = document.querySelector('.form__submit-button'),
    reset            = document.querySelector('.form__reset-button'),
    result           = document.querySelector('.counter__result'),
    caloriesNorm     = result.querySelector('#calories-norm'),
    caloriesMinimal  = result.querySelector('#calories-minimal'),
    caloriesMaximal  = result.querySelector('#calories-maximal');


age.oninput = function() {
  chek_input();
};

height.oninput = function() {
  chek_input();
};

weight.oninput = function() {
  chek_input();
};

reset.addEventListener('click', function() {
  submit.setAttribute('disabled', 'disabled');
  reset.setAttribute('disabled', 'disabled');
  result.classList.add('counter__result--hidden');
});

submit.addEventListener('click', function(evt) {
  evt.preventDefault();
  let userInfo,
      response,
      activity = 1.2;

  if (activity_low.checked) {
    activity = 1.375;
  }
  else if (activity_medium.checked) {
    activity = 1.55;
  }
  else if (activity_high.checked) {
    activity = 1.725;
  }
  else if (activity_maximal.checked) {
    activity = 1.9;
  }

  if (gender_female.checked) {
    userInfo = ( 10 * weight.value ) + ( 6.25 * height.value ) - ( 5 * age.value ) - 161;
  }

  if (gender_male.checked) {
    userInfo = ( 10 * weight.value ) + ( 6.25 * height.value ) - ( 5 * age.value ) + 5;
  }

  response = Math.ceil( userInfo * activity );

  if (response !== undefined ) {
    result.classList.remove('counter__result--hidden');

    caloriesNorm.textContent    = String(response);
    caloriesMinimal.textContent = String(Math.ceil( response - (response * 0.15) ) );
    caloriesMaximal.textContent = String(Math.ceil( response + (response * 0.15) ) );
  }
});

function chek_input() {
  if (age.value || height.value || weight.value) {
    submit.removeAttribute('disabled');
    reset.removeAttribute('disabled');
  }
}

chek_input();