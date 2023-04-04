<template>
  <div
    class="sm:h-auto xl:h-[29.25rem] pb-16 flex sm:flex-col sm:bg-[black] xl:items-center xl:bg-gradient40">
    <div class="xl:flex xl:max-w-5xl xl:mt-14 sm:mt-0">
      <div class="mx-14 mb-5">
        <h2
          class="w-[17.388rem] sm:mt-12 xl:mt-0 font-title sm:text-title xl:text-titleDesktop text-white">
          Ainda ficou com
          <mark
            class="bg-[#0524dd] text-white leading-relaxed sm:px-1.5 xl:pr-0.5 xl:pl-0"
            >dúvidas?</mark
          >
        </h2>
      </div>

      <div class="flex flex-col">
        <div
          class="xl:w-[37.563rem] mx-6 border-b border-[#0524DD]"
          v-for="(question, index) in questions"
          :key="question.answer">
          <button
            class="flex items-center py-5 text-left font-title sm:text-questionFaq xl:text-cardTextDesktop text-white"
            @click="() => handleAccordion(index)">
            {{ question.title }}

            <span class="material-symbols-outlined w-px h-px mb-5 ml-2">
              add_circle
            </span>
          </button>

          <Collapse :when="questions[index].isExpanded" class="collapse">
            <p class="text-white sm:text-questionFaf xl:text-cardTextDesktop">
              {{ question.answer }}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  </div>
  <div class="h-2 division"></div>
</template>

<script setup>
import { reactive } from "vue";
import { Collapse } from "vue-collapsed";

const questions = reactive([
  {
    title: "Preciso ter faturamento mínimo para contratar o empréstimo?",
    answer:
      "Sim o ideal é que o negócio registre faturamento de R$ 300 mil ao ano",
    isExpanded: false,
  },
  {
    title: "O Crédito é válido para empresas novas e antigas?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isExpanded: false,
  },
  {
    title: "Quais documentos preciso apresentar?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isExpanded: false,
  },
  {
    title: "Qual é a taxa de juros para empresas?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isExpanded: false,
  },
]);

function handleAccordion(selectedIndex) {
  questions.forEach((_, index) => {
    questions[index].isExpanded =
      index === selectedIndex ? !questions[index].isExpanded : false;
  });
}

/**
 * For individual control you might use:
 * */
// function handleMultiple(index) {
//   questions[index].isExpanded = !questions[index].isExpanded;
// }
</script>

<style>
.collapse {
  transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
  text-decoration-color: #0524dd;
}

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
