<template>
    <div id="div-principal">
        <div id="div-body1">
            <div>
                <img src="/img/warren-family.jpg" alt="" id="img-1">
            </div>
            <div id="div-text1">
                <h2>Est saepe quis quo sint</h2>
                <h4 id="h4-1">Est saepe quis quo sint voluptatum eum atque incidunt eum eligendi dolores sit velit rerum
                    non
                    temporibus ipsam ad ipsum voluptatem. Est rerum debitis eos dicta dolorem et enim iste quo
                    repudiandae suscipit.
                    <hr> Et doloremque nihil ea voluptatem quia et minima dolores quo rerum
                    voluptas
                    sit maiores praesentium aut cupiditate accusantium hic tempora beatae. Rem dolorem Quis qui
                    impedit
                    quam qui architecto neque ex quas ullam!
                </h4>
                <button>Button</button>
            </div>
        </div>
        <div id="div-body2">
            <div id="div-text2">
                <h2>Est saepe quis quo sint</h2>
                <h4 id="h4-2">Est saepe quis quo sint voluptatum eum atque incidunt eum eligendi dolores sit velit rerum
                    non
                    temporibus ipsam ad ipsum voluptatem. Est rerum debitis eos dicta dolorem et enim iste quo
                    repudiandae suscipit.
                    <hr> Et doloremque nihil ea voluptatem quia et minima dolores quo rerum
                    voluptas
                    sit maiores praesentium aut cupiditate accusantium hic tempora beatae. Rem dolorem Quis qui
                    impedit
                    quam qui architecto neque ex quas ullam!
                </h4>
                <button>Button</button>
            </div>
            <div>
                <img src="/img/warren-family.jpg" alt="" id="img-2">
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
hr {
    background-color: rgb(244, 8, 122);
}

button {
    background-color: black;
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 14px;
    width: 150px;
    height: 40px;
    font-weight: bold;

}

#div-body1 {
    margin: 30px;
    padding-left: 30px;
}

#div-body2 {
    margin: 30px;
    padding-right: 30px;
}

#div-text1 {
    flex-direction: column;
    padding-left: 50px;
    padding-right: 30px;
}

#div-text2 {
    flex-direction: column;
    padding-right: 50px;
    padding-left: 30px;
    text-align: start;
}

#img-1 {
    justify-items: flex-start;
    width: 370px;
    height: 400px;
    border-radius: 15px;
}

#img-2 {
    justify-items: flex-start;
    width: 370px;
    height: 400px;
    border-radius: 15px;
}

#h4-1 {
    text-align: start;
    font-family: serif;
    color: black;
    font-weight: bold;
}

#h4-2 {
    text-align: start;
    font-family: serif;
    color: black;
    font-weight: bold;
}

div {
    text-align: start;
    flex-direction: row;
    margin-top: 20px;
    display: flex;
    margin-bottom: 20px;
}
</style>