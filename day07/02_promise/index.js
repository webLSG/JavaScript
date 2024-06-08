const a = new Promise((success, fail) => {
  setTimeout(() => {
    success("탕후루");
  }, 3000);
});
a.then((v) => console.log(v));

const b = new Promise((success, fail) => {
  setTimeout(() => {
    success({ name: "americano", price: 3000 });
  }, 1000);
});
b.then((v) => {
  // name 대문자화 후 return
  v.name = v.name.toUpperCase();
  return v;
})
  .then((v) => {
    // price 2배 후 return
    v.price *= 2;
    return v;
  })
  .then((v) => {
    console.log(v);
  });
