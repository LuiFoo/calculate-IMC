    function textos(tag, tex) {
        var texto = document.querySelector(tag);
        texto.innerHTML = (tex);
    }
    
    textos('h1', 'Calcular IMC');

    function calculoIMC() {
        var pesoCorporal = document.getElementById('peso').value;
        var comprimentoAltura = document.getElementById('comprimento').value;
        var calculo = pesoCorporal / (comprimentoAltura * comprimentoAltura)
        textos('h1', `Seu IMC é ${calculo}`);
    }

    var button = document.querySelector('button')
    button.onclick = calculoIMC;