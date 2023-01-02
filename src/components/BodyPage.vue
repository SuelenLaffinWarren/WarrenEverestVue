<template>
    <div id="div-principal">
        <div id="div-body">
            <img src="/img/warren-family.jpg" alt="" id="img-1">

            <h4 id="h4-1">Est saepe quis quo sint voluptatum eum atque incidunt eum eligendi dolores sit velit rerum
                non
                temporibus ipsam ad ipsum voluptatem. Est rerum debitis eos dicta dolorem et enim iste quo
                repudiandae suscipit. <br><br> Et doloremque nihil ea voluptatem quia et minima dolores quo rerum
                voluptas
                sit maiores praesentium aut cupiditate accusantium hic tempora beatae. Rem dolorem Quis qui
                impedit
                quam qui architecto neque ex quas ullam!</h4>

        </div>
        <div id="div-body">
            <h4 id="h4-2">Est saepe quis quo sint voluptatum eum atque incidunt eum eligendi dolores sit velit rerum
                non
                temporibus ipsam ad ipsum voluptatem. Est rerum debitis eos dicta dolorem et enim iste quo
                repudiandae suscipit. <br><br> Et doloremque nihil ea voluptatem quia et minima dolores quo rerum
                voluptas
                sit maiores praesentium aut cupiditate accusantium hic tempora beatae. Rem dolorem Quis qui
                impedit
                quam qui architecto neque ex quas ullam!
            </h4>
            <img src="/img/warren-family.jpg" alt="" id="img-2">
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#img-1 {
    justify-items: flex-start;
    width: 370px;
    height: 400px;
    margin-left: 100px;
    border-radius: 15px;
}

#img-2 {
    justify-items: flex-start;
    width: 370px;
    height: 400px;
    margin-right: 150px;
    border-radius: 15px;

}

#h4-1 {
    text-align: start;
    margin-right: 150px;
    margin-left: 300px;
    font-family: serif;
    color: black;
    font-weight: bold;
}

#h4-2 {
    text-align: start;
    margin-right: 300px;
    margin-left: 100px;
    font-family: serif;
    color: black;
    font-weight: bold;
}

div {
    text-align: start;
    margin-left: 10px;
    flex-direction: row;
    margin-top: 20px;
    display: flex;
    margin-bottom: 20px;
}
</style>