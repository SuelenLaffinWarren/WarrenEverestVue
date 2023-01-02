<template>
    <div id="main-banner" :style="image">
        <div>
            <form action="">
                <div>
                    <h2 id="h2-banner">Lorem ipsum dolor sit amet. Nam voluptas quidem id rerum eius.
                    </h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet. Eos culpa error et illum quidem ut sint</p>
                </div>
                <div>
                    <button id="btn">BUTTON</button>
                </div>
            </form>
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
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    border-radius: 10px;

}

#main-banner h1 {
    color: white;
    text-align: center;
    font-size: 50px;
    background-color: #222;
    padding: 20px 40px;
}

#h2-banner {
    font-size: 35px;
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
    font-size: 12px;
    margin-top: 10px;
    margin-left: 200px;
    margin-right: 500px;
}

button {
    background-color: white;
    color: black;
    border: none;
    border-radius: 15px;
    font-size: 12px;
    width: 80px;
    height: 30px;
    margin-right: 200px;
    margin-left: 200px;
}
</style>