<template>
  <div
    class="sm:h-[30.813rem] xl:h-[33.138rem] flex flex-col xl:items-center content-start bg-gradient10">
    <div class="max-w-5xl">
      <h2
        class="ml-8 pl-1 mt-12 font-title sm:text-title text-white xl:text-titleDesktop sm:text-title">
        <mark class="bg-[#0524dd] text-white pt-0 pl-1.5 pr-1 font-title">
          Crédito simples</mark
        >
        e &nbsp;fácil para o seu &nbsp;negócio girar!
      </h2>

      <p class="font-sm text-white text-sm mt-6 pr-10 pb-7 ml-11">
        Veja como vamos te ajudar.
      </p>

      <div class="ml-11 xl:invisible sm:visible xl:hidden">
        <Carousel />
      </div>

      <div class="flex justify-between ml-11 sm:invisible xl:visible">
        <Cards />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "./CreditCards/Carousel.vue";
import Cards from "./CreditCards/Cards.vue";

export default {
  components: {
    Carousel,
    Cards,
  },
};
</script>
