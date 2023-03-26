
navigator = {}
navigator.userAgent = '1weweqf'
// 代理行为对象（对目标对象进行取值或赋值行为时，会进入此对象的方法）
navigator = new Proxy(navigator,{
    get: function(target, property, receiver) {
        console.log("get: ", target, property, target[property]);
        return target[property];
    },
    set: function(target, property, value) {
        console.log("set: ", target, property, value);
        return Reflect.set(...arguments);
    }
})




//提示场景
function ps(){
    if(navigator['userAgent']){
        return'hello world'
    }else {
        return ''
    }
}

console.log(ps())


// Proxy对象由两个部分组成：target、handler
//
// target:目标对象
// handler：是一个对象，声明了代理target的指定行为，支持的拦截操作，一共13种：
//
// - get(target,propKey,receiver)：拦截对象属性的读取。
// - set(target,propKey,value,receiver)：拦截对象属性的设置，返回一个布尔值（修改成功）。


