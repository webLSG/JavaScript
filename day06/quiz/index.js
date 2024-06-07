// register
const validList = { id: false, pw: false, pwch: false };
const register = document.querySelector(".register");

// input
const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const pwch = document.querySelector(".pwch");

const idInfo = document.querySelector(".idInfo");
const pwInfo = document.querySelector(".pwInfo");
const pwchInfo = document.querySelector(".pwchInfo");

id.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;

  const isValidLength = 5 <= length && length <= 20;
  const isSpecialChar = [...value].some((v) => [..."@!_-"].some((s) => s == v));
  const correctID = isValidLength && isSpecialChar;

  idInfo.innerText = correctID ? "아이디 설정 완료" : "아이디 재설정 필요";
  idInfo.style.color = correctID ? "green" : "red";

  validList.id = correctID;
  register.innerText = Object.values(validList).every((v) => v)
    ? "[ 회원가입 가능 ]"
    : "[ 회원가입 불가능 ]";
});

pw.addEventListener("input", (e) => {
  const { value } = e.target;
  const { length } = value;

  const isValidLength = 5 <= length && length <= 20;
  const isSpecialChar = [...value].some((v) => [..."@!_-"].some((s) => s == v));
  const correctPW = isValidLength && isSpecialChar;

  pwInfo.innerText = correctPW ? "비밀번호 설정 완료" : "비밀번호 재설정 필요";
  pwInfo.style.color = correctPW ? "green" : "red";

  validList.pw = correctPW;
  register.innerText = Object.values(validList).every((v) => v)
    ? "[ 회원가입 가능 ]"
    : "[ 회원가입 불가능 ]";
});

pwch.addEventListener("input", (e) => {
  const { value } = e.target;
  const pwValue = pw.value;
  const correctPWCH = value == pwValue;

  pwchInfo.innerText = correctPWCH ? "비밀번호 일치" : "비밀번호 불일치";
  pwchInfo.style.color = correctPWCH ? "green" : "red";

  validList.pwch = correctPWCH;
  register.innerText = Object.values(validList).every((v) => v)
    ? "[ 회원가입 가능 ]"
    : "[ 회원가입 불가능 ]";
});

// btn
const pw_eye_button = document.querySelector(".pw_eye_button");
const pwch_eye_button = document.querySelector(".pwch_eye_button");
const pwIcon = document.querySelector(".pwIcon");
const pwchIcon = document.querySelector(".pwchIcon");

pw_eye_button.addEventListener("click", () => {
  pwIcon.classList.toggle("fa-eye");
  pwIcon.classList.toggle("fa-eye-slash");
  pw.type = pw.type === "text" ? "password" : "text";
});
pwch_eye_button.addEventListener("click", () => {
  pwchIcon.classList.toggle("fa-eye");
  pwchIcon.classList.toggle("fa-eye-slash");
  pwch.type = pwch.type === "text" ? "password" : "text";
});
