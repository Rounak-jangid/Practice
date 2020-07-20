// var x=5, 
// y=6,
// z=x+y;
// console.log(z);
// x += 6;
// console.log(x);
// y += 5;
// console.log(y);

// document.getElementById("content").innerHTML=x+y+3;

// var carName = ["Volvo","BMW","Audi","Mercedes"];
// document.querySelector("#content").innerHTML=carName;

// x++;
// alert(x);

// var a=5;
// var b=5;
// var c=6;

// console.log((a==b));
// console.log((a==c));

// function myFunction(x,y) {
//     return x%y; //the function returns the remainder 
// }

// console.log(myFunction(9,2));

// function myFunc(a,b) {
//     return a*b;
//   }
  
//   var x=myFunc(4,3);
//   console.log(x);

// function displayDate() {
//     document.querySelector("button").innerHTML = Date();
// }

// var txt = "abcdefghijklmnopqrstuvwxyz";
// var sln = txt.substr(0);
// console.log(sln);

// var str = "Hello Microsoft";
// document.querySelector("button").innerHTML = str;

// function replace() {
//     var n = str.replace(/Microsoft/g , "Rounak");
//     var text1 = n.toUpperCase();
//     document.querySelector("button").innerHTML = text1;
// }

// var str = "          Hello World!";
// alert(str.trim());


// function fruits() {

//     var fruits, text, flen;
//     fruits = ["Banana", "Apple", "Orange", "Mango", "Lemon"];
//     flen = fruits.length;

//     fruits[fruits.length]="Kiwi";
//     text = "<ul>";
//     for ( var i =0; i<flen; i++) {
//         text += "<li>" + fruits[i] + "</li>";
//     }

//     text += "</ul>";
    
//     document.querySelector("#content").innerHTML = text;
// }


function myFunc() {
    var x, text;
    x= Number(document.getElementById("cel").value);
    y=(x*9/5)+32;
    if (isNaN(x)) {
        y = "Input is not a number";
    }

    document.getElementById("demo").innerHTML = y;
}

function triGno() {
    var a,b,text1;
    x=document.getElementById("angle").value;
    y=Math.sin(x*Math.PI/180);

    document.getElementById("demo1").innerHTML = y;
}

// function greeting() {
    var greeting;
    var time = new Date().getHours();
    var time_min = new Date().getMinutes();
    var day;

    if ( time < 12) {
        greeting = "Hello Everyone! <br> Good Morning";
    } else if (time < 20) {
        greeting = "Hello Everyone! <br> Good Day";
    } else {
        greeting = "Hello Everyone! <br> Good Evening";
    }

    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    document.querySelector("#title").innerHTML = greeting + " " + day + " " + time + ":" + time_min;
// }