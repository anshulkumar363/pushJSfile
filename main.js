const myform=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(nameInput.value=== ''|| emailInput.value ==='')
    {
        msg.innerHTML='please enter all fields';
        setTimeout(()=> msg.remove,3000);
    }
    else
    {
       localStorage.setItem('username',nameInput.value);
       localStorage.setItem('useremail',emailInput.value);
    }
}