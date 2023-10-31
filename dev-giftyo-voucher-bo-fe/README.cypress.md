# Cypress

#### 주요 기능별 E2E (EndToEnd) 테스트를 진행 합니다.

### 사용방법

#### 단계 1: Cypress 설치

Cypress를 프로젝트에 설치합니다.

```bash
npm install cypress --save-dev
```

#### 단계 2: Cypress 설정

Cypress를 초기화하고 설정을 생성합니다.

```bash
npx cypress open
```

위 명령을 실행하면 Cypress 초기 설정 파일 (cypress.json)과 예제 테스트 파일이 생성됩니다.

#### 단계 3: 예제 테스트 제거

Cypress에 기본으로 포함된 예제 테스트 파일 (example.spec.js)을 삭제합니다.

#### 단계 4: 사용자 정의 테스트 작성

아래 구조에 맞는 테스트 파일을 생성합니다.

```
├── cypress
│   └── e2e
│       ├── [feature_function_1.cy.ts]
│       ├── [feature_function_2.cy.ts]
│       └── [feature_function_3.cy.ts]
├── public
└── 
``` 

#### 단계 5: 테스트 코드 작성

```typescript
describe('주요 기능별 테스트코드', () => {
    it('기능', () => {
        cy.visit('/auth');
    });
});
```

- Given (시작 조건 설정), When (테스트할 동작 수행), Then (결과 검증) 단계의 주석을 추가해 대략적인 테스트코드의 흐름을 알 수 있도록 한다.

#### 단계 6: Cypress 실행

Cypress를 실행하여 테스트를 수행합니다.

```bash
npx cypress run
```

또는 테스트 실행을 위한 Cypress GUI를 열려면:

```bash
npx cypress open
```

### 파일이름

* E2E 테스트의 특성상, 한 가지 시나리오에 여러가지 기능이 포함될 수 있기 때문에 주요 기능을 확인할 수 있는 파일명으로 한다.

    - auth_login.cy.ts

    - common_setRecoil.cy.ts

    - payment_bestCouponList.cy.ts

### commands

* 테스트코드의 비대화를 막고, 코드 작성 시간 단축을 위해 공통으로 반복 사용되는 기능은 commands.ts 에 정의 후 참조한다.

```
├── cypress
│   └── support
│       └── commands.ts
 
``` 

```typescript 
//commands.ts
Cypress.Commands.add('login', (userName, userPassWord) => {
    cy.visit('/login');

});
``` 

```typescript
//auth_login.cy.ts
describe('로그인 테스트', () => {
    const userName = '요기요';
    const userPassWord = '1234';
    beforeEach(() => {
        //from commands
        cy.login(userName, userPassWord);
    });
    it('로그인 시도', () => {
        // When (테스트할 동작 수행)
    });
});
```

### fixtures

* 테스트코드작성에 사용되는 data set 은 fixtures 에 정의 후 참조한다.

```
├── cypress
│   └── fixtures
│       └── example.json
 
```

``` json
//example.json
{
  "id": "요기요",
  "password": "1234"
}
``` 

```typescript
//auth_login.cy.ts
describe('로그인 테스트, with cy fixture data', () => {
    beforeEach(() => {
        //계정정보 with aliases
        cy.fixture('example.json').as('data');
    });
    it('로그인 시도', () => {
        cy.get('@data').then((data) => {
            cy.login(data.id, data.password);
        });
    });
});

```

### Coverage

Instrumenting code
```bash
npx nyc instrument --compact=false src instrumented
```

Install the plugin
```bash
npm install -D @cypress/code-coverage
```

커버리지 확인
```json
npm run coverage:text:summary 
```
```json
npm run coverage:page:summary 
```

- e2e 테스트의 coverage 확보를 위해 Critical Path 이외의 코드를 Exclude 한다.

```ts
//cypress.config.ts
export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['**/ErrorPage.*'],
    },
  },
});
```

### Example

```typescript
//commands.ts
Cypress.Commands.add('getBestCouponList', () => {
    cy.request({
        method: 'POST',
        url: `https://host/api/function`,
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'x-api-key': 'keyValue',
        },
        body: {},
    }).its('body');
});
```

```typescript
it('쿠폰 이름 확인 with cy commands ', () => {
// Given
    const couponName = '공차';
// When
// 쿠폰 리스트 목록 호출
    cy.getBestCouponList().as('bestCouponList');

    cy.get('@bestCouponList').then((response) => {
        // Then
        const couponVO = response.ResultData.data.list as BestCouponVO[]; // API 응답을 VO 객체로 변환

        // 배열 내에서 객체를 찾아서 compName 속성 값을 확인
        cy.wrap(couponVO).each((item) => {
            if (item.compName === couponName) {
                cy.wrap(item).should('deep.include', { compName: couponName });
            }
        });
    });
});
})
;
```

```typescript
describe('버튼동작 및 recoil 카운트 테스트', () => {
    it('recoil 값 비교', () => {
        //Given
        cy.visit('/auth');

        //When
        //recoil & countValue 비교
        cy.contains('플러스').click();
        cy.contains('플러스').click();
        cy.contains('set recoil').click();
        //Then
        //기본 카운트 값과, recoil의 값이 같은지 비교
        cy.get('p').eq(0).should('contain.text', '2');
        cy.get('p').eq(1).should('contain.text', '2');
        //When
        cy.contains('set recoil').click();
        //Then
        //기본 카운트 값과, recoil의 값이 같은지 비교
        cy.get('p').eq(0).should('contain.text', '2');
        cy.get('p').eq(1).should('contain.text', '2');
        //When
        cy.contains('마이너스').click();
        cy.contains('마이너스').click();
        cy.contains('마이너스').click();
        //Then
        //최소값 0으로 세팅 확인
        cy.get('p').eq(1).should('contain.text', '0');
    });
});
```


