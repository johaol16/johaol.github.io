<template>
  <div>
    <h1>Sveriges städer</h1>
    <ul v-if="cities">
      <li :key="city.id" v-for="city in cities">{{ city.name }}</li>
    </ul>
    <p v-else>Laddar...</p>
    <input v-model="name" placeholder="Skriv in en stad" />
    <b-button @click="nyStad()" variant="primary">Lägg till</b-button>
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

  methods: {
    nyStad() {
      fetch("https://avancera.app/cities/", {
        body: JSON.stringify({ name: this.name }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((response) => response.json())
        .then((result) => {
          this.cities = result;
        });
    },
  },

  data() {
    return {
      cities: null,
      id: null,
      name: null,
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
input {
  margin-left: 50px;
  padding: 5px;
  border: 2px solid #d80505;
  border-radius: 4px;
  margin-right: 30px;
}
</style>



