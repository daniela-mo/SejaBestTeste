<template>
  <div class="h-auto flex flex-col bg-[#000000] items-center">
    <div class="ml-12 mb-14 mr-8 text-center xl:max-w-5xl">
      <h2
        class="sm:w-80 xl:w-[59.625rem] mt-14 sm:text-title xl:text-titleDesktop text-white">
        <mark class="bg-[#0524dd] text-white px-1.5">Contrate agora</mark>
        seu crédito PJ
      </h2>
      <p
        class="sm:ml-4 font-sm leading-loose text-white text-sm mt-6 pr-10 pb-7">
        Seu sonho está a um formulário de distância.
      </p>

      <Form />
    </div>
  </div>
</template>

<script>
import Form from "./Form/Form.vue";

export default {
  components: { Form },
};
</script>
