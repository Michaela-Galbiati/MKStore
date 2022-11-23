<template>
  <div class="about">
    <div class="img">
      <h1>Pedidos</h1>
    </div>
    <div id="tabela">
      <h5>Gerenciar pedidos:</h5>
        <table>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Madeira</th>
            <th>Estampa</th>
            <th>Cor da borda</th>
            <th>Status do pedido:</th>
            <th>Opção</th>
          </tr>
          <tr v-for="form in Pedido" :key="form.id">
            <td>{{form.id}}</td>
            <td>{{form.name}}</td>
            <td>{{form.telefone}}</td>
            <td>{{form.email}}</td>
            <td>{{form.madeiras}}</td>
            <td>{{form.estampas}}</td>
            <td>{{form.bordacores}}</td>
            <td>
              <select name="status" id="status" @change="updatepainel($event, form.id)">
                <option value="">Selecione</option> <option v-for="s in status" :key="s.id" :value="s.title" :selected="form.status == s.title">{{s.title}}</option>
              </select>
            </td>
            <td><button @click="deletepainel(form.id)">Cancelar</button></td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script>

  export default{
    data(){
      return{
        Pedido:null,
        form:null,
        status:[],
      }
    },
    methods: {
      async getPedidos(){
        const req =await fetch("http://localhost:3000/Pedido");
        const data = await req.json();
        this.Pedido = data;
        console.log(this.Pedido)
        this.getStatus();
      },
      async getStatus(){
        const req =await fetch("http://localhost:3000/status");
        const data = await req.json();
        this.status = data;
        console.log(this.status)
      },
      async deletepainel(id){
        const req =await fetch(`http://localhost:3000/Pedido/${id}`,{
          method: "DELETE"
        });
        const res = await req.json();

        this.getPedidos();

      },
      async updatepainel(event, id){

        const option= event.target.value;

        const dataJson =JSON.stringify({status:option});

        const req = await fetch(`http://localhost:3000/Pedido/${id}` ,{

          method:"PATCH",
          headers:{"Content-Type": "application/json"},
          body: dataJson

        });

        const res = await req.json();
        console.log(res);
      }
    },
    mounted() {
      this.getPedidos();
    },
  }


</script>

<style scoped>
select{
  background-color: rgb(1, 182, 158);
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  color:white;
}
button{
  background-color: rgb(8, 150, 150);
  border-radius: 5px;
  color: white;
  padding: 8px;
  border: 4px solid rgb(1, 40, 40);

}
button:hover{
  background-color: rgb(1, 40, 40);
  border: 4px solid rgb(4, 156, 138);
}
option{
  background-color: rgb(0, 187, 178);
  color: white;
  border:1px solid green;
}
.about{
  text-align: center;

}
#tabela{
  margin: 20px;
  overflow: auto;
}
div.img{
  background-image: url(imgfooter.jpg);
  background-attachment: fixed;
  height: 500px;
}
h1{
  font-size: 40px;
  padding: 100px;
  width: 300px;
  color: white;
  text-align: center;
  letter-spacing: 15px;
}
h5{
  margin: 10px;
}
img{
  width: 100%;
}
table, th, td {
  background-color: rgba(237, 247, 247, 0.521);
  overflow:auto ;
  border: 1px solid rgb(0, 137, 139);
  padding: 10px;
  text-align: center;
  margin: auto;
  color: rgb(0, 64, 64);
}

</style>