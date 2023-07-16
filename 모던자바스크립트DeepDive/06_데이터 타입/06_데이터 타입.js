// 6.1 숫자 타입
console.log(1 === 1.0)

let bin = 0b01000001;
let oct = 0o101;
let hex = 0x41;
console.log(bin);   // 모두 65 출력
console.log(oct);
console.log(hex);
console.log(bin === oct);  // 모두 true
console.log(oct === hex);



// 6.3 템플릿 리터럴
let first = 'gyuri'
let last = 'kim'
console.log(`내 이름은 ${first} ${last}`)  // 백틱 이용 시
console.log('내 이름은 ' + first + last)   // 기존의 따옴표 이용 시 문자열 연산자 이용