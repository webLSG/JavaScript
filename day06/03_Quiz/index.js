const id = document.querySelector(".id");
const idCheckText = document.querySelector(".idCheckText");

const password = document.querySelector(".password");
const passwordCheck = document.querySelector(".passwordCheck");
const pwCheckSpan = document.querySelector(".pwCheckSpan");

const showPw = document.querySelectorAll(".showPw");
const hiddenPw = document.querySelectorAll(".hiddenPw");
const join_btn = document.querySelector(".join_btn");

id.addEventListener("input", (e) => {
  const idTxtValue = e.target.value;
  const { length } = idTxtValue;

  const isIdValidLength = length >= 4 && length <= 12;
  const isSpecialCharID = [...idTxtValue].some((v) =>
    [..."!@#$%^&*"].some((s) => s == v)
  );

  // 아이디 가능
  idCheckText.innerText =
    isIdValidLength && isSpecialCharID ? "아이디 설정 완료" : "아이디 재설정";
});

password.addEventListener("input", (e) => {
  const pwTxtValue = e.target.value;
  const { length } = pwTxtValue;

  const isPwValidLength = length >= 4 && length <= 12;
  const isSpecialCharPW = [...pwTxtValue].some((v) =>
    [..."!@#$%^&*"].some((s) => s == v)
  );

  // 비밀번호 가능
  isPwValidLength && isSpecialCharPW;
});
