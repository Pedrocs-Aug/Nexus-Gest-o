document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.form-contato');
    const inputEmail = document.getElementById('email');

    // 1. Função para validar o formato do e-mail (Regex)
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const mostrarToast = (mensagem) => {
        const toast = document.createElement('div');
        toast.className = 'toast';
        // Alterado para incluir o span que estilizamos no CSS
        toast.innerHTML = `<span><i class="fas fa-check"></i></span> ${mensagem}`;
        // Se não estiver usando FontAwesome, pode manter o emoji: <span>✓</span>

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 900);
        }, 4000);
    };

    // 3. Gerenciamento do envio do formulário
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault(); // Impede o redirecionamento da página

        const nome = document.getElementById('nome').value;
        const emailValue = inputEmail.value;
        const botao = formulario.querySelector('.btn-enviar');
        const textoOriginal = "Enviar Mensagem";

        // Validação de segurança
        if (!validarEmail(emailValue)) {
            inputEmail.classList.add('input-erro');
            return;
        }
        inputEmail.classList.remove('input-erro');

        // Estado Visual: Ativa Spinner e desabilita botão
        botao.innerHTML = `<span class="spinner"></span> Enviando...`;
        botao.disabled = true;

        // Preparação dos dados para o Formspree
        const formData = new FormData(formulario);

        try {
            const response = await fetch(formulario.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Sucesso total
                mostrarToast(`Sucesso! Mensagem enviada, ${nome}.`);
                formulario.reset();
            } else {
                // Erro retornado pelo servidor
                const data = await response.json();
                alert(data.error || "Ops! Ocorreu um erro ao processar seu envio.");
            }
        } catch (error) {
            // Erro de rede ou conexão
            alert("Erro crítico: Verifique sua conexão com a internet.");
        } finally {
            // Restaura o botão ao estado original independente do resultado
            botao.innerHTML = textoOriginal;
            botao.disabled = false;
        }
    });
});