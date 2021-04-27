let gender_female    = document.querySelectorAll('#gender-female'),
    gender_male      = document.querySelector('#gender-male'),
    age              = document.querySelector('#age'),
    height           = document.querySelector('#height'),
    weight           = document.querySelector('#weight'),
    activity_minimal = document.querySelector('#activity-minimal'),
    activity_low     = document.querySelector('#activity-low'),
    activity_medium  = document.querySelector('#activity-medium'),
    activity_high    = document.querySelector('#activity-high'),
    activity_maximal = document.querySelector('#activity-maximal'),
    submit           = document.querySelector('.form__submit-button'),
    reset            = document.querySelector('.form__reset-button'),
    result           = document.querySelector('.counter__result');

age.oninput = function() {
  chek_input();
};
height.oninput = function() {
  chek_input();
};
weight.oninput = function() {
  chek_input();
};

reset.onclick = function() {
  submit.setAttribute('disabled', 'disabled');
  reset.setAttribute('disabled', 'disabled');
  result.classList.add('counter__result--hidden');
};
submit.onclick = function(e) {
  e.preventDefault();

  // if (activity_minimal.checked || activity_low.checked
  //     || activity_medium.checked || activity_high.checked
  //     || activity_maximal.checked) {
  //
  // }
  result.classList.remove('counter__result--hidden');
};

function chek_input() {
  if (age.value && height.value && weight.value) {
    submit.removeAttribute('disabled');
    reset.removeAttribute('disabled');
  }
}

chek_input();