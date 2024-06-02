document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const pre = document.getElementById('pre');
        pre.style.display = 'none';
        const loader = document.getElementById('loader');
        loader.style.display = 'block';
        setTimeout(function(){
            loader.style.display = 'none';
            const pass = document.getElementById('pass');
            const submit = document.getElementById('submit');
            pass.style.display = 'block';
            submit.value = "Verified";
            submit.style.backgroundColor = '#21e6c1'; 
        }, 5000);
    });
});