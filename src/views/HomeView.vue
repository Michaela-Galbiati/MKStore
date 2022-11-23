<template>
  <div>
    <Cabeçalho_Parteprimeira/>
      <div id="principal">
        <MsgAlerta :msg="msg" v-show="msg"/>
          <div id="personalize">
              <form id="form" @submit="enviarpainel">
                <h1 style="color:white">Faça seu pedido:</h1>
                  <label for="name">Nome:</label>
                  <br><input class="texto" type="text" name="name" id="nome" v-model="name" placeholder="MK STORE">
                  <br><label for="email">Email:</label>
                  <br><input class="texto" type="text" name="email" id="e-mail" placeholder="mkstore@gmail.com" v-model="email">
                  <br><label for="telefone">Telefone:</label>
                  <br><input class="texto" type="text" name="telefone" id="celular" placeholder="(xx) xxxxx-xxxx" v-model="telefone">
                  <br><label for="madeiras">Seleciona a madeira:</label>
                  <br><select class="texto" name="madeiras" id="madeira" v-model="madeiras">
                    <option v-for="madeiras in mad" :key="madeiras.id" :value="madeiras.title">{{madeiras.title}}</option>
                  </select>
                  <br><label class="label" for="estampas">Seleciona a estampa:</label>
                  <br><select class="texto" name="estampas" id="estampas" v-model="estampas">
                    <option v-for="estampas in estamp" :key="estampas.id" :value="estampas.title">{{estampas.title}}</option>
                  </select>
                 <br> <label for="bordacores">Seleciona a cor da borda</label>
                  <br><select class="texto" name="bordacores" id="bordacores" v-model="bordacores">
                    <option v-for="bordacores in bord" :key="bordacores.id" :value="bordacores.title">{{bordacores.title}}</option>
                  </select>
                  <br><button>Finalizar</button>
                </form>
              <div id="borda">
                  <div>
                    <h4>Pré-modelo:</h4>
                    <img id="bordaesp" :src="bordaespecial" :alt="bordacor">
                    <img id="imagemperso" :src="imagem" :alt="madeira">
                    <img id="desenhoperso" :src="desenho" :alt="estampa">
                  </div>
              </div>
              <div id="escolhatext" style="text-align:center;">
                <h6>Sua escolha foi:</h6>
                <li>Madeira {{madeira}}</li>
                <li>Estampa {{estampa}}</li>
                <li>Cor {{bordacor}}</li>
            </div>
          </div>
              <div id="escolhas">
                <div>
                  <h3 id="titulo">Tipos de madeira disponíveis:</h3>
                      <div id="imagem">
                          <img @click="madcolorido" src="madcolorido.jpg" alt="Madeira colorida">

                          <img @click="madbranca" src="madbranca.jpg" alt="Madeira Branca">

                          <img @click="madclara" src="madclara.jpg" alt="Madeira Clara">

                          <img @click="madcoloridahorizontal" src="madcoloridahorizontal.jpg" alt="">

                          <img @click="madmarron" src="madmarron.jpg" alt="">

                          <img @click="madrustica" src="madrustica.jpg" alt="">
                          <img @click="madescura" src="madescura.jpg" alt="">
                          <img @click="madcinza" src="madcinza.jpg" alt="oi">
                          <img @click="madpedaços" src="madpedaços.jpg" alt="">
                          <img @click="madamrela" src="madamrela.jpg" alt="">
                      </div>
              </div>
              <div>
                  <h3>Estampas disponíveis:</h3>
                 <div id="desenhos">
                  <img @click="rosa" src="desenhorosa.jpg" alt="">
                  <img @click="amarelo" src="desenhoamarelo.jpg" alt="">
                  <img @click="flor" src=" desenhoflor.jpg" alt="">
                  <img @click="vitral" src="desenhovitral.jpg" alt="">
                  <img @click="laranja" src="desenholaranja.jpg" alt="">
                  <img @click="estrela" src="desenhoestrela.jpg" alt="">
                  <img @click="branco" src="desenhobranco.jpg" alt="">
                  <img @click="joy" src="desenhojoy.jpg" alt="">

                 </div>
              </div>
              <div id="princborda">
                  <h3>Cor da borda do painel:</h3>
                  <div id="cor">
                      <p @click="cazul" id="azul"></p>
                      <p @click="crosa" id="rosa"></p>
                      <p @click="camarelo" id="amarelo"></p>
                      <p @click="claranja" id="laranja"></p>
                      <p @click="cverde" id="verde"></p>
                      <p @click="croxo" id="roxo"></p>
                      <p @click="cpreto" id="preto"></p>
                      <p @click="cbranco" id="branco"></p>
                  </div>

              </div>
              </div>
      </div>
  </div>
</template>


<script>
    import MsgAlerta from '../components/MsgAlerta'
    import Cabeçalho_Parteprimeira from '../components/Cabeçalho_Parteprimeira'
    export default{
        name:'Personalização_Escolhas',
        components:{
            MsgAlerta,
            Cabeçalho_Parteprimeira,
        },
        data(){
            return{
                imagem:' ',
                desenho:'',
                bordaespecial:'',
                madeira:'',
                estampa:'',
                bordacor:'',
                madeiras: null,
                mad:null,
                estamp:null,
                bord:null,
                estampas: null,
                bordacores: null,
                status:"Solicitado",
                msg:null,
                telefone:null,
                email:null,
                name:null,
            }
        },
        methods: {
          async enviarpainel(e){
            e.preventDefault();
            const data= {

              name: this.name,
              madeiras : this.madeiras,
              estampas : this.estampas,
              bordacores :this.bordacores,
              status: "Solicitado",
              email:this.email,
              telefone: this.telefone,

            }
            const dataJson= JSON.stringify(data)
              const req = await fetch ("http://localhost:3000/Pedido",{
                method:"Post",
                headers: {"Content-Type": "application/json"},
                body: dataJson
              }
            )
            const res =await req.json();

            this.msg = `Pedido Nº ${res.id} realizado com sucesso!`
          },
          async getPersonalizado(){
            const req = await fetch("http://localhost:3000/Personalizado");
            const data = await req.json()
            this.mad = data.madeiras
            this.estamp = data.estampas
            this.bord = data.bordacores
          },
            cazul(){
                const azul = 'azul.jpg'
               this.bordaespecial= azul
               this.bordacor= 'Azul'
            },
            camarelo(){
               this.bordaespecial='amarelo.jpg'
               this.bordacor= 'Amarelo'

            },
            crosa(){
               this.bordaespecial='rosa.jpg'
               this.bordacor= 'Rosa'

            },
            croxo(){
               this.bordaespecial='roxo.jpg'
               this.bordacor= 'Roxo'

            },
            claranja(){
               this.bordaespecial='laranja.jpg'
               this.bordacor= 'Laranja'

            },
            cbranco(){
               this.bordaespecial='branco.jpg'
               this.bordacor= 'Branco'

            },
            cpreto(){
               this.bordaespecial='preto.jpg'
               this.bordacor= 'Preto'

            },
            cverde(){
               this.bordaespecial='verde.jpg'
               this.bordacor= 'Verde'

            },
            rosa(){
                this.desenho='desenhorosa.jpg'
                this.estampa='Flores no fundo rosa'
            },
            vitral(){
                this.desenho='desenhovitral.jpg'
                this.estampa='Vitral colorido'

            },
            laranja(){
                this.desenho='desenholaranja.jpg'
                this.estampa='Morcegos no fundo laranja'

            },
            estrela(){
                this.desenho='desenhoestrela.jpg'
                this.estampa='Estrelas no fundo preto'

            },
            joy(){
                this.desenho='desenhojoy.jpg'
                this.estampa='Joy'

            },
            branco(){
                this.desenho='desenhobranco.jpg'
                this.estampa='Branca com textura'

            },
            amarelo(){
                this.desenho='desenhoamarelo.jpg'
                this.estampa='Carrinhos com fundo amarelo'

            },
            flor(){
                this.desenho='desenhoflor.jpg'
                this.estampa='Flores coloridas com fundo branco'

            },
            madcolorido(){
                this.imagem='madcolorido.jpg'
                this.madeira='Colorida'
            },
            madbranca(){
                this.imagem='madbranca.jpg'
                this.madeira = 'Branca'
            },
            madclara(){
                this.imagem='madclara.jpg'
                this.madeira='Clara'

            },
            madcoloridahorizontal(){
                this.imagem='madcoloridahorizontal.jpg'
                this.madeira='Colorida na horizontal'

            },
            madmarron(){
                this.imagem='madmarron.jpg'
                this.madeira='Marrom neutra'

            },
            madescura(){
                this.imagem='madescura.jpg'
                this.madeira='Escura'

            },
            madcinza(){
                this.imagem='madcinza.jpg'
                this.madeira='Cinza'

            },
            madpedaços(){
                this.imagem='madpedaços.jpg'
                this.madeira='Retalhos'

            },
            madamrela(){
                this.imagem='madamrela.jpg'
                this.madeira='Amarelada'

            },
            madrustica(){
                this.imagem='madrustica.jpg'
                this.madeira='Rústica'

            },
        },
        mounted() {
            this.getPersonalizado()
        }
    }


</script>


<style scoped>


    #form{
        background-color: #501a01;
        border-radius: 10px;
        padding: 10px;
        margin: 20px;
    }
    .texto{
        background: white;
        border-radius: 5px;
        text-align: center;
        margin: 10px;
        padding: 5px;
    }
    #principal{
        background-color: #f0fffe;
        margin: -20px 0px -20px 0px;
        color:#501a01;
    }
    button{
        background-color: #00bbbe;
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
        box-shadow: 2px 2px 2px #049d9f;
        color: white;
    }
    h3{
      text-align: center;
    }
    #escolhatext{
        margin: 40px 0px 0px 0px;
    }
    #escolhatext>li{
        padding: 5px;
    }
    #personalize{
        margin: auto;
        text-align: center;
        padding: 20px;
        margin: 20px 0px 0px 0px;
    }
    #borda{
        width: 300px;
        height: 200px;
        text-align: center;
        margin: auto;
    }
    #bordaesp{
        background-color: rgb(171, 218, 218);
        width: 290px;
        height: 190px;
    }
    #imagemperso{
        width: 280px;
        height: 180px;
        padding: 5px;
        margin-top:-217px;
    }
    #desenhoperso{
        width: 190px;
        height: 120px;
        padding: 5px;
        margin-top:-265px;

    }
    #imagem{
        text-align: center;
        margin: auto;
        padding: 20px;
        margin: 20px;
    }
    div#imagem>img{
        width: 100px;
        height: 90px;
        margin: 5px;
    }
    #desenhos{
        text-align: center;
        margin: auto;
        padding: 20px;
        margin: 20px;
    }
    div#desenhos>img{
        width: 100px;
        height: 90px;
        margin: 5px;
    }
    div#cor{
        padding: 40px;
        margin: 20px;
        display: flex;
        margin: auto;
        text-align: center;
    }
    div#cor>p{
        width: 80px;
        height: 70px;
        margin: 10px;
        margin: auto;
    }
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
    @media (max-width:600px) {
      div#imagem>img{
        width: 40px;
        height: 40px;
        margin: 5px;
    }
    div#desenhos>img{
      width: 40px;
      height: 40px;
      margin: 5px;
  }
      div#cor>p{
        width: 40px;
        height: 40px;
        margin: 5px;
      }
      div#cor{
        margin: 10px;
        padding: 15px;
      }
      #imagem{
        margin: 5px;
        padding: 2px;
      }
      #desenhos{
        margin: 5px;
        padding: 2px;
      }
      h3{
        font-size: 20px;
      }


    }
</style>