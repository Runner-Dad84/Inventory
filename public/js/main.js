console.log('js file linked');

const deleteBtns = document.querySelectorAll('.deleteBtn');


deleteBtns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        console.log('test');
    }

    );
});