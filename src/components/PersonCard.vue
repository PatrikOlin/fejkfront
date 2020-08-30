<template>
  <main>
    <div class="cardHeader">
      <font-awesome-icon
        class="cardHeaderIcon"
        :icon="['fas', 'user']"
        size="2x"
      />
      <font-awesome-icon
        class="cardHeaderIcon cardHeaderCopyIcon"
        :icon="['far', 'clone']"
        size="lg"
        v-on:click="copyPerson()"
      />
    </div>
    <table class="dataTable">
      <tr>
        <td><h4>Name:</h4></td>
        <td>{{ person.name }}</td>
        <td>
          <span v-clipboard:copy="person.name" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Email:</h4></td>
        <td>{{ person.email }}</td>
        <td>
          <span
            class="copyIcon"
            v-clipboard:copy="person.email"
            v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Pin:</h4></td>
        <td>{{ person.pin }}</td>
        <td>
          <span
            class="copyIcon"
            v-clipboard:copy="person.pin"
            v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Address:</h4></td>
        <td>{{ person.address }}</td>
        <td>
          <span
            class="copyIcon"
            v-clipboard:copy="person.address"
            v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Phone:</h4></td>
        <td>{{ person.phone }}</td>
        <td>
          <span
            class="copyIcon"
            v-clipboard:copy="person.phone"
            v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Password:</h4></td>
        <td>{{ person.password }}</td>
        <td>
          <span
            class="copyIcon"
            v-clipboard:copy="person.password"
            v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
    </table>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Person } from "@/types";

@Component
export default class PersonCard extends Vue {
  @Prop() private person!: Person;

  onCopy(e: any) {
    console.log("copied", e);
  }

  copyPerson() {
    this.$copyText(JSON.stringify(this.person));
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
</style>
