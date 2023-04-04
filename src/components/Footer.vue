<template>
  <div class="bg-white h-[53.5rem] px-20 pt-10 pb-2 flex sm:flex-col">
    <div class="flex-col">
      <div
        class="flex xl:flex-row sm:flex-col xl:justify-between sm:text-center max-w-7xl">
        <div>
          <strong class="text-[#A7A8AA] text-[0.75rem]"> Sobre </strong>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Sobre a SejaBest</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Portal</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Seja um Parceiro</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">
            Acesse a áreadoParceiros
          </p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">TrabalheConosco</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Dúvidas Frequentes</p>
        </div>
        <div>
          <strong class="text-[#A7A8AA] text-[0.75rem] my-10">
            Produtos
          </strong>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">
            Empréstimocom garantiadeimóvel
          </p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">
            Financiamento Imobiliário
          </p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Acesse suaconta</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">
            Acesse a áreadoParceiros
          </p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Termosde uso</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">
            Políticade Privacidade
          </p>
        </div>
        <div>
          <strong class="text-[#A7A8AA] text-[0.75rem] my-10">
            FaleConosco
          </strong>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">
            (47) 3311-0180<template>
              <i class="fa-brands fa-whatsapp"></i>
            </template>
          </p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Precisade ajuda?</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">contato@seja.best</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Dúvidas?</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Acesse nossoFAQ</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Escritórios</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">BalneárioCamboriú</p>
          <p class="text-[#A7A8AA] text-[0.75rem] my-10">Brasília</p>
        </div>
      </div>

      <div class="flex justify-between sm:flex-col xl:flex-row">
        <img
          src="../assets/images/logo_gray.svg"
          alt="Logo SejaBest"
          class="w-40 mt-16 mb-5" />
        <div class="flex">
          <img
            src="../assets/images/facebook.svg"
            alt="Logo SejaBest"
            class="w-8 mx-2" />
          <img
            src="../assets/images/instagram.svg"
            alt="Logo SejaBest"
            class="w-8 mx-2" />
          <img
            src="../assets/images/youtube.svg"
            alt="Logo SejaBest"
            class="w-8 mx-2" />
          <img
            src="../assets/images/linkedin.svg"
            alt="Logo SejaBest"
            class="w-8 mx-2" />
          <img
            src="../assets/images/telegram.svg"
            alt="Logo SejaBest"
            class="w-8 mx-2" />
        </div>
      </div>
      <div class="text-[#A7A8AA] text-[0.75rem] mt-10 mb-8">
        <p>
          A Bestéuma plataformadigitalqueatuacomocorrespondente Bancáriopara
          facilitaro processo de contratação de empréstimos.Como Correspondente
          Bancário, seguimosasdiretrizesda Resolução nº 3.954,de 24 de fevereiro
          Somoscorrespondentesbancáriosdas seguintesinstituições:banco Daycoval
          S.Acnpj sobo no 62.232.889/0001-90.bancoSantander s.a.cnpj sobo
          no90.400.888/0001-42 Cashme soluçõesfinanceirasLtda.cnpj sobo
          no34.175.529/0001-68.Itaú Unibanco s.a.cnpj sobo
          no60.701.190/0001-04.companhia promotora Ucicnpj sobo no
          14.010.548/0001-27.Pontte soluçõesfinanceirasLtda.cnpj sobo
          no33.296.599/0001-01.banco Barideinvest-mentosefinanciamentosS.A.cnpj
          sobo no00.556.603/0001-74.companhia hipotecaria piratini– CHP.cnpj
          sobo no 18.282.093/0001-50. B.V. financeira S.Acnpj sobo no
          01.149.953/0001-89.
        </p>
        <p class="mt-2">
          Exemplodeempréstimocom Garantiade Imóvel: mínimo60 mesesemáximo 240
          meses.Exemplocom Garantiade Imóvel–Empréstimode R$ 100.000,00 para
          pagarem 15 anos (180 meses)– Prestaçãoinicialde R$ 1.488,08,com
        </p>
        <p>
          uma taxade jurosde 1,09% ao mês + IPCA, Sistemade Amortização Price.
          CETde 16,38% ao ano.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";

export default {
  name: "my-cool-component",

  components: {
    SvgIcon,
  },

  data() {
    return {
      path: mdiAccount,
    };
  },
};
</script>
