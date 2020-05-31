<template>
  <main>
    <div>
      <h1>
        Fejk
      </h1>
    </div>
    <section class="controls">
      <select
        v-model="numOfPeople"
        @change="onNumOfPeopleChange()"
        id="numOfPeople"
        name="numOfPeople"
      >
        <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
      </select>
    </section>
    <section class="cardContainer">
      <PersonCard
        v-for="person in people"
        :key="person.name"
        :person="person"
        class="card"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PersonCard from "@/components/PersonCard.vue";
import DataService from "@/services/data.service";
import { Person } from "@/types";

@Component({
  components: {
    PersonCard,
  },
})
export default class Home extends Vue {
  private people: Array<Person> = [];
  private numOfPeople = 1;

  mounted() {
    this.loadPeople(this.numOfPeople);
  }

  onNumOfPeopleChange() {
    this.loadPeople(this.numOfPeople);
  }

  loadPeople(amount: number) {
    DataService.getPeople(amount).then(res => {
      this.people = res.data;
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d1d1d1;
}

body {
  background-color: #161616;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
}

.card {
  margin: 10px 15px;
}

h1 {
  color: #cfba58;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}
</style>
