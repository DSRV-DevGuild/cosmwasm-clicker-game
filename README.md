# CosmWasm Clicker Game

## How to Play

### 1. git clone

```bash
git clone https://github.com/DSRV-DevGuild/cosmwasm-clicker-game.git
cd cosmwasm-clicker-game
git checkout Step3
yarn install && yarn start
```

### 2. Keplr 지갑 설치

[Keplr wallet extension 설치 - Chrome](https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en)

### 3. 네트워크 연결

![](https://user-images.githubusercontent.com/70956926/173027360-10ddfcd8-ec14-429e-9aee-7d652f6a3851.png)

![](https://user-images.githubusercontent.com/70956926/173029587-cba1810c-3a07-4ddd-8345-5c7c0275ac96.png)

💡 게임을 이용하기 위해서는 계정에 잔액이 있어야 합니다. [CosmWasm 101 2편](https://abit.ly/dsrv-cosmwasm-counter-deploy)을 참고해서 faucet을 요청해주세요.

### 4. Play!

- Game Start 버튼을 누르면 reset 트랜잭션을 허용하는 창이 뜹니다. reset 트랜잭션이 완료되면 게임이 시작됩니다.
- 15초 동안 화면에 랜덤으로 나타나는 CosmWasm 아이콘을 클릭하세요! 한 번 클릭할 때마다 점수가 1점씩 올라갑니다.
- 게임이 종료되면 Transaction 버튼을 눌러 increment 트랜잭션을 실행하세요. Previous score 점수가 업데이트 됩니다.

![](https://user-images.githubusercontent.com/70956926/173031249-ff451b2f-79d5-4b38-be88-d6c163b0cbba.png)

## 구현 단계별 요구사항

### Step1. Keplr 지갑 연결하기

- 요구사항 1: Keplr 지갑에 테스트넷 네트워크를 추가하고 연결할 수 있다.
- 요구사항 2: CONNECT와 DISCONNECT 버튼의 UI 컴포넌트를 구현하고, 버튼을 클릭했을 때 지갑을 연결하고 연결을 해지할 수 있다.

### Step2. 스마트 컨트랙트와 통신하기

- 요구사항 1: 스마트 컨트랙트를 리팩토링할 수 있다.
- 요구사항 2: get_count 메소드를 실행하면, 컨트랙트의 현재 count 값을 조회할 수 있다.
- 요구사항 3: reset 메소드를 실행하면, 컨트랙트의 count 값을 0으로 초기화 할 수 있다.
- 요구사항 4: increment 메소드를 실행하면, 컨트랙트의 count 값에 획득한 점수를 저장할 수 있다.

### Step3. Clicker 게임 구현하기

- 요구사항 1: 플레이 화면 UI 를 구현할 수 있다.
- 요구사항 2: Game Start 버튼을 눌러 get_count와 reset 메소드를 차례로 실행할 수 있다.
- 요구사항 3: 게임이 시작되면 15초 동안 화면에 랜덤하게 나타나는 CosmWasm 아이콘을 클릭하여 점수를 획득할 수 있다.
- 요구사항 4: 게임 종료 후 나타나는 Transaction 버튼의 UI 컴포넌트를 구현하고, 이를 클릭하면 increment 메소드를 실행할 수 있다.
