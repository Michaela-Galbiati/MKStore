<template>
    <div>
        <div id="menu">
            <h1>MK STORE</h1>
            <div id="nav">
                <router-link to="/" class="link" >Home</router-link>
                <router-link to="/about" class="link">Pedidos</router-link>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name:'Menu_Principal',
        components:{
        }

    }

</script>


<style scoped>
    .link{
        color: white;
        text-decoration: none;
        font-size: 18px;
        margin: 12px 25px 0px 15px;
    }
    .link:active{
        color:rgb(0, 101, 94);
        text-decoration: underline;
        padding: 5px;
        border-radius: 5px;
    }
    .link:hover{
        background-color:#501a01;
        color: white;
        border-radius:5px;
    }
    #nav{
        display: inline-flex;
    }
    #menu{
        display: flex;
        justify-content:space-between;
        padding: 10px;
        background-color: #008C8F;
        color:white;
        width: 100%;
        height: 80px;
    }
    h1{
        letter-spacing: 4px;
        padding: 7px;
        font-size: 34px;
    }
    @media (max-width:800px) {
        h1{
            font-size: 23px;
        }
    }
    h3{
        padding: 40px;
        font-size: 16px;
        margin-top: -85px;
        float: right;
    }
    a{
        padding: 5px;
        float: right;
        margin-top: -55px;

    }

</style>
