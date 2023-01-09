<template>

    <div id="register-form">
        <form action="#" class="form">
            <h2 class="text-center">Seja bem vindo!</h2>
            <!-- Progress bar -->
            <div class="progressbar">
                <div class="progress" id="progress"></div>

                <div class="progress-step progress-step-active" data-title="Dados de Contato"></div>
                <div class="progress-step" data-title="Dados Pessoais"></div>
                <div class="progress-step" data-title="Concluído"></div>

            </div>

            <!-- Steps -->
            <div class="form-step form-step-active">
                <div class="input-group">
                    <label for="name">Nome Completo</label>
                    <input type="text" name="name" id="name" placeholder="Digite seu nome" />
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Digite seu email" />
                </div>
                <div class="input-group">
                    <label for="email">Confirmar email</label>
                    <input type="text" name="email" id="email" placeholder="Confirme seu email" />
                </div>
                <div class="input-group">
                    <label for="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf" placeholder="___.___.___-__ " />
                </div>
                <div class="input-group">
                    <label for="telefone">Telefone</label>
                    <input type="text" name="telefone" id="telefone" placeholder="(xx) x xxxx-xxxx" />
                </div>
                <div class="input-group">
                    <label for="dataNasc">Data de Nascimento</label>
                    <input type="date" id="dataNasc" name="dataNasc">
                </div>
                <div class="input-group">
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
                <div class="">
                    <a href="#" class="btn btn-next width-50 ml-auto">Confirmar</a>
                </div>
            </div>
            <div class="form-step">
                <div class="input-group">
                    <label for="país">País</label>
                    <input type="text" name="país" id="país" />
                </div>
                <div class="input-group">
                    <label for="estado">Estado</label>
                    <input type="text" name="estado" id="estado" />
                </div>
                <div class="input-group">
                    <label for="cidade">Cidade</label>
                    <input type="text" name="cidade" id="cidade" />
                </div>
                <div class="input-group">
                    <label for="cep">CEP</label>
                    <input type="text" name="cep" id="cep" />
                </div>
                <div class="input-group">
                    <label for="rua">Rua</label>
                    <input type="text" name="rua" id="rua" />
                </div>
                <div class="input-group">
                    <label for="numero">Número</label>
                    <input type="text" name="numero" id="numero" />
                </div>
                <div class="btns-group">
                    <a href="#" class="btn btn-prev">Voltar</a>
                    <a href="#" class="btn btn-next">Confirmar</a>
                </div>
            </div>
            <div class="form-step">
                <div class="input-group">
                    <img src="" alt="">
                    <h2>Cadastro finalizado</h2>
                    <h4>Caso queira voltar a página inicial clique no botão abaixo</h4>
                    <button>Continuar</button>
                </div>
            </div>
        </form>
        <!-- <div> <img src="/img/form-people2-removebg.png" alt=""></div> -->
    </div>


</template>

<script>

</script>

<style scoped >
div {
    display: flex;
}

img {
    background-color: rgb(210, 44, 85);
    scale: 1;
    width: 500px;
    height: 100vh;
}

label {
    width: 50%;
    display: flex;
    margin-bottom: 0.5rem;
}

.checkbox-container {
    margin: auto;


}

span {

    margin-left: 5px;
}

input {
    display: flex;
    width: 90%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

.width-50 {
    width: 50%;
}

.ml-auto {
    margin-left: auto;
}

.text-center {
    text-align: center;
}

/* Progressbar */
.progressbar {
    position: relative;
    display: flex;
    justify-content: space-between;
    counter-reset: step;
    margin: 2rem 0 4rem;
}

.progressbar::before,
.progress {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    background-color: #dcdcdc;
    z-index: -1;
}

.progress {
    background-color: var(--primary-color);
    width: 0%;
    transition: 0.3s;
}

.progress-step {
    width: 2.1875rem;
    height: 2.1875rem;
    background-color: #dcdcdc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.progress-step::before {
    counter-increment: step;
    content: counter(step);
}

.progress-step::after {
    content: attr(data-title);
    position: absolute;
    top: calc(100% + 0.5rem);
    font-size: 10px;
    color: #666;
}

.progress-step-active {
    background-color: var(--primary-color);
    color: #f3f3f3;
}

/* Form */
.form {
    width: clamp(420px, 100%, 400px);
    margin: 0 auto;
    border: 2px solid #ccc;
    border-radius: 0.35rem;
    padding: 1.5rem;
}

.form-step {
    display: none;
    transform-origin: top;
    animation: animate 0.5s;
}

.form-step-active {
    display: block;
}

.input-group {
    margin: 10px 0;
    font-size: 13px;
    font-weight: bold;
}

@keyframes animate {
    from {
        transform: scale(1, 0);
        opacity: 0;
    }

    to {
        transform: scale(1, 1);
        opacity: 1;
    }
}

/* Button */
.btns-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.btn {
    width: 100px;
    padding: 0.5rem;
    display: inline;
    text-decoration: none;
    background-color: rgba(224, 43, 87, 1);
    color: #f3f3f3;
    text-align: center;
    border-radius: 5.00rem;
    cursor: pointer;
    transition: 0.3s;
    font-size: 13px;
}

.btn:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 3px var(--primary-color);
}
</style>