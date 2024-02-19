// 함수의 생김새
// 단어(=키워드)() => 함수!

// 함수가 작동하려면 무엇이 필요할까?
// 1) 함수를 구현 = 제작
// 2) 함수를 호출 = 실행

// 함수를 구현하려면 어떻게 해야할까?
// 함수 구현하는 방법은 3가지!!
// 1) 클래스 함수를 구현하는 방법
// 2) 익명 함수를 구현하는 방법
// 3) 화살표 함수를 구현하는 방법

// 초급 레벨 단계
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

// 중급 레벨 단계
// 만약 숫자를 1~100까지 더하라고 하면 이 코드는 재활용 불가능!
// 재활용성 불가능 코드
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

// 고급 레벨 단계
// 재활용이 가능한 코드로 업그레이드 가능
// function calcSum(n) {  //함수 구현
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }
// calcSum(80); //함수 호출

// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요"));

//클래스 함수
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}입니다.`);
// }

// 익명 함수
// 익명함수는 함수명이 없는 대신에 특별한 변수명 안에 식별해줘야함.
// const sum = function (a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}입니다.`);
// };

// 화살표 함수
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}입니다.`);
// }

// sum(userNum01, userNum02);

// return 문
// const num = Number(prompt("숫자를 몇까지 더할까요?"));
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   document.write(`1부터 ${n}까지의 합은 ${sum}입니다.`);
// }
// calcSum(num);

// return문
// 함수의 연산 결과물을 바깥에서 쓰고 싶을 때 return문을 씀.
// 함수가 어떤 연산문을 한 이후에 결과물을 바깥으로 끄집어 내고 싶을 때. return이 아니면 못 끄내옴.
// const num = Number(prompt("숫자를 몇까지 더할까요?"));
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// calcSum(num);
// document.write(`1부터 ${num}까지의 합은 ${calcSum(num)}입니다.`);

// 기본 매개변수
// const userNum01 = Number(prompt("첫번째 숫자!"));
// const userNum02 = Number(prompt("두번째 숫자!"));
// const userNum03 = Number(prompt("세번째 숫자!"));
// function multiple(a, b, c = 10) {
//   // /기본 매개변수
//   return a + b + c;
// }
// console.log(multiple(1, 2));

// function calcSum(n) {
//   let num = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1붜터 ${n}까지 더하면 ${sum}입니다.`);
// }
// calcSum(5);

// JS는 엄청 큰 쿤제점을 반결 => 콜솔창을 통해서 알려줌!
// 아주 사소한 문제점은 알려주지 않음!!
// 코드 상의 문제가 발생 => 버그!!
// JS << TS 를 더 많이 씀
// 보다 효율적으로 버그 찾는 방법 !!!
// i는 블록 스코프, n은 지역 스코프

// 전역 스코프
// const hi = "hello";
// function greeting() {
//   console.log(hi);
// }
// function greeting02() {
//   console.log(hi);
// }
// greeting();

// let hi = "hello";
// function change() {
//   hi = "bye";
// }
// console.log(hi);
// change();
// console.log(hi);
// // change();

// const factor = 5;
// function calc() {
//   return num * factor;
// }
// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

// JS에서 권장사항!!
// 1. var보다는 let, const 키워드로 변수를 선언해라!!
// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`);

// JS에서 권장사항!!
// 2. 가급적이면, 전역 스코프의 변수선언은 피해라!!
// 3. 그래서 var, let 보다는 const에 적응해라!!

// 즉시 실행 함수!!
// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과 값 : ${sum}`);
// }
// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과 값 : ${sum}`);
// })(1, 2);

// Hoisting 기법 : 무언가를 끌어올리다
// class 함수는 hoisting 가능 / 화살표 & 익명 함수는 hoisting 불가능!!
// example();
// const example = () => {
//   console.log("hello");
// };

// const example01 = function () {
//   console.log("hello");
// };

// 화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return 문을 생략해도 문제없이 작동 가능!!!
// let hi = () => `안녕하세요!!`;
// console.log(hi());

// let sum = function (a, b) {
//   return a +b;
// }

// let sum = (a, b) => a + b;
// 화살표 함수 탄생한 이유:
// 1. 반복적으로 사용되는 function & 함수명 생략!!
// 2. JS 근본없는 구현 & 호출부의 순서를 명확하게 정의!!
// 2. 함수의 실행문에서 굳이 중괄호 & return문 사용하지 않아도 구현할 수 있도록 해주기 위한 목적

// 변수 선언 시, let, const, var 사용하지 않으면 무조건 전역변수화!!
// function greeting() {
//   hi = "hello";
// }
// 위와 같음
// hi = "hello"; /*함수 바깥으로 튀어나옴*/
// function greeting() {}
// greeting();
// console.log(hi);

// 콜백함수 : 함수 안에 또 다른 함수를 호출할 때 부르는 용어
// const btn = document.querySelector("button");
// const display = () => {
//   alert("오늘도 파이팅입니다!");
// };
// btn.addEventListener("click", display);
// // 또는
// btn.addEventListener("click", () => {
//   alert("오늘도 파이팅입니다!");
// });

// ****** 콜백함수 ******
// const showData = (name, age) => {
//   alert(`안녕하세요! ${name}님 나이가 ${age}이군요!`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData);

// Java/python/c 등 기타 프로그래밍 언어 함수
// JS 함수 => 1급 시민! first-class citizen
// 모든 프로그래밍 언어에서 1급 시민이 되려면 다음과 같은 조건이 부합해야 함!

// 1) 함수를 변수에 값으로 할당할 수 있어야 한다!
// 2) 함수가 또다른 함수의 매개변수 혹은 인자값으로 사용될 수 있어야 한다!
// 3) 함수가 또다른 함수의 return문 안에 반환값으로 들어올 수 있어야 한다!

// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };
// console.log(`init(30, 20) : ${init(30, 20)}`);

// const addNum = (a, b) => a + b;
// console.log(addNum(1, 3, 5, 7));

// 전개 연산자
// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째로 좋아하는 과일은 ${second}`;
//   // return str;
//   return str01;
// };
// console.log(displayFavorites("사과", "포도", "토마토"));

// window 운영체제 => 내장함수!
// JS : 싱글스레드로 작동하는 객체지향 프로그래밍 언어 !!
// 싱글 => 1차선 통행! <-> 멀티스레드: 복수차선
// 동시성x = 비동기 처리x
// 로딩 스피너!

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수!
// const greeting = () => {
//   console.log("안녕하세요!");
// };
// // 1000밀리초 = 1초
// setInterval(greeting, 2000); /*콜백 함수*/
// // 위와 같으
// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

// clearInterval() : 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수
// 단잘괴호 평가
// let counter = 0; /* 전역 스코프 */
// let timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout() : 특정 시간이 경과한 이후에 작동하게 만드는 함수
// heap / callstack / Que
// setTimeout(() => {
//   console.log("안녕하세요!");
// }, 5000);
