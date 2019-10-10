function limparForm(){
    document.getElementById('myForm').reset();
}

function validarForm(){
    if(document.getElementById('nome').value == "" || document.getElementById('nome').value.lenght < 3){
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

}