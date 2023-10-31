##### 정의

자바스크립트 테스트를 위한 라이브러리.
[[TDD]] 방식의 개발을 위해 필요한 라이브러리로 `javascript` 로 만들어진 대부분의 프로젝트에서 사용 가능하다.

#### 사용방법

1. `typescript` `CRA` 를 사용하여 프로젝트를 생성 한 경우 `CRA` 내에 같이 패키징되어 설치 된다.

```terminal
npx create-react-app [프로젝트 이름] --template typescript
```

2. 의존성이 확인

```json
//package.json
{
  "dependency": {
    ...
    "@types/jest": "^27.5.2",
    ...
  }
}
```

3. 테스트코드 작성

```javascript
test("renders learn react link", () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

4. 테스트 실행

```shell
npm run test
```

5. 결과 확인

```terminal
 PASS  src/App.test.tsx
 PASS  src/service/UserService.test.ts
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 2 passed, 2 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        1.538 s
Ran all test suites related to changed files.
```

#### 주요 기능

[참조]: https://jestjs.io/docs/expect

* `test` : 테스트 실행 구문, 인자값으로 테스트 할 내용의 설명과 함수를 작성한다.
* `describe` : 설명처리와 함께 여러 테스트를 묶는 기능을 한다.
* `expect` : 테스트의 결과 기대값
* `.not` :  부정조건
* `.resolves` : `Promies` 타입 반환시 결과 값 반환을 이행 `reject` 가 실행되면 테스트 실패
* `.reject` :  `Promies` 타입 반환시 실패 값 반환을 이행 `resolves` 가 실행되면 테스트 실패
* `.toBe` : 기본 값을 비교하거나 개체 인스턴스의 참조 ID를 확인하는 데 사용
* `.toBeCalled` : 호출 여부에 대한 검증
* `spyOn` : 메소드 호출에 대한 추적 제공
* `mockResolvedValue` : 성공 처리 값 mocking
* `mockRejectedValue` : 실패 처리 값 mocking
* `render` : 컴포넌트의 랜더링
* `screen` : 가상 랜더 후 화면 객체

#### Example

```typescript
// App.test.tsx
import {fireEvent, render, screen} from "@testing-library/react";
import App from "./App";
import {MOCK_USER} from "./service/UserService";

test("renders learn react link", () => {
  render(<App / >);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("has user props", () => {
  render(<App user = { MOCK_USER }
  />);
  const userIdElement = screen.getByLabelText(/userId/i);
  expect(userIdElement).toHaveDisplayValue("test1");
});

test("call callback fn", () => {
  const mockFn = jest.fn();
  render(<App user = { MOCK_USER }
  onChange = { mockFn }
  />);
  const userIdElement = screen.getByLabelText(/userId/i);
  fireEvent.change(userIdElement, { target: { value: "test" } });
  expect(mockFn).toHaveBeenCalled();
});
```

```typescript
import axios from "axios";
import {
  userService,
  MOCK_USER,
  createMockUser,
  loginService,
} from "./UserService";


describe("사용자 서비스 테스트", () => {

// 비동기 조회 정상 처리 테스트
  test("getUser-success", () => {
    expect(userService.getUser(MOCK_USER.userId)).resolves.toMatchObject(MOCK_USER);
  });

// 비동기 조회 실패 처리 테스트
  test("getUser-fail", () => {
    expect(() => userService.getUser("test")).rejects.toThrow();
  });

// 비동기 등록 정상처리 테스트
  test("postUser-success", () => {
    expect(() => userService.postUser(createMockUser("test4"))).resolves;
  });

// 비동기 등록 실패처리 테스트
  test("postUser-fail", () => {
    expect(() => userService.postUser(createMockUser("test2"))).rejects.toThrow();
  });

// 서비스 호출시 연계 함수 호출 여부 테스트
  test("getUser called test", () => {
    const getUserMockFn = jest.spyOn(userService, "getUser");
    loginService.login("test");
    expect(getUserMockFn).toBeCalled();
  });

// 서비스 호출시 연계 함수 호출 여부 테스트
  test("postUser called test", () => {
    const getUserMockFn = jest.spyOn(userService, "postUser");
    loginService.join("test");
    expect(getUserMockFn).toBeCalled();
  });

  /** 테스트의 독립성, 항상성 보장을 위한 Mocking */
  test("update password with mockResolvedValue", async () => {
    const mockFn = jest.spyOn(axios, "patch").mockResolvedValue({ data: { result: true } });

    const user = createMockUser("test4");
    const result = await loginService.password(user);
    expect(result).toBeTruthy();
    expect(mockFn).toBeCalled();
  });

});
```
