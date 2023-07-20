# ubuntu에서 git을 써보자

1. git을 받자
   
     `sudo apt-get install git-core`
   
   - 인터넷에 검색해보면 이것도 되는 듯 하다.
     
     `sudo apt-get install git`

2. 내가 쓸 repo를 클론하자
   
   - `git clone {주소} ./`

3. 나는 이 레포만 다른 이름과 다른 이메일을 쓸 것이므로, `--local`로 config를 설정해준다.
   
   `git config --local user.name "gyur1kim"`
   
   `git config --local user.email "qri1114@gmail.com"`

4. 이제 레포에 push하면, config에 설정해두었던 이름과 이메일로 git이 push된다

## local vs global

- **global**
  
  - 전역에서 사용될 설정이다
  
  - 모든 git repository에 대한 설정
  
  - 여기서 name과 email을 설정하면, 어떤 레포든 설정해둔 이름과 이메일로 push된다

- **local**
  
  - 해당 repository에 대한 설정
  
  - 여기서 name과 email을 설정하면, 해당 레포에만 설정해둔 이름과 이메일로 push된다
