//stepwiswe analysis in comment section see below
const form=document.getElementById("form");
const tbody=document.getElementById("tbody");
//step2)create array
const arr=[];

form.addEventListener("submit",(event)=>{
    event.preventDefault(); //compuslrot to avoid refresh otherwise values unable to capture 
    let employe = 
      {
        empName: event.target.name.value,
        empEmail: event.target.email.value,
        empId: event.target.empId.value,
        empCompany: event.target.company.value,
        empDesignation: event.target.designation.value,
      };
     // step3) check array first before adding to out table
      for(let i=0;i<arr.length;i++){
        if(arr[i].empId===employe.empId){
            alert("Employee ID already exists");
            return;
        }else if(arr[i].empEmail===employe.empEmail){
            alert("Email already exsists");
            // if employee found do not add the current employee.
            return;
        }
      }
    const tr=document.createElement("tr");
    tr.innerHTML = `<td>${employe.empName}</td>
    <td>${employe.empEmail}</td>
    <td>${employe.empId}</td>
    <td>${employe.empCompany}</td>
    <td>${employe.empDesignation}</td>
    <button onclick="Delete(this)" data-empId="${employe.empId}" >Delete</button>`; 
     tbody.appendChild(tr);
     arr.push(employe);//adding to array//step4)
     form.reset();
    

});
//step4)delete meand remove from dom tree and also from aarary bcoz if not when i try to give  same values as my input , it will found as duplicate
//step 5) see notres for clarity or see video for delete for clarity and i used this keyword on buutom line -34 bcoz it specifies that button is clicked , to find the values corredsponding that table use custom attribut and set to empid dynamically
function Delete(ButtonRef){
  //first take that button html elemnt see below//here buttonref means that button to understand -->console.log(buttonref);//gives button on which i clicked delete
  let DelId = ButtonRef.getAttribute("data-empId");
console.log(DelId);
  // using the above empId delete the corresponding object in the employess array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].empId === DelId) {
      arr.splice(i, 1);
      break;
    }
  }
console.log(ButtonRef);
console.log(ButtonRef.parentNode);
  // also remove the employee from the DOM tree.
  let parentTr = ButtonRef.parentNode;
//   let parentTr = parentTd.parentNode;

  // the below line removed the <tr></tr> from the DOM tree
  parentTr.remove();
}








// const form = document.getElementById("form");
// const tbody = document.getElementById("tbody");
// form.addEventListener("submit", (event) => {
//   event.preventDefault(); //compuslrot to avoid refresh otherwise values unable to capture
//   let employe = {
//     empName: event.target.name.value,
//     empEmail: event.target.email.value,
//     empId: event.target.empId.value,
//     empCompany: event.target.company.value,
//     empDesignation: event.target.designation.value,
//   };
//   const tr = document.createElement("tr");
//   tr.innerHTML = `<td>${employe.empName}</td>
//     <td>${employe.empEmail}</td>
//     <td>${employe.empId}</td>
//     <td>${employe.empCompany}</td>
//     <td>${employe.empDesignation}</td>
//     <button>Delete </button>`;
//   tbody.appendChild(tr);
//   form.reset();

//step1)starts from line 34 to line 53 , where i create dyanamic row and i create dyanmic colums and append to tbody 
//step2) i want to check such taht i should not enter the same data as eariler so for that i need to store every object(basicaaly employ object) to stor inaaray and i want to compare 
//create array globally and push employee object after succesfull add to table and for checking unique values ,we have to check with email and empid
// });
