<template>
  <div class="fakta">
    <Population />
    <Footer text="Sida: Fakta" />
  </div>
</template>


<script>
import Population from "@/components/Population.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Fakta",
  components: {
    Population,
    Footer,
  },
};
</script>



