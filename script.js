const form = document.querySelector('#form');
const alertName = document.querySelector('.alert_name');
const alertBirth = document.querySelector('.alert_birth');
const alertEmail = document.querySelector('.alert_email');
const alertValidEmail = document.querySelector('.alert_validEmail');
const alertPhone = document.querySelector('.alert_phone');
const alertValidPhone = document.querySelector('.alert_validPhone');
const tnxMessage = document.querySelector('.thanks');
const inputs = Array.from(document.querySelectorAll('input'));

form.onsubmit = (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  if (!name) return alertName.classList.remove('invisible');
  alertName.classList.add('invisible');
  const birth = event.target.elements.birthday.value;
  if (!birth) return alertBirth.classList.remove('invisible');
  alertBirth.classList.add('invisible');
  const email = event.target.elements.email.value;
  if (!email) return alertEmail.classList.remove('invisible');
  alertEmail.classList.add('invisible');
  const emailValidation =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailValidation.test(email)) {
    return alertValidEmail.classList.remove('invisible');
  }
  alertValidEmail.classList.add('invisible');
  const tel = event.target.elements.tel.value;
  if (!tel) return alertPhone.classList.remove('invisible');
  alertPhone.classList.add('invisible');
  const phoneValidation =
    /^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/;
  if (!phoneValidation.test(tel)) {
    return alertValidPhone.classList.remove('invisible');
  }
  alertValidPhone.classList.add('invisible');
  form.reset();
  tnxMessage.classList.remove('invisible');
};

inputs.forEach((input) =>
  input.addEventListener('change', () => tnxMessage.classList.add('invisible'))
);
