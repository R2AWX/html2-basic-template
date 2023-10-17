const range = document.querySelector('.range__slider-body');
const inputMin = document.querySelector('.range__input--min');
const inputMax = document.querySelector('.range__input--max');
const inputs = [inputMin, inputMax];

const rangeSliderInit = () => {
  noUiSlider.create(range, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    },
    step: 1,
  }
  );

  range.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = parseInt(values[handle], 10);
  });

  inputMin.addEventListener('change', function () {
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
  });

};

export {rangeSliderInit};
