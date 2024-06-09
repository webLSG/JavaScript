export const todoListData = {};
const startDate = new Date(2024, 0, 2);
Array(366)
  .fill(0)
  .forEach((v, i) => {
    // startDate.toISOString() = '2024-01-01T15:00:00.000Z'
    const date = startDate.toISOString().split("T")[0];
    const pureDate = date.replaceAll("-", "");
    todoListData[pureDate] = [];
    startDate.setDate(startDate.getDate() + 1);
  });
console.log(todoListData);
