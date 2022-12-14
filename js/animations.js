const INCREASE_NUMBER_ANIMATION_SPEED = 40;

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else {
      element.innerText = i;
    }
    i += 100;
    setTimeout(
      increaseNumberAnimationStep,
      INCREASE_NUMBER_ANIMATION_SPEED,
      i,
      element,
      endNumber
    );
  }
}

function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

initIncreaseNumberAnimation();

let selectParent = document.querySelector('#budget');

function handleSelectChange(event) {
  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input');

    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text";

    formContainer.appendChild(input);
    document.querySelector('#form form').insertBefore
    (formContainer, document.querySelector('.form__submit')); 
  }

  const otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && otherInput) {
    document.querySelector('#form form').removeChild(otherInput);
  }
};

selectParent.addEventListener('change', handleSelectChange);

