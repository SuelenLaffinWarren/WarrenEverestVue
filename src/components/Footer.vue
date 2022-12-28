<template>
    <footer id="footer">
        <div>
            <ul>
                <h3>Sobre</h3>
                <li class="col-md-2 col-sm-4">História</li>
                <li class="list-inline-item">Home</li>
                <li class="list-inline-item">Carreiras</li>
                <li class="list-inline-item">Termos e Privacidade</li>
            </ul>
        </div>
        <div>
            <ul>
                <h3>Investir</h3>
                <li class="col-md-2 col-sm-4">Bolsa de Valores</li>
                <li class="list-inline-item">Renda Fixa</li>
                <li class="list-inline-item">LCI/LCA</li>
                <li class="list-inline-item">Criptomoedas</li>
            </ul>
        </div>
        <div>
            <ul>
                <h3>Aprender</h3>
                <li class="col-md-2 col-sm-4">Por onde começar?</li>
                <li class="list-inline-item">Nossos cursos</li>
                <li class="list-inline-item">Dicas financeiras</li>

            </ul>
        </div>
        <div>
            <ul>
                <h3>Fale Conosco</h3>
                <li class="col-md-2 col-sm-4">Chat</li>
                <li class="list-inline-item">Suporte</li>
                <li class="list-inline-item">FAQ</li>
                <li class="list-inline-item">Redes Socias</li>
            </ul>
        </div>
    </footer>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
#footer {
    height: 200px;
    background-color: rgb(90, 88, 88);
    border-top: 2px solid black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    padding: auto;

}

ul {
    list-style-type: none;
}

h3 {
    text-align: start;
}

li {
    text-align: start;
}
</style>