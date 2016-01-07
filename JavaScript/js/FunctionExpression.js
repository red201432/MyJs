// 函数表达式，使用前必须先赋值
	var functionName=function(arg0,arg1){}//匿名函数或拉姆达函数

	// arguments.callee 是一个指向正在执行的函数的指针，因此可以用它来实现对函数
// 的递归调用，
	function factorial(num){
		if(num<1){
			return 1;
		}else{
			return num*arguments.callee(num-1);
		}
	}

	console.log(factorial(5));

	//在不允许使用arguments.callee的情况下可以使用 函数表达式
	var fac=(function f(num){
		if(num<1){
			return 1;
		}else{
			return num*f(num-1);
		}
	});

	console.log(fac(5));
 //闭包指的是可以访问另一个函数作用域中的变量的函数。
 // 创建闭包一般有两种方式：在另一个函数内创建另一个函数
 function createComparisonFunction(propertyName){
 	return function(object1,object2){
 		var val1=object1[propertyName];
 		var val2=object2[propertyName];
 		if (val1<val2) {
 			return -1;
 		}else if(val2<val1){
 			return 1;
 		}else {
 			return 0;
 		}
 	};
 }

 function createFunction(){
 	var result=new Array();

 	for(var i=0;i<10;i++){
 		result[i]=function(num){
 			return function(){
 				return num;
 			};
 		}(i);
 		console.log(result[i]);
 	}
 	return result;
 }
 createFunction();
 var a=function add(arg1,arg0){
	return arg0+arg1;
}(2,3);
for(var a in createFunction())
	console.log(a);
console.log(a);

var name="the window";
var object={
	name:"My Object",
	getName:function(){
		var that=this;
		return function(){
			return that.name;
		}
	}
}

// alert(object.getName()());
// 模仿块级作用域
function outputNumbers(count){
	(function(){//定义私有作用域
	for(var i=0;i<count;i++){
		console.log(i);
	}
})();
var i=12323;
	console.log(i);//输出 undefined
}
outputNumbers(5);

(function(){ 
     
    var now = new Date(); 
    if (now.getMonth() == 0 && now.getDate() == 7){ 
        //alert("Happy new year!"); 
    } 
 
})();

function MyObject(){
	//私有变量和私有函数
	var privateVariable=10;

	function privateFunction(){
		console.log(privateVariable);
		return false;
	}
	this.publicMethod=function(){
		privateVariable++;
		return privateFunction();
	}
}
var b=new MyObject();
b.publicMethod();

(function (){
	var privateVariable=10;

	function privateFunction(){
		console.log(privateVariable);
		return false;
	}
	MyObject=function(){};
	MyObject.prototype.publicMethod=function(){
		privateVariable++;
		return privateFunction();
	}
})();

var myObject=new MyObject();
myObject.publicMethod();
BaseComponent = function(){}
var application=function(){
	//私有变量和函数
	var components=new Array();
	//components.push(new BaseComponent());
	var app=new BaseComponent();
	app.getComponentCount=function(){
		console.log(components.length);
	}

	app.registerComponent=function(component){
		if(typeof component == "object")
			components.push(component);
	}

	return app;
	//公共
	// return {
	// 	getComponentCount:function(){
	// 		return components.length;
	// 	},
	// 	registerComponent:function(){
	// 		if(typeof component == "object"){
	// 			components.push(components);
	// 		}
	// 	}
	// };
}();

application.registerComponent(new BaseComponent());
application.getComponentCount();
CustomType=function(){}
var singleton=function(){
	//私有变量和私有函数
	var privateVariable=10;

	function privateFunction(){
		console.log(privateVariable);
		return false;
	}
	//创建对象
	var object=new CustomType();
	object.publicMethod=true;
	object.publicMethod=function(){
		privateVariable++;
		return privateFunction();
	}
	return object;
}();
var test1=new CustomType();
singleton.publicMethod();

