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

#### 5.1 원시값의 메서드
- 원시값은 원시값 그대로 단일 값 형태를 유지합니다.
- 문자열,숫자,불린,심볼의 메서드와 프로퍼티에 접근할 수 있습니다.
- 위를 가능하게 하기위해 특수한 객체 "원시 래퍼 객체"를 일시적으로 생성합니다.
```
let str = "Hello";
console.log(str.toUpperCase()); //HELLO
//문자열 str은 원시값입니다.
//toUpperCase() 호출시점부터 래퍼객체가 생성됩니다. 해당 객체의 toUpperCase()를 호출하여 결과값을 리턴합니다.
//래퍼 객체는 즉시 파괴되며 원시값 str은 그값을 유지합니다.

let n = 1.23456;
console.log(n.toFixed(2));//1.23
//숫자형 역시도 래퍼객체를 통해 간접적으로 toFixed(n)메서드를 사용할 수 있습니다.
```

#### 5.2 숫자형
- 0이 많이 붙은 숫자는 e를 사용해 표현합니다.
```
let n = 123e6; //123000000 - 0이 6개
let n2 = 123e-6; //0.000123 - .이 앞으로6칸
```
- parseInt(str,base)를 사용하여 str(base진수)를 10진수로 바꿉니다.
```
console.log(parseInt("11",2)); //3
```
- num.toString(base)를 사용하여 num을 base진수로 변환가능합니다.
```
let n = 2;
console.log(n.toString(2)); //'10'
```
- Math.floor 소수 첫째 자리에서 내림(버림) 3.1 -> 3,-1.1 -> -2
- Math.ceil 소수 첫째 자리에서 올림 3.1 -> 4 , -1.1 -> -1
- Math.round 소수 첫째 자리에서 반올림 3.1 -> 3, -1.1 -> -1
- Math.trunc 소수부를 무시 3.1 -> 3 -1.1 -> -1

#### 5.3 문자열
- 자바스크립에서는 UTF-16을 사용해 문자열을 인코딩한다.
- 문자열내에서 글자하나를 얻으려면 []를 사용해라.
```
let str = "HELLO";
console.log(str[0]);//H
```
- 부분 문자열을 얻으려면 slice나 substring을 사용해라.
```
let str = "hello world";
console.log(str.slice(0,5)); //hello

console.log(str.substring(5,0)); //hello
console.log(str.substring(0,5)); //hello
```
- substr은 시작위치부터 길이를 이용하여 문자열을 추출한다.
```
let str = "stringify";
console.log(str.substr(2,4)); //ring
```

- 글자의 코드 알아내기 : codePointAt(pos)
- 코드를 글자로 변환하기 : String.fromCodePoint(code)
```
console.log("Z".codePointAt(0)); //90
console.log(String.fromCodePoint(90)); //Z
```

- 문자열 비교하기 localeCompare : 앞에가 뒤보다 작으면 음수,크면 양수,같으면 0반환
```
console.log("AAA".localeCompare("BBB")); //-1
```

- includes,startsWith,endsWith : 부분문자열 포함여부 확인
```
console.log("Width".includes("id")); //true
console.log("hello".includes("a")); //false

console.log("Width".startsWith("Wi"));//true
console.log("END".endsWith("D")); //true
```

#### 5.4 배열
- 배열 선언은 [] or new Array()를 사용한다.
- length 프로퍼티는 배열의 길이를 나타냄,length값을 수동으로 줄이면 배열끝이 잘린다.
```
let arr = [ item1, item2... ];

arr = new Array( item1, item2... );
```
- 배열을 덱처럼 사용할 수 있습니다.(push,pop,shift,unshift)
```
let arr = [];
arr.push(1); //배열에 끝에 값을 추가
arr.push(2); //
arr.pop(); //2 : 배열 끝에서 값을 제거후 제거한 값을 반환
arr.shift(); //1 : 배열에 처음에서 값을 제거후 제거한 값을 반환
arr.unshift(1); //배열에 처음에 값을 더한다.
```

- 배열에서 for..in을 사용하지 않는다. for..of를 사용하자
```
let arr = [3,4,5,6,7];
for (let item of arr){
    console.log(item); //3,4,5,6,7
}
```

#### 5.5 배열과 메서드
- find메서드는 함수가 참을 반환하면 탐색은 중단되고, 해당요소가 반환된다.
- 즉 find메서드는 단 하나의 요소를 찾는다.
```
let users = [
    {id:1,name:"John"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name); //John
```
- find와 달리 여러개의 요소를 찾고 싶다면 filter를 사용한다.
```
let users = [
    {id:1,name:"John"},
    {id:2,name:"Pete"},
    {id:3,name:"Mary"}
];

let user = users.filter(item => item.id < 3 );
console.log(user.length); //2
```
- map메서드는 기존 배열을 원하는 형태로 만들어 반환해 줄수 있습니다.
let result = ["hello","js","word"].map(item => item.length);
console.log(result); //5,2,4
- sort메서드는 기존 배열 요소를 정렬해 줍니다.(기존배열변경)
- sort()는 기본 사전정렬입니다.
```
let arr = [1,2,15];
arr.sort();
console.log(arr); //1,15,2
```
```
let arr = [1,2,15];
arr.sort((a,b) => a-b );
console.log(arr); //1,2,15
```
- reverse메서드는 arr의 요소를 역순으로 정렬시켜줍니다.
```
let arr = [1,2,3,4,5];
arr.reverse();
console.log(arr);//5,4,3,2,1
```
- split메서드는 문자열을 특정구분자를 기준으로 쪼개 배열로 반환합니다.
```
let names = "ljs,rosenari,color0e";
let arr = names.split(",");
for(let item of arr){
    console.log(item);//ljs,rosenari,color0e
}
```

- join메서드는 배열을 특정구분자로 연결하여 문자열로 반환합니다.
```
let arr = ["hello","js","world"];
let str = arr.join(";");
console.log(str);//hello;js;world
```

- Array.isArray로 배열 여부 알아내기
```
console.log(Array.isArray({})); //false
conosle.log(Array.isArray([])); //true
```

- 함수를 호출하는 메서드는 대부분 thisArgs를 지정할 수있습니다.(메서드내 this를 지정할수 있음)
```
let army = {
    minAge : 18,
    maxAge : 27,
    canJoin(user){
        return user.age >= this.minAge && user.age <= this.maxAge;
    }
}

let users = [
    {age:16},
    {age:20},
    {age:23},
    {age:30}
]

//함수 결과가 참인 users요소들만 추출하여 배열 구성
let soldiers = users.filter(army.canJoin,army);
console.log(soldiers.length); //2
```

#### 5.6 iterable 객체
- iterable은 배열을 일반화한 객체이다. iterable객체는 for..of문법을 적용할 수있다.
- 배열이 아닌 객체를 시스템 심볼을 사용해 iterable객체로 만들 수있다.

```
let range = {
    from: 1,
    to: 5
};

//for.. of 최초 호출시 Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function(){
   
   //이터레이터 객체를 반환해야한다.
   return {
       current: this.from,
       last: this.to,

       // for..of 반복문에 의해 반복마다 next() 호출된다.
       next(){
           if(this.current <= this.last){
               return {done:false, value:this.current++};
           }else{
               return {done.true};
           }
       }
   }; 
};

for(let num of range){
    console.log(num); //1,2,3,4,5
}
```

- range에 next()메서드를 선언하여 이터레이터 객체와 반복대상 객체를 합칠수 있다.
```
let range = {
    from : 1,
    to : 5,

    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },

    next(){
        if(this.current <= this.to){
            return { done: false, value: this.current++ };
        }else{
            return { done: true };
        }
    }
}

for (let num of range){
    console.log(num); //1,2,3,4,5
}
```

- 배열과 문자열은 iterable이다.
```
let (char of "test"){
    console.log(char); //t,e,s,t
}
```

- Array.from은 이터러블이나 유사배열을 받아 Array를 만들어준다.
```
let str = "hello";
let arr = Array.from(str); //['h','e','l','l','o'];
```

- length가 있는 객체는 유사배열로 취급됩니다.(for..of 안먹힘)
```
let arrayLike = {
    0:"Hello",
    1:"World",
    length: 2
};

let arr = Array.from(arrayLike);
console.log(arr.pop()); //World
```

#### 5.7 맵과 셋
- Map은 다양한 key value로 구성된 자료구조 
```
let map = new Map();//맵생성

map.set('1','str1'); //문자형 키
map.set(1,'num1'); //숫자형 키
map.set(true,'bool1'); //불린형 키

//객체는 키를 문자형으로 변환하지만 맵은 변환하지 않는다.
console.log(map.get(1)); //num1
console.log(map.get('1')); //str1

console.log(map.size); //3
//map.clear()는 모든 요소제거
//map.delete(1);은 키가 1인 요소 제거
//map.has(1); 키 1이 존재하면 true 아니면 false
```
- Map의 키로 객체를 사용할 수 있다.
- Map은 생성시 초기화가 가능하다.
- map.keys()는 각 요소의 키를 모은 이터러블객체 반환.
- map.values()는 각 요소의 값을 모은 이터러블객체 반환.
- map.entries()는 [키,값]을 쌍으로 하는 이터러블 객체반환,for..of의 기본 객체로 사용
```
let map = new Map([
    ['cucumber',500],
    ['tomatoes',350],
    ['onion',50]
]);

//키를 대상으로 순회합니다.
for(let key of map.keys()){
    console.log(key); //cucumber,tomatoes,onions
}

//값을 대상으로 순회
for(let value of map.values()){
    console.log(value); //500,350,50
}

//[키,값]쌍을 대상으로 순회
for(let entry of map){
    console.log(entry); //cucumber,500 ...
}
```

- Object.entries(obj)를 사용하여 객체를 맵으로 변환할 수 있다.
```
let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));
console.log(map.get("name"));//John
```

- Object.fromEntries(obj)를 사용하여 맵을 객체로 변환할 수 있다.
```
let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
]);

console.log(prices.orange);//2
```

- 셋(Set)은 중복을 허용하지 않는 값을 모아놓은 컬렉션입니다.
```
let set = new Set();

let john = {name:'John'};
let pete = {name:'Pete'};
let mary = {name:'Mary'};

set.add(john);
set.add(pete);
set.add(john);
set.add(mary);
set.add(pete);

console.log(set.size); //3

for(let user of set){
    console.log(user.name);//John,Pete,Mary
}

set.forEach((v,va,set)=>{
    console.log(v.name); //John,Pete,Mary
});

set.has({name:'John'}); // true - 셋내 값이 존재하면 true, 아니면 false
```

#### 5.8 위크맵과 위크셋
- 위크맵은 맵과 달리 키가 반드시 객체여야한다.
- 키로 사용된 객체가 도달하지 않는 상태가 되면, 메모리와 WeakMap에서 자동삭제된다.
```
let john = { name : 'John' };

let weakMap = new WeakMap();
weakMap.set(john,'...');

let john = null;

//john이 참조하는 객체는 이제 메모리에서 사라지면 weakMap에서도 사라짐
```

- 위크맵은 캐싱에 활용할 수 있다.
```
let cache = new WeakMap();

function process(obj){
    if(!cache.has(obj)){
        let result = obj;
        
        cache.set(obj,result);
    }

    return cache.get(obj);
}

let res1 = process(obj); //연산동작
let res2 = process(obj); //이미 연산했으므로 cache에서 result가져옴

obj = null; //캐시에서 obj에 관련된 연산결과 사라짐,즉 다시 계산해야함
```

- 위크셋은 객체만 저장가능하며, 도달 가능한 객체일 경우에만 셋과 메모리에 유지된다.
```
let vset = new WeakSet();

let john = { name : "John" };
let pete = { name : "Pete" };
let mary = { name : "Mary" };

vset.add(john);
vset.add(pete);
vset.add(mary);

console.log(vset.has(john));//true

console.log(vset.has(mary));//false

john = null;//vset에서 john이 참조하는 객체 사라짐
```

#### 5.9 Object.keys,values,entries

- 일반객체는 Map,Set,Array와 달리 Object.keys(obj),values(obj),entries(obj)를 통해 진짜배열을 반환받을수 있다.
```
let user = {
    name:"John",
    age: 30
};

for(let value of Object.values(user)){
    console.log(value);//John, 30
}

```
- 일반객체에는 map,filter같은 배열 전용 메서드를 사용할 수없다.
- 그래서 배열로 변환후 사용해야한다.
```
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(//배열을 객체로 다시돌림
    Object.entries(prices).map(([key,value])=>[key,value * 2]);
);

console.log(doublePrices.meat); //8
```

#### 5.10 구조 분해 할당

- 배열은 []를 사용해 분해 할당이 가능합니다.
```
let [name1,name2,..rest] = ["user1","user2","user3","user4"];
console.log(name1);//user1
console.log(name2);//user2
console.log(rest.size);//2

let [name = "aa",surname = "bb"] = ["rosenari"];

console.log(name);//rosenari
console.log(surname);//b
```

- 객체는 {}를 사용해 불해 할당이 가능합니다.
```
let options = {
    title : "Menu"
};

let {width: w=100 , height: h = 200 ,title} = options;

console.log(w);//100
console.log(h);//200
console.log(title);//Menu
```

- 중첩된 배열 또는 객체의 정보를 추출할 수 있다.
```
let options = {
    size:{
        width:100,
        height:200
    },
    items:["cake","donut"],
    extra:true
};

let {
    size:{
        width,
        height
    },
    items:[item1,item2],
    title = "Menu"
} = options;
console.log(title); //Menu
console.log(item1); //cake
console.log(width); //100
```

- 함수 매개변수로 구조분해를 할때는 반드시 인수가 전달된다고 가정하는 것인데, 인수가 전달되지 않는 경우를 빈객체 전체 기본값 설정을 통해 방지할 수 있다.
```
function showMenu({title = "Menu",width=100,height=200} = {}){
    console.log(`${title} ${width} ${height}`);
}

showMenu();//Menu 100 200
``` 

#### 5.11 Date 객체와 날짜
- new Date()를 호출하면 새로운 Date객체가 생성된다.
```
let now = new Date();
console.log(now); //현재날짜 및 시간이 출력됨
```
- new Date(datestring) datestring(날짜문자열)을 인수로 Date객체 생성이가능하다.
```
let date = new Date("2020-10-14");//시간은 현재 실행한 시각에 따라 설정

let date = new Date(2011,0,1,2,3,4,567);
console.log(date); //2011년 "1"월 1일 02시 3분 04.567초
```
- getDay()는 요일을 반환해주는 메서드이다. 0~6(0은 일요일 6은 토요일)
- 2일 뒤 날짜를 구하는 방법
```
let date = new Date(2016,1,28);//2016년 2월 28일
date.setDate(date.getDate()+2); 
console.log(date); //2016년 3월 1일
```
- 0이나 음수를 날짜 구성요소에 설정하는 것 역시 가능하다.
```
let date = new Date(2016,0,2);//2016년 1월 2일

date.setDate(1); //1일로 변경

date.setDate(0); //지난달 마지막날로 설정
console.log(date); //2015년 12월 31일
```
- 시간측정방법
```
let start = new Date();

for(let i = 0 ; i < 100000 ; i++ ){
    let some = i * i * i;
}

let end = new Date();
console.log(`걸린시간(밀리초) : ${end - start}`)
```
- Date.parse를 사용하면 문자열에서 날짜를 읽어올수 있습니다.
```
let ms = Date.parse("2012-01-26T13:51:50.417-07:00');

console.log(ms); //타임스탬프가 반환됨
```

#### 5.12 JSON과 메서드

- JSON.parse를 사용하면 JSON을 본래 값으로 역 직렬화할 수있다
- JSON.stringify를 사용하면 원하는 값을 JSON으로 직렬화 할수 있다.
- 객체에 toJSON()메서드가 있으면 JSON.stringify(obj)호출시 자동 호출됨
```
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(k,v){
    if(k=='date') return new Date(v);
    return v;
});
console.log(meetup.date.getDate());//30

console.log(JSON.stringify(meetup));//{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}
```

#### 6.2 나머지 매개변수와 전개 문법
- ...이 함수 매개변수의 끝에 있으면 인수목록의 나머지를 배열로 모아줍니다.
```
function showName(firstName, lastName, ...titles){
    console.log(firstName);//Julius
    console.log(lastName);//Caesar
    console.log(titles[0]);//Consul
    console.log(titles[1]);//Imperator
    console.log(titles.length);//2
}

showName("Julius","Caesar","Consul","Imperator");
```
- arguments변수를 사용하면 모든 인수에 접근 할 수 있습니다.
```
function showName(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName("Julius","Caesar");//2,Julius,Caesar

showName("Bora");//1,Bora,undefined;
```

- ...이 함수 호출시 사용되면 배열을 목록으로 확장해줍니다.
```
let arr1 = [1,-2,3,4];
let arr2 = [8,3,-8,1];

console.log(Math.max(...arr1,...arr2));//8
```

#### 6.3 변수의 유효범위와 클로저
- let,const와 같은 변수는 블록안에서만 유효하다.
```
{
let msg = "Hello";

console.log(msg);//Hello
}

console.log(msg);//error : msg is not not defined
```

- 자바스크립트에서 함수,코드블록,스크립트 전체는 렉시컬 환경이라 불리는 내부 숨김연관 객체를 갖습니다.
- 렉시컬 환경 객체는 환경레코드와 외부 렉시컬환경이라는 부분으로 구성됩니다.
- 환경 레코드 : 모든 지역변수를 프로퍼티로 저장하는 객체.
- 외부 렉시컬 환경 : 외부 코드와 연관
```
let phrase = "Hello";
console.log(pharse);
//다음 코드에는 렉시컬 환경이 하나만 존재한다.
//스크립트 전체와 관련되 렉시컬 환경을 전역 렉시컬 환경이라한다.
//외부 참조의 경우 null이다.
//phrase는 렉시컬환경의 프로퍼티일 뿐이다.
/*
******Lexical Enviroment****
*    phrase : "Hello"      * -> null
****************************
*/
```
- 함수선언문의 경우 변수(변수는 해당 줄에와야 초기화됨)와 달리 렉시컬 환경에 바로 초기화가 된다. 그렇게 때문에 함수선언문은 밑에 있어도 위 줄에서 쓸수 있는것이다.
```
let phrase = "Hello";
function say(name){
    console.log(`${phrase}, ${name}`);
}
say("John");//Hello, John
/*
함수가 호출되면 새로운 렉시컬 환경이 생성되며, 호출된 렉시컬 환경을 참조합니다.
****Lexical Environment of the call****     ********Lexical Enviroment*******
*             name : "John"           * ->  *  say:function ,phrase:"Hello" * -> null        
***************************************     *********************************
*/
//코드에서 변수에 접근할때는 내부 렉시컬 환경을 검색범위로 잡고 없다면 참조하는
//외부 렉시컬 환경으로 검색범위를 확장하여 탐색하며, 찾을때까지 전역 렉시컬 환경까지 확장하며 탐색을 반복합니다.
```

- 함수에서 함수를 반환하면 반환되는 함수는 자신을 리턴한 외부 함수를 참조하는 Environment프로퍼티를 갖습니다.
```
function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    };
}
let counter = makeCounter();
/*
counter.[[Enviroment]] -> {count:0} -> makeCounter,counter -> null
counter();로 호출될때마다 새로운 렉시컬환경이 생성되고 counter는 자신을 생성한 외부환경을
참조합니다. 그곳에는 count변수가 존재하기에 접근이가능하고 변경시 외부 환경에서 수정됩니다.
그러므로 counter()호출이 반복되면 값이 누적됩니다. 또한 counter변수를 통해
외부 렉시컬 환경에 있는 count에 계속 도달가능하기에 count는 계속 살아있는 것입니다.
*/
``` 

#### 6.4 오래된 var
- var는 let,const와 달리 함수스코프(유효범위가 함수)다.
```
if(true){
    var test = true;
}
console.log(test); //true - 변수가 유효함
```
```
function sayHi(){
    if(true){
        var phrase = "hello";
    }
    console.log(phrase);
}
sayHi();
console.log(phrase); //error - 유효하지않음
```
- var로 선언한 모든 변수는 함수의 최상위로 호이스팅(끌어올려진다)된다.
```
function sayHi(){
    console.log(phrase); //undefined

    var phrase = "hello"; 
}
sayHi();
//선언은 끌어올려지지만 할당은 끌어올려지지않는다.
```

#### 6.5 전역객체
- 브라우저 환경에선 전역객체를 window,Nodejs환경에서는 global이라고 부른다.
```
var gVar = 5;
console.log(window.gVar); //5 - var로 선언한 변수는 전역객체 window의 프로퍼티가 된다.
```
- 모든 스크립트에서 현재 사용자에 접근할 수 있게 이를 전역객체에 추가 할 수 있다.
```
window.currentUser = {
    name: "John"
};

console.log(currentUser.name);//John

console.log(window.currentUser.name);//John
```
- 다음과 같은 방식으로 최신자바스크립트를 현재브라우저가 지원하는지 확인가능합니다.
```
if(!window.Promise){//구식에는 Promise기능이 없다.
    console.log("구식 브라우저입니다.");
    window.Promise = ... //모던 자바스크립트 기능을 직접구현할수 있다.(폴리필)
}
```

#### 6.6 객체로서의 함수와 기명 함수표현식
- 함수 객체엔 함수이름을 저장하는 name프로퍼티와 매개변수의 개수를 저장하는 length프로퍼티가 있습니다.
```
function sayHi(){
    console.log("Hi");
}
console.log(sayHi.name);//sayHi
function f2(a,b,...more){}
console.log(f2.length); // 2
```
- 클로저를 사용하지 않고 프로퍼티를 활용할 수 있다.
```
function makeCounter(){
    function counter(){
        return counter.count++;
    }
    counter.count = 0;

    return counter;
}
let counter = makeCounter();
count.count = 10;
console.log(counter()); //10
```
- 기명 함수 표현식을 사용하면 재귀함수를 함수표현식으로 선언시에 참조되는 변수를 교체할 수 있습니다.
```
let sayHi = function func(who){
    if(who){
        console.log(`${who}`);
    }else{
        func("Guest");
    }
}
let welcome = sayHi;
sayHi = null;
welcome(); //Guest;
```

#### 6.7 new Function 문법
- new Function으로 만든 함수내부에서는 전역렉시컬 환경으로만 접근이 가능합니다. 즉, 클로저 사용불가
```
let func = new Function('a,b','return a+b'); //다음과같이 함수생성이 가능합니다.
console.log(func(1,2)); //3
```

#### 6.8 setTimeout과 setInterval을 이용한 호출 스케줄링
- setTimeout(func,delay,arg1,arg2,...) : delay시간후 func을 호출함
- setInterval(func,delay,arg1,arg2,...) : delay시간마다 func을 호출함
- 중첩 setTimeout은 지연시간이 일정하지만 setInterval은 지연시간이 일정하지않음(setInterval 콜백함수내 작업 역시 delay에 포함되기때문)
```
let i = 1;
setInterval(function(){
    func(i++); //delay시간에 포함
},100);
```
```
let i = 1;
setTimeout(function run(){
    func(i++);
    setTimeout(run,100);
},100);//func실행이 완료된후 100초의 지연시간후 다음 setTimeout로직이 수행됨
```
- clearTimeout,clearInterval은 setTimeout,setInterval작업을 취소할수있음
```
let timeId = setTimeout(...,1000);
clearTimeout(timeId); //타임아웃 작업 취소
```

#### 6.9 call/apply와 데코레이터, 포워딩
- 인수로 받은 함수의 행동을 변경시켜주는 함수를 데코레이터(decorator)라고 부릅니다.
- 데코레이터를 사용해 캐싱기능을 구현할 수 있습니다. 또한 함수코드와 캐싱코드를 분리할 수 있습니다.
```
function slow(x){
    console.log(`slow(${x})를 호출하였습니다.`);
    return x;
}

function cachingDecorator(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x,result);
        return result;
    }
}

slow = cachingDecorator(slow);
console.log(slow(1)); //slow(1)이 호출되었습니다. \n 1
console.log(slow(1)); //1
//현재 cachingDecorator에서 반환한 함수는 wrapper로써 func(x)의 호출결과를 캐싱로직으로 감쌉니다.
```
- call은 this를 명시적으로 고정하여 함수를 호출할수 있게하는 내장 함수 메서드이다.
- 객체 메서드(this를 참조하는 경우)에 데코레이터를 사용하기위해서는 wrapper에 call을 사용해야한다.
```
let worker = {
    someMethod(){
        return 1;
    },
    slow(x){
        console.log(`slow(${x})를 호출하였습니다.`);
        return x * this.someMethod();
    }
};

function cachingDecorator(func){
    let cache = new Map();

    return function(x){
        if(cache.has(x)){
            return cache.get(x);
        }

        let result = func.call(this,x);//worker.slow()호출시 this는 worker이 된다.
        cache.set(x,result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow);
console.log(worker.slow(2));//호출잘됨
console.log(worker.slow(2));//호출잘됨 - 캐시된 값만 리턴
```
- call과 apply사용법은 인수전달하는 방법만 다르다. func.call(obj,arg1,arg2..) func.apply(obj,유사배열객체);
- apply가 좀더 빠르다고 한다.

- 유사배열이나 이터러블객체에는 join메서드(문자열로 합치기)가 없는데 이를 빌려사용할수 있다.
```
function hash(){
    console.log([].join.call(arguments)); //1,2
//join호출시 this를 arguments로 고정하면
//내부적으로 리턴할 결과값에 this[0]를 붙이고 그다음 this[1]를 붙이는 식으로
//반복합니다. length만큼 반복한뒤 결과를 반환합니다.
}

hash(1,2);
```

#### 6.11 화살표 함수 다시 살펴보기
- 화살표 함수는 'this'가 없다. (this에 접근하면 외부에서 값을 가져옵니다.)
```
let gruop = {
    title:"1모둠",
    students:["보라","호진","지민"],
    showList(){
        this.students.forEach(
            student => console.log(this.title+":"+student);//this.title은 showList()가 가르키는 대상과 같다.
            //일반함수를 사용했다면 에러가 났을것이다.
        );
    }
}

group.showList();
```
- 화살표함수에는 arguments가 없다.
- 화살표함수는 new와 함께 호출할 수 없다.

#### 7.1 프로퍼티 플래그와 설명자

- 프로퍼티는 값과 함께 플래그라고 불리는 특별한 속성(3가지)을 갖습니다.
- 플래그 : writable(값 수정가능여부),enumerable(반복문 사용가능여부),configurable(프로퍼티삭제,플래그 수정 여부)
```
let user = {
    name : "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user,'name');
//Object.getOwnPropertyDescriptor : 특정 프로퍼티에 대한 정보를 얻는 메서드입니다.

console.log(JSON.stringify(descriptor,null,2));
//JSON.stringify(객체,[추출할 프로퍼티],들여쓰기 공백숫자) 객체를 문자열로 반환
/*
결과는 다음과 같다.
{
    "value": "John",//값
    "writable": true,//플래그
    "enumerable": true,//플래그
    "configurable": true//플래그
}
플래그설정을 따로 하지않으면 자동으로 전부 true가 된다.
*/
```

- Object.defineProperty메서드는 객체의 특정 프로퍼티의 값과 플래그를 설정할수 있습니다.
```
let user = {};

Object.defineProperty(user,"name",{
    value: "John"
});
//값만 설정하였음.. 그러면 나머지 플래그들은 전부 false가 됨

let desc = Object.getOwnPropertyDescriptor(user,'name');
Object.defineProperty(user,"name",{ value: "js",writable: false });
console.log( JSON.stringify(desc, null, 2 ) );
/*
{
    "value": "Jogn",
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/
```

- writable 플래그를 false로 설정하면 프로퍼티에 값을 쓰기 못한다.
```
let user = {
    name: "John"
};
//여기서 name 프로퍼티의 플래그는 전부 true가 된다.

Object.defineProperty(user,"name",{
    writable: false
});
//플래그들중 writable만 false가 된다.

user.name = "Pete"; //error
```

- enumerable 플래그 값을 false로 설정하면 프로퍼티는 for..in반복문에서 배제됩니다.
```
let user = {
    name: "John",
    toString(){
        return this.name;
    }
};

Object.defineProperty(user,"toString",{
    enumerable: false
});
//toString 메서드를 열거를 불가능하게 한다.

for(let key in user) console.log(key); //name만 출력된다.

console.log(Object.keys(user)); //Object.keys에서도 배제된다.
```
- configurable 플래그는 프로퍼티 삭제가 안되고, 플래그 수정이 불가능하게합니다.(false를 설정하는 순간 불변 프로퍼티로 만들어버림: 다신변경불가)
- 대표적으로 Math.PI 프로퍼티가 configurable 플래그가 false이다.
```
let desc = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(JSON.stringify(desc,null,2));
/*
{
    "value": 3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable" false
}
*/

let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  configurable: false
});
//configurable 플래그를 false로 선언하는 순간
//이젠 defineProperty메서드로 플래그를 절대 수정할수 없고
//프로퍼티 삭제도 불가능하다.

Object.defineProperty(user, "name", {
    writable:true 
});//에러가 난다.(수정불가)
```

- Object.defineProperties(obj,descriptors) 메서드를 사용하면 프로퍼티 여러개를 한번에 정의할 수 있다.
```
Object.defineProperties(user,{
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    //...
});
//한번에 여러개의 프로퍼티(이름,값과 플래그)를 정의할 수 있다.
```
- Object.getOwnPropertyDescriptors(obj) 메서드는 프로퍼티 설명자를 한꺼번에 가져올 수 있습니다.
- Object.defineProperties와 Object.getOwnPropertyDescriptors를 함께 사용하면 객체 복사시 플래그값까지 전부 함께 복사할 수 있다.
```
let clone = Object.defineProperties({},Object.getOwnPropertyDescriptors(obj));
//obj객체에 모든 프로퍼티를 플래그와 함께 빈 객체에 정의하면
//clone 변수로 정의된 객체가 반환된다.

for(let key in user){
    clone[key] = user[key];
}
//이 방법은 플래그를 복사하진 않습니다.
```

- 객체 내 모든 프로퍼티를 대상으로 플래그 제약을 걸수도있습니다.
```
Object.preventExtensions(obj)
//해당 객체에 새로운 프로퍼티를 추가할 수 없습니다.

Object.seal(obj)
//객체의 모든 프로퍼티에 configurable을 false로 하는 것과 동일

Object.freeze(obj)
//객체의 모든 프로퍼티에 configurable: false, writable: false로 하는 것과 동일

Object.isExtensible(obj)
//새로운 프로퍼티를 추가하는게 불가능한 경우 false, 그렇지 않은 경우 true를 반환
//프로퍼티 추가가 가능하니 ?

Object.isSealed(obj)
//configurable이 false니 ? 

Object.isFrozen(obj)
//configurable: false && writable: false 이니 ?
```

#### 7.2 프로퍼티 getter와 setter

- 객체의 프로퍼티는 데이터 프로퍼티(지금까지 사용한 일반적인)와 접근자 프로퍼티가 있습니다. 접근자 프로퍼티는 getter와 setter메서드로 표현됩니다.
```
let obj = {
    //getter
    get propName(){
        //obj.propName을 실행할때 실행되는 메서드
    },
    /setter
    set propName(value){
        //obj.propName = value를 실행할때 실행되는 코드
    }
}
```
- getter와 setter는 가상의 프로퍼티이다. 가상의 프로퍼티는 읽고쓸수는 있지만 실제로는 존재하지 않는다.
```
let user = {
    name: "John",
    surname: "Smith",

    get fullName(){
        return `${this.name} ${this.surname}`;
    },

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    }

}

user.fullName = "Alice Cooper";

console.log(user.name); //Alice
console.log(user.surname); //Cooper
```

- 접근자 프로퍼티 설명자는 데이터 프로퍼티 설명자와 달리 4개의 설명자를 갖습니다.
- get(프로퍼티 읽을때 동작),set(프로퍼티 쓸때 동작),enumerable(반복가능여부),configurable(프로퍼티 삭제 및 플래그 변경여부)
```
let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get(){
        return `${this.name} ${this.surname}`;
    },

    set(value){
        [this.name,this.surname] = value.split(" ");
    }
});

let desc = Object.getOwnPropertyDescriptor(user, "fullName");

console.log(JSON.stringify(desc,null,2));
/*
fullName은 출력 되지 않네요.
{
  "enumerable": false,
  "configurable": false
}
*/

console.log(user.fullName); //John Smith
```
- 프로퍼티는 데이터프로퍼티와 접근자 프로퍼티 중 한종류에만 속할 수 있습니다.
```
Object.defineProperty({},'prop',{
    get(){
        return 1
    },

    value:2
});//Error
```
- getter와 setter를 활용해서 데이터 프로퍼티를 감싸 똑똑하게 사용할 수 있습니다.
```
let user = {
    get name(){
        return this._name;
    }

    set name(value){
        if(value.length < 4){
            console.log("이름이 너무 짧습니다.");
            return ;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log(user.name); //Pete
user.name = "";//이름이 너무 짧습니다. : 할당안됨
```
- get 접근자 프로퍼티를 활용하면 데이터 프로퍼티를 가공한 값을 리턴할 수 있습니다.
```
function User(name,birthday){
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get(){
            let todayYear = new Date().getFullYear;
            return todayYear - this.birthday.getFullYear;
        }
    });
}

let john = new User("John",new Date(1992,6,1));
console.log(john.birthday);
console.log(john.age);
```
