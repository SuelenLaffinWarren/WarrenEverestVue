<template>
    <div id="form">
        <div id="div-form">
            <form id="register-form">
                <h1>Seja bem vindo</h1>
                <br><br>
                <div class="input-container">
                    <label for="nome">Nome Completo</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email">

                    <label for="email">Confirmar Email</label>
                    <input type="text" id="email" name="email" placeholder="Confirmar Email">

                    <label for="cpf">CPF</label>
                    <input type="number" id="cpf" name="cpf" placeholder="___.___.___-__">

                    <label for="telefone">Telefone</label>
                    <input type="number" id="telefone" name="telefone" placeholder="(xx) x xxxx-xxxx">

                    <label for="opcionais" id="opcionais-title">Gostaria de receber novidades por:</label>

                    <div class="checkbox-container">
                        <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="Email">
                        <span>Email</span>
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" value="Whatsapp">
                        <span>Whatsapp</span>
                    </div>
                </div>

                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Próximo">
                </div>

            </form>

        </div>
        <div> <img src="/img/form-people2.jpg" alt=""><img></div>
    </div>
</template>

<script>
{

}
</script>

<style scoped>
div {
    display: inline-flex;
}

#register-form {
    width: 500px;
    padding-top: 40px;
    padding-left: 150px;
}

.input-container {
    display: flex;
    flex-direction: column;
    width: 300px;
}

label {
    font-size: 13px;
    font-weight: bold;
    margin-top: 10px;
    color: #222;
    padding: 5px 0px;

}

input,
select {
    padding: 5px 10px;
    width: 140px;
    height: 25px;
}

#nome {
    height: 30px;
    width: 300px;
}

#opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
}

#opcionais-title {
    width: 100%;
}

.checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 100%;
}

.checkbox-container span,
.checkbox-container input {
    width: auto;
}

.checkbox-container span {
    margin-left: 6px;
    margin-top: 5px;
    font-size: 13px;
}

.submit-btn {
    background-color: rgba(224, 43, 87, 1);
    color: white;
    font-weight: bold;
    border-radius: 30px;
    padding: 10px;
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: .5s;
    height: 50px;
    width: 130px;
    border: none;
}

.submit-btn:hover {
    background-color: transparent;
    color: #222;
}

img {
    background-color: rgba(224, 43, 87, 1);
    width: 100%;
    height: 100vh;
}
</style>