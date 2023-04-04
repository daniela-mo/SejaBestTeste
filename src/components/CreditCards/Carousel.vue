<template>
  <carousel :items-to-show="2.3">
    <slide v-for="slide in slides" :key="slide">
      <div
        class="w-72 h-40 mr-3.5 border border-[0.036rem] border-[#ffffff] rounded-2xl">
        <div class="px-2 mt-11">
          <img :src="slide.imageIcons" />
          <p class="text-left font-title font-bold text-cardTitle text-white">
            {{ slide.title }}
          </p>
          <p class="font-sm text-left text-cardText text-[#cccccc]">
            {{ slide.text }}
          </p>
        </div>
      </div>
    </slide>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
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
          imageIcons: "../../assets/images/calendar.svg",
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
