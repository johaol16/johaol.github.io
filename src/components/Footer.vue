<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>


<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
p {
  text-align: center;
  padding-top: 100px;
  font-style: bold;
}
</style>