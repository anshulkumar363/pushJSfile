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
        let my_obj=
        {
             UserName:nameInput.value,
            
             UserEmail:emailInput.value
        };
        let obj_to_string=JSON.stringify(my_obj);

       localStorage.setItem("userdetail",obj_to_string);
       
       let string_to_obj=JSON.parse(localStorage.getItem("userdetail"));
       console.log(string_to_obj);
       
    }
}