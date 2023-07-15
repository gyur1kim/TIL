자바스크립트는 **7개의 데이터 타입**을 갖는다.

- **원시 타입**
  
  - 숫자 타입
  - 문자열 타입
  - 불리언 타입
  - `undefined` 타입
  - `null` 타입
  - `symbol` 타입

- **객체 타입** - 객체, 함수, 배열 등

# 6.1 숫자 타입

- C나 Java 언어
  
  - `int`, `long`, `float`, `double` 등 다양한 숫자 타입 제공

- Javascript
  
  - **배정밀도 64비트 부동소수점 형식**
    
    - [배정밀도 64비트 부동소수점 형식의 2진수](https://hbsowo58.tistory.com/460)
    
    - [자바스크립트 소수점 계산 오류](https://vanillaani.tistory.com/6)
  
  - 즉, 정수도 **실수**로 처리한다

- 숫자 타입은 모두 실수로 처리되므로 아래의 경우도 참이 된다
  
  ```javascript
  1 === 1.0
  ```

- **2진수**`0b`, **8진수**`0o`, **16진수**`0x`도 저장할 수 있다.
  
  - 따로 데이터 타입은 없고, 모두 10진수로 해석된다.
  
  ```javascript
  let bin = 0b01000001;
  let oct = 0o101;
  let hex = 0x41;
  console.log(bin);   // 모두 65 출력
  console.log(oct);
  console.log(hex);
  console.log(bin === oct);  // 모두 true
  console.log(oct === hex);
  ```

- 세 가지 **특별한 값**도 존재한다.
  
  - `Infinity`    양의 무한대
  
  - `-Infinity`  음의 무한대
  
  - `NaN`              산술 연산 불가


