const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')

const showError = (element,message) =>{
    const formControl = element.parentElement;
    console.log(formControl)
    formControl.className = 'form-control error'
    const small  = formControl.querySelector('small')
    small.innerText = message
}


form.addEventListener('submit',(event)=>{
    event.preventDefault()

    if(username.value===''){
        showError(username,'Username is required')
    }
})