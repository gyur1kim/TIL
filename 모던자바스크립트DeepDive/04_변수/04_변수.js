// 4.1 변수란 무엇인가? 왜 필요한가?

let result = 10 + 20;
/*
 * 메모리 공간에 저장된 값을 식별할 수 있는 고유한 이름(result) = 변수명
 * 변수에 저장된 값(30) = 변수값
 * 변수에 값을 저장하는 것 = 할당, 대입
 * 변수에 저장된 값을 읽어 들이는 것 = 참조
 */


// 4.4 변수 선언의 실행 시점과 변수 호이스팅
console.log(score);  // undefined
var score;           // 변수 선언문


// 4-5. 값의 할당
console.log(score1)   // undefined (아직 값이 할당되지 않음, 변수 선언만 실행)
var score1;           // 변수 선언
score1 = 80;          // 값의 할당
console.log(score1)   // 값의 할당 실행됨, 80 출력

console.log('==========문제!=========')
console.log('====아래의 실행 결과는?====')

console.log(ans);  // undefined
ans = 80;
var ans;
console.log(ans)   // 80