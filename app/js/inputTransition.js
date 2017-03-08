
var inputConts = document.querySelectorAll('.footer-form__input-container');
for (var i = 0; i < inputConts.length; i++) {
  var textInput = inputConts[i].querySelector('.footer-form__input, .form-button');
  var textInputClone = inputConts[i].querySelector('.footer-form__input--clone');

  textInput.addEventListener('focus', function() {
    var textInputClone = this.parentNode.querySelector('.footer-form__input--clone');
    textInputClone.classList.remove('cloneCover');
    textInputClone.classList.add('cloneIndicate');
  });
  
  textInput.addEventListener('focusout', function() {
    var textInputClone = this.parentNode.querySelector('.footer-form__input--clone');
    
    if(this.tagName !== "BUTTON") textInputClone.value = "    " + this.value;

    textInputClone.classList.add('cloneCover');
    textInputClone.classList.remove('cloneIndicate');
  });

  inputConts[i].addEventListener('click', function() {
    var textInputClone = this.querySelector('.footer-form__input--clone');
    textInputClone.classList.remove('cloneCover');
    textInputClone.classList.add('cloneIndicate');
    var textInput = this.querySelector('.footer-form__input');
    textInput.focus();
  })

}
