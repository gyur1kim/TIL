## JsonLogic

- 프론트엔드와 백엔드가 로직을 공유하고, DB에 저장할 때 적합하다.
- DB에 rule을 저장한다.

```jsx
jsonLogic.apply(rule[, data])
```

### 기본 형태

```jsx
jsonLogic.apply( { "==" : [1, 1] } );
// true
```

- `“==”` 연산자는 키 포지션이다. rule 하나에 키 하나.
- 값들은 배열이다.

### nesting rules

```jsx
jsonLogic.apply(
    {"and" : [
      { ">" : [3,1] },
      { "<" : [1,3] }
    ] }
);
// true
```

이 rule은 이것과 같다

```jsx
( (3 > 1) && (1 < 3) )
```

### data-driven

- 정적 리터럴 데이터만 있으면 재미없죠~
- rule object와 data object를 이용할 수 있다.
- `var` 연산자를 이용해 data object로부터 속성을 가져올 수 있다.

```jsx
jsonLogic.apply(
    { "var" : ["a"] }, // Rule
    { a : 1, b : 2 }   // Data
);
// 1
```

단항 연산자에서는 rule의 value에 대괄호 `[]` 를 생략해도 된다

```jsx
jsonLogic.apply(
    { "var" : "a" },
    { a : 1, b : 2 }
);
// 1
```

index를 이용해 data object에 접근할 수도 있다.

```jsx
jsonLogic.apply(
    {"var" : 1 },
    [ "apple", "banana", "carrot" ]
);
// "banana"
```

위의 것들을 합친 복잡한 형태의 rule입니다

> *The pie isn’t ready to eat unless it’s cooler than 110 degrees, and filled with apples.*

파이가 사과로 채워져있지 않고, 110도보다 뜨거우면 파이를 먹을 수 없습니다.

```jsx
var rules = { "and" : [
  {"<" : [ { "var" : "temp" }, 110 ]},
  {"==" : [ { "var" : "pie.filling" }, "apple" ] }
] };

var data = { "temp" : 100, "pie" : { "filling" : "apple" } };

jsonLogic.apply(rules, data);
// true
```

rule은 2가지를 만족해야 true를 반환합니다.

1. data.temp값이 110보다 작은지
2. data.pie.filling == apple인지

⇒ data를 확인해보니, temp 값이 100입니다. 그리고, filling이 apple입니다

⇒ `true` 를 반환합니다.

### 항상 참이거나 거짓

If the first parameter passed to `jsonLogic` is a non-object, non-associative-array, it is returned immediately.

```jsx
//Always
jsonLogic.apply(true, data_will_be_ignored);
// true

//Never
jsonLogic.apply(false, i_wasnt_even_supposed_to_be_here);
// false
```
