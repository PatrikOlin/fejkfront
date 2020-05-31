<template>
  <main>
    <table class="dataTable">
      <tr v-for="item in items" :key="item.name">
        <td><h4>Name:</h4></td>
        <td>{{ person.name }}</td>
        <td>
          <span v-clipboard:copy="person.name" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
    </table>

    <button @click="loadPerson()">Hämta en ny skön lirare</button>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DataService from "../services/data.service";

@Component
export default class Card extends Vue {
  @Prop() private msg!: string;
  @Prop() private items: any;
  private person: any = {
    name: null,
    email: null,
    pin: null,
    address: null,
    phone: null,
    password: null,
  };

  onCopy(e: any) {
    console.log("copied", e);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

h1 {
  color: #cfba58;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}

h4 {
  margin: unset;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

table {
  border-collapse: collapse;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}

th {
  background: #ccc;
}

th,
td {
  border: 0px solid #ccc;
  padding: 15px 20px;
  text-align: left;
}

tr {
  padding: 25px;
}

tr:nth-child(even) {
  background: #101010;
}

.copyIcon {
  transition: all 0.15s ease-out;
  cursor: pointer;
}

.copyIcon:hover {
  transform: scale(1.2);
}
</style>
