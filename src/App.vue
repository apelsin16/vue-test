<template>
    <div>
        <Header :isLogged="isLogged"></Header>
    </div>
    <div v-if="!isLogged">
        <Main
            :toggleIsLogged="toggleIsLogged"
        ></Main>
    </div>
    <div v-else>
        <List
            :toggleIsLogged="toggleIsLogged"
        ></List>
    </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';
import List from './components/List'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    List
  },
  data () {
    return {
      isLogged: false
    }
  },
  methods: {
    toggleIsLogged() {
      this.isLogged = !this.isLogged
    }
  }
}
</script>



