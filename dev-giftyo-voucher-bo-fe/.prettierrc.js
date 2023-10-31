module.exports = {
  /**
   * @template: printWidth: <int>
   * @description: 코드 한줄의 개수
   * 추천) 가독성을 위해 80자 이상을 사용하지 않는 것이 좋습니다.
   * 추천) 코드 스타일 가이드에서 최대 줄 길이 규칙은 종종 100 또는 120으로 설정됩니다.
   */
  printWidth: 100,

  /**
   * @template: tabWidth: <int>
   * @description: 들여쓰기 너비 수(탭을 사용할 경우 몇칸을 띄워줄지)
   */
  tabWidth: 2,

  /**
   * @template: useTabs: <bool>
   * @description: 탭 사용 여부 (미사용 시 스페이스바로 간격조정을 해야함.)
   */
  useTabs: false,

  /**
   * @template: semi: <bool>
   * @description: 명령문의 끝에 세미콜론(;)을 인쇄합니다.
   * true: (;)를 추가함
   * false: (;)를 지움
   */
  semi: true,

  /**
   * @template: singleQuote: <bool>
   * @description: 큰따옴표("") 대신 작은따옴표('')를 사용여부
   * true: 홀따옴표로 사용
   * false: 큰따옴표로 사용
   */
  singleQuote: true,

  /**
   * @template: quoteProps: "<as-needed|consistent|preserve>"
   * @description: 객체 속성에 쿼테이션 적용 방식
   * default: 'as-needed'
   */
  quoteProps: 'as-needed',

  /**
   * @template: jsxSingleQuote: <bool>
   * @description: 객체 속성에 쿼테이션 적용 방식
   * true: jsx 에 싱글쿼테이션 사용
   * false: jsx 에 싱글쿼테이션 사용하지 않음
   */
  jsxSingleQuote: false,

  /**≤
   * @template: trailingComma: "<es5|none|all>"
   * @description: 객체나 배열을 작성하여 데이터를 넣을때, 마지막에 후행쉼표를 넣을지 여부
   * es5: 후행쉼표 제외
   * none: 후행쉼표 없음
   * all: 후행쉼표 포함
   */
  trailingComma: 'es5',

  /**
   * @template: bracketSameLine: <bool>
   * @description: ">" 다음 줄에 혼자 있는 대신 마지막 줄 끝에 넣을지 여부
   * true: 줄넘김하지 않음
   * false: 줄넘김을 수행
   */
  bracketSameLine: false,

  /**
   * @template: bracketSpacing: <bool>
   * @description: 체체 리터럴에서 대괄호 사이의 공백을 넣을지 여부
   * true: 공백을 넣음 { foo: bar }
   * false: 공백을 제외 {foo: bar}
   */
  bracketSpacing: true,
  /**
   * @template: bracketSpacing: <'always'| 'avoid'>
   * 화살표 함수가 하나의 매개변수를 받을 때 괄호 사용여부
   * always : 괄호 사용 (x) => x
   * avoid : 괄호 제거 x => x
   */
  arrowParens: 'always',

  /**
   * @template: requirePragma: <bool>
   * @description: 자동포매팅을 적용할 파일을 선별하기 위한 특정 주석(pragma)을 활성화할 것인지 여부
   * true: 활성화
   * false: 비활성화
   */
  requirePragma: false,

  /**
   * @template: insertPragma: <bool>
   * @description: 자동포매팅이 된 파일의 상단에 @format 마커를 삽입할 것인지 여부
   * true: 활성화
   * false: 비활성화
   */
  insertPragma: false,

  /**
   * @template: htmlWhitespaceSensitivity: <'css' | 'strict' | 'ignore'>
   * @description: 공백 민감도 설정
   * css - CSS display의 기본값을 고려
   * strict - 공백을 sensitive로 간주
   * ignore - 공백을 insensitive로 간주
   */
  htmlWhitespaceSensitivity: 'css',

  /**
   * @template: endOfLine: <'auto' | 'lf' | 'crlf' | 'cr'>
   * @description: 개행문자 설정
   * auto - 파일의 현재 개행문자를 유지 (단, 혼합일 경우 첫 번째 줄의 개행문자로 통일)
   * lf - 라인피드(\n) 사용 (리눅스와 맥 방식)
   * crlf - 캐리지리턴과 라인피드(\r\n) 사용 (윈도우 방식)
   * cr - 캐리지리턴(\r) 사용
   */
  endOfLine: 'lf',

  /**
   * @template: embeddedLanguageFormatting: <'auto' | 'off'>
   * @description: 특정 언어의 코드를 HTML, JSX, Vue 등의 다른 언어와 함께 사용할 때 사용
   * auto : 해당 코드를 자동으로 감지하여 포맷팅 적용
   * off : 해당 코드에 대해 포맷팅 적용하지 않음
   */
  embeddedLanguageFormatting: 'auto',
};
