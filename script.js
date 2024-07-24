let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container'); // Use getElementById
let addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', addTask);

function addTask() {
    if (inputBox.value === '') { // Check the value of the input box
        alert('Write some text');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Append the li element to the list container
      
        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-x remove"></i>'
        li.appendChild(span);
        
    }
    inputBox.value = ''; // Clear the input box after adding the task
    storeData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        storeData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        console.log("checked");
        storeData();
    }
},false);

function storeData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();