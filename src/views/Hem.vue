<template>
  <div class="hem">
    <Cities />
    <Footer text="Sida: Hem" />
  </div>
</template>

<script>
import Cities from "@/components/Cities.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Hem",
  components: {
    Cities,
    Footer,
  },
};
</script>




