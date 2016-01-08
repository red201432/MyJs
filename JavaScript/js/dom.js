//增加脚本
var script=document.createElement("script");
script.type="text/javascript";
script.src="js/bom.js";
document.body.appendChild(script);

// 增加样式
var link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="css/style.css";
var head=document.getElementsByTagName("head")[0];
head.appendChild(link);



function loadstyle(e,s){
var link=document.createElement("link");
link.rel="stylesheet";
link.type="text/css";
link.href="css/"+s;
var head=document.getElementsByTagName("head")[0];
head.appendChild(link);
var el=document.getElementById("changeStyle");
el.setAttribute("onclick","loadstyle('style.css')");
}


var html=document.documentElement;
console.log(html.childNodes[0]);
console.log(document.body);
document.title="ceste";
console.log(document.URL);//获取完整的URL
var div=document.createElement("div");
div.id="myDiv";
div.className="box";
var newP=document.createElement("P");
var text=document.createTextNode("htllo world");
newP.appendChild(text);
div.appendChild(newP)
var div1=document.getElementById("div123");
console.log(div1);
var div123=document.getElementById("div123");
console.log(div123);
div1.appendChild(div);


//创建 table 
var table = document.createElement("table"); 
table.border = 1; 
table.width = "100%"; 
 
//创建 tbody 
var tbody = document.createElement("tbody");

table.appendChild(tbody); 

//创建第一行
 
var row1 = document.createElement("tr"); 
tbody.appendChild(row1); 
var cell1_1 = document.createElement("td"); 
cell1_1.appendChild(document.createTextNode("Cell 1,1")); 
row1.appendChild(cell1_1); 
var cell2_1 = document.createElement("td"); 
cell2_1.appendChild(document.createTextNode("Cell 2,1")); 
row1.appendChild(cell2_1); 
 


//创建第二行
 
var row2 = document.createElement("tr"); 
tbody.appendChild(row2); 
var cell1_2 = document.createElement("td"); 
cell1_2.appendChild(document.createTextNode("Cell 1,2")); 
row2.appendChild(cell1_2); 
var cell2_2= document.createElement("td"); 
cell2_2.appendChild(document.createTextNode("Cell 2,2")); 
row2.appendChild(cell2_2); 
 
//将表格添加到文档主体中
 
document.body.appendChild(table); 

