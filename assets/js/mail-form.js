document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mailform');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('mail').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        const formData = new FormData(form);

        fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            if (result.includes('sucesso')) {
                alert('Email enviado com sucesso.');
                form.reset();
            } else {
                alert('Erro ao enviar o email.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar o email.');
        });
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
