document.addEventListener('DOMContentLoaded', () => {

const form = document.getElementById('logar');
const loguin = 'samuel';
const senha = '#test';

form.addEventListener('submit', (e) => { e.preventDefault();
    

    const user = document.getElementById('loguin').value;
    const password = document.getElementById('senha').value;

    if (user === loguin && password === senha) {
        window.location.href = '../home/index.html';
    } else {
        alert('Tente novamente!');
    }
});
});



