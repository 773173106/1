// 目标对象（被代理对象）
var target = {
    name: 'JACK',
    age: 18,
};

// 代理行为对象（对目标对象进行取值或赋值行为时，会进入此对象的方法）
var handler = {
    get: function(target, property, receiver) {
        console.log("get: ", target, property, target[property]);
        return target[property];
    },
    set: function(target, property, value) {
        console.log("set: ", target, property, value);
        return Reflect.set(...arguments);
    }
};

// 使用 Proxy 构造函数实例出新的target对象
var targets = new Proxy(target, handler)

// 取值操作 会进入handler中的get方法 并打印
targets.name     //  get:  {name: 'JACK', age: 18} name JACK
// 赋值操作 会进入handler中的set方法 并打印
targets.age = 25 //  set:  {name: 'JACK', age: 18} age 25