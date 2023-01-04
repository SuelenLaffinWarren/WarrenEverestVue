<template>
    <div id="nav-form">
        <div>
            <ul>
                <li>
                    Formulário
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
#nav-form {
    background-color: rgba(224, 43, 87, 1);
    width: 100%;
    height: 30px;
    padding-top: 10px;
    border: none;
    display: flex;
    justify-content: center;
}

h3 {
    font-size: 10px;
    color: white;
    padding-right: 0px 10px;
}

li {
    list-style-type: none;
}

#nav-form ul li {
    color: white;
    font-size: 14px;
    font-weight: bold;
}

button {
    border: none;
    background-color: transparent;
}
</style>