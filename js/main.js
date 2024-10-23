$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    messages: { 
        nome: 'Por favor, insira o seu nome',

        email: {
            required: 'Por favor, insira o seu email',
            email: 'Por favor, insira um email válido'
        },

        telefone: 'Por favor, insira o seu telefone',

        endereco: 'Por favor, insira o seu endereço',

        cep: 'Por favor, insira o seu CEP',

        cpf: 'Por favor, insira o seu CPF'
    },
    submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            console.log(form);
            form.reset();
    },
})
})