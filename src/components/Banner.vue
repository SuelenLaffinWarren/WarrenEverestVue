<template>
    <div id="main-banner" :style="image">
        <div>
            <div>
                <h2 id="h2-banner">Invista em viver.
                </h2>
            </div>
            <div>
                <p>Investir toma tempo, mas não precisa ser o seu. Conte com nossos especialistas.</p>
            </div>
            <div>
                <button id="btn">Comece agora</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Banner",
    data() {
        return {
            image: { backgroundImage: 'url(/img/fundo-banner2.jpg)' }
        }
    }
}
</script>

<style scoped>
#main-banner {
    background-color: rgb(90, 88, 88);
    background-position: 0 -250px;
    background-size: cover;
    height: 350px;
    display: flex;
    align-items: center;
    width: 100%;
}

#h2-banner {
    font-size: 55px;
    color: rgb(238, 228, 228);
    text-align: left;
    margin-left: 200px;
    margin-right: 500px;
    display: block;
    justify-content: flex-start;
}

p {
    text-align: left;
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-style: italic;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 22px;
    margin-top: 10px;
    margin-left: 200px;
    margin-right: 500px;
}

button {
    background-color: white;
    color: black;
    border: none;
    border-radius: 15px;
    font-size: 14px;
    width: 150px;
    height: 40px;
    margin-right: 200px;
    margin-left: 200px;
    font-weight: bold;
}
</style>