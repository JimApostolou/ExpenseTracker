const tableAdd = document.getElementById('table-body');
const addExpense = document.getElementById('btn');
const inputName = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const amountInput = document.getElementById('amount-input');
//This const is to help us understand if tabke is empty 
//Not in use until this point
const isEmpty = document.querySelectorAll("#table-body tr").length <= 1;

addExpense.addEventListener('click', expenseAdder);
tableAdd.addEventListener('click', deleteChecker);

function expenseAdder(event){

    event.preventDefault();
    if (amountInput.value !== '' && dateInput.value !== '') {
        //Creates the tr
        const newTr = document.createElement('tr');
        newTr.classList.add('new-tr');
        //Creates the td for the name of the expense
        const nameTd = document.createElement('td');
        nameTd.innerText = inputName.value;
        nameTd.classList.add('name-td');
        newTr.appendChild(nameTd);
        //Creates the td for the date of the expense 
        const dateTd = document.createElement('td');
        dateTd.innerText = dateInput.value;
        dateInput.classList.add('date-td');
        newTr.appendChild(dateTd);
        //Creates the td for the amount of the expense
        const amountTd = document.createElement('td');
        amountTd.innerHTML = `${amountInput.value} $`;
        amountTd.classList.add('amount-td');
        newTr.appendChild(amountTd);
        //Creates the delete button
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-btn');
        newTr.appendChild(deleteButton)
        //Appends everything on the list
        tableAdd.appendChild(newTr);
        inputName.value = '';
        dateInput.value = '';
        amountInput.value = '';
    }

}

function deleteChecker(e) {
    
    const item = e.target;
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentNode;
        todo.remove();
    }

}