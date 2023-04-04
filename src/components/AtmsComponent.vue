<template>
  <div class="h-screen flex flex-col bg-[black] xl:items-center">
    <div class="mx-5 xl:max-w-5xl">
      <h2
        class="mt-12 font-title text-center sm:text-title xl:text-titleDesktop text-white">
        A melhor plataforma
        <mark class="bg-[#0524dd] text-white sm:leading-loose px-1.5 py-0"
          >multibancos</mark
        >
      </h2>
      <p
        class="mx-9 font-sm leading-loose text-center text-white text-sm sm:mt-6 xl:mt-1 pb-7">
        Conheça os parceiros que estão
        <span class="font-bold"> decolando</span> com a
        <span class="font-bold">SejaBest.</span>
      </p>
      <img
        class="opacity-95 mb-0 xl:hidden sm:visible"
        src="../assets/images/Bancos_Mobile.png"
        alt="" />
      <img
        class="opacity-50 mb-12 xl:visible sm:invisible"
        src="../assets/images/Bancos.png"
        alt="" />
    </div>
  </div>
  <div class="h-2 division"></div>
</template>

<style scoped>
.division {
  background: rgb(5, 36, 221);
  background: linear-gradient(
    90deg,
    rgba(5, 36, 221, 1) 0%,
    rgba(8, 2, 93, 1) 72%,
    rgba(0, 0, 0, 1) 95%
  );
}
</style>
