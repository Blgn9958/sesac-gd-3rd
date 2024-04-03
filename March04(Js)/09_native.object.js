/*
js 표준 내장 겍체
javascript가 기본적으로 가지고 있는 겍체
string, Number, Array, Date, Math, ...
*/

// 1. Date 겍체
// 시간, 날짜에 대한 정보 얻기 위해 사용

// 현재 날짜
let now = new Date();
console.log(now); // Mon Mar 04 2024 11:48:55 GMT+0900 (Korean Standard Time)

// 1000ms = 1s
// 1000ms * 3600 = 1000ms * 10 * 60 === 1s * 60 * 60 = 1h
// 1000ms * 3600 * 24 === 24h
// 1970년 1월 1일 기준으로 해당 ms만큼 지난 시간
let Jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1970);

// new Date(year, month, day, hour, minutes, seconds, ms)
// year: 4자리
// month: 0(1월) ~ 11(12월)
// date: 1 ~ 31 / 값이 없으면 1로 처리
// hour, minutes, seconds, ms: 값이 없으면 0으로 처리
console.log(new Date(2021, 2, 15, 18, 30, 15));

// date 겍체 메서드
// 연, 월, 일 등의 값을 얻을 수 있음
console.log(now.getFullYear()); // 연도 4(자리)
console.log(now.getFullYear() + "년");
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay()); // 요일 (0 ~ 6) 일요일: 0 -> 일 ~ 토

// 1. date 겍체 사용해 오늘 요일 얻기
console.log(now.getDay());

// 2. switch-case문 / if문으로 오늘 요일이 평일인지 주말인지 구별
// 1. switch문

// Math 겍체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근
// 메서드
console.log(Math.min(10, 2, 6, -50)); // 최소값: 인자로 전달받은 값 중 최소값
console.log(Math.max(10, 2, 6, -50)); // 최대값: 인자로 전달받은 값 중 최대값
console.log(Math.random()); // 0 <= x < 1 난수 생성
console.log(Math.round(3.4));
console.log(Math.floor(3.4));
console.log(Math.ceil(3.4));

// Math.random() 응응
// 곱하는 수: 원하는 범위 숫자 + 1

// 0 ~ 9 사이의 난수 생성
console.log(Math.floor(Math.random() * 11));

// 0 ~ 10 사이의 난수 생성
console.log(Math.floor(Math.random() * 11));

// 20 ~ 22 사이의 난수 생성
console.log(Math.floor(Math.random() * 3));
