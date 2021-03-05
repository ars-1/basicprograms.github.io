<!DOCTYPE html>
<head>
</head>
<style>
.btn{
margin-left:20%;
margin-top:20%;
}

.pad{
background-image: linear-gradient(to bottom right, grey, grey, white);
padding:20px;
width:81%;
font-size:30px;
}
</style>
<body style="background-image: linear-gradient(to bottom right, green, blue);">
<div class="btn">
<div class="pad">
<a>YOUR ANSWER:</a>
<a id="sum" style="color: black"></a>
<a id="table" style="color: red"></a>
<a id="subtract" style="color: white"></a>
<a id="multiply" style="color: blue"></a>
<a id="divide" style="color: gold"></a>
<p></p>
</div>
<button type="button" style="margin-right: 30px; width: 150px; color:white; background-image: linear-gradient(to bottom right, black, black, white); padding: 20px; font-size: 20px;" onclick="sum()">ADD</button>
<button type="button" style="margin-right: 30px; width: 150px; color:white; background-image: linear-gradient(to bottom right, red, red, white); padding: 20px; font-size: 20px;" onclick="table()">TABLE</button>
<button type="button" style="margin-right: 30px; width: 150px; color:white; background-image: linear-gradient(to bottom right, blue, blue, white); padding: 20px; font-size: 20px;" onclick="multiply()">MULTIPLY</button>
<button type="button" style="margin-right: 30px; width: 150px; color:white; background-image: linear-gradient(to bottom right, gold, gold, white); padding: 20px; font-size: 20px;" onclick="divide()">DIVIDE</button>
<button type="button" style=" width: 150px; color:white; background-image: linear-gradient(to bottom right, black, black, white); padding: 20px; font-size: 20px;" onclick="subtract()">SUBTRACT</button>
</div>
<script>

function sum() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("sum").innerHTML = a+b;
                        }

function subtract() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("subtract").innerHTML = a-b;
                        }

function multiply() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("multiply").innerHTML = a*b;
                        }

function divide() {
                         var a = prompt("ENTER FIRST VALUE", "0");
                         var b = prompt("ENTER SECOND VALUE", "0");
                         document.getElementById("divide").innerHTML = a/b;
                        }

function table() {
                         var a = prompt("ENTER YOUR VALUE", "0");
                         var b = prompt("ENTER YOUR LIMIT", "0");
                         var c = 1;
                         document.write("<br>");
                         document.write("<br>");
                         document.write('<h1 style="text-align:center; margin-right: 45%; margin-left: 35%;">Please Reload This Page</h1>');
                         document.write('<hr style="height:10px;border-width:0; margin-left: 35%; margin-right: 45%;color:black;background-color:black">');
                         while(c <= b)
                         {
                          document.write('<body style="background-image: linear-gradient(to bottom right, black, white);">');
                         document.write("<br>"); 
                         document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-left: 10px solid black; margin-left: 35%; border-bottom:10px solid black;">');
                         document.write(a);
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-bottom:10px solid black;">');
                         document.write("*");
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-bottom:10px solid black;">');
                         document.write(c);
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-bottom:10px solid black;">');
                         document.write("=");
                         document.write("</a>");
                          document.write('<a style="background-image: linear-gradient(to bottom right, black, white); padding: 20px; border-right: 10px solid black; border-bottom:10px solid black;">');
                         document.write(a*c);
                         document.write("</a>");
                         document.write("<p></p>");
                         c++;
                           }
                           document.write("<br>");
                           document.write("</body>");
                           }

</script>
</body>
