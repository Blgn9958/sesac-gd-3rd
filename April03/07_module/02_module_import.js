// package.json "type": "module"로 수정

// 02_module01.js 사용
// import { flowers, getFlower, getFlowersLength } from "./02_module01.js";

// 한번에 export 한 변수, 함수 등을 가져오는 방법
// console.log(flowers);
// getFlowersLength();
// console.log(getFlower(0));
// console.log(getFlower(10));

import * as flower from "./02_module01.js";

console.log(flower);

// es6
// 바로 export 시키기

export const animals = ["cat", "dog", "rabbit"];

export function showAnimals() {
  animals.forEach((ani) => console.log(ani));
}

export const addAnimal = (newAni) => {
  // animals 배열에 인자로 전달받은 newAni르 추가한 후
  // 해당 배열을 반환하는 함수 만들기
  const newAnimalsArr = animals;
  animals.push(newAni);
  return animals;
};

// 02_module02.js 사용
import { animals, showAnimals, addAnimal } from "./02_module02.js";

showAnimals();
console.log(addAnimal("horse"));

// -----------------------------------------------------

// 03_module.js 사용
// import sayStatus from "./03_module.js";

// sayStatus("sleepy");
// sayStatus("hungry");
// sayStatus("boring");
// sayStatus("hard");
// sayStatus("happy");

// 한번 내보낸 sayStatus2 사용

import sayStatus2 from "./03_module.js";

sayStatus2("sleepy");
sayStatus2("hungry");
sayStatus2("boring");
sayStatus2("hard");
sayStatus2("happy");
