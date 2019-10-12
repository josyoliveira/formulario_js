function limparForm(){
    document.getElementById('myForm').reset();
}

function validarForm(){

    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var confirSenha = document.getElementById('confirSenha').value;
    
    if(document.getElementById('nome').value == "" || nome.length < 3){
        alert("Insira seu nome com pelo menos três letras");
        document.getElementById('nome').focus();

        return false;
    }

    if(document.getElementById('email').value == "" || document.getElementById('email').value.indexOf('@') == -1
        || document.getElementById('email').value.indexOf('.') == -1){
            alert("Preencha o seu E-MAIL corretamente");
            document.getElementById('nome').focus();

            return false;
        }
    if(document.getElementById('senha').value == "" || senha.length < 6){
        alert("A senha deve ter pelo menos 6 caracteres");
        document.getElementById('senha').focus();

        return false;
    }

    if (document.getElementById('confirSenha').value == "" || confirSenha.length < 6) {
        alert('Preencha o campo repetir senha.');
        document.getElementById('confirSenha').focus();
    }

    if(senha != confirSenha){
        alert("Sua senha está diferente do campo anterior.");
        document.getElementById('confirSenha').focus();
        return false;
    }

}