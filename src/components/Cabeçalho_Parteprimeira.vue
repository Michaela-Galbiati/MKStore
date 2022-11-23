<template>
    <div id="cabeçalho">
        <h1>Personalize seu painel!</h1>
        <p>Madeiras da melhor qualidade, defina seu estilo!</p>
        <button style="margin-left: 90px; " type="button"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#501a01" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg></button>


    </div>
</template>

<script>

    export default{
        name:'Cabeçalho_Parteprimeira',
    }


</script>


<style scoped>
#cabeçalho{
    height: 600px;
    background-attachment:fixed;
    background-image: url(./imgprinc.jpg);
  }
  #cabeçalho>h1{
    color: white;
    padding: 200px 20px 20px 60px;
    border-radius: 10px;
  }
  #cabeçalho>p{
    padding: 20px 20px 20px 80px;
    color:white;
  }
  #cabeçalho>button{
    animation: seta 2s infinite;
    background-color: #912e00b2;
    border-radius: 50%;
    padding: 10px;

  }
  @keyframes seta {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(30px);
    }
    100%{
        transform: translateY(0px);
    }
  }

</style>