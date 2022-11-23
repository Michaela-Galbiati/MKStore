<template>
    <div id="princborda">
        <h3>Cor da borda do painel:</h3>
        <div id="cor">
            <p id="azul"></p>
            <p id="rosa"></p>
            <p id="amarelo"></p>
            <p id="laranja"></p>
            <p id="verde"></p>
            <p id="roxo"></p>
            <p id="preto"></p>
            <p id="branco"></p>
        </div>

    </div>
</template>


<script>

    export default{
        name:'personalização_Borda'
    }

</script>


<style scoped>
    #azul{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: rgb(0, 89, 255);
    }
    #rosa{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: deeppink;
    }
    #amarelo{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: yellow;
    }
    #laranja{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color:orange;
    }
    #verde{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: rgb(3, 196, 3);
    }
    #roxo{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: purple;
    }
    #preto{
        width: 50px;
        height: 50px;
        cursor: pointer;
        background-color: black;
    }
    #branco{
        width: 50px;
        height: 50px;
        background-color: whitesmoke;
        cursor: pointer;

    }
    p{
        cursor: pointer;
        margin: 20px;
    }
    #cor{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 20px;

    }
    div{
        margin: 20px;
    }
    h3{
        text-align: center;
    }
</style>