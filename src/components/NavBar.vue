<template>
    <div id="menu">
        <ul>
            <li id="menu-warren"><img src="/img/logoWarren.png" alt="">warren</li>
            <li id="menu1">Menu1</li>
            <li id="menu2">Menu2
                <ul id="submenu">
                    <li>Teste</li>
                    <li>Teste</li>
                    <li>Teste</li>
                </ul>
            </li>
            <li id="menu3">Menu3</li>
            <li id="menu4">Menu4</li>
            <li id="menu5">Menu5</li>

            <button id="btn">BUTTON</button>
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
    background-color: rgb(200, 198, 198);
    border: none;
    padding: 8px;
    margin-top: 10px;
    width: 100%;
    height: 40px;
}

#menu ul {
    margin-top: 5px;
}

#menu ul li:hover {
    background-color: rgb(155, 152, 152);
}

#menu ul li {
    display: inline-block;
    justify-content: space-between;
    width: 130px;
    color: white;
    line-height: 40px;
    float: left;
    text-align: center;
}

#menu1,
#menu2,
#menu3,
#menu4,
#menu5 {
    font-size: 13px;
}

#menu-warren {
    font-size: 15px;
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

#btn {
    background-color: black;
    color: white;
    border-radius: 15px;
    font-size: 12px;
    width: 80px;
    height: 30px;
}

#text {
    font-size: 12px;
    font-weight: bold;
}

img {
    width: 20px;
    height: 20px;
    margin-left: 15px;


}
</style>