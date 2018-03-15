/**
 * Created by qile on 2017/8/14.
 */
//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();

var n1 = 12345.6789;
console.log(n1.toFixed(2));   //toFixed() 四舍五入  数字指定保存的位数  12345.68
console.log(n1.toPrecision(2));  //num 规定必须被转换为指数计数法的最小位数    1.2e+4
console.log(n1.toString());      //12345.6789
console.log(n1.toExponential(2)); //num 必须，规定指数计数法中的小数位数   1.23e+4

//
console.log(NaN === NaN);   //false
console.log(isNaN("12,3")); //true
console.log(Math.floor(3.8));//3向下取整
console.log(Math.floor(-3.8));
console.log(Math.ceil(3.2));
console.log(Math.ceil(-3.2)); //-3  向上取整
console.log(Math.round(-3.2));
console.log(Math.round(-3.5));
console.log(Math.round(-3.8));  //把数字舍入为最接近的数

//其余部分参见《深入理解JS》第11章

