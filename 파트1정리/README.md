### 파트1 - 코어자바스크립트

- 자바스크립트 코드작성
```
<script></script> 태그안에 자바스크립트 코드를 작성할 수 있다.
```

- type language속성은 필수가 아니다.
```
<script type="text/javascript" language="javascript"></script>
```

- 외부 자바스크립트 파일 삽입방법
```
<script src="path/xx.js"></script>
```

- 문자형으로 변환은 무언가를 출력할 때 주로 일어난다.
```
명시적 형변환 : String(value)
```

- 숫자형으로 변환은 수학 관련 연산시 주로일어난다.
```
명시적 형변환 : Number(value)
Number(undefined) => NaN
Number(null) => 0
Number(true) => 1
Number(false) => 0
Number(string) => 전달받은 문자열을 그대로 읽되, 공백은 무시합니다.
문자열이 비어있다면 0, 오류발생시(숫자가 아닌경우) NaN이 됩니다.
```
