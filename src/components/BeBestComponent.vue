<template>
  <div class="h-auto flex flex-col xl:items-center bg-[black]">
    <div class="xl:max-w-5xl mx-14">
      <h2
        class="sm:w-72 xl:w-[59.625rem] mt-12 font-title text-center sm:text-title xl:text-titleDesktop text-white">
        Quem sonhou, se organizou e
        <span class="sm:px-12 xl:p-0">investiu</span> com a ajuda da
        <mark class="bg-[#0524DD] text-white px-1.5 leading-loose"
          >SejaBest</mark
        >
      </h2>
    </div>

    <Card class="my-10" />
  </div>
</template>

<script>
import Card from "./BeBestCards/Cards.vue";

export default {
  components: {
    Card,
  },
};
</script>
