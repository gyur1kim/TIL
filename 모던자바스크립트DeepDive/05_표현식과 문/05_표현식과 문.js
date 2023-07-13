// 5.3 표현식
// 리터럴 표현식
10;
'hello';

// 식별자 선언식(선언이 존재한다 가정)
sum;
person.name;
arr[1];

// 연산자 표현식
10 + 20;
sum = 10;
sum !== 10;

// 함수/메서드 호출 표현식(선언이 존재한다 가정)
square();
person.getName();



// 5.4 문
// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo () {}

// 조건문
if (x > 1) {}

// 반복문
for (let i=0; i<10; i++) {}



// 5.6 표현식인 문과 표현식이 아닌 문
var sample = x = 100;
console.log(sample)   // 100 출력