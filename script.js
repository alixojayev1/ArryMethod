// map

const arr = ["mers", "nexia", "bmw", "audio"];

const respons = arr.map((item) => item.toUpperCase());

console.log(respons);

// filter

const obj = [
  {
    name: "BMW",
    mmodel: 2024,
  },
  {
    name: "MERS",
    mmodel: 2023,
  },
  {
    name: "AUDIO",
    mmodel: 2021,
  },
  {
    name: "CHEVROLET",
    mmodel: 2020,
  },
];

const data = obj.filter((item) => item.mmodel > 2021);

console.log(data);

// evry   biz yozagn shart    qachonki hammasi   true bolsa true qaytaradi

const element = [2024, "ali", "azizxoja"];

const evry1 = element.every((item) => typeof item === "number");

console.log(evry1);

// some  biz yozagn shart    qachonki 1 tasi true bolsa true qaytaradi

const element2 = [2024, "ali", "azizxoja", "xoja"];

const some1 = element2.some((item) => typeof item === "string");

console.log(some1);

// reduse

const rds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const reduse1 = rds.reduce((a, b) => a + b, 1);  // yani buyerda arr ichidagi malumotlar shart boyicha 1 defalut qiymat + 1+2+3..9 tarzida // 1 bu default qiymat

console.log(reduse1);
