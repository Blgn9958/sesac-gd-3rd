let num: number = 1;
// num = "1" // error: number 타입으로 지정한 변수는 문자열로 작성 불가
num = 2;
console.log(num);

let str: string = "str";

// 타입 작성하기
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

let isTrue2 = true;
let undef2;
let empty2 = null;

// isTrue2 = "aa" // isTrue2 변수는 boolean 타입이라고 직접 작성하지 않아도 알아서 boolean임을 문자열로 제 할당 시 에러 발생

// array
// 요소의 겟수를 미리 명시할 필요는 없지만 array의 요소가 어떤 타입인지는 명시 필요
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ["가", "나", "다", "라"];

let arr1: (number | string)[] = [1, 2, 3, "가", "나", "다"];

let arr3: (boolean | null | number[])[] = [true, null, false, [4, 22]];
let arr4: Array<boolean | null | number[]> = [true, null, false, [4, 22]];

let arrAny = [1, 2, 50, false, ["a", "b", 3, false], null];
