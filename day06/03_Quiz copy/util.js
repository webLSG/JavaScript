// util.js

export const hasSpecial = (value) =>
  [..."!@#$%^&*"].some((v) => value.includes(v));
export const isValidLength = (length) => 4 <= length && length <= 10;
