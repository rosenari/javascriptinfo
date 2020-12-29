### 파트1 - 코어자바스크립트

#### 2.1 코드작성
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

#### 2.2 statement와 주석

- 문(statement)은 세미콜론으로 구분한다.
```
alert('hello'); alert('world');
```

- 줄바꿈이 있다면 세미콜론 생략가능(세미콜론 자동삽입됨)
```
alert('hello')
alert('world')

예외상황 : 
1) 다음과 같은 상황은 세미콜론이 붙지않음
alert(3+
1
+2);

2) 대괄호 앞에는 세미콜론이 없다고 가정하기때문에 에러남(자동삽입x)
alert("hello world")

[1,2].forEach(alert)
```

3) 주석
```
//주석
/*
주석
*/

에러나는 경우:
/*
/* 중첩주석은 에러남 */
*/
```

#### 2.3 엄격모드

- use strict를 지시자를 사용하면 코드가 모던한 방식으로 실행
```
"use strict";
//use strict를 최상단에 위치시켜야 동작함
```

- 코드를 클래스와 모듈을 사용해 구성시 모던한 방식으로 실행(use strict 생략가능)

#### 2.4 변수와 상수
- var,let,const를 사용하여 변수선언 가능
```
let val; 모던한 변수 선언키워드
var val; 오래된 변수 선언키워드
const val; 상수 선언키워드(값변경x)
```

#### 2.5 자료형
- 숫자형 - 정수,부동소수점 숫자를 나타냄(±2^53)
- bitint - 길이 제약없는 정수를 나타냄
- 문자형 - 빈 문자열 또는 글자들로 이뤄진 문자열 나타냄 (단일문자형은 없음)
- 불린형 - true,false
- null - null만을 위한 자료형(알수없는 값을 의미)
- undefined - 값이 할당되지 않은 변수에 초기화되는 자료형
- 객체형 - 복잡한 데이터구조
- 심볼형 - 객체 고유식별자를 만들때 사용
- typeof연산자는 피연산자의 자료형을 알려줌(문자열로 반환)
```
typeof undefined //"undefined"
typeof 0 //"number"
typeof 10n //"bitint"
typeof true //"boolean"
typeof "foo" //"string"
typeof Symbol("id") //"symbol"
typeof Math //"object"
typeof null //"object" - object로 출력이 되나 사실 object는 아님
typeof alert //"function"
```

#### 2.6 alert,prompt,confirm
- alert : 메시지를 보여줌
- prompt : 메시지와 입력필드 제공,확인클릭시 사용자 입력문자열반환, 취소 or ESC 클릭시 null반환
- confirm : 메세지와 확인,취소버튼 제공, 확인시 true, 취소 or ESC클릭시 false반환
```
alert("hello world");

let age = prompt("당신의 나이는 ? ",100); // 100은 입력필드 초기값
console.log(`당신의 나이는 ${age}세 입니다.`)

let complete = prompt("숙제를 다했나요 ?");
if(complete) console.log("다했군요");
else console.log("아직 안했군요");
```

#### 2.7 형변환
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

- 불린형으로 변환은 논리 연산 시 발생한다.
```
명시적 형변환 : Boolean(value)
Boolean(0) => false
Boolean(null) => false
Boolean(undefined) => false
Boolean(NaN) => false
Boolean("") => false
위 경우 외는 전부 true 반환
ex) 문자열 "0"과 공백문자 " "는 true를 반환 
```

#### 2.8 기본 연산자와 수학

- 수학 연산자의 종류
```
덧셈 : +
뺄셈 : -
곱셈 : *
나눗셈 : /
나머지 : %
거듭제곱 : **
```
- 이항연산시 +연산자의 피연산자로 문자열이 있다면 문자열로 병합된다.
```
let str = "my" + 1; //my1
let result = 2 + 2 + '1'; //41
```
- 그 외의 연산들은 숫자형으로 변환된다.
```
let num = 6 - '2' //4
let num = '6' / '2' //3
```
- +단항연산자는 숫자형이 아닌 값을 전부 숫자형으로 변환한다.
```
let num = +true; //1
let num2 = +"";//0
let a = "2";
let b = "3";
let sum = +a + +b;//5
```
- =할당(대입)연산자는 값을 반환한다.
```
let a = 1;
let b = 2;
let c = 3 - (a=b+1); //0 , a=3
```
- 쉼표 연산자는 여러표현식을 코드 한줄에서 평가한다. 그러나 마지막 표현식의 평가결과만 반환된다.
```
let a = (1 + 2, 3 + 4);//7
//쉼표연산자는 대입연산자보다 우선순위가 낮기때문에 괄호로 묶어야한다.
```

- 기타 연산자들(+=,*=,++,--...)
```
let n = 2;
n += 5;//7
let n2 = 3;
n2 *= 3;//9;

let counter = 1;
counter++; //1을 반환한다.
console.log(counter); //2가 출력된다.

counter = 1;
++counter; //2를 반환한다.
console.log(counter); //2가 출력된다.
```

#### 2.9 비교 연산자
- 비교 연산자는 불린값을 반환한다.
- 문자열은 문자단위로 비교(비교기준 : 사전순)
- 서로다른 타입 값 비교시 숫자형으로 변환후 비교진행(일치연산자제외)
```
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false
```

#### 2.10 if와 '?'를 사용한 조건처리
- if(...)문은 괄호 안의 표현식을 평가하고 결과를 불린값으로 변환
- 0,"",null,undefined,NaN은 모두 false가 됨(falsy 값)
- 그 외는 true(truthy 값)
```
if(0) // falsy
if(1) //truthy
```
- '?'를 if대용으로 쓰는 것은 옳지않다.(가독성 떨어짐)


#### 2.11 논리연산자

- ||(OR)은 가장왼쪽 피연산자부터 시작해서 각 피연산자를 boolean형으로 변환후 그 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래값을 반환한다. 모든 피연산자 false일 경우 마지막 피연산자를 반환
```
alert( 1 || 0 ); //1
alert( null || 1 ); //1
alert( null || 0 || 1); //1
alert(undefined || null || 0); //0 

let firstName = "";
let lastName = "";
let nickName = "바이올렛";
alert(firstName || lastName || nickName || "익명");//바이올렛

true || alert("not printed");//출력안됨
false || alert("printed");//출력됨
```

- &&(AND)연산자는 가장 왼쪽 피연산자부터 시작해 각 피연산자를 boolean형으로 변환후 그값이 false이면 평가를 멈추고 해당 피연산자의 변환전 원래값을 반환한다. 모든 피연산자가 true일 경우 마지막 피연산자가 반환된다.
```
alert(1 && 0); //0
alert(1 && 5); //5
alert(null && 5); //null
alert(0 && "아무거나와도 상관무")//0
```

- &&가 || 보다 우선순위가 높다.

- NOT 연산자는 피연산자를 boolean형으로 변환하며, 역을 반환
```
alert(!true); //false
alert(!0); //true
alert(!!"string"); //true
alert(!!null); //false
```

#### 2.12 null 병합 연산자 '??'
- a ?? b 는 a가 null,undefined가 아니면 a, 그외는 b
```
let firstName = null;
let lastName = null;
let nickName = "rosenari";

alert(firstName ?? lastName ?? nickName ?? "익명");//rosenari
```
- 안정성 문제로 ??는 &&,||와 같이 사용못함(사용시 괄호를 이용)
```
let x = (1 && 2) ?? 3;
alert(x); //2
```

#### 2.13 while과 for 반복문
- while,do..while,for은 너무 잘 아닌 PASS
```
//이중 for문 벗어나기
label: for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3 ; j++){
        console.log(i);
        if(j==2) break label;
    }
}
```

#### 2.14 switch문
- 복수의 if조건문은 switch문으로 변경가능
- 특정변수를 다양한 상황에서 비교할 수 있게 해줍니다.
```
let a = 2;
switch(a){
    case 4:
        alert("4");
        break;
    case 3: //두가지 case를 묶을수 있음
    case 5:
        alert("3 or 5");
        break;
    default:
        alert("what ?");
}
```

#### 2.15 함수
- 함수는 외부 변수에 접근가능하나, 외부에서는 함수 내부변수에 접근 불가
```
let userName = "rosenari";
function func(){
    userName = "color0e"; //외부변수 이용가능
    alert(userName);
    
    let message = "hello";
}

alert(message); //접근불가 undefined 에러
```
- 함수 매개변수의 기본값을 지정할 수 있다.
```
function() showMessage(from,text = "this is text"){
    alert(from + " : " + text);
}

showMessage("rosenari"); //rosenari : this is text 
```

- 함수는 반환값이 없을 경우 undefined를 리턴한다.
```
function func(){
    return;
}
alert(func()===undefined); // true
```

#### 2.16 함수 표현식
- 함수는 값이다. 즉, 변수에 할당,복사,선언이 가능
- 함수 선언문은 블록이 실행되기도 전에 처리됨. 즉, 블록내 어디서든 활용가능
- 함수표현식은 실행흐름이 표현식에 다다랐을때 만들어집니다.
```
sayHi("John"); //hello, John

//함수 선언문
function sayHi(name){
    alert(`hello, ${name}`);
}
```
```
sayHi("John"); //error 

let sayHi = function(name){
    alert(`hello, ${name}`);
}
```
- 콜백함수는 함수를 함수의 인수로 전달해 그 함수를 나중에 호출하는 개념입니다.
```
function ask(question,yes,no){
    if(confirm(question)) yes();
    else no();
}

ask("동의하십니까?",
    function(){
        alert("동의하였습니다.");
    },
    function(){
        alert("취소버튼을 눌렀습니다.");
    });
```

#### 2.17 화살표 함수 기본
- 화살표 함수는 본문이 한 줄인 함수작성시 유용
- 인수가 하나라면 () 생략가능
- 본문이 한줄이면 {}생략가능하며 한줄의 평가결과가 리턴됨
```
let sayHi = () => alert("안녕하세요");
sayHi();

let double = n => n * 2;
//let double = function(n) { return n*2 };
```

#### 3.6 폴리필
- 폴리필(polyfill)은 구현이 누락된 새로운 기능을 메꿔주는(fill in) 역할을 합니다. 
- 새로운 문법으로 작성된 코드는 트랜스파일러를 사용해 구표준을 준수하는 코드로 변경될 수 있는데, 이때 폴리필은 구현되지 않은 기능을 구 표준을 준수하여 구현하여 기능을 메꿔준다.
- 대표적인 폴리필 core.js, polyfill.io

#### 4.1 객체
- 키로 구분된 데이터 집합 및 개체 저장가능한 자료형
- 객체는 {}를 이용해 만들 수 있다. 중괄호 안에는 key:value쌍으로 구성된 프로퍼티를 여러개 저장가능
- key는 반드시 문자형,value는 모든 자료형가능
```
    let user = new Object();
```
```
    let user = {};
```
```
    let user = {
        name:"John",
        age:30
    }
```
- delete 연산자를 사용해 프로퍼티 삭제가능
```
    delete user.age;
```
- 대괄호를 사용하여 프로퍼티 설정가능
```
    let user {};
    user["hello world"] = true;
    console.log(user["hello world"]);
    delete user["hello world"];
```

- 프로퍼티 key이름을 동적으로 부여하기
```
    let fruit = prompt("어떤 과일을 좋아해요 ?","apple");
    let bag = {
        [fruit]:5,
    }
    console.log(bag.apple); //5
```
```
    let fruit = "apple";
    let bag = {};
    bag[fruit] = 5;
```

- 단축 프로퍼티 : 프로퍼티의 이름과 값이 변수의 이름과 값과 동일해짐
```
    function makeUser(name,age){
        return {
            name,//name:name과 같음
            age,//age:age와 같음
        }
    }
```

- 'in'연산자로 프로퍼티 존재여부 확인가능
```
    let user = {name:"rosenari",age:30};
    alert("age" in user); //true
    alert("blabla in user); //false
```

- for..in 반복문을 통해 키 순회가 가능하다.
```
    let user = {
        name:"rosenari",
        age:30,
        isAdmin:true
    };

    for(let key in user){
        alert(key); // name,age,isAdmin
        alert(user[key]); //rosenari,30,true
    }
```

#### 4.2 참조에 의한 객체 복사

- 객체가 할당된 변수를 복사할 때는 객체의 참조값이 복사된다.
```
let user = { name: 'John' };
let admin = user;

admin.name = 'rosenari';
alert(user.name); //rosenari
```

```
let a = {};
let b = {};

alert(a==b); //false;
```
```
let a = {};
let b = a;

alert(a==b); //true
alert(a===b); //true
```

- 객체를 얕은 복사(중첩객체는 복사x)하기 위해 Object.assign을 사용한다.
```
let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({},user);//user의 프로퍼티를 {}에 복사하여 리턴
```
- 깊은 복사의 경우 자바스크립트 라이브러리 lodash의 _.cloneDeep(obj)를 사용하면된다.
```
let obj = [{'a' : 1},{'b' : 2}];

let deep = _.cloneDeep(obj);
console.log(deep[0] === obj[0]); //false
```

#### 4.3 가바지 컬렉션
- 가바지 컬렉션은 '도달가능한' 값은 메모리에서 삭제하지 않는다.
```
let user = {
    name : 'John'
};

user = null; //객체에 대한 참조가 사라짐(GC가 객체 메모리에서 삭제)
```

```
let user = {
    name : 'John'
};

let admin = user;

user = null;//admin이 객체를 참조하고 있기때문에 객체가 메모리에서 삭제x
```

```
function marry(man,woman){
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name:"John"
},{
    name:"Ann"
});
/*
    참조관계:
        family -> {
            father: man,
            mother: woman
        }

        father -> {
            name:"John",
            wife:woman
        }

        mother -> {
            name:"Ann",
            husband:man
        }

*/
delete family.father;
delete family.mother.husband;
/*
더 이상 {
            name:"John",
            wife:woman
        } 객체를 참조하는 변수는 존재하지 않게됨. 즉,삭제됨
*/
family = null; //객체와 루트의 연결이 사라진다면,
//family를 통해 도달했던 모든 객체는 사라진다.
```

#### 4.4 메서드와 'this'
- 객체 프로퍼티에 저장된 함수를 '메서드'라 함
- 메서드안의 this는 메서드 호출시 사용된 객체를 나타냄
- this는 런타임에 결정된다.
```
let user = { name : "User" };
let admin = { name : "Admin" };

function sayHi(){
    alert( this.name );
} //이렇게해도 문제가 없음.

user.f = sayHi;
admin.f = sayHi;

user.f(); //John
admin.f(); //Admin
sayHi(); //undefined
```
- 화살표 함수는 this가 없다. 즉 화살표 함수안에서 this는 외부함수의 this랑 동일
```
let user = {
    firstName: "보라",
    sayHi(){
        let arrow = () => alert( this.firstName );
        //arrow안의 this는 sayHi의 this와 동일
        arrow();
    }
}

user.sayHi();//보라 (sayHi의 this == user)
```

#### 4.5 'new' 연산자와 생성자 함수
- 생성자함수와 일반함수의 기술적 차이는 없다.
- 함수 이름의 첫글자는 대문자로 시작한다.
- 반드시 "new"연ㅅ나자를 붙여 실행한다.
```
function User(name){
    this.name = name;
    this.isAdmin = true;
}

let user = new User("Jack");
alert(user.name);//Jack
alert(user.isAdmin);//true
//new User(..) 실행시 다음과 같은 알고리즘이 동작한다.
//1.빈 객체를 만들어 this에 할당
//2.함수 본문을 실행. this에 새로운 프로퍼티를 추가해 this를 수정
//3.this를 반환한다.
/*
function User(name){
    //this = {};
    //새로운 프로퍼티를 this에 추가한다.
    this.name = name;
    this.isAdmin = true;

    //return this;(this가 암시적으로 반환됨)
}
*/
```

- new.target 프로퍼티는 new로 호출시 함수자체를 반환한다.
```
function User(){
    alert(new.target);
}

User(); //undefined
new User(); //function User{...}
```

- 명시적 리턴으로 this가 아닌 객체를 리턴해줄수도 있다.
```
function BigUser(){
    this.name = "John";

    return { name : "Godzilla" };
}

alert( new BigUser().name ); //Godzilla
```

- 생성자 내 this를 활용해 메서드 선언이 가능하다.
```
function User(name){
    this.name = name;
    
    this.sayHi = function(){
        alert("My name is : "+this.name);
    }
}

let john = new User("John");

john.sayHi(); //My name is : John
```

#### 4.6 옵셔널 체이닝
- ?.는 ?. '앞'의 평가대상이 undefined나 null이면 평가를 멈추고 undefined를 반환
- ?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 중단한다.
```
let user = {};
alert(user?.address?.street); //undefined
```

```
let user = null;
let x = 0;
user?.sayHi(x++); //아무일도 일어나지않음
alert(x); //0
```

```
let user = {
    admin(){
        alert("관리자 계정입니다.");
    }
}

user.admin?.(); //관리자 계정입니다.
```

- ?.는 delete와 조합해 사용가능하다.
```
delete user?.name //user가 존재하면 user.name을 삭제한다.
```

#### 4.7 심볼형
- 심볼(symbol)은 유일한 식별자를 만들고 싶을때 사용
```
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); //false
```

- 심볼은 문자열로 자동형변환되지않음,또한 .description프로퍼티에 설명정보가 있다.
```
let id = Symbol("id");
console.log(id.description); // id 
```

- 서트파티 코드에서 가져온 객체(읽기전용)에 프로퍼티 부여하여, 식별자 부여가 가능하다.
```
let id = Symbol("id");
user[id] =  "id값"; //user는 서드파티코드에서 가져온 객체
``` 

- 객체 리터럴에서 프로퍼티 이름으로 심볼사용
```
let id = Symbol("id");
let user = {
    name: "John",
    [id]:123 //"id": 123으로 하면 심볼id가 아닌 문자열 id의 키가된다.
}
```

- 심볼은 for...in에서 배제됩니다.
```
let id = Symbol("id");
let user = {
    name : "John",
    age : 30,
    [id] : 123
}

for(let key in user) console.log(key); //name과 age만 출력됨

console.log(user[id]); //직접접근은 가능
```

- Object.assign의 경우 같이 복사된다. 그러나 Object.keys(user)의 경우 키가 심볼인 경우 배제된다.

- 전역 심볼은 전역심볼레지스트리에 생성되며, Symbol.for을 이용해 생성 및 가져오기가 가능
- 전역 심볼의 경우 이름이 같은 심볼이 같은 개체를 가르키길 원할때 사용
```
let id = Symbol.for("id");//심볼이 존재하지 않으면,전역레지에 심볼생성

let idAgain = Symbol.for("id"); //동일한 이름으로 심볼을 읽어옴

console.log(id === idAgain) //true
```

- Symbol.keyFor는 Symbol.for과는 반대로 이름을 가져올때 사용(로컬심볼은 못가져옴)
```
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym)); //name
console.log(Symbol.keyFor(sym2)); //id
```
- 시스템 심볼은 자바스크립트 내부에서 사용되는 심볼로 Symbol.*로 접근가능

#### 4.8 객체를 원시형으로 변환하기
- 함수, 연산자 사용시 hint라는 개념이 있다. hint는 목표로 하는 자료형을 뜻한다.
- boolean hint는 없다.
```
alert(obj); //alert함수는 문자열을 기대하는 연산이다.(hint가 string)

let diff = date1 - date2; //- 이항연산의 경우 숫자를 기대한다.(hint number)
let n = +obj; //단항연산자도 숫자를 기대(hint number)

//연산자가 기대하는 자료형이 확실하지 않을때 hint는 default이다.
let total = obj1 + obj2;//이항 덧셈연산은 hint default
```
- Symbol.toPrimitive라는 시스템심볼을 사용하면 객체가 메서드가 목표로 하는 자료형(hint)에 따라 리턴값을 원하는대로 조절할 수 있다.

```
let user ={
    name : "John",
    money : 1000
}

user[Symbol.toPrimitive] = function(hint) {
    //반드시 원시값을 반환해야 합니다.
    //hint는 "string","number","default" 중 하나가 될 수 있습니다.
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
}

console.log(user); //{name: "John"}
console.log(+user); //1000
console.log(user + 500); // 1500 - 객체 + 숫자의 경우 hint가 default임
```

- toString(), valueOf()는 Symbol.toPrimitive메서드가 없을때 hint string이면 toString(), 그외는 valueOf()가 호출된다.(실무에서는 toString()만 사용하는 경우도 다반사)
```
let user = {
    name : "John",
    money : 1000,

    toString(){
        return `{name : "${this.name}"}`;
    }

    valueOf(){
        return this.money;
    }
}

console.log(user); //{name : "John"}
console.log(+user); //1000
console.log(user + 500); //1500
```