let bill=document.getElementById("bill").value;
let tip=document.getElementById("tip").value;
let person=document.getElementById("person").value;


const btn=document.getElementById("btn");
btn.addEventListener("click",myfun);

function myfun(){
    alert("hello");
    alert(bill);
    alert(tip);alert(person)
    console.log(bill);
    console.log(tip);
    console.log(person);
}

