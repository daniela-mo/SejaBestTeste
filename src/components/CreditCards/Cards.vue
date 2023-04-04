<template>
  <div
    v-for="slide in slides"
    :key="slide"
    class="flex w-56 h-60 mt-2 border border-[0.036rem] border-[#ffffff] rounded-2xl">
    <div class="px-3 mt-24">
      <img :src="slide.imageIcons" />
      <p
        class="text-left font-title font-bold text-cardTitleDesktop text-white">
        {{ slide.title }}
      </p>
      <p class="font-sm text-left text-cardTextDesktop text-[#cccccc]">
        {{ slide.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Meu crédito",
          text: "Até R$ 700 mil para investir ou organizar",
          imageIcons: "../../assets/images/money.svg",
        },
        {
          title: "Taxa justa",
          text: "0,88% a.m (+ CDI ou IPCA) ou fixa de 1,59% a.a.",
          imageIcons: "../../assets/images/percent.svg",
        },
        {
          title: "Prazo",
          text: "Até 72 meses (6 anos) para pagar.",
          imageIcons: "url('../../assets/images/calendar.svg)",
        },
        {
          title: "Contrato",
          text: "SLA pronto e na mão em até 20 dias.",
          imageIcons: "../../assets/images/tasks.svg",
        },
      ],
    };
  },
};
</script>
