<template class="container">
 <div>
    <Menu_Principal></Menu_Principal>
    <router-view></router-view>
    <Footer></Footer>
 </div>
</template>

<script>

  import Menu_Principal from './components/Menu_Principal'
  import Cabeçalho_Parteprimeira from './components/Cabeçalho_Parteprimeira'
  import Footer from './components/Footer'
  import Entrar_Carrinho from './components/Entrar_Carrinho'
  import Personalização_Escolhas from './components/Personalização_Escolhas'


  export default{
    name:'App',
    components:{
      Menu_Principal,
      Footer,
    }
  }

</script>


<style>

  #modelos{
    text-align: center;
  }



</style>