<template>
  <div class="flex items-center mx-12">
    <button @click="prevSlider()" class="mr-4">
      <span class="material-symbols-outlined text-[#27E0FF]">
        chevron_right
      </span>
    </button>
    <div
      v-show="sliderActive === index"
      v-for="(card, index) in slider"
      :key="index"
      class="w-52 h-40 border border-white rounded-2xl">
      <div class="px-2 mt-11">
        <p class="text-left font-title font-bold text-cardTitle text-white">
          {{ card.title }}
        </p>
        <p class="font-sm text-left text-cardText text-[#cccccc]">
          {{ card.text }}
        </p>
      </div>
    </div>

    <button @click="nextSlider()" class="ml-4">
      <span class="material-symbols-outlined text-[#27E0FF]">
        chevron_right
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slider = ref([
  {
    title: "Simulação",
    text: "Informe o valor que precisa e preencha os dados.",
  },
  {
    title: "Análise",
    text: "Depois, a gente faz uma análise para entender o seu perfil financeiro.",
  },
  {
    title: "Liberação",
    text: "Se aprovado, a gente apresenta a proposta de crédito pré-liberada.",
  },
]);

const sliderActive = ref(1);

function prevSlider() {
  if (sliderActive.value) {
    sliderActive.value--;
  } else {
    sliderActive.value = slider.value.length - 1;
  }
}
function nextSlider() {
  if (sliderActive.value < slider.value.length - 1) {
    sliderActive.value++;
  } else {
    sliderActive.value = 0;
  }
}
</script>
