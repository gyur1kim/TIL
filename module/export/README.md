# Module.export 와 export의 차이

## 모듈이란?

> 프로그램을 구성하는 구성 요소로, 관련된 데이터와 함수를 하나로 묶은 단위를 의미
> 보통 하나의 소스 파일에 모든 함수를 작성하지 않고, 함수의 기능별로 따로 모듈을 구성
> 이러한 모듈을 합쳐 하나의 파일로 작성하는 방식으로 프로그램을 만든다.

- 어떤 기능을 수행하기 위해 함수 또는 객체들을 만들었을 때, 한 `.js` 파일에 써두는 것은 가독성이나 유지보수가 좋지 않음.

- 모듈은, 관련 함수 또는 기능들을 `.js` 파일별로 따로 모아놓은 것들

## module.exports

```javascript
// template을 모듈로 내보낸다
var  template = { 
    a: 'a',
    b: 'b'
}
module.exports = template;

//또는 바로 exports하기
module.exports = { 
    a: 'a',
    b: 'b'
}
```

다른 곳에서 모듈을 사용할 땐?

```javascript
var test = require('test.js');
console.log(test.a);    // a
```

## exports

```javascript
// template을 모듈로 내보낸
var  template = { 
    a: 'a',
    b: 'b'
}
exports.foo = template;

//또는 바로 exports
exports.foo = { 
    a: 'a',
    b: 'b'
}
```

다른 곳에서 모듈을 사용할 땐?

```javascript
var test = require('test.js');
console.log(test.foo.a);   //a
```

`exports.foo` 로 모듈을 생성했기 때문에 사용할 땐 `{import한 이름}.foo` 를 이용한다.

---

```javascript
exports.memo = memo;
```

React의 일부인데, `React.memo`로 사용하는 이유가 이것이었다.

아니면 `{memo}` 로 import 하여 사용해도 되고..
