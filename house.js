//////////KITCHEN PROJECT///

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
//create an empty array
let kitchenItemsListArray = [];
//-----------
// step : 2
//  Add Kitchen Items
function addKitchenItems() {
  let kitchenInputData = kitchenInput.value;

  if (kitchenInputData !== "") {
    // Create a new list item
    let li = document.createElement("li");
    li.innerText = kitchenInputData;
    
    
    //Add item in Array
    kitchenItemsListArray.push(kitchenInputData);

    // Apply animation
    li.style.cssText = "animation-name: slideIn";
    //add li into html ul list(using appendchild)
    kitchenItemsList.appendChild(li);

    // Clear the input field and focus on it
    kitchenInput.value = "";
    kitchenInput.focus();

    // Log the updated array
    console.log(kitchenItemsListArray);

    //create trash button(delete button)
    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas", "fa-trash");
    li.appendChild(trashBtn);

    console.log(trashBtn);

    //create a EditButton//
    let editBtn = document.createElement("i");
    editBtn.classList.add("fas", "fa-edit");
    li.appendChild(editBtn);
  }
}
// Delete item from kitchen list//
function deleteKitchenItem(event) {
  console.log(event);
  console.log(event.target.classList[1]);
  if (event.target.classList[1] === "fa-trash") {
    let item = event.target.parentElement;
    console.log(item);

    item.classList.add("slideOut");
    item.addEventListener("transitionend", function () {
      console.log("animation complete");
      item.remove();
    });
  }
}

// edit KitchenIem//
function editKitchenItem(event){
  console.log(event.target.classList);
  if(event.target.classList[1]==='fa-edit'){
    let editedValue = prompt("Please Add New Text")
    console.log(editedValue);
    let item = event.target.parentElement;
    console.log(item);
    
     // Update the text content
     item.innerText = editedValue;

     //recreate and append the trash button

     let trashBtn =document.createElement('i');
     trashBtn.classList.add('fas','fa-trash')
     item.appendChild(trashBtn)

     let editBtn =document.createElement("i");
     editBtn.classList.add('fas','fa-edit')
     item.appendChild(editBtn)
  
   

  }

}

//Step :1-------------

// Combine the event listeners for delete and edit actions
kitchenItemsList.addEventListener("click", function (event) {
  if (event.target.classList.contains("fa-trash")) {
    deleteKitchenItem(event);
  } else if (event.target.classList.contains("fa-edit")) {
    editKitchenItem(event);
  }
});

// Add an addEventLister to the button
addBtn.addEventListener("click", addKitchenItems);
// Use "Enter" key to add items
kitchenInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    //Prevent the default form submission behavior(not refresh the page)
    event.preventDefault();
    addKitchenItems();
  }
});



console.log(kitchenItemsListArray);


//     ...........or// trash btn and editbtn//

//////////KITCHEN PROJECT///

// let kitchenInput = document.getElementById("kitchen-input");
// let addBtn = document.getElementById("add-btn");
// let kitchenItemsList = document.getElementById("kitchen-items-list");
// //create an empty array
// let kitchenItemsListArray = [];
// //-----------
// // step : 2
// //  Add Kitchen Items
// function addKitchenItems() {
//   let kitchenInputData = kitchenInput.value;

//   if (kitchenInputData !== "") {
//     // Create a new list item
//     let li = document.createElement("li");
     
//     //or//
//     let spanEl =document.createElement('span');
//     li.appendChild(spanEl);
//     spanEl.innerText =kitchenInputData;
    
    
//     //Add item in Array
//     kitchenItemsListArray.push(kitchenInputData);

//     // Apply animation
//     li.style.cssText = "animation-name: slideIn";
//     //add li into html ul list(using appendchild)
//     kitchenItemsList.appendChild(li);

//     // Clear the input field and focus on it
//     kitchenInput.value = "";
//     kitchenInput.focus();

//     // Log the updated array
//     console.log(kitchenItemsListArray);

//     //create trash button(delete button)
//     let trashBtn = document.createElement("i");
//     trashBtn.classList.add("fas", "fa-trash");
//     li.appendChild(trashBtn);

//     console.log(trashBtn);

//     //create a EditButton//
//     let editBtn = document.createElement("i");
//     editBtn.classList.add("fas", "fa-edit");
//     li.appendChild(editBtn);
//   }
// }
// // Delete item from kitchen list//
// function deleteKitchenItem(event) {
//   console.log(event);
//   console.log(event.target.classList[1]);
//   if (event.target.classList[1] === "fa-trash") {
//     let item = event.target.parentElement;
//     console.log(item);

//     item.classList.add("slideOut");
//     item.addEventListener("transitionend", function () {
//       console.log("animation complete");
//       item.remove();
//     });
//   }
// }

// // edit KitchenIem//
// function editKitchenItem(event){
//   console.log(event.target.classList);
//   if(event.target.classList[1]==='fa-edit'){
//     let editedValue = prompt("Please Add New Text")
//     console.log(editedValue);
//     let item = event.target.parentElement;
//     console.log(item);
//     let spanEl = item.querySelector("span")
//     console.log(spanEl);
    
//      // Update the text content
//      spanEl.innerText = editedValue;

  
   

//   }

// }

// //Step :1-------------

// // Combine the event listeners for delete and edit actions
// kitchenItemsList.addEventListener("click", function (event) {
//   if (event.target.classList.contains("fa-trash")) {
//     deleteKitchenItem(event);
//   } else if (event.target.classList.contains("fa-edit")) {
//     editKitchenItem(event);
//   }
// });

// // Add an addEventLister to the button
// addBtn.addEventListener("click", addKitchenItems);
// // Use "Enter" key to add items
// kitchenInput.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     //Prevent the default form submission behavior(not refresh the page)
//     event.preventDefault();
//     addKitchenItems();
//   }
// });



// console.log(kitchenItemsListArray);


// local storage //
// //set data to Loxalstorage//
//  localStorage.setItem("name","shoubana");
//  localStorage.setItem('passion',"dev")


//  //get data from localstorage//
//  let name =localStorage.getItem("name");
//  console.log(name);
 
 
//  let passion =localStorage.getItem("passion");
//  console.log(passion);
