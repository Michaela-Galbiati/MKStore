<template>
    <div>{{msg}}</div>
</template>

<script>

    export default {
        name:"MsgAlerta",
        props:{
            msg: String,
        }
    }



</script>

<style scoped>

    div{
        background-color: #501a01;
        text-align: center;
        padding: 10px;
        width: 200px;
        margin: auto;
        border-radius:15px 15px 15px 0px ;
        position: fixed;
        margin: 10px;
        border: 2px solid rgb(122, 53, 0);

    }


</style>