import { data } from "./data.js";

// Q1. timezone = Europe 데이터 중 phone, fullName, ipAddress
const europe = data
  .filter(({ timezone }) => timezone.includes("Europe"))
  .map(({ phone, fullName, ipAddress }) => ({ phone, fullName, ipAddress }));
console.log("Q1");
console.log(europe);

// Q2. id가 짝수인 데이터 중 timezone[대륙만], phone[- 빼고], money[$ 빼고]
const evenId = data
  .filter(({ id }) => !(id % 2))
  .map(({ timezone, phone, money }) => {
    return {
      timezone: timezone.split("/")[0],
      phone: phone.replaceAll("-", ""),
      money: money.replace("$", ""),
    };
  });
console.log("Q2");
console.log(evenId);

// Q3. timezone = America or Asia 데이터 중 ipAddress[. 빼고], fullName[first name], creditcard[로 변경]
const americaNasia = data
  .filter(
    ({ timezone }) => timezone.includes("America") || timezone.includes("Asia")
  )
  .map(({ ipAddress, fullName, creditCardType: creditcard }) => {
    return {
      ipAddress: ipAddress.replaceAll(".", ""),
      name: fullName.split(" ")[0],
      creditcard,
    };
  });
console.log("Q3");
console.log(americaNasia);

// Q4. money 25,000 ~ 50,000 사이의 데이터와 timezone = Africa 데이터 중
//     timezone[수도만], fullName[family name]
const africaMoney = data
  .filter(({ money, timezone }) => {
    const numMoney = parseInt(money.replace("$", ""));
    const isValidMoney = 25000 <= numMoney && numMoney <= 50000;
    const isValidTimezone = timezone.includes("Africa");
    return isValidMoney && isValidTimezone;
  })
  .map(({ timezone, fullName: familyName }) => {
    return {
      timezone: timezone.split("/")[1],
      familyName: familyName.split(" ")[1],
    };
  });
console.log("Q4");
console.log(africaMoney);

// Q5. ipAddress [191.27.155.248] 뒷자리 3개의 수의 합이 15이하인 데이터 중
//     timezone, fullname, money
const ipAdr15 = data
  .filter(
    ({ ipAddress }) =>
      [...ipAddress.split(".")[3]].reduce(
        (acc, curr) => Number(acc) + Number(curr)
      ) <= 15
  )
  .map(({ timezone, fullName, money, ipAddress }) => ({
    timezone,
    fullName,
    money,
    ipAddress,
  }));
console.log("Q5");
console.log(ipAdr15);

// //////////////////////////////////

const five = data
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    const lastIndex = ipArr.findLastIndex((v) => v == ".");
    const sum = ipArr
      .splice(lastIndex + 1, ipArr.length)
      .map((v) => Number(v))
      .reduce((acc, curr) => acc + curr);

    return sum > 15;
  })
  .map(({ timezone, fullName, money, ipAddress }) => ({
    timezone,
    fullName,
    money,
    ipAddress,
  }));
console.log("Q5");
console.log(five);
