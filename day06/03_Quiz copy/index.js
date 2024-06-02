/**
 * const 값이 변하지 않으면 변수명 대문자로
 */
import { hasSpecial, isValidLength } from "./util.js";
import { MSG } from "./msg.js";
import { COLOR } from "./color.js";

// register
const register = document.querySelector(".register");
const validList = [false, false, false];
// const validList = [{ id: false }, { pw: false }, { pwch: false }];

// ID
const id = document.querySelector(".id");
const id_info = document.querySelector(".id_info");

id.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);

  id_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  id_info.innerText = isValid ? MSG.ID.VALID : MSG.ID.INVALID;

  validList[0] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

// PW
const pw = document.querySelector(".pw");
const pw_info = document.querySelector(".pw_info");

pw.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;
  const isValid = hasSpecial(value) && isValidLength(length);

  pw_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pw_info.innerText = isValid ? MSG.PW.VALID : MSG.PW.INVALID;

  validList[1] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

// PW CHECK
const pwch = document.querySelector(".pwch");
const pwch_info = document.querySelector(".pwch_info");

pwch.addEventListener("input", (e) => {
  const { value } = e.target;
  const isValid = pw.value === value;

  pwch_info.style.color = isValid ? COLOR.VALID : COLOR.INVALID;
  pwch_info.innerText = isValid ? MSG.PWCH.VALID : MSG.PWCH.INVALID;

  validList[2] = isValid;
  register.innerText = validList.every((v) => v)
    ? MSG.REGISTER.VALID
    : MSG.REGISTER.INVALID;
});

// PW: EYE BUTTON
const pw_eye_button = document.querySelector(".pw_eye_button");
const pwIcon = document.querySelector(".pwIcon");

pw_eye_button.addEventListener("click", () => {
  pwIcon.classList.toggle("fa-eye");
  pwIcon.classList.toggle("fa-eye-slash");

  pw.type = pw.type === "password" ? "text" : "password";
});

// PWCH: EYE BUTTON
const pwch_eye_button = document.querySelector(".pwch_eye_button");
const pwchIcon = document.querySelector(".pwchIcon");

pwch_eye_button.addEventListener("click", () => {
  pwchIcon.classList.toggle("fa-eye");
  pwchIcon.classList.toggle("fa-eye-slash");

  pwch.type = pwch.type === "password" ? "text" : "password";
});
