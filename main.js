const myform = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || numberInput.value === '') {
        msg.innerHTML = 'Please enter all fields!';
        setTimeout(() => msg.remove(), 3000);
    } else {
        let my_obj = {
            UserName: nameInput.value,
            UserEmail: emailInput.value,
            UserNumber: numberInput.value
        };

        let obj_to_string = JSON.stringify(my_obj);

        // Save to local storage with a unique key (using email value as the key)
        localStorage.setItem(emailInput.value, obj_to_string);

        // Create a list item
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${numberInput.value}`));

        // Create a delete button
        let deletebtn = document.createElement('button');
        deletebtn.innerHTML = 'Delete';
        deletebtn.addEventListener('click', function () {
            onDelete(emailInput.value, li);
        });

        // Append the delete button to the list item
        li.appendChild(deletebtn);

        // Append the list item to the user list
        userList.appendChild(li);

        // Clear the form inputs
        nameInput.value = '';
        emailInput.value = '';
        numberInput.value = '';
    }
}

function onDelete(email, listItem) {
    // Remove the entry from local storage
    localStorage.removeItem(email);

    // Remove the corresponding list item from the UI
    listItem.remove();
}