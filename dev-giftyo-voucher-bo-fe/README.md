## 프로젝트 overview

### IDE 셋업 및 필수 체크사항

- 코드 컨벤션 
> Code Convention [링크](https://github.com/coopnc/docs/blob/master/conventions/reactjs-code-conventions.md) - 1차 리뷰 완료 / 업데이트 중

- 포메터 (Prettier 위상 룰파일 셋팅)
> Prettier Setting [링크]() - 준비중

- 정적분석 (SonarLint:OWASP보안 취약점 / ESLint:위상 코드컨벤션 룰 (추후 Typescript 규칙 추가 예정))
>SonarLint Setting [링크]() - 준비중<br>
>ESLint Setting [링크]() - 준비중



### Overview

1. component, context 관련 파일은 대문자로 시작한다. 이외의 파일은 소문자로 시작하도록 한다.

2. css는 컴포넌트 단위로 스타일을 적용한다. css 파일은 컴포넌트 파일과 동일하게 위치시킨다.

3. page 컴포넌트(이하 page)는 pages 폴더에 위치 시키고, 화면 및 기능에 따라 서브 디렉토리를 정의 후 관리한다.
    - 각각의 page는 components/page-scenes 폴더에 자식 컴포넌트를 가지는 구조로 개발한다.
    - page 내부에 비지니스 로직을 적용하는 것은 지양하도록 한다. page는 화면 렌더링 역할만 하고 모든 비지니스 로직은 하위 컴포넌트에서 동작하도록 분리한다.
    - 모든 page는 기본적으로 공통 헤더와 푸터를 포함하도록 되어 있으며, 공통 헤더 또는 푸터가 필요 없는 경우 렌더링 시점에 이를 컨트롤 할 수 있는 구조로 개발되어 있다.
      공통 컴퍼넌트가 필요 없을 경우 page내에 getLayout 함수를 정의하여 커스텀한 화면이 개발 가능하다.

4. API Routes는 pages/api 폴더에 위치 시키고 API 도메인에 따라 폴더 생성 및 dynamic API routes를 적용하여 개발한다.

5. 사용자 인증 관리를 위해 최상위에 AuthProvier context를 사용한다. AuthProvier는 토큰 갱신, 사용지 정보 조회, 사용자 데이터 관리 등의 역할을 하며,
   컴포넌트가 렌더링 될 때 해당 컴포넌트의 최상위에서 동작한다.

6. 사용자 접근 제어가 필요할 경우 PrivateRouter를 사용한다. AuthProvider에서 인증 및 접근 가능 여부 체크 후 PrivateRouter에서 자식 컴포넌트를 렌더링 할 지, 특정 page로
   redirect 시킬 지 결정한다.

7. 상태 관리 라이브러리는 recoil, react-query를 사용하며 데이터의 성격에 따라 구분하여 사용한다
    - 로컬 데이터의 글로벌 상태 관리는 recoil을 사용한다.
    - 서버 데이터의 글로벌 상태 관리는 react-query를 사용한다.
    - 서버 API와의 비동기 통신은 react-query를 사용하며, 랜더링 시점에 데이터 fetch는 useQuery를, 렌더링 후 사용자 엑션 시 데이터 fetch에는 useMutation을 사용한다.

8. react-query로 비동기 API 호출 시 로딩바 및 에러 핸들링은 Suspense, ErrorBoundary를 이용하여 선언적으로 적용한다.
    - QueryErrorBoundary를 이용하여 react-query 비동기 호출 에러 시 재시도 로직 적용이 가능하다.

9. recoil을 이용하여 글로벌 모달을 관리한다. useModal hook을 이용하여 전역으로 모달을 open, close 할 수 있다.

10. 공통으로 사용하는 로직은 커스텀 훅을 사용하여 관리하며 유용한 hook들을 지속적으로 추가 및 관리한다 . 아래는 현재 사용 가능한 커스텀 훅의 간략한 설명이다.
    - useClickOutside : 특정 엘리먼트 이외의 영역을 클릭 시 이벤트를 콜백 받을 수 있는 훅이다.
    - useClipboard : 클립보드 복사 및 성공 실패 여부 콜백을 받을 수 있는 훅이다.
    - useCounter : 카운트 증가, 감소, 리셋등의 상태관리를 쉽게 할 수 있는 훅이다.
    - useDeviceInfo : 현재 사용중인 device 및 OS 정보를 확인 할 수 있는 훅이다.
    - useInput : input박스의 상태를 쉽게 관리 할 수 있는 훅이다. 여려 input을 object 단위로도 관리 할 수 있으며, validation 체크도 가능하다.
    - useModal : 글로벌한 모달을 관리하는 훅이다. 모달의 open, close, reset 기능을 제공한다.
    - useRouterQuery : dynamic route 사용 시 url param 을 핸들링하는 훅.

11. 폴더 구조
    - common : 공통으로 사용하는 config, util, constants등 프로젝트 전반에 공통으로 사용하는 파일을 정의한다.
    - components : 페이지 이외의 컴포넌트로, 각 컴퍼넌트 파일은 기능에 따라 폴더로 묶어서 관리한다.
        * common : 모든 컴포넌트에서 공통으로 사용하는 컴포넌트(헤더, 푸터, 로딩바, 에러 등)
        * modal : 글로벌 모달을 관리하는 컴포넌트
        * page-scenes : page의 자식 컴포넌트
        * ui : 재사용 가능한 UI 컴포넌트

    - hooks : 공통으로 사용하는 커스텀 훅을 관리한다.
    - net : 서버와 API 통신을 위한 로직들을 정의한 폴더이다. axios 라이브러리를 사용하며 API 로직을 service layer 분리하여 UI 로작과의 결합도를 낮춘다. 응답 모델은 models
      폴더로 관리한다.
    - net/backend : API Route와 관련된 서버 to 서버 통신을 하기 위한 API 로직들이 정의 되어 있다. 클라이언트에서 API Route로 http요청이 올 경우 http 메소드 별로
      분기하여 동작하는 로직이 적용되어 있다.
    - pages : page component를 화면 별로 디렉토리를 나누어 관리한다. 각각의 page는 components/page-scenes 폴더에 서브 컴포넌트를 가지는 구조로 개발한다.
    - query : 서버 데이터의 글로벌한 상태 관리를 위한 query 파일을 정의한다. 각각의 쿼리는 기능 별로 커스텀 훅을 정의하여 관리한다.
    - recoil : 로컬 데이터의 글로벌한 상테 관리를 위한 atom 파일을 정의한다. 각각의 atom을 기능 별로 폴더로 묶어서 관리한다.
    - services : data layer의 서비스 로직들을 정의 한다.(ex: api service, dto service 등)
    - public : 로컬 이미지 및 폰트 파일을 정의한다.