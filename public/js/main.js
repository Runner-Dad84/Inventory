console.log('js file linked');

const deleteForms = document.querySelectorAll('.delete-forms');
const password = 'RunningSucks'

document.addEventListener('DOMContentLoaded', ()=> {
    deleteForms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let prompt = window.prompt("Enter password");
            if (prompt === password) {
            form.submit();
        } else {
            alert('Incorrect password')
        }
        })})});