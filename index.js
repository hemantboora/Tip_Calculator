const btn=document.getElementById("btn");
btn.addEventListener("click",myfun);

function myfun(){
    let bill=document.getElementById("bill").value;
    let tip=document.getElementById("tip").value;
    let person=document.getElementById("person").value;
    bill=Number(bill);
    tip=Number(tip);
    person=Number(person);
    let totalBill=((bill*tip)/100)+bill;
    
    let perPerson=(bill*(tip/100))/person;
    document.getElementById("tipPerPerson").value="Tip "+perPerson+" Rs";
    
    let billPerPerson=totalBill/person;
    document.getElementById("totalBillPerPerson").value="Bill Per Head "+billPerPerson+" Rs";
    
    
    document.getElementById("TotalOutput").value="TotalBill "+totalBill+" Rs";
}

