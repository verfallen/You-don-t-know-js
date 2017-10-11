//以下是控制台返回结果值，而不是真正的输出

var b;  //< undefined

if(true){
  b = 4+38;  //< 42
}

// 获取语句结果值

var a,b;
a = eval('if(true){b = 4+38}');
a; //<42

function foo(){
  a=a+1;
}

var a = 1;
foo();

// 语句系列逗号运算符
var a = 42, b;
b = (a++, a);

a; //43
b; //43

// 大括号

var a = {
  foo: bar()
}

{
  foo:bar()  //标签语句
}

//运算符优先级

var a = 42;
var b = 'foo';
var c = [1,2,3];

a && b || c;  //foo
a || b && c; //42

var a = 42;
var b = 'foo';
var c = false;
var d = a && b || c ? c || b ? a : c && b : a;
d; //42

// 函数参数
function foo(a){
  a=42;
  console.log(arguments[0]);
}

foo(2); //42
foo() //undefined

//严格模式不建立关联

function foo(a){
  'use strict';
  a = 42;
  console.log(arguments[0]);
}

foo(2); //2
foo(); //undefined