/**
 * Created by qile on 2017/8/14.
 */
//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);   //true
console.log(a === b);//true or false 为什么
                            //false  因为b是引用数据类型，和a所指向的内存空间不一样。

//临时包装对象
var str = "abcde";
console.log(str.length);//临时包装成了String对象
str.length = 1;
console.log(str.length,str);//临时包装对象并不影响原始值
//5,abcde
//基本类型其属性不能被改变，添加或删除（原始值不可变性）。

var arr=[1,1,2,3,4,6,6,7,8,8,9];
console.log(arr.length);
arr.length=2;
console.log(arr.length,arr);
//11
//2,11