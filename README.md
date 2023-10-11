# Wesang Publisher project

### 1. 프로젝트 구조

```
publisher
├─ .storybook  // 스토리북 설정정보
│  ├─ main.js
│  └─ preview.js
├─ asset              // 1. 정적 파일 경로
│  ├─ component-css   // 2 컴포넌트 단위 css 적용 경로
│  │  ├─ button.css
│  │  └─ header.css
│  ├─ css             // 3. 페이지 단위 css
│  ├─ html            // 4. 페이지 단위 html
│  └─ image           // 5. 정적이미지 경로
├─ components
│  ├─ complex         // 6. 복합요소 컴포넌트
│  │  └─ Header.jsx
│  └─ ui              // 7. 단순 UI 컴포넌트
│     └─ Button.jsx
├─ package-lock.json
├─ package.json
├─ README.md
└─ stories               // 8. 스토리 경로
   ├─ assets
   ├─ Button.stories.js
   ├─ Configure.mdx
   └─ Header.stories.js
```

1. 정적 파일은 해당 경로 하위에 작성한다.
    - 추후 프로젝트 규모가 확장되는 경우를 고려해 하위에 각 프로젝트 디렉토리 생성을 권장.
2. 컴포넌트 단위의 `css` 로 다른 레이아웃이나 컴포넌트에 영향을 받지 않도록 작성
3. 페이지 단위의 `css` (기존 작성하던 방식의 `css`)
4. 페이지 단위의 `html` (기존 작성하던 방식의 `html`)
5. 정적이미지
6. 복합요소 컴포넌트 (2개 이상의 컴포넌트가 혼합된 컴포넌트)
    - 컴포넌트는 기본적으로 `jsx` 파일로 작성
7. 단순요소 컴포넌트 (단순 UI 성 컴포넌트)
    - `jsx` 파일로 작성

### 2. 작업 진행 순서 (공통 UI 작업 사전 완료 가정)

1. 기존 방식 대로 디자인완료된 페이지를 `html`,`css` 로 작성한다. (3,4 번 경로)
2. 작성 완료된 페이지를 분할 할 수 있는 단위의 컴포넌트로 나누어 작성한다 (6,7 번 경로)
3. 각 컴포넌트 별 `stories` 를 작성한다. (8번 경로)
4. `console` 에서 `npm run storybook` 을 실행하여 작성된 스토리를 확인한다.

### 3. `stories` 작성 방법

1. `default` 작성

```javascript
export default {
    title: "Example/test/Button", // 컴포넌트 타이틀 (디렉토리 처리 포함)
    component: Button, // 스토리 작성하고자 하는 컴포넌트 (import 필수)
    parameters: {
        layout: "centered", // 정렬
    },
    tags: ["autodocs"], // 자동 documentation option (고정)
};
```

2. 각 `option` 에 대한 `argument` 작성 (컴포넌트 `props` 별 작성)

```javascript
// Primary 가 true 인 경우 stories
export const Primary = {
    args: {
        primary: true,
        label: "Button",
    },
};
// Primary 가 입력되지 않은 경우 stories
export const Secondary = {
    args: {
        label: "Button",
    },
};

export const Large = {
    args: {
        size: "large",
        label: "Button",
    },
};

export const Small = {
    args: {
        size: "small",
        label: "Button",
    },
};
```

3. `console` 에서 `npm run storybook` 을 실행하여 작성된 스토리를 확인한다.
