### 파트2 - 브라우저: 문서,이벤트,인터페이스

#### 1.1 브라우저 환경과 다양한 명세서

- 자바스크립트가 돌아가는 플랫폼은 Host(호스트)라고 부른다.
- 호스트는 브라우저,웹서버등이 될 수 있다.
- 호스트가 웹브라우저일때는 웹페이지를 제어하기 위한 수단을 제공한다.

![image](https://user-images.githubusercontent.com/49670068/105631143-43291700-5e90-11eb-87d0-ba04a79643d2.png)

- 최상단에는 window라는 루트객체가 있다. window:전역객체이자 브라우저 창을 대변하며 이를 제어하는 메서드 제공

```javascript
function sayHi(){
    alert("Hi");
}
//전역함수는 전역객체의 메서드다.
window.sayHi();

console.log(window.innerHeight); //창 내부 높이를 출력
```

 - DOM(문서객체모델) : 웹페이지내 모든 콘텐츠를 객체로 나타냄.
 - document객체는 페이지의 기본`진입점` 역할을 함
 - document객체를 이용해 페이지 내 그 무엇이든 변경가능
 - DOM은 브라우저이외에 서버사이드 스크립트에서도 사용된다.

```javascript
document.body.style.background = "red"; //배경색을 빨간색으로

setTimeout(()=> document.body.style.background = "",1000);
//1초뒤 배경색 원상태로
```

- BOM(브라우저객체모델) : 문서이외에 모든것을 제어하기 위해 브라우저가 제공하는 추가객체
- navigator 객체는 브라우저와 OS에 대한 정보를 제공
- location 객체는 현재 URL을 읽을 수 있게 해주고 새로운 url로 리다이렉트 할수 있게해줌.
- 이외에도 alert/confirm/prompt등이 있음.

#### 1.2 DOM 트리

- DOM에 따르면 `모든 HTML태그는 객체`이다.
- `태그가 감싸고 있는 자식 태그는 중첩태그`라 부르며, `태그내 문자 역시 객체`이다.
- 모든 객체는 자바스크립트 접근 및 조작이 가능하다.

```javascript
document.body.style.background = 'red'; 
//document.body는 <body>태그를 객체로 나타낸것.
```

```HTML
<!DOCTYPE HTML>
<html>
<head>
  <title>사슴에 관하여</title>
</head>
<body>
  사슴에 관한 진실.
</body>
</html>
```

- DOM은 HTML을 태그 트리 구조로 표현한다.
- `<html>`은 루트노트가 된다. `<head>` `<body>`는 루트노드의 자식
- 요소내 모든 문자는 텍스트 노드가 된다.
- 새줄과 공백은 글자나 숫자처럼 유효한 문자로 취급되며 이 특수문자들은 텍스트노드가 된다.
```
- HTML
  - HEAD
    - #text \n\20\20
    - TITLE
        #text 사슴여 관하여
    - #text \n\20
  - #text \n\20
  - BODY
    - #text 사슴에 관한 진실.
```
> 예외 규칙 : `<head>` 이전 공백과 새줄은 무시된다. , `</body>`뒤에 무언가 넣더라도 그 콘텐츠는 자동으로 body 안쪽으로 옮겨진다.

- 최상위 태그는 항상 `<html>`이어야하는데 문서에 없다면 자동으로 `<html>`태그를 최상위에 넣어준다.
- html파일에 "안녕하세요" 문장하나만 저장되어있다면 브라우저는 자동으로 이문장을 `<html>` `<body>`로 감싸준다. `<head>`도 추가함. (자동교정기능)
- table태그의 경우에도 tbody가 반드시 있어야한다고 DOM명세서에 작성되어 있습니다. 실제론 많이 작성을 안하는데 사실 브라우저는 자동으로 DOM에 `<tbody>`를 만들어 줍니다.
- HTML 안의 모든 것은 (심지어 그것이 주석이더라도) DOM을 구성합니다
- 노드타입은 총 12가지이나 실무에서는 밑의 4가지를 주로다룹니다.
```
1. document 노드 : DOM의 진입점
2. element 노드 : DOM트리를 구성하는 블록인 요소노드
3. text 노드 : 텍스트를 포함하는 노드
4. comment 노드 : 주석을 포함하는 노드(화면에 보이지는 않음)
```

#### 1.3 DOM 탐색하기

- DOM 노드 탐색 관계도

![image](https://user-images.githubusercontent.com/49670068/105632184-407cf080-5e95-11eb-8d31-df7c231f3e26.png)

- `<html>` = document.documentElement
- `<body>` = document.body
- `<head>` = document.head
- 스크립트를 읽는 도중 존재하지 않는 요소는 스크립트에서 접근불가

```javascript
<html>
<head>
    <script>
        console.log(document.body); //null이 뜬다. : 아직 body가 존재하지않음.
    </script>
<body>
    <script>
        console.log(document.body); //지금은 body가 존재하므로 출력됨.
    </script>
</body>
</html>
```
> DOM 세계에서 null은 존재하지 않음을 의미.

- 자식노드(child node,children)는 바로 아래의 자식요소를 나타냄
- 후손 노드(descendants)는 중첩관계에 있는 모든 요소를 의미
- childNodes 컬렉션은 텍스트 노드를 포함한 모든 자식노드를 담고있음

```javascript
<html>
<body>
    <div>시작</div>
    
    <ul>
        <li>항목</li>
    </ul>

    <div>끝</div>

    <script>
        for(let i=0; i < document.body.childNodes.length;i++){
            console.log(document.body.childNodes[i]);
        }
        //모든 자식노드를 출력
    </script>
</body>
</html>
```

- firstChild, lastChild프로퍼티를 이용하면 첫번쨰와 마지막 자식노드에 접근가능하다.

```javascript
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length-1] === elem.lastChild
```

- childNodes는 배열이 아닌 반복가능한(iterable) 유사배열 객체인 컬렉션이다.
- 컬렉션은 2가지 특징을 갖는다. 1. for..of 사용가능 2. 배열메서드는 사용불가
```javascript
for(let node of document.body.childNodes){
    console.log(node); //컬렉션내 모든 노드를 보여줌
}

console.log(Array.from(document.body.childNodes).filter); //function
//Array.from을 사용하면 컬렉션을 진짜배열로 만들수 있으므로 변환하여 배열메서드 사용가능
```

> 컬렉션에 for ..in반복문은 사용하지 말것 : 불필요한 추가프로퍼티까지 순회대상에 포함됨 (length,item,values등)

- `<body>`는 `<head>`의 다음(next) 혹은 우측(right)에 있는 형제노드이다.
- `<head>`는 `<body>`의 이전(previous) 혹은 좌측(left)에 있는 형제노드이다.
- 다음 형제노드는 nextSibling 이전 형제노드는 previousSibling 프로퍼티를 통해 접근가능
- 부모 노드는 parentNode프로퍼티로 접근가능

```javascript
//body의 부모노드는 html
console.log(document.body.parentNode===document.documentElement);

//head의 다음 형제노드는 body
console.log(document.head.nextSibling); //HTMLBodyElement

//body의 이전 형제노드는 head
console.log(document.body.previousSibling); //HTMLHeadElement
```

- previousSibling이나 nextSibling 프로퍼티들은 모든 노드(주석,텍스트까지)를 참조한다.
- 요소 노드만 조작하고 싶다면 DOM 요소노트탐색 프로퍼티를 사용하자.(Element만 붙여주면됨)
- children : 자식 요소노드
- firstElementSibling , lastElementSibling : 첫번째 마지막 요소노드
- previousElementSibling , nextElementSibling : 형제 요소 노드
- parentElement : 부모 요소 노드

![image](https://user-images.githubusercontent.com/49670068/105632757-488a5f80-5e98-11eb-9139-72d9b2fd3bbf.png)


- `<table>` 테이블요소 역시도 기본 프로퍼티를 지원합니다.
- table.rows 는 `<tr>`요소를 담은 컬렉션 참조
- table.caption/tHead/tFoot은 각각 `<caption>` `<thead>` `<tfoot>` 참조
- table.tBodies는 `<tbody>`요소를 담은 컬렉션 참조
- tbody.rows는 tbody내에 tr요소 컬렉션을 참조
- tr.cells는 tr안의 td,th를 담은 컬렉션 반환
- tr.sectionRowIndex는 tr이 thead/tbody/tfoot안에서 몇번쨰줄에 위치하는지 인덱스 반환
- tr.rowIndex는 table내에서 tr이 몇번째 줄인지 숫자를 반환
- td.cellIndex는 td나 th가 속한 tr에서 해당셀이 몇번쨰인지 숫자 반환

```javascript
<table id="table">
    <tr>
        <td>일</td><td>이</td>
    </tr>
    <tr>
        <td>삼</td><td>사</td>
    </tr>
</table>
<script>
    //'이'가 적힌 td를 가져옴
    let td = table.rows[0].cells[1];
    td.style.backgroundColor = "red";
</script>
```