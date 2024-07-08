<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pegar os dados enviados pelo formulário
    $name = filter_var($_POST['name'], HTML_SPECIALCHARS);
    $email = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], HTML_SPECIALCHARS);
    $message = filter_var($_POST['message'], HTML_SPECIALCHARS);

    // Validar os campos
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Por favor, preencha todos os campos.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Email inválido.";
        exit;
    }

    // Configurar o email
    $to = "dsescuderop@gmail.com";
    $email_subject = "Novo contato: $subject";
    $email_message = "Novo email recebido do portfólio.\n\n";
    $email_message .= "Nome: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Assunto: $subject\n";
    $email_message .= "Mensagem: $message\n";

    $headers = "From: contato@meuportfolio.com\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "Email enviado com sucesso.";
    } else {
        echo "Erro ao enviar o email.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
