/**
 * Created by qile on 2017/8/14.
 */
//检测是否在严格模式的方法
function isStrictMode() {
    return this === window?false:true;
}
"use stirct"
console.log(isStrictMode());
//严格模式下 this为undefined  非严格模式下this为全局变量。