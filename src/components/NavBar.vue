<template>
    <div id="menu">
        <ul>
            <li id="li-image"><img src="/img/logo-black.png" alt="" id="logo"></li>
            <li id="menu2">
                <div id="div-submenu">
                    <select id="submenu">
                        <option hidden selected>Investir</option>
                        <option>Carteiras</option>
                        <option>Bolsa</option>
                        <option>Home Broker</option>
                    </select>
                </div>
            </li>
            <li id="menu1">Quanto custa</li>
            <li id="menu3">Sobre</li>
            <li id="menu4">Aprender</li>
            <li id="menu5">
                <div id="div-submenu">
                    <select id="submenu">
                        <option hidden selected>Ferramentas</option>
                        <option>Análise de Ativos</option>
                        <option>Comparador</option>
                    </select>
                </div>
            </li>
            <button id="btn-login">Login</button>
            <button id="btn-openAccount">Abra sua conta</button>
        </ul>
    </div>

</template>

<script>
export default {
    name: "NavBar",
    props: ["logo", "alt"],
    data() {
        return {
            image: 'url(/img/logoWarren.png)'
        }
    }
}
</script>

<style scoped>
#menu {
    background-color: white;
    border: none;
    padding: 8px;
    margin: 15px;
    height: 40px;
    display: flex;
    justify-content: space-around;
}

#submenu {
    border: none;
    background-color: transparent;
    color: black;
    width: 100px;
    height: 20px;
    text-align: center;
    border: none;
    font-size: 13px;
    font-weight: bold;
}

option {
    color: black;
}

#menu ul {
    margin-top: 5px;
}

#menu ul li:hover {
    background-color: rgb(239, 234, 234);
    border-radius: 10px;
}

#menu ul li {
    display: inline-block;
    justify-content: space-between;
    width: 130px;
    color: black;
    line-height: 40px;
    float: left;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
}

#menu ul li ul li {
    text-align: justify;

}

#nav a {
    color: white;
    text-decoration: none;
    margin: 15px;
    transition: .5s;
}

#nav a:hover {
    color: white;
}

li {
    list-style-type: none;
}

button {
    margin: 0 15px;
    font-weight: bold;

}

#btn-login {
    background-color: black;
    color: white;
    border-radius: 18px;
    font-size: 12px;
    width: 90px;
    height: 35px;
    border: none;
}

#btn-openAccount {
    background-color: black;
    color: white;
    border-radius: 18px;
    font-size: 12px;
    width: 120px;
    height: 35px;
    border: none;
}

#text {
    font-size: 12px;
    font-weight: bold;
}

img {
    width: 100px;
    height: 40px;
    margin-left: 15px;
    background: transparent;
}
</style>