// 1

let arr = ["Dima-1", "Dima-2", "Dima-3", "Dima-4"];
let result = "";

for (let i = 0; i < arr.length; i++) {
  result += arr[i];
  if (i < arr.length - 1) {
    result += ",";
  }
}

console.log(result);
console.log(arr.join(","));

// 2

const cards1 = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];

console.log(cards1.slice(2));

// 3-4-5

const cards2 = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];

console.log(cards2);
const index = cards2.indexOf("Card-3");
cards2.splice(index, 1);
console.log(cards2);
const cardToInsert = "Card-6";
cards2.push(cardToInsert);
console.log(cards2);
const cardToUpdate = cards2.indexOf("Card-4");
cards2[cardToUpdate] = "Vip-Card";
console.log(cards2);
