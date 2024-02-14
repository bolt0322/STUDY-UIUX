//사용자에게 키와 몸무게의 정보를 받아서 사용자가 현재 적정체중인지 확인 후 웹브라우저 화면에 다음과 같이 출력해주세요!

// 만약, 적정체중이라면 "적정체중이시네요. 축하드립니다"라는 메세지가 출력되게 하고, 만약 적정체중이 아니라면 "조금만 더 노력해주세요!"라는 메세지가 출력되게 해주세요!

// 적정체중 구하는 공식 = (본인키 - 100) * 0.9
// 적정체중 구하는 공식을 통한 결과값 +- 5kg까지 허용!

// 1. 사용자에게 키의 값을 받아온다
// 2. 사용자에게 몸무게 값을 받아온다
// 3. 사용자에게 받아온 키 & 몸무게 값을 가지고 적정체중을 구한다
// 4. 적정체중을 구한 이후에 +-5kg의 범위를 설정한다
// 5. 적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다
// 6. 최종 결과값을 웹 브라우저 화면에 출력한다

// const userName = prompt("당신의 이름을 적어주세요", "ex.홍길동");
// const userHeight = Number(prompt("당신의 키는 어떻게 되십니까?", "ex.180"));
// const userWeight = Number(prompt("당신의 몸무게는 어떻게 되십니까?", "ex.70"));

// const normalWeight = (userHeight - 100) * 0.9;
// let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;
// result = result
//   ? "적정체중이시네요! 축하드립니다"
//   : "적정체중이 아닙니다. 노력하세요!";
// document.write(`${userName}님 ${result}`);

//사용자로부터 오늘 하루 동안 지출한 교통비와 식비, 음료비를 받아서, 계산한 후 해당 값이 1만원을 초과한 경우에는 "00원 초과하였습니다. 조금만 더 노력해주세요!"라고 웹브라우저 화면에 출력하고, 만약 1만원을 초과하지 않은 경우에는 "00원 남았습니다. 돈관리 잘하셨습니다!"라고 웹브라우저 화면에 출력해주세요!

// 1. 사용자에게 하루동안 지출한 교통비, 식비, 음료비를 받아온다.
// 2. 사용자에게 받아온 지출비를 모두 합하여 계산한다.
// 3. 계산된 값이 1만원 미만인지 여부를 확인한다.
// 4. 계산된 값의 결과값에 따라서 "A"메세지를 출력할지, "B"메세지를 출력할지 결정
// 5. 최종 결정된 메세지를 웹브라우저 화면에 출력한다.

const traffic = Number(prompt("오늘 지출한 교통비를 입력해주세요."));
const food = Number(prompt("오늘 지출한 교통비를 입력해주세요."));
const drink = Number(prompt("오늘 지출한 교통비를 입력해주세요."));

const total = traffic + food + drink;
let result = total < 10000;
const result1 = 10000 - total;
const result2 = total - 10000;

result = result
  ? `${result1}원 남았어요! 돈관리 잘하셨어요.`
  : `${result2}원 초과했어요 조금만 노력하세요`;
document.write(result);
