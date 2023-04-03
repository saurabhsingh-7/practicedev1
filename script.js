
const pt=document.getElementsByClassName("list-group-item");
console.log(pt[2]);
pt[2].style.backgroundColor="green";
const pt=document.getElementsByClassName("normal");
pt.style.backgroundColor="red";
const pt1=document.getElementsByTagName("li");
pt1[4].innerText="saurabh";
pt1[4].style.backgroundColor="red";

    const listItems = document.querySelectorAll(".list-group-item");
    listItems[1].style.color = "green";

    // const xyz=document.getElementById("header-title");
    // const helloWorld1 = document.createElement("li");
    // x.querySelector(".header-title").innerHTML = "Hello World!";
    // helloWorld1.textContent = "Hello word";
    // xyz.before(helloWorld1);
    var newDiv = document.createElement('div');
    newDiv.className = 'hello';
    newDiv.id ='hello1';
    var newDivText =document.createTextNode('hello world');
    newDiv.appendChild(newDivText);
    var container = document.querySelector('header,container');
    var h1=document.querySelector('header h1');
    container.insertBefore(newDiv,h1);
    var x;
    var y;

    var z;
    var m;
    
