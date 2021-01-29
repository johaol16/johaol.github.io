<template>
  <div>
    <h1>Befolkning</h1>
    <ul v-if="cities">
      <li :key="city.id" v-for="city in cities">
        {{ city.name }}: {{ city.population }}
      </li>
    </ul>
    <p v-else>Laddar...</p>
  </div>
</template>


<script>
export default {
  created() {
    fetch("https://avancera.app/cities/")
      .then((response) => response.json())
      .then((result) => {
        this.cities = result;
      });
  },
  data() {
    return {
      cities: null,
      id: null,
      name: null,
      population: null,
    };
  },
};
</script>

<style scoped>
h1 {
  color: rgb(6, 13, 53);
  padding-left: 50px;
  padding-bottom: 30px;
}
p {
  padding-left: 50px;
}
ul {
  padding-left: 70px;
}
</style>
