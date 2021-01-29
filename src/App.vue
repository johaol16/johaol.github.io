<template>
  <div id="app">
    <nav id="nav">
      <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li><router-link to="/fakta">Fakta</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  color: #000000;
}

ul {
  display: flex;
  flex-direction: row;
}

li {
  display: flex;
  padding: 20px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #d80505;
}
</style>
