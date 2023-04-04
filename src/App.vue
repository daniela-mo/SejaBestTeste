<template>
  <WrapperTopComponent />
  <SimpleCreditComponent />
  <MomentAndStepComponent />
  <AtmsComponent />
  <BeBestComponent />
  <FaqComponent />
  <FormComponent />
  <Footer />
</template>

<script>
import WrapperTopComponent from "./components/WrapperTopComponent.vue";
import SimpleCreditComponent from "./components/SimpleCreditComponent.vue";
import MomentAndStepComponent from "./components/MomentAndStepComponent.vue";
import AtmsComponent from "./components/AtmsComponent.vue";
import BeBestComponent from "./components/BeBestComponent.vue";
import FaqComponent from "./components/FaqComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    WrapperTopComponent,
    SimpleCreditComponent,
    MomentAndStepComponent,
    AtmsComponent,
    BeBestComponent,
    FaqComponent,
    FormComponent,
    Footer,
  },
};
</script>
