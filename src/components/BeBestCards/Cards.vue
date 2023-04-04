<template>
  <div class="flex flex-col items-center mx-14">
    <div
      v-show="sliderActive === index"
      v-for="(card, index) in slider"
      :key="index"
      class="w-64 h-80 flex flex-col items-center bg-white rounded text-center">
      <div class="px-4 mt-5">
        <div class="w-8 h-8 p-12 mx-16 mb-2.5 bg-black rounded-full">
          <img :src="card.src" />
        </div>

        <p class="font-sm text-cardText text-black">
          {{ card.text }}
        </p>
        <p class="font-sm font-bold text-cardText text-black">
          {{ card.name }}
        </p>
      </div>
    </div>
    <div class="flex">
      <button @click="prevSlider()" class="mr-2">
        <span class="material-symbols-outlined text-white"> chevron_left </span>
      </button>

      <button @click="nextSlider()" class="ml-2">
        <span class="material-symbols-outlined text-white">
          chevron_right
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slider = ref([
  {
    src: "https://br.freepik.com/fotos-gratis/vista-lateral-de-uma-mulher-sorridente-trabalhando-com-um-laptop-no-escritorio_13296937.htm#page=2&position=2&from_view=search",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    name: "-Julliet Elliott, Cyclist",
  },
  {
    src: "https://br.freepik.com/fotos-gratis/retrato-de-uma-jovem-bonita-em-pe-na-parede-cinza_13813927.htm#&position=7&from_view=search",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "-Amy Copper, Cto",
  },
  {
    src: "https://br.freepik.com/fotos-premium/jovem-casal-feliz-caminhando-brincando-com-cachorros-em-um-parque-ao-ar-livre_18876101.htm#&position=48&from_view=author",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "-David Scott, Analyst",
  },
]);

const sliderActive = ref(0);

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
