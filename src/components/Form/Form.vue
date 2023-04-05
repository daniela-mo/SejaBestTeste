<template>
  <v-form method="get" action="">
    <div class="xl:flex xl:flex-wrap items-center justify-center">
      <div class="xl:mr-4">
        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >Qual o seu nome completo?</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2" />
        </div>

        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >Qual a área de atuação da sua empresa?</label
          >
          <select
            name=""
            id=""
            class="bg-[#1A1A1A] text-[#A7A8AA] text-[#A7A8AA] rounded-lg py-2"></select>
        </div>

        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >Qual a data de fundação do seu negócio?</label
          >
          <input
            type="date"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2" />
        </div>

        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2 sm:hidden xl:block"
            >Cidade</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2 sm:hidden xl:block"
            v-model="city"
            name="city"
            id="city" />
        </div>

        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2 sm:hidden xl:block"
            >Rua</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2 sm:hidden xl:block"
            name="street"
            id="street"
            v-model="street" />
        </div>

        <div
          class="xl:w-[29.116rem] text-[#A7A8AA] flex flex-col sm:hidden xl:block">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2 sm:hidden xl:block"
            >Número</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2 sm:hidden xl:block" />
        </div>
        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >Seu WhatsApp para contato</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2" />
        </div>
      </div>
      <div>
        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >E o número do seu CNPJ?</label
          >
          <input
            type="number"
            maxlength="8"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2" />
        </div>
        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >E a renda mensal dela?</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2" />
        </div>
        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >E o CEP de onde fca sua empresa</label
          >
          <input
            type="text"
            v-model="cep"
            name="cep"
            id="cep"
            placeholder="Apenas números"
            v-on:click.prevent.stop="search_cep"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2" />
        </div>

        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2 sm:hidden xl:block"
            >Estado</label
          >
          <select
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2 sm:hidden xl:block">
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PR">Paraná</option>
            <option value="PB">Paraíba</option>
            <option value="PA">Pará</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SE">Sergipe</option>
            <option value="SP">São Paulo</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>

        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2 sm:hidden xl:block"
            >Bairro</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2 sm:hidden xl:block"
            v-model="district"
            name="district"
            id="district" />
        </div>
        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2 sm:hidden xl:block"
            >Complemento</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2 sm:hidden xl:block" />
        </div>
        <div class="xl:w-[29.116rem] flex flex-col">
          <label
            class="sm:text-labelForm text-white xl:text-[0.9rem] text-left my-2"
            >E seu e-mail</label
          >
          <input
            type="text"
            class="bg-[#1A1A1A] text-[#A7A8AA] rounded-lg py-2" />
        </div>
      </div>
    </div>
    <div>
      <button
        class="w-72 mt-10 bg-[#FF671F] rounded-full text-base text-white text-bold">
        CONTRATAR CRÉDITO AGORA
      </button>
    </div>
  </v-form>
</template>

<script setup>
 new Vue({
   el: "#app",
   data() {
     return {
       cep: "",
       district: "",
       street: "",
       city: "",
       response: null,
       baseUrl: "https://viacep.com.br/ws/",
     };
   },
   methods: {
     getCep() {
       const url = `${this.baseUrl}${this.cep}/json/`;
       axios
         .get(url)
         .then((resp) => {
           const data = resp.data;
           if (!data.erro) {
             this.response = data;
           } else {
             alert("Cep não encontrado");
           }
         })
         .catch((error) => {
           console.error(error);
         });
     },
   },
   watch: {
     cep: function (novoCep, velhoCep) {
       if (novoCep.length === 8) this.getCep();
       else this.response = null;
     },
   },
 });
</script>
