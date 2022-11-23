<template>
    <div></div>
</template>


<script>


    export default{
        name:'Personalização_Modelo',
        emits:['PersoMod'],
        data(){
            return{
                mostrar : true,
            }
        },
        methods: {
            madcolorida(){
                alert('oi')
            }
        },
    }

</script>


<style scoped>
    img{

        width: 100px;
        margin: 20px;
        height: 100px;
        text-align: center;
        cursor: pointer;
    }
    div{
        margin: 20px;
        display: inline;
        text-align: center;

    }
    #imagem{
        margin: 20px;
        display: inline;
        text-align: center;
    }


</style>