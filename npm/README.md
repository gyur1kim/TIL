\* 참조 : [NPM에 자신의 라이브러리 배포하기 - 자신이 개발한 Javascript 라이브러리를 NPM에 배포하는 방법에 대해서 알아봅니다.](https://dev-yakuza.posstree.com/ko/share/deploy-npm-library/)

---

# 1. npm 계정 만들기

# 2. npm info

- 내가 배포하려는 라이브러리가 이미 npm에 존재하는지 확인해보자!

- `npm info [패키지명]`
  
  - 존재하는 라이브러리라면, 정보를 확인할 수 있다.
  
  - 존재하지 않는 라이브러리라면, `npm ERR! 404`를 확인할 수 있다.

# 3. npm init

> npm에 배포하기 위해 필요한 정보를 설정하는 과정

1. 자신이 개발한 JS라이브러리 폴더로 이동하기
   
   `npm init`

2. 폴더명을 package name으로 할지, 다른 이름으로 할지 정하기

3. 버전 설정
   
   - `major.minor.patch`
   
   - `major`
     
     - 큰 변화가 있을 시
   
   - `minor`
     
     - 주요 기능의 추가나 변경
     
     - 사용상 혹은 컨텐츠의 주요 변화가 발생했을 때
   
   - `patch`
     
     - 버그 수정 등 미미한 변화

4. Javascript 라이브러리에 대한 설명을 작성하는 부분

5. 개발한 Javascript 라이브러리의 Entry 파일을 지정한다
   
   `entry point: index.js`

6. 테스트할 수 있는 테스트 명령어를 입력
   
   없으면 enter키를 눌러 계속 진행하기

7. 배포하려는 Javascript의 소스코드를 확인할 수 있는 Git 저장소의 url을 입력하기
   
   없으면 enter키를 눌러 계속 진행하기

8. 배포하려는 Javascript를 쉽게 알 수 있는 키워드를 입력하기

9. 배포하는 사람에 대한 정보를 입력하기
   
   보통 `Name <Email address>` 형식

10. 배포하려는 라이브러리의 라이센스에 관한 질문
    
    - [GitHub license type](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#searching-github-by-license-type)

해당 항목을 모두 입력하면, **프로젝트 폴더**에 **`package.json` 파일**이 생성됨

# 4. npm login

- 배포하려면, npm 계정으로 로그인해야 한다.

- 예시
  
  ```bash
  Username: gyur1kim.dev
  Password:
  Email: (this IS public) gyur1kim.dev@gmail.com
  Logged in as gyur1kim.dev on https://registry.npmjs.org/.
  ```

- 로그인 확인 명령어
  
  `npm whoami`

# 5. npmignore

- 개발에는 필요하지만, 라이브러리를 사용할 때는 필요없는 파일들이 있다.
  
  - ex) 테스트 코드, 예제 소스들

- `.npmignore` 파일을 통해 제외할 수 있음
  
  ```context
  node_modules
  Develop
  DevelopWithExpo
  Example
  ExampleWithExpo
  .github
  demo
  ```

# 6. npm publish

- 라이브러리를 npm에 배포

- 라이브러리를 배포하기 전 특정 명령어를 실행할 필요가 있다면, `package.json`을 수정하자
  
  ```json
  "scripts": {
    ...
    "prepare": "rm -rf dist && tsc"
  },
  ```
  
  - `rm -rf dist` : `dist` 디렉토리를 삭제
  
  - `tsc` : typescript 컴파일러를 실행하여 **typescript 코드를 javascript 코드로 변환**
    
    typescript 프로젝트를 컴파일하여 `tsconfig.json` 파일에 지정된대로 `dist` 디렉토리에 결과물을 생성함.

# 7. npm version

- npm에 배포한 라이브러리를 수정하고, 다시 배포해야할 일이 발생할 수 있다.

- 이런 경우, 버전을 올려주어야 함

- 직접 수정
  
  - `package.json` 파일의 `version` 부분을 직접 수정한다

- 자동 수정
  
  - `npm version patch`
  
  - `npm version minor`
  
  - `npm version major`
