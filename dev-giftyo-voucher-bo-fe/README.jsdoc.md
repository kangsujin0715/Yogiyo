#### 4.9.1  기본적인 사용법
각 주석은 대상 바로 위에 작성한다.  
/&#42;&#42; 로 시작하며, &#42;/로 종료한다.  
주석 내용이 한 줄인 경우, 한 줄에 모두 작성한다.  
주석 내용이 두 줄 이상인 경우, /&#42;&#42; &#42;/ 사이에 줄을 분리하여 작성한다.  
주석의 설명은 주석의 최상단에 작성한다.

```typescript
/** 주석 한줄 작성하기 (주석 설명 작성) */

/**
 * 주석 여러줄 작성하기 (주석 설명 작성)
 * ... (주석 설명 작성)
 */
```

#### 4.9.2 어노테이션
JSDoc 어노테이션은 아래 항목 중 선택하여 사용한다.  
여러 어노테이션 사용 시 아래 기술된 순서로 작성한다.   
required 어노테이션은 작성 가능한 대상에서 필수로 기입한다.  
optional 어노테이션은 선택적으로 기입한다.  

##### @property (required)
- @property 태그는 클래스, 인터페이스 또는 기타 객체의 속성 목록을 문서화한다.
- @property 태그는 속성 개수만큼 추가하여 작성한다.
- optional 매개변수명은 [] 안에 작성한다.
- 제네릭 매개변수명은 <> 안에 작성한다.
- 문법:  
  @property 속성키 - 속성 설명
```typescript
/** 
 * @property name - 이름 
 * @property [age] - 나이
 */
export interface User {
    name: string,
    age?: string,
}

/**
 * @property <B> - 응답 바디
 * @property <H> - 응답 헤더
 */
export interface HttpResponse<B, H> {
  body: B,
  headers: H,
}
```

##### @param (required)
- @param 태그는 매개변수의 이름 및 설명을 문서화한다.
- @param 태그는 매개변수 개수만큼 추가하여 작성한다.
- optional 매개변수명은 [] 안에 작성한다.
- 제네릭 매개변수명은 <> 안에 작성한다.
- 문법:  
  @param 매개변수명 - 매개변수 설명
```typescript
/** @param name - 이름 */
export function sayHello(name: string): void {
    alert('Hello ' + name);
}

/**
 * @param name - 이름
 * @param [age] - 나이
 */
export function sayHello(name: string, age?: number): void {
  alert('Hello ' + name + ', age ' + age);
}
```

##### @returns (required)
- @returns 태그는 함수가 반환하는 값에 대한 내용을 문서화한다.
- 문법:  
  @returns 반환 값의 설명
```typescript
/**
 * @param a - 첫번째 숫자
 * @param b - 두번째 숫자
 * @returns 첫번째 매개변수와 두번째 매개변수를 더한 값
 */
export function sum(a: number, b: number): number {
  return a + b;
}
```

##### @throws (required)
- @throws 태그는 함수에서 발생할 수 있는 예외를 문서화한다.
- @throws 태그는 발생할 수 있는 예외 개수만큼 추가하여 작성한다.
- 문법:  
  @throws 예외 설명
  @throws {@link 타입} 예외 설명
```typescript
export interface ArithmeticException {
}

/**
 * @param a - 첫번째 숫자
 * @param b - 두번째 숫자
 * @throws {@link ArithmeticException} b가 0일 경우 예외 발생
 * @returns a를 b로 나눈 몫
 */
export function divide(a: number, b: number): number {
    return a / b;
}
```

##### @example (optional)
- @example 태그는 다음 텍스트가 함수 사용 방법의 예임을 나타낸다.
- @example 태그 안에 주석 사용이 필요한 경우 // 형식으로 작성한다.
```typescript
/**
 * 두 숫자를 더한다.
 * @example
 * // returns 4
 * sum(1, 3);
*/
export function sum(a: number, b: number): number {
  return a + b;
}
```

##### @see (optional)
- @see 태그는 참고해야될 다른 페이지나 URL을 문서화한다.
- @see 태그는 {@link} 태그와 함께 사용하며, {@link} 인라인 태그는 문서의 다른 페이지나 URL에 대한 하이퍼링크를 만드는 데 사용된다.
- @see 태그는 참고해야될 개수만큼 추가하여 작성한다.
- 문법:  
  @see {@link namepathOrURL}  
  @see {@link link text}
```typescript
/**
 * @see {@link MyClass}  
 * @see {@link https://github.com GitHub}
 */
export function myFunction(): void {}
```

##### @author (required)
- @author 태그는 주석 대상의 최초 작성자를 명시적으로 문서화한다.
- @author 태그는 github ID를 기입한다.
- 문법:  
@author githubID@github.com
```typescript
/**
 * @author githubID@github.com
 */
export class Base {
}
```

##### @since (required)
- @since 태그는 주석 대상의 최초 작성일자를 명시적으로 문서화한다.
- @since 태그 포맷은 YYYY.MM.DD 로 통일한다.
- 문법:  
@since YYYY.MM.DD
```typescript
/**
 * @since 2023.10.13
 */
export class Base {
}
```

##### @override (optional)
- @override 태그는 기본 클래스에서 상속된 정의를 재정의한다는 것을 명시적으로 문서화한다.
```typescript
export class Base {
  public render(): void {}
}

export class Child extends Base {
  /** @override */
  public render(): void {}
}
```

##### @deprecated (optional)
- @deprecated 태그는 변수나 함수 등 선언된 내용이 사용되어서는 안 되며 향후 릴리스에서 제거될 수 있음을 나타낸다.
```typescript
export class NewControl {
}

/**
 * 렌더링할 수 있는 컨트롤의 기본 클래스
 * @deprecated 해당 클래스 대신 새로운 {@link NewControl} 클래스를 사용하라.
 */
export class OldControl {
}
```

##### @hidden (optional)
- @hidden 태그가 표시된 내용은 문서에서 제거된다.
```typescript
export class Visibility {
    /** @hidden */
    newBehavior(): void {}
}
```

#### 4.9.3 작성 예시
* export 되는 대상은 필수로 작성한다.  

##### 변수
* export 된 변수는 변수의 설명을 작성하고, 어노테이션은 작성하지 않는다.  
```typescript
/** 숫자형 상수 */
export const PI = 3.14159265359;

/** 문자열 상수 */
export const STRING_CONSTANT = "FOOBAR";
```

##### 함수
```typescript
/**
 * 두 개의 숫자를 나눈다.
 * @param a - 첫번째 숫자
 * @param b - 두번째 숫자
 * @returns 첫번째 매개변수를 두번째 매개변수로 나눈 몫 값
 * @throws {@link ArithmeticException} b가 0일 경우 예외 발생
 * @example
 * // return 3;
 * divide(6, 2);
 * 
 * @see {@link https://github.com GitHub}
 * @author githubID@github.com
 * @since 2023.10.13
 */
export function divide(a: number, b: number): number {
  return a / b;
}
```

##### 타입별칭
```typescript
/**
 * 사용자 타입 별칭
 * @property id - 사용자 ID
 * @property name - 사용자 명
 * @see {@link https://github.com GitHub}
 * @author githubID@github.com
 * @since 2023.10.13
 */
export type User = {
  id: number,
  name: string, 
}
```

##### 인터페이스
```typescript
/**
 * HTTP 통신 응답 객체
 * @property statusCode - HTTP 응답코드
 * @property [statusText] - HTTP 응답메시지
 * @property <B> - 응답 바디
 * @property <H> - 응답 헤더
 * @author githubID@github.com
 * @since 2023.10.13
 */
export interface HttpResponse<B, H> {
  statusCode: number,
  statusText?: string,
  body: B,
  headers: H,
}
```

##### 클래스
* 클래스에 대한 주석을 기입하지 않는다.
* 클래스 생성자 또는 public 메소드에 주석을 기입한다. 
```typescript
export class Money {
  private readonly money: number;

    /** 
     * @param money - 금액
     */
    constructor(money: number) {
      this.money = money;
    }
    
    /**
     * 금액 유효 여부
     * @returns 유효 여부 (true: 유효함, false: 유효하지 않음)
     * @author githubID@github.com
     * @since 2023.10.12
     */
    public isValid(): boolean {
        return 0 <= this.money;
    }
}
```

##### Enum
* Enum 의 속성은 속성에 대한 설명을 작성하고, 어노테이션을 작성하지 않는다.  
```typescript
/** 
 * 의류 브랜드 
 * @author githubID@github.com
 * @since 2023.10.13
 */
export enum Brand {
  /** 나이키 */
  Nike,
  /** 뉴발란스 */
  NewBalance,
}
```
