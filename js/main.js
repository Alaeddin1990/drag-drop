
let btn = document.getElementById("btn")
let input = document.getElementById("inp")
let boxs = document.querySelectorAll(".Box")
let drag = null
btn.onclick = function () {
    if (input.value != "") {
        boxs[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`
        input.value = ""
    } 
    dragItem()   
}

function dragItem() {
    let dragItem = document.querySelectorAll(".item")
    dragItem.forEach(item => {
        item.addEventListener('dragstart' , function () {
            drag = item
            item.style.opacity = "0.5"
           
        })
        item.addEventListener('dragend' , function () {
            item.style.opacity = "5"
        })

        boxs.forEach (box => {
            box.addEventListener("dragover", function (e) {
                e.preventDefault()
                this.style.background = "green"
                
        })
        box.addEventListener("dragleave", function () {
            this.style.background = "white"
            this.style.color = "#000"
        })
        box.addEventListener("drop", function () {
        box.appendChild(drag)
        this.style.background = "white"
        this.style.color = "#000"
        })

        })
    })
}



// يحدث هذا ondragstartالحدث عندما يبدأ المستخدم في سحب التحديد .





//  () {} 

// # 001 - Introduction And What Is JavaScript ?

// JavaScript  <==========> هي لغة البرمجة الأكثر شيوعًا في العالم.

// //////////////////////////////////////////////////////////////////////////////////////

//  # 002 - How To Study The Course ?

// Always search
// Foces on kurs forget all Proplem

// //////////////////////////////////////////////////////////////////////////////////////

// # 003 - Setting Up Environment And Tools

// uploed importent extension for help wirt js code 

// //////////////////////////////////////////////////////////////////////////////////////

// # 004 - Work With Chrome Developer Tools 
// work with console to edit evreting in page 

// //////////////////////////////////////////////////////////////////////////////////////

// # 005 - Where To Put The Code 

// دائما نضع امتداد ملف الجافاسكربت نهاية الصفحه حتي يقرا جميع عناصر ال اتش تي مال
//<script> </script>   <===========> في هذه العلامه html  في  js يتم ادرج كود

// //////////////////////////////////////////////////////////////////////////////////////

// # 006 - Comments And Bad Practices 

// تبدأ التعليقات المكونة من سطر واحد بـ 
//  /*تبدأ التعليقات متعددة الأسطر بـ/* وتنتهي بـ 

// //////////////////////////////////////////////////////////////////////////////////////

// # 007 - Output To Screen

// alert()          <===========>  تعرض الطريقة مربع تنبيه برساله و زر موافق.                    zB window.alert ("Hallo Deen Keep Going YOU are in The right Direction");
// alert()          <===========> يتم استخدام الطريقة عندما تريد وصول المعلومات إلى المستخدم
// document.write() <===========> js عن طريق html تستخدم لي اخراج نص                              zB  document.write("<h1> me and you </h1>")
// createElement()  <===========> لبناء صفحه كامله html تستخدم لي استدعاء اي عنصر 


//////////////////////////////////////////////////////////////////////////////////////

// #008 - Console Methods And Styling And WebAPI

// console.log()    <===========>  تقوم الطريقة بكتابة (تسجيل) رسالة إلى وحدة التحكم.             zB console.log("welcom we are going to do")
// console.log()    <===========>  الطريقة مفيدة لأغراض الاختبار.
// console.error()  <===========>  يكتب رسالة خطأ إلى وحدة التحكم.
// console.table()  <===========>   تستخدم ليكتب الجدول في وحدة التحكم.                           zB console.table(["Deen" , "Alaeddin" , "Eminem"])
// %C               <===========>  تقوم بتحديد النص المراد التعديل عليه                           ZB console.error("wrong you have to %ckeep trying","color:red; font-size:20px;") 

//////////////////////////////////////////////////////////////////////////////////////

// # 009 - What Is ECMAScript ?

// ECMAScript 2015     <===========>  كان  المراجعة الرئيسية الثانية لجافا سكريبت.

// ECMAScript 6 & ES6. <===========>  js اخر اصدار مميزات 

//////////////////////////////////////////////////////////////////////////////////////

// # 010 - Data Types And Typeof Operator

/* JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The object data type can contain:
1. An object
2. An array
3. A date
opject + array

*/

//////////////////////////////////////////////////////////////////////////////////////

// # 011 - Variables Introduction

// syntax keyword (variables) assinment operator  variables value
//          var      deen             =            zB   "Alaeddin"
// المتغيرات عبارة عن حاويات لتخزين البيانات (تخزين قيم البيانات)

//////////////////////////////////////////////////////////////////////////////////////

// # 012 - Identifiers Name Conventions And Rules

// يجب تحديد جميع متغيرات  بأسماء فريدة .

// تسمى هذه الأسماء الفريدة بالمعرفات .
// يمكن أن تكون المعرفات أسماء قصيرة (مثل x و y) أو أسماء وصفية أكثر (العمر ، المجموع ، إجمالي الحجم).
// القواعد العامة لإنشاء أسماء للمتغيرات (المعرفات الفريدة) هي:
// يمكن أن تحتوي الأسماء على أحرف وأرقام وشرطات سفلية وعلامات الدولار.
// يجب أن تبدأ الأسماء بحرف.
// يمكن أن تبدأ الأسماء أيضًا بـ $ و _ (لكننا لن نستخدمها في هذا البرنامج التعليمي).
// الأسماء حساسة لحالة الأحرف (y و Y متغيرات مختلفة).
// لا يمكن استخدام الكلمات المحجوزة (مثل كلمات JavaScript الأساسية) كأسماء.
// تتم كتابة النص داخل علامتي اقتباس مزدوجتين أو مفردة. الأرقام مكتوبة بدون علامات اقتباس.
// إذا وضعت رقمًا بين علامتي اقتباس ، فسيتم التعامل معه كسلسلة نصية.

//////////////////////////////////////////////////////////////////////////////////////

// #013 - Var, Let, Const Compare

/*
var
---- Re-Declaring  Variables  (yes)
---- Access Before declare    (no)
---- variables scoop drame    (added)
-- 
let
---- Re-Declaring  Variables  (no)
---- Access Before declare    (error let you now where this problem)
---- variables scoop drame    (no Added)
-- 

Const
---- Re-Declaring  Variables  (no)
---- Access Before declare    (error let you now where this problem)
---- variables scoop drame    (no Added)
-- 

Always declare JavaScript variables with var,let, or const.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browsers, you must use var.
*/ 

//////////////////////////////////////////////////////////////////////////////////////

// #014 - String Syntax And Character Escape Sequences


// يمكنك استخدام علامات الاقتباس داخل سلسلة ، طالما أنها لا تتطابق مع علامات الاقتباس المحيطة بالسلسلة:
// console.log("deen is 'here' ")
// console.log('deen is "here" ')

//  \   <===========>  تقوم بتجاهل الحروف الخاص والاسطر المكسوره
//  \n	<===========>  New Line or break the Line                 console.log("deen \nis \n\"here\"")

//////////////////////////////////////////////////////////////////////////////////////

// #015 - Concatenationqwa

//  +   <===========>   يمكن استخدام العامل بين النصوص لدمجها. وهذا ما يسمى بالتسلسل : (firstName + " " + lastName);

//////////////////////////////////////////////////////////////////////////////////////

// #016 - Template Literals Template Strings

// تستخدم القوالب الحرفية علامات التجزئة (``) بدلاً من علامات الاقتباس (" ") لتحديد سلسلة:
// (``)يمكن الكتابه بحريه تامه مع هذه العلامه                                                       let text = `Hello World!`;
// ${...}   <===========>  توفر القوالب الحرفية طريقة سهلة لاستيفاء المتغيرات والتعبيرات في سلاسل.



//////////////////////////////////////////////////////////////////////////////////////

// #017 - Variable And Concatenation Challenge

//////////////////////////////////////////////////////////////////////////////////////

// # 018 - Arithmetic Operators

/*

Operator	          Description
+      <===========>  Addition
let x = 5;
let y = 2;
let z = x + y;
7
-      <===========>  Subtraction
let x = 5;
let y = 2;
let z = x - y;
3
*      <===========>  Multiplication
let x = 5;
let y = 2;
let z = x * y;
10
**	   <===========>  Exponentiation (ES2016)
let x = 5;
let z = x ** 2;
25

/	   <===========>  Division
let x = 5;
let y = 2;
let z = x / y;
2.5
%	   <===========>  Modulus (Remainder)
let x = 5;
let y = 2;
let z = x % y;
1
++	   <===========>  Increment
let x = 5;
x++;
let z = x;
6

--	   <===========>  Decrement  
let x = 5;
x--;
let z = x;
4

let x = 100 + 50 * 3; = 250

هل نتيجة المثال أعلاه هي نفسها 150 * 3 ، أم أنها نفس النتيجة 100 + 150؟

هل تم الجمع أم الضرب أولاً؟

كما هو الحال في الرياضيات المدرسية التقليدية ، يتم الضرب أولاً.

الضرب ( *) والقسمة ( ) لهما أسبقية/ أعلى من الجمع ( ) والطرح ( ).+-

و (كما في الرياضيات المدرسية) يمكن تغيير الأسبقية باستخدام الأقواس.

عند استخدام الأقواس ، يتم حساب العمليات داخل الأقواس أولاً:

let x = (100 + 50) * 3; = 450

عندما يكون للعديد من العمليات نفس الأسبقية (مثل الجمع والطرح أو الضرب والقسمة) ، يتم حسابها من اليسار إلى اليمين:
let x = 100 + 50 - 3; = 147
let x = 100 / 50 * 3; = 6
*/

//////////////////////////////////////////////////////////////////////////////////////

// #019 - Unary Plus And Negation Operators


//////////////////////////////////////////////////////////////////////////////////////

// - #020 - Type Coercion

// Number()  <===========>  الطريقة العامة تحول متغير (أو قيمة) إلى رقم
// Number()  <===========>  يمكن استخدام الطريقة العامة لتحويل التواريخ إلى أرقام.
// Number()  <===========>  يمكن للطريقة العامة أيضًا تحويل القيم المنطقية إلى أرقام.  false & true


// سلسلة فارغة (مثل "") تتحول إلى 0.
// يمكن استخدام عامل التشغيل أحادي + لتحويل متغير إلى رقم:

// String()   <===========>  يمكن للطريقة العامة تحويل الأرقام إلى سلاسل.
// String()   <===========>  يمكن للأسلوب العام تحويل التواريخ إلى سلاسل.
// String()   <===========>  يمكن للطريقة العامة تحويل القيم المنطقية إلى سلاسل.   false & true
// يمكن استخدامه في أي نوع من الأرقام أو القيم الحرفية أو المتغيرات أو التعبيرات:
// (2484).toString() <===========> طريقة الرقم تفعل نفس الشيء.            typeof (100 + 23).toString(); = string


// نوع التحويل التلقائي
// JavaScript  عندما يحاول  العمل على نوع بيانات "خاطئ" ، فإنه سيحاول تحويل القيمة إلى نوع "صحيح".
// النتيجة ليست دائمًا ما تتوقعه:
// 5 + null     returns 5         because null is converted to 0
// "5" + null   returns "5null"   because null is converted to "null"
// "5" + 2      returns "52"      because 2 is converted to "2"
// "5" - 2      returns 3         because "5" is converted to 5
// "5" * "2"    returns 10        because "5" and "2" are converted to 5 and 2


//////////////////////////////////////////////////////////////////////////////////////

// #021 - Assignment Operators

// =	       x = y	     x = y
// +=	       x += y	     x = x + y
// -=	       x -= y	     x = x - y
// *=	       x *= y	     x = x * y
// /=	       x /= y	     x = x / y
// %=	       x %= y	     x = x % y
// **=	     x **= y	   x = x ** y

//////////////////////////////////////////////////////////////////////////////////////

// #022 - Operators Challenges


//////////////////////////////////////////////////////////////////////////////////////

// #023 - Number

// يحتوي JavaScript على نوع واحد فقط من الأرقام. يمكن كتابة الأرقام مع الكسور العشرية أو بدونها.
// يمكن كتابة الأعداد الكبيرة جدًا أو الصغيرة جدًا باستخدام التدوين العلمي (الأس):

/*
#024 - Number Methods

Method	           <===========>     Description
toString()         <===========>     Returns a number as a string                                         (123).toString();
toExponential()    <===========>     تُرجع سلسلة ، برقم مُقرَّب ومكتوب باستخدام التدوين الأسي.              x.toExponential(6);
toFixed()	       <===========>     إرجاع سلسلة ، مع الرقم المكتوب بعدد محدد من الكسور العشرية:       x.toFixed(0) 
toPrecision()	   <===========>     إرجاع سلسلة برقم مكتوب بطول محدد                                   x.toPrecision(2) + "<br>" +
ValueOf()	       <===========>     Returns a number as a number                                          x.valueOf() 
parseInt()         <===========>     يوزع سلسلة ويعيد عددًا صحيحًا. مسموح بالمسافات. يتم إرجاع الرقم الأول فقط:
parseFloat()       <===========>     يوزع سلسلة ويعيد رقما. مسموح بالمسافات. يتم إرجاع الرقم الأول فقط:
Number.isInteger() <===========>     ترجع الطريقة إذا كانت الوسيطة عددًا صحيحًا.  true  or false

*/
//////////////////////////////////////////////////////////////////////////////////////

// #025 - Math Object


// Math.round (x)	<===========>  إرجاع  مقربًا إلى أقرب عدد صحيح
// Math.ceil (x)	<===========>  لإرجاع  مقربًا لأعلى إلى أقرب عدد صحيح
// Math.floor(x)    <===========>  لإرجاع  مقربًا لأسفل إلى أقرب عدد صحيح لها
// Math.trunc (x)   <===========>  	إرجاع الجزء الصحيح  
// Math.pow(x, y)   <===========>  تُرجع قيمة x إلى أس y: 
// Math.random()    <===========>  تُرجع رقمًا عشوائيًا بين 0 (ضمنيًا) و 1 (حصريًا):


//////////////////////////////////////////////////////////////////////////////////////

// #026 - Number Challenge



//////////////////////////////////////////////////////////////////////////////////////

// #027 - String Methods Part 1
// #028 - String Methods Part 2
/*
String length         <===========> تقوم ااخاصيه بي عد عدد الاحرف الموجودهرفي النصc onsole.log(dd.length)

String slice()             <===========>      يستخرج جزءًا من نص ويعيد الجزء المستخرج في نص جديدة.
let part = text.slice(7, 13);  <===> يبدا العد من 7 الي 13
let part = text.slice(7);      <===> يبدا العد من 7 الي النهايه 
let part = text.slice(-12);    <===> عند علامة سالب - يبدا العد من النهايه
String substring()         <===========>      الفرق هو أن قيم البداية والنهاية الأقل من 0 يتم التعامل معها على أنها 0 في
String substr()            <===========>      الفرق هو أن المعلمة الثانية تحدد طول الجزء المستخرج.                              let part = str.substr(7, 6);
String replace()           <===========>      يستبدل الأسلوب replace()قيمة محددة بقيمة أخرى في سلسلة:                             console.log(dd.replace("shebani","deedn"))
            replace()          <===>   بشكل افتراضي ،تستبدل الطريقة المطابقة الأولى فقط :
            /g                 <===>   لاستبدال جميع التطابقات ، استخدم تعبيرًا عاديًا بعلامة (مطابقة عامة):
String replaceAll()        <===========>      تسمح لك هذه الطريقة بتحديد تعبير عادي بدلاً من سلسلة ليتم استبدالها.
String toUpperCase()       <===========>       يتم تحويل السلسلة إلى أحرف صغيره باستخدام
String toLowerCase()       <===========>       يتم تحويل السلسلة إلى أحرف كبيرة باستخدام
String concat()            <===========>       يمكن استخدام الطريقة بدلاً من عامل الجمع. هذين السطرين يفعلان الشيء نفسه:
String trim()              <===========>    تزيل الطريقة المسافة  من جانبي السلسلة:  let text2 = text1.trim();
String trimStart()         <===========>   تزيل المسافات البيضاء فقط من بداية السلسلة.
String trimEnd()           <===========>   تزيل المسافات البيضاء فقط من نهاية السلسلة.
String padStart()          <===========>   تقوم الطريقة بملء سلسلة بسلسلة أخرى:
String padEnd()            <===========>   من النهايه تقوم الطريقة بملء سلسلة بسلسلة أخرى:        
String charAt()            <===========>   تستخرج حرف من النص بكتابة رقم الحرف في النص
String charCodeAt()        <===========>   تقوم الطريقه بارجاع كود الرقم
String split()             <===========>   يمكن تحويل سلسلة إلى مصفوفة بالطريقة التالية 
String indexOf()           <===========>    تستخدم لمعرفة موقع او رقم العنصر في النص
String lastIndexOf()       <===========>    يبدا البحت من نهاية النص
String search()            <===========>
String match()
String matchAll()
String includes()          <===========>   ترجع الطريقة صحيحًا إذا كانت السلسلة تحتوي على قيمة محددة.  true or false text.includes("world", 12);
String startsWith()        <===========>   يرجع هذا الأسلوب إذا  بدأت السلسلة بقيمة محددة.     true or false   text.startsWith("Hello");
String endsWith()          <===========>   يرجع هذا الأسلوب إذا نهاية السلسلة بقيمة محددة.     true or false 
let text = "John Doe"; 
text.endsWith("Doe");
*/
//////////////////////////////////////////////////////////////////////////////////////

// #030 - String Challenge
/*
console.log (alaa.charAt(2).toUpperCase(2)+alaa.slice(3,6))
console.log (alaa[13].toUpperCase(13).repeat(8))
console.log(alaa.slice(0,6).split(0,6))
console.log(alaa.substr(0,6)+ " " +alaa.substr(11,16))
console.log(alaa.slice(0,1).toLowerCase()+alaa.slice(1,16).toUpperCase()+alaa.slice(-1).toLowerCase())
*/

//////////////////////////////////////////////////////////////////////////////////////

// #031 - Comparison Operators  True or False

// ==   <===========>  تُستخدم عوامل المقارنة في البيانات المنطقية لتحديد المساواة أو الاختلاف بين المتغيرات أو القيم.   x == 8	  false
// !=   <===========>  تستخدم عندما لا توجد مقارنه بين قيمتين
// ===  <===========>  تستخدم لقارنة و اختلاف القيم والمتغيرات ونوع البيانات
// !==  <===========>  تستخدم عندما لا توجد مقارنه بين القيمتين ونوع البيانات
// >    <===========>  علامة اكبر من
// <    <===========>  علامة اصغر من
// >=   <===========>  علامة اكبر من او يساوي
// <=   <===========>  علامة اصغر من او يساوي

//////////////////////////////////////////////////////////////////////////////////////

// #032 - Logical Operators   True or False

// تُستخدم العوامل المنطقية لتحديد المنطق بين المتغيرات أو القيم.

// x = 6، y = 3 بالنظر إلى ذلك يوضح الجدول أدناه العوامل المنطقية:

// Operator      Description	Example	Try it
// &&	         and	       (x < 10 && y > 1) is true	
// ||	          or	       (x == 5 || y == 5) is false	
// !	         not	       !(x == y) is true
// 

//////////////////////////////////////////////////////////////////////////////////////

// #033 - If Conditions
// #034 - Nested If Condition
/*
if        <===========>   تُستخدم لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها ، إذا كان الشرط المحدد صحيحًا
else      <===========>   تُستخدم لتحديد كتلة من التعليمات البرمجية ليتم تنفيذها ، إذا كان الشرط نفسه خاطئًا
else if   <===========>   تُستخدم لتحديد شرط جديد للاختبار ، إذا كان الشرط الأول خاطئًا
switch    <===========>   تُستخدم لتحديد العديد من الكتل البديلة من التعليمات البرمجية المراد تنفيذها

#035 - Conditional Ternary Operator
price === 100 ? console.log("deen") : console.log( "hallo") Easy way for if
price === 1100 ? console.log("deen")  : price > 80 ? console.log ("no") : console.log("ok")

*/

//////////////////////////////////////////////////////////////////////////////////////

// #036 - Nullish Coalescing Operator And Logical Or

// ||	  or  <===========> 	تستخدم لوضع اجابه احتيطايه عندا وجود قيمه  غير منطيقيه شىء غير منطقي
// ??	      <===========> 	سوف يطبع اي قيمه غير منطيقيه    

//////////////////////////////////////////////////////////////////////////////////////

// #037 - If Condition Challenge


//////////////////////////////////////////////////////////////////////////////////////

// #038 - Switch Statement

// break     <===========>  تستخدم لكسر سلسة البحث عن القيمه اذا وجدتها
// default   <===========>  تحدد الكلمة الرئيسية الرمز المطلوب تشغيله في حالة عدم وجود مطابقة لحالة الأحرف:
// إذا تطابق العديد من الحالات مع قيمة حالة ، فسيتم تحديد الحالة الأولى .
// إذا لم يتم العثور على حالات مطابقة ، يستمر البرنامج في التسمية الافتراضية .
// إذا لم يتم العثور على تسمية افتراضية ، يستمر البرنامج في العبارة (العبارات) بعد التبديل .

// syntax

/*let x = "0";
switch (x) {
case 0:
text = "Off";
break;
case 1:
text = "On";
break;
default:
text = "No value found";
}*/ 

//////////////////////////////////////////////////////////////////////////////////////

// #039 - Switch And If Condition Challenge

/*let holiday =  0 || 10 || 5
let salary = 0
switch (holiday){
case 0:
case 10:
salary = "€2000"
console.log(`make in Monata becose no holiday ${salary}`)

case 5:
salary = 10000
console.log(`make in Monata becose no holiday ${salary}`)
break;
default: console.log("try tomwro")*/ 

//////////////////////////////////////////////////////////////////////////////////////

// #040 - Array Big Introduction
// #041 - Using Length With Array
// #042 - Add And Remove From Array
// #043 - Searching Array
// #044 - Sorting Arrays
// #045 - Slicing Array
// #046 - Joining Arrays
// #047 - Array Challenge

// Arrays          <===========>  المصفوفة هي متغير خاص يمكن أن يحتوي على أكثر من قيمة:
// length          <===========>  تُرجع خاصية المصفوفة طول المصفوفة (عدد عناصر المصفوفة).
// push()          <===========> أسهل طريقة لإضافة عنصر جديد إلى المصفوفة هي استخدام التابع :
// Array.isArray() <===========> تستخدم لتاكد من ان نوع البيانات مصفوفه  
// unshift()       <===========> يضيف الأسلوب عنصرًا جديدًا إلى مصفوفة (في البداية) ، والعناصر الأقدم "unshifts":
// shift()         <===========> تقوم الطريقة بإزالة اول عنصر في المصفوفه .
// pop()           <===========>  تقوم الطريقة بإزالة اخر عنصر في المصفوفه 
// indexOf()       <===========>  تستخدم للبحث عن القيم في المصفوفه
// includes()      <===========>  تستخدم لمعرفة اذا كانت المصفوفه تحتوي علي عنصر معين
// sort()          <===========>  تقوم الطريقة بفرز المصفوفة أبجديًا:
// reverse()       <===========> الطريقة تعكس العناصر في المصفوفة.
// slice()         <===========> الطريقة تقطع قطعة من مصفوفة إلى مصفوفة جديدة.
// splice()        <===========> يمكن استخدام الطريقة لإضافة عناصر جديدة او الحدف من مصفوفة:
// concat()        <===========> تنشئ الطريقة مصفوفة جديدة بدمج (ربط) المصفوفات الموجودة:
// join()          <===========> تقوم الطريقة أيضًا بضم جميع عناصر المصفوفة في سلسلة نصية.ولكن بالإضافة إلى ذلك ، يمكنك تحديد الفاصل:


//////////////////////////////////////////////////////////////////////////////////////

// #048 - Loop - For And Concept Of Loop
// #049 - Looping On Sequences
// #050 - Nested Loops And Trainings
// #051 - Loop Control - Break, Continue, Label
// #052 - Loop - For Advanced Example
// #053 - Practice - Add Products To Page
// #054 - Loop - While
// #055 - Loop - Do While
// #056 - Loop - Challenge

// Loop  <===========>  الحلقات سهلة الاستخدام ، إذا كنت تريد تشغيل نفس الرمز مرارًا وتكرارًا ، في كل مرة بقيمة مختلفة.
// for         <===========>    حلقات من خلال كتلة من التعليمات البرمجية عدة مرات
// for/in      <===========>    حلقات من خلال خصائص الكائن
// for/of      <===========>    حلقات عبر قيم كائن قابل للتكرار
// while       <===========>    حلقات من خلال كتلة من التعليمات البرمجية بينما يكون الشرط المحدد صحيحًا
// do/while    <===========>    يتكرر أيضًا عبر كتلة من التعليمات البرمجية بينما يكون الشرط المحدد صحيحًا

//////////////////////////////////////////////////////////////////////////////////////

// #057 - Function Intro And Basic Usage
// #058 - Function Advanced Examples
// #059 - Function Return And Use Cases
// #060 - Function Default Parameters
// #061 - Function Rest Parameters
// #062 - Function Ultimate Practice
// #063 - Random Arguments Function Challenge
// #064 - Anonymous Function And Practice
// #065 - Return Nested Function
// #066 - Arrow Function Syntax
// #067 - Scope - Global And Local
// #068 - Scope - Block
// #070 - Arrow Function Challenge

// Function    <===========>   هي كتلة من التعليمات البرمجية مصممة لأداء مهمة معينة
// يتم تنفيذ وظيفة  عندما يستدعيها شيء ما (يسميها).
// return      <===========>   عندما تصل  إلى عبارة ، ستتوقف الوظيفة عن التنفيذ.
// ...numbers  <===========>   يوسع عامل التشغيل ... المتكرر (مثل المصفوفة) إلى المزيد من العناصر:
// rest (...)  <===========>   تسمح المعلمة  للدالة بمعالجة عدد غير محدد من الوسائط كمصفوفة:

// JavaScript has 3 types of scope:
// Block scope
// Function scope
// Global scope
// let    <===========>  لديهم نطاق عالمي يمكن الوصول اليهم من الخارج 
// conset <===========> لديهم نطاق عالمي يمكن الوصول اليهم من الخارج
// var    <===========> لديهم نطاق عالمي يمكن الوصول اليهم من الخارج والكتله الذاخليه





// #071 - Higher Order Functions - Map
// #072 - Higher Order Functions - Map Practice
// #073 - Higher Order Functions - Filter
// #074 - Higher Order Functions - Filter Practice
// #075 - Higher Order Functions - Reduce
// #076 - Higher Order Functions - Reduce Practice
// #077 - Higher Order Functions - ForEach And Practice
// #078 - Higher Order Functions - Challenge


// Property	                    Description
// new Map()    <===========>   Creates a new Map
// set()	    <===========>   Sets the value for a key in a Map
// get()	    <===========>   Gets the value for a key in a Map
// delete()	    <===========>   Removes a Map element specified by the key
// has()	    <===========>   Returns true if a key exists in a Map
// forEach()    <===========>   Calls a function for each key/value pair in a Map
// entries()    <===========>   Returns an iterator with the [key, value] pairs in a Map
// 
// size         <===========>    Returns the number of elements in a Map

//filter()      <===========>   تنشئ الطريقة مصفوفة جديدة مليئة بالعناصر التي تجتاز اختبارًا توفره الوظيفة.
// الطريقة لا تنفذ الوظيفة للعناصر الفارغة.
// الطريقة لا تغير المصفوفة الأصلية.
//reduce()  <===========> ترجع الطريقة قيمة واحدة: النتيجة المتراكمة للدالة.
// تعطينا النتيجه النهائيه لجمبع العناصر المضروبه او المجموعه
// 
//////////////////////////////////////////////////////////////////////////////////////

// #079 - Object - Introduction 
// #080 - Dot Notation vs Bracket Notation
// #081 - Nested Object And Advanced Trainings
// #082 - Create Object With New Keyword
// #083 - This Keyword
// #084 - Create Object With Create Method
// #085 - Create Object With Assign Method

// Use object literals {} instead of new Object().
// this   <===========>  تشير الكلمة الأساسية إلى كائن .
// this   <===========>  تشير الكلمة الأساسية إلى كائنات مختلفة اعتمادًا على كيفية استخدامها:

// this   <===========>   في طريقة الكائن ،يشير إلى الكائن .
// this   <===========>  وحده ، يشير إلى الكائن العالمي .
// this   <===========>  في دالة ، يشير إلى الكائن العام .
// this   <===========>  في وظيفة ، في الوضع الصارم ، هو undefined.
// this   <===========>  في حدث ما ، يشير إلى العنصر الذي تلقى الحدث.
// طرق مثل call()، apply()ويمكن bind()أن تشير thisإلى أي كائن .
// Object.create() <===========>  قم بإنشاء كائن باستخدام .

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// #086 - What Is DOM And Select Elements
// #087 - Get Set Elements Content And Attributes
// #088 - Check Attributes And Examples
// #089 - Create And Append Elements
// #090 - Product With Title And Description Practice
// #092 - DOM Events
// #093 - Validate Form And Prevent Default
// #094 - Event Simulation - Click Focus Blur
// #095 - Class List Object And Methods
// #096 - CSS Styling And Stylesheets
// #097 - Before, After, Prepend, Append, Remove
// #098 - DOM Traversing
// #099 - DOM Cloning




// The HTML ( DOM ) is <===========> ( Document Object Model )
// When a web page is loaded, the browser creates a Document Object Model of the page.
// documentElement.           <===========>    تقوم الخاصية بإرجاع عناصر المستند (كعنصر عنصر).
// getElementById("")         <===========>  id   الوصول الي العنصر عن طريق ال   
// getElementsByTagName("p")  <===========>  tags الوصول الي مجموعة عنصر عن طريق ال 
// innerHTML                  <===========>  يمكن استخدام الخاصية للحصول على أي عنصر  أو تغييره 
// innerHTML                  <===========>  أسهل طريقة للحصول على محتوى عنصر ما هي باستخدام الخاصية .
// getElementsByClassName()   <===========>  class   الوصول الي العنصر عن طريق ال 
// querySelector()            <===========>  تمكنك من الوصول الي اي عنصر    (id, class names, types, attributes, values of attributes,)
// querySelectorAll()         <===========>  tags  تمكنك من الوصول الي مجموع من العناصر لديه نفس الاسم     (id, class names, types, attributes, values of attributes,)
// document.titel             <===========>  الوصول الي اي عنصر رئيسي في الصفحه والوصول الي العناصر الذاخيليه في العنصر
// innerText                  <===========>  تقوم الخاصية بتعيين أو إرجاع المحتوى النصي للعنصر.
// textContent                <===========>  تقوم الخاصية بتعيين أو إرجاع المحتوى النصي للعقدة المحددة وجميع العناصر التابعة لها .
// innerHTML                  <===========>   Html  ارجع عناصر ال 
// getAttribute()             <===========>  تقوم الطريقة بإرجاع قيمة سمة العنصر.
// setAttribute()             <===========>  اضافة او يعين قيمة جديدة للسمة.
// setAttributeNode()         <===========>  يستبدل الأسلوب كائنات السمة.
// hasAttribute() false  true <===========>  تستهدم كاشرط او التحقق اذا ما كانت السمة موجودة ، وإلا .لا
// removeAttribute()          <===========>  الأسلوب يزيل سمة من عنصر.
// createElement()            <===========>  الطريقة تنشئ عنصر.جديد
// createAttribute()          <===========>  تقوم الطريقة بإنشاء سمة وإرجاع السمة ككائن Attr.
// createComment()            <===========>  تقوم الطريقة بإنشاء تعليق وإرجاع عقدة التعليق.
// createTextNode()           <===========>  الطريقة تنشئ عقدة نصية.يمكن اضافتها في اي وقت
// appendChild()              <===========>  تقوم الطريقه باضافة عنصر الي اخر
// children                   <===========>  تقوم الخاصية بإرجاع مجموعة من العناصر الفرعية للعنصر.
// children                   <===========>  HTMLCollection تقوم الخاصية بإرجاع كائن  
// childNodes[0]                  ====       firstChild. 
// childNodes                 <===========>  تقوم الخاصية بإرجاع مجموعة (قائمة) من العقد الفرعية للعناصر.  المسافة البيضاء بين العناصر هي أيضًا عُقد نصية.
// onclick                    <===========>  يقع الحدث عندما ينقر المستخدم على عنصر  
// oncontextmenu              <===========>  يقع الحدث عندما ينقر المستخدم بزر الماوس الأيمن فوق عنصر  لفتح قائمة السياق.
// currentTarget              <===========>  تقوم الخاصية بإرجاع العنصر الذي قام مستمع الحدث الخاص به بتشغيل الحدث.
// ondragleave                <===========>  يحدث هذا  الحدث عندما يترك التحديد القابل للسحب هدف الإسقاط .
// ondragover                 <===========>  يحدث هذا  الحدث عندما يتم سحب تحديد قابل للسحب فوق الهدف .
// ondragend                  <===========> يحدث هذا الحدث عندما ينتهي المستخدم من سحب التحديد
// ondragstart                <===========>  يحدث هذا الحدث عندما يبدأ المستخدم في سحب التحديد .
// onmouseenter               <===========>  يقع الحدث عندما يدخل مؤشر الماوس عنصرًا .
// onmouseleave               <===========>  يقع الحدث عندما يترك مؤشر الماوس عنصرًا .
// onscroll                   <===========>  يقع حدث  عندما يتم تمرير شريط تمرير أحد العناصر.
// onresize                   <===========>  يقع حدث  عندما يتم تغيير حجم نافذة المتصفح.
// onfocus                    <===========>  يقع الحدث عندما يتم التركيز على عناصر.الاذخال
// onblur                     <===========>  غالبًا ما يتم استخدام الحدث مع التحقق من صحة النموذج (عندما يترك المستخدم حقل نموذج).
// onsubmit                   <===========>  يقع حدث عند إرسال نموذج.
// PreventionDefault()        <===========>  تلغي طريقة  الحدث إذا كان قابلاً للإلغاء ، مما يعني أن الإجراء الافتراضي الذي ينتمي إلى الحدث لن يحدث.
// classList                  <===========>   CSS   تقوم الخاصية بإرجاع أسماء فئات  للعنصر.
//                    contains()  =====   Returns true if the list contains a class                               
//                       length   =====   Returns the number of tokens in the list
//                      remove()  =====	  Removes one or more tokens from the list   
//                         add()  =====   Adds one or more tokens to the list
//                      toggle()  =====	  Toggles between tokens in the list يزيل االكلاس اذا موجو ويضفه اذا لم يكن موجود
//                        item()  =====   تقوم الطريقة بإرجاع الرمز المميز في فهرس محدد في قائمة DOMTokenList .
// className                  <===========>  تقوم الخاصية بتعيين أو إرجاع سمة فئة العنصر.
//
// CSSs.style.cssText         <===========>  تقوم الخاصية بسمح بكتابة جميع تنسيقات العنصر في سطر واحد .
// removeProperty ()          <===========>  css تزيل الطريقه اي عنصر تنسيق
// setProperty ()             <===========>  css اضافتة تنسيقات
// fontSize : 80px ;  kamalCaes  نكتب التنسيقات بدون فواصل بنطام 
// vers.after("Hallo ALaeddin");   <===========> اضافة نص بعد العنصر
// vers.before("Hallo ALaeddin");  <===========> اضافة نص قبل العنصر
// vers.append("Hallo ALaeddin");  <===========>  اضافة نص الي العنصر في النهايه
// vers.prepend("Hallo ALaeddin"); <===========>  اضافة نص الي العنصر في البدايه
// vers.Remove("Hallo ALaeddin");  <===========>  مسح العنصر من الجذور
// nextSibling                  <===========>  تقوم الخاصية بإرجاع العقدة التالية على نفس مستوى الشجرة.
// nextElementSibling           <===========>  تقوم الخاصية بإرجاع العنصر التالي في نفس مستوى الشجرة.
// previousSibling              <===========>  تقوم الخاصية بإرجاع العقدة السابقة على نفس مستوى الشجرة.
// previousElementSibling       <===========>  تقوم الخاصية بإرجاع العنصر السابق في نفس مستوى الشجرة.
// parentElement                <===========>  تقوم الخاصية  بإرجاع العنصر الأصل للعنصر المحدد.
// cloneNode()                  <===========>  الطريقة تنشئ نسخة من عقدة ، وتعيد النسخة.
// cloneNode(true)                  =====        اذا  كنت تريد استنساخ الأحفاد (الأطفال).
// cloneNode(False)                 =====        اذا  كنت تريد استنساخ  (العنصر فقط التنسيقات والاحفاد).
// addEventListener()           <===========> EventTarget  تقوم طريقة الواجهة بإعداد وظيفة سيتم استدعاؤها كلما تم تسليم الحدث المحدد إلى الهدف.
// scrollHeight  <===========>       تُرجع الخاصية  ارتفاع الصفحه بما في ذلك المساحة المتروكة ، ولكن باستثناء الحدود أو أشرطة التمرير أو الهوامش.
// clientHeight  <===========>        تعرض الخاصية  الارتفاع القابل للعرض  بالبكسل ، بما في ذلك المساحة المتروكة ، ولكن ليس الحد أو شريط التمرير أو الهوامش.


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////




// #102 - What Is BOM?
// #103 - Alert, Confirm, Prompt
// #104 - setTimeout and clearTimeout
// #105 - setInterval and clearInterval
// #106 - Window Location Object
// #107 - Window Open And Close
// #108 - Window History Object
// #109 - Scroll, ScrollTo, ScrollBy, Focus, Print, Stop
// #110 - Scroll To Top Using Y Practice
// #111 - Local Storage
// #112 - Local Storage Color Application Practice
// #113 - Session Storage And Use Cases
// #114 - BOM Challenge



// BOM                <===========>  The Browser Object Model
// window             <===========>    الكائن مدعوم من قبل جميع المتصفحات. يمثل نافذة المتصفح.
// window.moveTo()    <===========>    حرك النافذة الحالية
// window.resizeTo()  <===========>    تغيير حجم النافذة الحالية
// window.ALert()     <===========>    ينبثق مربع تنبيه
// window.Confirm ()  <===========>    غالبًا ما يتم استخدام مربع التأكيد إذا كنت تريد أن يقوم المستخدم بالتحقق من شيء ما أو قبوله.
// window.prompt()    <===========>    غالبًا ما يتم استخدام مربع المطالبة إذا كنت تريد أن يقوم المستخدم بإدخال قيمة قبل إدخال الصفحة.
// www.sweetalert2.com  Alert <===========>  مكتبة قوالب جاهزه
// Timing Events      <===========> window    يسمح الكائن بتنفيذ التعليمات البرمجية في فترات زمنية محددة.
// setTimeout()       <===========>  تنفد وظيفة بعد انتظار عدد محدود من الوقت .لكنه يكرر تنفيذ الوظيفة بشكل مستمر.
// clearTimeout()     <===========>  توقف الطريقة عن تنفيذ الوظيفة المحددة في setTimeout ().
// setTimeout(function, milliseconds)ينفذ وظيفة بعد انتظار عدد محدد من المللي ثانية.
// 1000       <===========>    ثانية واحدة
// setInterval()      <===========>    تكرر الطريقة وظيفة معينة في كل فترة زمنية معينة.
// clearInterval()    <===========>    توقف الطريقة عمليات تنفيذ الوظيفة المحددة في طريقة setInterval ().
// window.location    <===========>    يمكن استخدام الكائن للحصول على عنوان الصفحة الحالية وإعادة توجيه المتصفح إلى صفحة جديدة.
// window.location.href      <===========> يسترجع  href (URL) للصفحة الحالية 
// window.location.hostname  <===========> إرجاع اسم المجال لمضيف الويب
// window.location.pathname  <===========> إرجاع مسار واسم ملف الصفحة الحالية
// window.location.protocol  <===========> يعرض بروتوكول الويب المستخدم (http: أو https :)
// window.location.assign()  <===========> يقوم بتحميل مستند جديد وتجد الاصلي في تاربخ التصفح
// window.location.port      <===========> تقوم الخاصية بإرجاع رقم منفذ مضيف الإنترنت (للصفحة الحالية).
// reload()                  <===========> الطريقة تعيد تحميل المستند الحالي.
// location.hash()           <===========> تقوم الخاصية بتعيين أو إرجاع جزء الارتساء من عنوان URL ، بما في ذلك علامة التجزئة (#).
// replace()                 <===========> تستبدل الطريقة المستند الحالي بآخر جديد. ولكن لن تجد الموقع الذي تم استبداله في تاريخ التصفح 
// With replace() it is not possible to use "back" to navigate back to the original document.
// window.open()-     <===========>    افتح نافذة جديدة
// URL	        Optional.
//              The URL of the page to open.
//              If no URL is specified, a new blank window/tab is opened
// name         Optional.
//              The target attribute or the name of the window.
//              The following values are supported:
// _blank	    URL is loaded into a new window, or tab. This is the default
// _parent	    URL is loaded into the parent frame
// _self	    URL replaces the current page
// _top	        URL replaces any framesets that may be loaded
// name	        The name of the window (does not specify the title of the window)
// window.close()     <===========>   أغلق النافذة الحالية
// window.history     <===========>   يحتوي الكائن على محفوظات المستعرضات.
// history.back()     <===========>   URL تقوم الطريقة بتحميل عنوان السابق في قائمة المحفوظات.
// history.forward()  <===========>   URLتقوم الطريقة بتحميل عنوان  التالي في قائمة المحفوظات.
// stop()             <===========>   الطريقة توقف تحميل النافذة.
// stop()             <===========>   يمكن استخدام الطريقة لإيقاف تحميل صورة إذا استغرق الأمر وقتًا طويلاً.
// print()            <===========>   تقوم طريقة  بطباعة محتويات النافذة الحالية.
// focus()            <===========>   الطريقة تحدد التركيز على النافذة.
// scrollTop          <===========>    تقوم الخاصية بتعيين أو إرجاع عدد وحدات البكسل التي يتم تمرير محتوى العنصر فيها رأسيًا.
// scrollBy()         <===========>   تقوم الطريقة بتمرير المستند بعدد وحدات البكسل المحدد.
// scrollX            <===========>   تقوم الخاصية بإرجاع وحدات البكسل التي تم تمرير المستند إليها من الزاوية اليسرى العليا من النافذة.
// scrollY            <===========>   تقوم الخاصية بإرجاع وحدات البكسل التي تم تمرير المستند إليها من الزاوية اليسرى العليا من النافذة.
// scrollTo()         <===========>   تقوم الطريقة بتمرير المستند إلى الإحداثيات المحددة.
// pageXOffset        <===========>   تقوم الخاصية بإرجاع وحدات البكسل التي تم تمرير المستند إليها من الزاوية اليسرى العليا من النافذة.
// pageYOffset        <===========>   تقوم الخاصية بإرجاع وحدات البكسل التي تم تمرير المستند إليها من الزاوية اليسرى العليا من النافذة.
// onscroll           <===========>   يقع حدث  عندما يتم تمرير شريط تمرير أحد العناصر.
// localStorage       <===========>   يسمح لك الكائن بحفظ أزواج المفتاح / القيمة في المتصفح.// لا يتم حذف البيانات عند إغلاق المتصفح ، وتكون متاحة للجلسات المستقبلية.
// .setItem(key, value); <====>  حفظ البيانات في التخزين المحلي
// .getItem(keyname)     <====>  ترجع طريقة  قيمة عنصر كائن التخزين المحدد.
// .clear()              <====>  قم بإزالة كافة عناصر التخزين المحلية:
// .removeItem("mytime") <====>  قم بإزالة عنصر التخزين المحلي المحدد:
// .key(index)           <====>  ترجع طريقة اسم المفتاح بالفهرس المحدد.
// sessionStorage    <===========>  يتيح لك الكائن تخزين أزواج المفتاح / القيمة في المتصفح.الكائن يخزن البيانات لجلسة واحدة فقط.
// .setItem(key, value); <====>  حفظ البيانات في التخزين المحلي
// .getItem(keyname)     <====>  ترجع طريقة  قيمة عنصر كائن التخزين المحدد.
// .clear()              <====>  قم بإزالة كافة عناصر التخزين المحلية:
// .removeItem("mytime") <====>  قم بإزالة عنصر التخزين المحلي المحدد:
// .key(index)           <====>  ترجع طريقة اسم المفتاح بالفهرس المحدد.



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// #115 - Destructuring Arrays Part 1
// #116 - Destructuring Arrays Part 2
// #117 - Destructuring Arrays Part 3 - Swap Variables
// #118 - Destructuring Objects Part 1
// #119 - Destructuring Objects Part 2
// #120 - Destructuring Function Parameters
// #121 - Destructuring Mixed Content
// #122 - Destructuring Challenge
// Destructuring  <===========>  لتوضيح التدمير ، سنصنع شطيرة. هل تخرج كل شيء من الثلاجة لعمل شطيرة؟ لا ، ما عليك سوى إخراج العناصر التي ترغب في استخدامها في شطيرة الخاص بك.


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


// #123 - Set Data Types And Methods
// #124 - Set vs WeakSet And Garbage Collector
// #125 - Map Data Type Vs Object
// #126 - Map Methods
// #127 - Map Vs WeakMap
// #128 - Array.from Method
// #129 - Array.copyWithin
// #130 - Array.some Method
// #131 - Array.every Method
// #132 - Spread Syntax And Use Cases
// #133 - Map And Set Challenge

// new Set()	<===========>    Creates a new Set
// add()	    <===========>    Adds a new element to the Set
// delete()	    <===========>    Removes an element from a Set
// has()	    <===========>    Returns true if a value exists in the Set
// forEach()	<===========>    Invokes a callback for each element in the Set
// values()	    <===========>    Returns an iterator with all the values in a Set
// Property	    <===========>    Description
// size	        <===========>    Returns the number of elements in a Set

// Array.from() <===========>   تقوم الطريقة بإرجاع مصفوفة من أي كائن بخاصية الطول.

// Array.from() <===========>   تقوم الطريقة بإرجاع مصفوفة من أي كائن قابل للتكرار.

// Array.copyWithin()   <===========>   تقوم الطريقة بنسخ عناصر المصفوفة إلى موضع آخر في المصفوفة.
// Array.copyWithin()   <===========>   الطريقة بالكتابة فوق القيم الموجودة.
// Array.copyWithin()   <===========>   لا تضيف الطريقة عناصر إلى المصفوفة.

// target	Required.
// The index (position) to copy the elements to.

// start	Optional.
// The start index (position). Default is 0.

// end	Optional.
// The end index (position). Default is the array length.

// Array.some() <===========>  يتحقق هذا الأسلوب من اجتياز أي من عناصر المصفوفة للاختبار (يتم توفيره كدالة رد نداء).

// Array.some() <===========>  الطريقة تنفذ وظيفة رد الاتصال مرة واحدة لكل عنصر من عناصر الصفيف.

// Array.some() <===========>  تقوم الطريقة بإرجاع true(وتوقف) إذا عادت الدالة trueلأحد عناصر المصفوفة.

// Array.some() <===========>  ترجع هذه الطريقة falseإذا كانت الدالة ترجع falseلجميع عناصر المصفوفة.

// Array.some() <===========>  لا تقوم الطريقة بتنفيذ الوظيفة لعناصر الصفيف الفارغة.

// Array.some() <===========>  الطريقة لا تغير المصفوفة الأصلية.

// Array.some() Required to work

// function	Required.
// A function to run for each array element.

// Function parameters:
// value	Required.
// The value of the current element.

// index	Optional.
// The index of the current element.

// arr	Optional.
// The array the current element belongs to.

// this	Optional. Default undefined.
// A value passed to the function to be used as its "this" value.


// every()   <===========>   الطريقة تنفذ وظيفة لكل عنصر من عناصر المصفوفة.

// every()   <===========>   true  ترجع هذه الطريقة إذا كانت الدالة ترجع صحيحًا لجميع العناصر.

// every()   <===========>   false ترجع الطريقة إذا كانت الوظيفة ترجع خطأ لعنصر واحد.

// every()   <===========>   الطريقة لا تنفذ الوظيفة للعناصر الفارغة.

// every()   <===========>   الطريقة لا تغير المصفوفة الأصلية

// every() Required to work

// function()	Required.
// A function to be run for each element in the array.

// currentValue	Required.
// The value of the current element.

// index	Optional.
// The index of the current element.

// arr	Optional.
// The array of the current element.

// thisValue	Optional. Default undefined.
// A value passed to the function as its this value.

// ( ...)  <===========>  يسمح لنا عامل تشغيل جافا سكريبت  بنسخ كل أو جزء من مصفوفة أو كائن موجود إلى مصفوفة أو كائن آخر.

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// #134 - Intro And What Is Regular Expression
// #135 - Regular Expressions - Modifiers
// #136 - Regular Expressions - Ranges Part 1
// #137 - Regular Expressions - Ranges Part 2
// #138 - Regular Expressions - Character Classes Part 1
// #139 - Regular Expressions - Character Classes Part 2
// #140 - Regular Expressions - Quantifiers Part 1
// #141 - Regular Expressions - Quantifiers Part 2
// #142 - Regular Expressions - Quantifiers Part 3
// #143 - Regular Expressions - Replace With Pattern
// #145 - Test Your Regular Expressions And Discussions
// #146 - Regular Expressions - Challenge

// التعبير العادي هو سلسلة من الأحرف التي تشكل نمط بحث 
// عندما تبحث عن بيانات في نص ، يمكنك استخدام نمط البحث هذا لوصف ما تبحث عنه.
// يمكن أن يكون التعبير العادي حرفًا واحدًا أو نمطًا أكثر تعقيدًا.
// يمكن استخدام التعبيرات العادية لإجراء جميع أنواع عمليات البحث عن النص واستبدال النص .
//: search()و replace().    غالبًا ما تُستخدم التعبيرات العادية مع طريقتي السلسلة 
// search()    <===========>  تبحث الطريقة في سلسلة لقيمة محددة وتعيد موضع المطابقة:
// replace()   <===========>  يستبدل الأسلوب قيمة محددة بقيمة أخرى في سلسلة:
// pattern     <===========>  /نضع نص البحث هنا/
// match()     <===========>  تتطابق هذه الطريقة مع سلسلة مع تعبير عادي **
// match()     <===========>  تقوم الطريقة بإرجاع مصفوفة بالمطابقات.
// match()     <===========>  ترجع الطريقة فارغة إذا لم يتم العثور على تطابق.

// Modifiers:

// /pattern/i   <===========>  تقوم بإجراء بحث غير حساس لحالة الأحرف  في سلسلة:
// /pattern/g   <===========>  تقوم ببحث عام شامل 
// /pattern/gi  <===========>  "i" مع مُعدِّل g لإجراء بحث شامل غير حساس لحالة الأحرف ، استخدم المُعدِّل .
// /pattern/m   <===========>  لاجراء بحث علي اكثر من سطر
// /pattern/igm <===========>  لإجراء بحث شامل غير حساس لحالة الأحرف ، استخدم 
// يحدد المعدل "m" تطابق متعدد الأسطر .

// ranges : 

// (x | y)  <===========>  بحث عام عن احرف او قيم معينه من |الي
// [0-9]    <===========>  يستخدم التعبير  للبحث عن أي حرف بين الأقواس.
// [^0-2]   <===========>  استخدم التعبير  للبحث عن أي رقم ليس بين القوسين.
// [A-Z]    <===========>  قم ببحث شامل عن امتداد الأحرف الكبيرة
// [^A-Z]   <===========>  قم ببحث شامل بستثناء الأحرف الكبيرة
// [a-z]    <===========>  قم ببحث شامل عن امتداد الأحرف الصغيره
// [^a-z]   <===========>  قم ببحث شامل بستثناء الأحرف الصغيره
// [abc]    <===========>  يستخدم التعبير  للبحث عن أي حرف بين الأقواس.
// [^abc]   <===========>  استخدم تعبير  للبحث عن أي حرف ليس بين القوسين. 

// Metacharacters class:
// /./      <===========> ماتش كل العناصر او يستخرج كل العناصر
// / \w /g; <===========> بحث عالمي عن أحرف الكلمات:
// / \W /g; <===========> بحث عالمي عن اي عنصر بستثناء حروف الكلمات:
// / \b /g; <===========> بحث عن قيمه تبدا بي احرف معبنه
// / \B /g; <===========> بحث عن قيمه تنتهي بي احرف معبنه
// / \d /g; <===========> بحث عالمي عن الأرقام:
// / \D /g; <===========> بحث عالمي عن القيم التي ليست حروف:
// test ()  <===========> تختبر طريقة  تطابقًا في سلسلة.إذا عثرت على تطابق ، فإنها ترجع صحيحة ، وإلا فإنها ترجع خطأ.

// Quantifiers : 

// /\w + /g    <===========>    تقوم بعملية تخطي القيم حتي الوصول الي القيمه المطلوبه في البحث
// /\w * /g    <===========>    تقوم ببحث شامل عن قيمه متبوعه بقيمه اخري او اكثر او لا 
// /10? /g;    <===========>   قم بإجراء بحث شامل عن "1" متبوعًا بصفر أو حرف "0" واحد:
// /\d{4}/g;   <===========>   بحث شامل عن سلسلة فرعية تحتوي على تسلسل من أربعة أرقام
// /\d{3,4}/g  <===========>   بحث شامل عن سلسلة فرعية تحتوي على تسلسل من ثلاثة إلى أربعة أرقام:
// /\d{3,}/g;  <===========>   بحث شامل عن سلسلة مكونة من ثلاثة أرقام على الأقل:
// / is$ /;    <===========>   البحث عن "هو" في نهاية السلسلة: هل ينتهي االنص بحرف معين
// /^Is /g;    <===========>   هل يبدا النص بحرف معين  "Is"بحث شامل عن  في بداية سلسلة:
// /(is?=all)/g;  <===========>   البحث عن "هو" متبوعًا بكلمة "الكل":


// تبحث الطريقة replace()في سلسلة عن قيمة أو تعبير عادي.

// تقوم الطريقة replace()بإرجاع سلسلة جديدة مع استبدال القيمة (القيم).

// الطريقة replace()لا تغير السلسلة الأصلية.

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// #159 - Date And Time Introduction
// #160 - Get Date And Time
// #161 - Set Date And Time
// #162 - Formatting Date And Time
// #163 - Tracking Operations Time
// #164 - Generator Function Introduction
// #165 - Delegate Generator Function
// #166 - Generate Infinite Numbers
// #167 - Modules Import And Export
// #168 - Named vs Default Export And Import All

// new Date() <===========>   يتم إنشاء كائنات التاريخ باستخدام .
// new Date() <===========>   إرجاع كائن تاريخ بالتاريخ والوقت الحاليين.
// getFullYear()	   <===========> تُرجع الطريقة سنة التاريخ كرقم مكون من أربعة أرقام:
// getMonth()	       <===========> تُرجع الطريقة شهر التاريخ كرقم (0-11).
// getDate()	       <===========> تُرجع الطريقة يوم التاريخ كرقم (1-31):
// getDay()	           <===========> تُرجع الطريقة يوم الأسبوع للتاريخ كرقم (0-6).
// getHours()	       <===========> تُرجع الطريقة ساعات التاريخ كرقم (0-23):
// getMinutes()	       <===========> تُرجع الطريقة دقائق التاريخ كرقم (0-59):
// getSeconds()	       <===========> تُرجع الطريقة الثواني من التاريخ كرقم (0-59):    
// getMilliseconds()   <===========> تقوم الطريقة بإرجاع المللي ثانية من التاريخ كرقم (0-999):   
// getTime()	       <===========> يُرجع الأسلوب عدد المللي ثانية منذ 1 يناير 1970:
// Date.now()          <===========> تُرجع عدد المللي ثانية منذ 1 يناير 1970.   

// SetFullYear()	   <===========> تحدد الطريقة سنة كائن التاريخ. :
// SetMonth()	       <===========> تحدد الطريقة شهر التاريخ كرقم (0-11).
// SetDate()	       <===========> تحدد الطريقة يوم التاريخ كرقم (1-31):
// SetDay()	           <===========> تحدد الطريقة يوم الأسبوع للتاريخ كرقم (0-6).
// SetHours()	       <===========> تحدد الطريقة ساعات التاريخ كرقم (0-23):
// SetMinutes()	       <===========> تحدد الطريقة دقائق التاريخ كرقم (0-59):
// SetSeconds()	       <===========> تحدد الطريقة الثواني من التاريخ كرقم (0-59):    
// SetMilliseconds()   <===========> تحدد الطريقة  المللي ثانية من التاريخ كرقم (0-999):   
// SetTime()	       <===========> تحدد الأسلوب عدد المللي ثانية منذ 1 يناير 1970:
// Date.parse()        <===========> إذا كانت لديك سلسلة تاريخ صالحة ، فيمكنك استخدام الطريقة لتحويلها إلى مللي ثانية.

// There are generally 3 types of JavaScript date input formats:

// Type	         <===========>   Example
// ISO Date      <===========>   "2015-03-25" (The International Standard)
// Short Date    <===========>   "03/25/2015"
// Long Date     <===========>   "Mar 25 2015" or "25 Mar 2015"

// The ISO format follows a strict standard in JavaScript.

// function*     <===========>  تسمي كائنات وظائف المولد المولدات لي إنشاء مولد ، تحتاج أولاً إلى تحديد وظيفة المولد برمز
// yield         <===========>  يتم استخدام عامل الغلة لإيقاف وظيفة المولد مؤقتًا واستئنافها.
// next()	     <===========>  ترجع قيمة العائد
// return()	     <===========>  إرجاع قيمة وإنهاء المولد
// throw()	     <===========>  يرمي خطأ وينهي المولد

// import        <===========>  يتم استيراد الوحدات النمطية من الملفات الخارجية مع البيان.
// <script type="module"> <===========>  تعتمد الوحدات النمطية أيضًا على علامة 
// import *      <===========>  تصدير كل العناصر من الملف

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//  #169 - What Is JSON 
//  #171 - What Is API
//  #172 - Parse And Stringify
//  #173 - Asynchronous vs Synchronous Programming
//  #174 - Call Stack And Web API
//  #175 - Event Loop And Callback Queue
//  #176 - What Is AJAX And Network Information
//  #177 - Request And Response From Real API
//  #178 - Loop On Data
//  #179 - Callback Hell Or Pyramid Of Doom
//  #180 - Promise Intro And Syntax
//  #181 - Promise - Then, Catch And Finally
//  #182 - Promise And XHR
//  #183 - Fetch API
//  #184 - Promise All And All Settled And Race
//  #185 - Async And Training
//  #186 - Await And Training
//  #187 - Try, Catch And Finally With Fetch
// #188 - The End And Advices          09/04/2023

// JSON <===========> Java Script Object Notation
// JSON هو تنسيق خفيف لتبادل البيانات
// JSON هو نص عادي مكتوب بتدوين كائن JavaScript
// JSON <===========> يستخدم  لإرسال البيانات بين أجهزة الكمبيوتر
// JSON مستقلة عن اللغة *
// In JSON, string values must be written with double quotes:

// JSON.parse ()  <===========> تقوم طريقة  بتوزيع سلسلة وإرجاع كائن .
// JSON.parse ()  <===========> يمكن للأسلوب  اختياريًا تحويل النتيجة باستخدام دالة.
// JSON.stringify () <===========>  تقوم طريقة بتحويل كائنات  إلى سلاسل.
// Synchronous    <===========>  يعني التزامن أن الكود يعمل في تسلسل معين من التعليمات الواردة في البرنامج  ينتظر كل أمر التعليمات السابقة لإتمام تنفيذه.
// Asynchronous   <===========>  تسمى الوظائف التي تعمل بالتوازي مع وظائف أخرى غير متزامنة
// API  <===========>   Application Programming Interface 
// واجهة برمجة تطبيقات الويب هي واجهة برمجة تطبيقات للويب.
// يمكن لواجهة برمجة تطبيقات المتصفح أن توسع وظائف متصفح الويب.
// API يمكن لخادم  توسيع وظائف خادم الويب.
// AJAX  <===========>  Asynchronous JavaScript And XML.
// AJAX  <===========>  قراءة البيانات من خادم الويب - بعد تحميل الصفحة
// AJAX  <===========>  تحديث صفحة الويب دون إعادة تحميل الصفحة
// AJAX  <===========>  إرسال البيانات إلى خادم الويب - في الخلفية

// JavaScript Promise   <===========>  يحتوي كائن  على كل من التعليمات البرمجية المنتجة واستدعاءات الشفرة المستهلكة:

// Promise Object Properties
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.
// Promise.then () <===========>  تأخذ حجتين ، رد اتصال للنجاح وأخرى للفشل.
// كلاهما اختياري ، لذا يمكنك إضافة رد اتصال للنجاح أو الفشل فقط.
// Promise.all()  <===========>  تأخذ الطريقة قائمة بالوعود كمدخل وتعيد وعدًا واحدًا.
// Promise.all()  <===========>  ترفض الطريقة عند رفض أي من وعود الإدخال. ستعيد الطريقة الوعد المرفوض مع رسالة / خطأ الوعد المرفوض الأول.
// سيتم حل الوعد المرتجع بمجرد حل جميع الوعود التي تم تمريرها كمدخلات.
// Promise.allSettled(promises)  <===========>  هي وظيفة مساعدة تقوم بتنفيذ الوعود بالتوازي وتجمع الحالات المستقرة (سواء تم الوفاء بها أو رفضها) في مصفوفة نتيجة.
// Promise.allSettled(promises)  <===========>  يتيح لك تنفيذ الوعود بالتوازي وجمع الحالات (سواء تم الإيفاء بها أو الرفض) في مصفوفة مجمعة.
// Promise.allSettled(...)       <===========>  يعمل بشكل رائع عندما تحتاج إلى إجراء عمليات غير متزامنة متوازية ومستقلة وجمع كل النتائج حتى إذا فشلت بعض العمليات غير المتزامنة.
// Promise.allSettled()          <===========>  التحدي: هل تعرف الحالات التي ترد فيها الوعد المرفوض؟ إذا كان الأمر كذلك ، يرجى كتابة تعليق أدناه!

// fetch()    <===========>  تبدأ الطريقة عملية إحضار مورد من الخادم.
// The Fetch API interface allows web browser to make HTTP requests to web servers.
// fetch()    <===========>  تقوم الطريقة بإرجاع وعد يحل إلى كائن استجابة.
// try()      <===========>  تحدد العبارة كتلة التعليمات البرمجية المراد تشغيلها .
// catch()    <===========>  تحدد العبارة كتلة رمز للتعامل مع أي خطأ
// finally()  <===========>  تحدد العبارة كتلة التعليمات البرمجية ليتم تشغيلها بغض النظر عن النتيجة
// async      <===========>   makes a function return a Promise
//      "async and await make promises easier to write"
// await      <===========>   makes a function wait for a Promise
// throw  <===========>  بإنشاءتسمح لك العبارة  خطأ مخصص.
// await  <===========> async لا يمكن استخدام الكلمة الأساسية إلا داخل دالة .
// await  <===========>   تجعل الكلمة الأساسية الوظيفة توقف التنفيذ مؤقتًا وتنتظر وعدًا تم حله قبل أن يستمر:
// you can catch a rejected promise inside try/catch.


// Event use to 
// عندما ينقر المستخدم على الماوس
// عندما يتم تحميل صفحة ويب
// عندما تم تحميل الصورة
// عندما يتحرك الماوس فوق عنصر
// عندما يتم تغيير حقل الإدخال
// عندما يتم تقديم نموذج HTML
// عندما يضغط المستخدم على مفتاح

// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections





//////////////////////////////////////////////////////////////////////////////////////

//  معاني اختصارات بعض الكلمات 

// API  <===========>  application programming interface   <===========>    تصبيق برنامج واجهة المستخدم
// ES6  <===========>  ECMAScript 6                        <===========>    js مرجع المعاير لي 

// Math.min()ويمكن Math.max()استخدامها للعثور على أدنى أو أعلى قيمة في قائمة الوسيطات:



// Did You Know?
// As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

// Use string literals "" instead of new String().

// Use number literals 50 instead of new Number().

// Use boolean literals true / false instead of new Boolean().

// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().





// 09/04/2023











