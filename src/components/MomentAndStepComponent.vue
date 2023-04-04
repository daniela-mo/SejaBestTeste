<template>
  <div
    class="h-auto bg-stepByStep flex flex-col sm:content-start xl:items-center">
    <div class="flex sm:flex-col xl:flex-row xl:max-w-5xl ml-6">
      <div class="z-10 mt-32 mr-32">
        <h2
          class="xl:w-56 sm:w-[20.913rem] font-title sm:text-title xl:text-titleDesktop sm:text-title text-white border">
          Qual é o
          <mark class="bg-[#0524dd] text-white px-1.5 leading-snug"
            >momento</mark
          >
          da sua empresa?
        </h2>
        <p
          class="xl:w-[26.563rem] sm:w-[19.75rem] font-sm leading-loose text-white text-sm mt-6 pr-10 pb-7">
          O crédito pode te ajudar em
          <span class="font-bold"> vários objetivos</span>, de acordo com a
          <span class="font-bold">situação atual de seu negócio.</span>
        </p>
      </div>
      <div
        class="absolute ml-64 mr-32 sm:hidden xl:block"
        style="margin-top: -60px">
        <img
          src="../assets/images/homem2.png"
          alt=""
          class="w-[27.813rem] h-[41.438rem]" />
        <div class="h-[0.5rem] bg-gradient30"></div>
      </div>

      <div class="z-10 xl:mt-48">
        <div
          class="flex flex-col sm:items-center xl:items-end sm:mr-8 xl:ml-24">
          <div
            class="w-56 mb-4 p-1 flex justify-around border border-[0.036rem] border-[#ffffff] rounded-full">
            <img src="../assets/images/money.svg" alt="Capital de Giro" />
            <p class="p-0 font-sm text-center text-white text-sm">
              Capital de Giro
            </p>
          </div>

          <div
            class="w-80 mb-4 p-1 flex justify-around border border-[0.036rem] border-[#ffffff] rounded-full">
            <img src="../assets/images/pig.svg" alt="Capital de Giro" />
            <p class="p-0 font-sm text-center text-white text-sm">
              Organização Financeira
            </p>
          </div>

          <div
            class="w-72 mb-4 p-1 flex justify-around border border-[0.036rem] border-[#ffffff] rounded-full">
            <img src="../assets/images/moneyThin.svg" alt="Capital de Giro" />
            <p class="p-0 font-sm text-center text-white text-sm">
              Novos investimentos
            </p>
          </div>

          <div
            class="w-40 mb-20 p-1 flex justify-around border border-[0.036rem] border-[#ffffff] rounded-full">
            <img src="../assets/images/homeS2.svg" alt="Capital de Giro" />
            <p class="p-0 font-sm text-center text-white text-sm">Reforma</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[0.5rem] bg-gradient30 sm:block xl:hidden"></div>

    <div class="z-10 xl:mt-56 sm:mt-12 mb-32">
      <h2
        class="sm:w-[17.125rem] xl:w-[59.625rem] sm:mx-14 font-title text-center sm:text-title xl:text-titleDesktop text-white">
        <mark class="bg-[#0524dd] text-white px-1.5">Passo a passo</mark>
        para contratar
      </h2>
      <p
        class="xl:px-6 sm:mx-12 font-sm text-center leading-loose text-white text-sm mt-6 xl:pr-10 pb-7">
        Com a SejaBest, tudo é 100% digital. Você só precisa separar poucos
        documentos.
      </p>

      <CardsDesktop class="sm:hidden xl:block xl:flex" />

      <Card class="sm:block xl:hidden sm:flex" />
    </div>
  </div>
</template>

<script>
import CardsDesktop from "./StepByStepCard/CardsDesktop.vue";
import Card from "./StepByStepCard/Cards.vue";

export default {
  components: {
    CardsDesktop,
    Card,
  },
};
</script>
