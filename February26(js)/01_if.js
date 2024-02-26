console.log("connected");

/* 
if문의 기본 구조

if(조건) {
  조건이 참인 경우 실행 될 코드
}
*/

// 만약 조건이 false라면 해당 코드 블럭이 실행되지 않고 넘어감
if (5 > 7) {
  console.log("조건이 false이므로 이 코드블럭은 실행되지 않고 넘아감.");
}

// let number = Number(prompt("숫자를 입력해 주세요.")); // 입력받은 값을 Number 타입을 강제
let number = 8;

// 입력받은 수가 10보다 클 때 if 다음의 코들블럭을 실행
// 입력받은 수가 10보다 작거나 같을 때 else문의
// if (number > 10) {
//   console.log("입력받은 수가 10보다 큽니다.");
// } else {
//   console.log("입력받은 수가 10보다 작습니다.");
// }

// else if문
// if else문에 다른 조건을 추가하는 형식
// else문은 하나만 사용 가능. 하지만 else if문은 여러개 사용 가능
// 여러개의 분기로 나누고 싶으면 else if를 여러개 사용해서 조건을 많이 작성할 수 있음
if (number > 10) {
  console.log("입력받은 수가 10보다 큽니다.");
} else if (number === 10) {
  console.log("입력받은 수가 10입니다.");
}

console.clear();

// 성적 계산하는 프로그램
// const score = Number(prompt("성적을 입력해 주세요."));

// 조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
//
// if (score > 100) {
//   console.log("점수가 잘못 입력 되었습니다.");
// } else if (score >= 90) {
//   // 100~90 사이
//   console.log("A");
// } else if (score >= 80) {
//   // 89~80 사이
//   console.log("B");
// } else if (score >= 70) {
//   // 79~70 사이
//   console.log("C");
// } else if (score >= 60) {
//   // 69~60 사이
//   console.log("D");
// } else {
//   // 59 이하의 점수일 때 실행
//   console.log("F");
// }

// 실습

console.log("------------------");

const age = Number(prompt("나의를 입력해 주세요"));

if (age > 20) {
  console.log("선인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else if (age >= 0) {
  console.log("유아");
}

// 다른 방법
if (age >= 0 && age <= 8) {
  // age가 0보다 크거나 같으면서 8보다 작은 경우
  console.log("유아");
} else if (age < 14) {
  console.log("초등학생");
} else if (age < 17) {
  console.log("충학생");
} else if (age < 20) {
  console.log("고등학생");
} else if (age < 150) {
  console.log("성인");
} else if (age >= 150) {
  console.log("나이로 들어올 수 없는 값입니다");
} else {
  console.log("음수 값이 들어왔습니다.");
}
