/*alert("welcome");
confirm("simba institute");*/
//console.log("java scripts");
//document.write("feni");
//prompt("enter your name");
//prompt("enter your name","feni");
/*document.getElementById("myh").innerHTML="javascript Comment";
document.getElementById("myp").innerHTML="javascript Comment";
var a,b,c;
a=10;
b=20;
c=a+b;
document.getElementById('demo').innerHTML=c;
var a,b,c;
a=10;
b="20";
c=a+b;
document.getElementById('code').innerHTML=c;
var a,b,c;
a=10;
b="20";
c=a*b;
document.getElementById('multy').innerHTML=c;
document.write('<h1> oprater </h1>');
document.write('<button>');
document.write('--------------1. orathmetic-----------------------');
document.write('</button>');
var a,b;
a=10;
b=20;
document.write("<br/>",a+b,"<br/>",a-b,"<br/>",a*b,"<br/>",a/b,"<br/>",a%2);
var a,b;
a=10;
a++;
a--;
document.write("<br/>",a);
document.write('<h1> 2.comparison </h1>');
var a,b;
a=10;
b=20;
document.write('10==20=', a==b,"<br/>");
document.write('10!=20-',a!=b,"<br/>");
document.write('10>=20-',a>=b,"<br/>");
document.write('10<=20',a<=b,"<br/>");
document.write('10<20',a<b,"<br/>");
document.write('10===20',a===b,"<br/>");
document.write('<h1> 3.logical </h1>');
var a,b;
a=10;
b=20;
document.write(a<b&&a>5,"<br/>");
document.write(a<b||a<5);*/


/*function data(){
	document.getElementById('iti').innerHTML="welcome to simba";
}
function hideData(){
	document.getElementById('iti').Style.display="none";
}
function showData(){
	document.getElementById('iti').Style.display="block";
}
document.write('<h1> 2.condition </h1>');
var a,b,c;
a=10;
b=2;
c=a%b;
document.write(c,'<br>');
c==0 ? document.write('even Number'):document.write('odd number');
var a,b,c;
a=11;
b=2;
c=a%b;
document.write('<br>',c,'<br>');
c==0 ? document.write('even Number'):document.write('odd number');
document.write('<h1> 5.conditional </h1>');
var a,b;
a=10;
b=2;
b+=a;
document.write('b+=a=',b);
var a,b;
a=10;
b=2;
b-=a;
b*=a;
b/=a;
document.write(b);

document.write('<h1> 2.arrey </h1>');
const num=['10,20,30,40,50'];
document.getElementById('Array').innerHTML =('2');

document.write('<h1> if----else </h1>');
const date =new Date();
const day =date.getDay();
if(day===1){
	document.write("monday");
}
else if(day===2){
	document.write("tyusday");
}
else if(day===3){
	document.write("wednesday");
}
else if(day===4){
	document.write("thirsday");
}
else if(day===5){
	document.write("friday");
}
else if(day===6){
	document.write("saterday");
}
else{
	document.write("sunday");
}

var maks=50;
if(maks==100){
	document.write("first number");
}
else if(maks>=70){
	document.write("secound number");
}
else if(maks>=33){
	document.write("third number");
}
else {
	document.write("fail");
}

document.write('<h1> switch case </h1>');
var day;
switch(new Date().getDay()){
	case 0:
	day="sunday";
	break;
	case 1:
	day="monday";
	break;
	case 2:
	day="thusday";
	break;
	case 3:
	day="wednesday";
	break;
	case 4:
	day="thirsday";
	break;
	case 5:
	day="friday";
	break;
	case 6:
	day="satrday";
	break;
}
	document.write(day);


let currentTime =new Date().getHours();
let day;

switch(true){
	case currentTime<12:
	day ="morning";
	break;
	case currentTime<18:
	day ="afternoon";
	break;
	default:
	day ="evening";
}
document.write(`it's currently ${day}.`);

let month =new Date();
let season =month.getMonth();

switch(season){
	case 1:
	case 2:
	case 0:
	case 11:
	season="winter";
	break;
	case 3:
	case 4:
	case 5:
	case 6:
	season="summer";
	break;
	case 9:
	case 7:
	case 8:
	case 10:
	season="monsooon";
	break;
	default:
	season="invalid month";
	break;
}
document.write(season);

document.write('<h1> 2.arrey </h1>');
var num=[10,20,30,40,50];
document.getElementById('Array').innerHTML = num;
var a=[];
a[0]=1;
a[1]=2;
a[2]=3;
document.getElementById('Array1').innerHTML = a[2];
var a=Array(10,20,30,40);
a[0]=100;
document.write(a);

document.write('<h3> concat </h3>');
var num=[10,20,30,40,50];
var a=[100,200,300,400,500];
var c=a.concat(num);
document.write(c);

document.write('<h3> indexOf </h3>');
var a=[10,20,30,40,50];
document.write(a.indexOf(30));

document.write('<h3> lastIndexOf </h3>');
var a=[10,20,30,40,50];
document.write(a.lastIndexOf(20));

document.write('<h3> join </h3>');
var a=[10,20,30,40,50];
document.write(a.join(">>"));

document.write('<h3> pop </h3>');
var a=[10,20,30,40,50];
a.pop();
document.write(a);

document.write('<h3> push </h3>');
var a=[10,20,30,40,50];
a.push(60,70,80);
document.write(a);

document.write('<h3> reverse </h3>');
var a=[10,20,30,40,50];
a.reverse();
document.write(a);

document.write('<h3> shift </h3>');
var a=[10,20,30,40,50];
a.shift();
document.write(a);

document.write('<h3> unshift </h3>');
var a=[10,20,30,40,50];
a.unshift();
document.write(a);

document.write('<h3> slice </h3>');
var a=[10,20,30,40,50];
a.slice(2,4);
document.write();

document.write('<h2> multy task </h2>');
let text="";
let a=prompt("enter the value of a=");
const n=10;

for(let i=1;i<=n;i++){
	text+=a + "x" + i + "=" + a*i+"<br>";
}
document.getElementById('multy').innerHTML=text;

document.write('<h2> sum task </h2>');
let sum=0;
const n=10;

for(let i=1;i<=n;i++){
	sum+=i;
}
document.write('sum:',sum );

document.write('<h1> while loop </h1>');
var i=1;
while(i<=10){
	document.write(i,'welcome<br>');
	i++;
}
document.write(i);

document.write('<h1>do while loop </h1>');
var i=1;
do{
	document.write(i,'welcome<br>');
	i++;
}while(i<=10)
document.write(i);

document.write('<h1> break stetment </h1>');
for(var i=1;i<=10;i++){
	if(i==5){
		break;
	}
	document.write(i,"<br>");
}

document.write('<h1> continue stetment </h1>');
for(var i=1;i<=10;i++){
	if(i==5){
		continue;
	}
	document.write(i,"<br>");
}

document.write('<h1> mouse and keybord event </h1>');
document.write('<h2> onchange </h2>');
document.write('<h2> onclick </h2>');
function bulbOn(){
	document.getElementById('bulb').src="img/on.jpg";
}
function bulbOff(){
	document.getElementById('bulb').src="img/download.jpg";
}

document.write('<h2> onmouseover </h2>');
document.write('<h2> upper case </h2>');
function keyHandler(){
	var a=document.getElementById('upper');
	a.value=a.value.toUpperCase();
}
document.write('<h2>  case </h2>');
function keyHandler(){
	document.forms[0].second.value = document.forms[0].first.value;
}
 function clickNow(){
	document.getElementById('click').innerHTML;
	alert("Button");
}
function suratNow(){
	document.getElementById('surat').innerHTML;
	alert("<h1>");
}
function welcome(){
	document.getElementById('wel').innerHTML;
	alert("<p>");
}
function pic(){
	document.getElementById('img').innerHTML;
	alert("<img>");
}
function a(){
	document.getElementById('tag').innerHTML;
	alert("<a>");
}
document.write('<h2>  coord </h2>');
function coordHandler(e){
	var x = e.clientX;
	var y = e.clientY;
	var coords = "Direction of x and y:-(" + x + "," + y + ")";
	document.getElementById('coor').innerHTML = coords;
}
function coordClearHandler(){
	document.getElementById('coor').innerHTML = "";
}
var num=1;
var i=1;
var j;
for(i=1;i<=5;i++){
	for(j=1;j<=i;j++){
		document.write(" ", num );
		num++;
	}
document.write('<br>');	
}
document.write('<h2>  onload </h2>');
function mtFunction(){
	alert("page is loader");
}
function mtFunction(){
	alert("img is loader");
}
document.write('<h2>  imgerror </h2>');
function imgError(){
	alert("img is could not be loader");
}
document.write('<h2>  onunload </h2>');
function mtFunction(){
	alert("page is unloader");
}
document.write('<h2>  onresize </h2>');
function myFunction(){
	let x=window.outerWidth;
	let y=window.outerHeight;
	let z= width = " + x + ",Height=" + y + ";
	document.getElementById('size').innerHTML = z;
}
function myButton(){
	alert("hello");
}
function myClick(){
	var a=document.form1.lname.value;
	alert(a);
}
document.write('<h2> with argument with returnValue </h2>');
function myAdd(a,b){
	return a+b;
}
function myData(a,b){
	var c=myAdd(a,b);
	alert("total value:="+c);
}
document.write('<h2> with argument without returnValue </h2>');
function myAdd(a,b){
	alert(a);
	alert(b);
	document.write(a+b);
}
document.write('<h2> round </h2>');
function myPie(){
	var a=Math.round(4.6);
	alert(a);	
}
document.write('<h2> pie </h2>');
function myPie(){
	var a=Math.PI;
	alert(a);	
}
document.write('<h2>  </h2>');
function myAdd(){
	var b=document.getElementById('a').value;
	alert(b);
}
document.write('<h2> parseInt </h2>');
function myIntp(){
	var a=parseInt(document.getElementById('num1').value);
	var b=parseInt(document.getElementById('num2').value);
	var c=a + b;
	document.getElementById('ans').value=c;
}	
function myClick(){
	var n1=parseInt(document.getElementById('num1').value);
	var n2=parseInt(document.getElementById('num2').value);
	var opt=document.getElementById('operater').value;
	
	switch(opt){
		case '+':
			var c=n1+n2;
			document.getElementById('output').value=c;
		break;
		case '-':
			var c=n1-n2;
			document.getElementById('output').value=c;
		break;	
		case '*':
			var c=n1*n2;
			document.getElementById('output').value=c;
		break;
		case '/':
			var c=n1/n2;
			document.getElementById('output').value=c;
		break;
		default:
			document.getElementById('output').value="invalid";
		break;	
	}
}*/
/*document.write('<h2> Check Odd Even Number</h2>');
function checkOddEven(){
	var a= document.getElementById('num1').value;
	var b;
	if(a%2==0){
		b = "Even Number";
	}else{
		b = "Odd Number";
	}
	document.getElementById('output').value= b;
}*/

/*document.write('<h2> Table print</h2>');
function tablePrint(){
	var a = document.getElementById('num1').value;
	var b = "";
	for(i=1; i <= 10; i++){
		b += a + " " + "X" + " " + i + " " + "=" + a*i + "<br/>";
	}
	document.getElementById('print').innerHTML = b;
}*/

/*document.write('<h2> Pattern print </h2>');
function printPattern(){
	var a = parseInt(document.getElementById('num1').value);
	for(i = a; i >=1; i--){
		for(j = i; j >=1; j--){
			document.write(' * ');
		}
		document.write('<br/>');
	}
}

document.write('<h2> Pattern print </h2>');
function printPattern(){
	var a = parseInt(document.getElementById('num1').value);
	for(i =1; i <=a; i++){
		for(j = 1; j <=i; j++){
			document.write(' * ');
		}
		document.write('<br/>');
	}
}
document.write('<h2> marksheet </h2>');
function mySheet(){
	var subject1=parseInt(document.getElementById('subject1').value);
	var subject2=parseInt(document.getElementById('subject2').value);
	var subject3=parseInt(document.getElementById('subject3').value);
	var subject4=parseInt(document.getElementById('subject4').value);
	var subject5=parseInt(document.getElementById('subject5').value);
	var total=subject1 + subject2 + subject3 + subject4 + subject5;
	var per=total*100/500;
	var div;
	if(per>=60){
		div="first division";
	}else if(per>=45){
		div="second division";
	}
	else if(per>=33){
		div="third division";
	}else{
		div="fail";
	}
	document.getElementById('total').value=total;
	document.getElementById('persentage').value=per;
	document.getElementById('division').value=div;
}
document.write('<h2> keyup Password </h2>');
function passHandeler(){
	var a=document.myPass.upass.value.length;
	var message;
	if(a>=8){
		message="strong";
	}else if(a>=8){
		message="medium";
	}else {
		message="weak";
	}
	document.getElementById('message').innerText=message;
}
document.write('<h2> name par thi value print </h2>');
function nameHandler(){
	var a=document.getElementsByName('fname')[0].value;
	alert(a);
}
document.write('<h2> Password validation </h2>');
function myPass(){
	var upass1= document.myForm.upass1.value;
	var upass2= document.myForm.upass2.value;
	if(upass1==upass2){
		alert('Password match');
		return true;
	}
	else{
		alert('your Password not match....');
		return false;
	}
}
document.write('<h2> form validation </h2>');
function myForms(){
	var fname= document.myForm.fname.value;
	if(fname==null||fname==''){
		alert('please enter fname');
		return false;
	}
	var lname= document.myForm.lname.value;
	if(lname==null||lname==''){
		alert('please enter lname');
		return false;
	}
	var upass= document.myForm.upass.value;
	if(upass==null||upass==''){
		alert('please enter Password');
		return false;
	}
	if(upass.length<=7){
		alert('please enter 8 ch.');
		return false;
	}
}*/

document.write('<h2> change link </h2>');
function myLink(){
	document.getElementById('demo').href="https://www.simbainfotech.com";
	document.getElementById('demo').target="_blank";
}







