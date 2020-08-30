<template>
  <main>
    <div class="cardHeader">
      <font-awesome-icon
        class="cardHeaderIcon"
        v-if="type === 'company'"
        :icon="['fas', 'building']"
        size="2x"
      />
      <font-awesome-icon
        class="cardHeaderIcon"
        v-if="type === 'person'"
        :icon="['fas', 'user']"
        size="2x"
      />
      <font-awesome-icon
        class="cardHeaderIcon"
        v-if="type === 'article'"
        :icon="['fas', 'boxes']"
        size="2x"
      />
      <font-awesome-icon
        class="cardHeaderIcon cardHeaderCopyIcon"
        :icon="['far', 'clone']"
        size="lg"
        v-on:click="copyData()"
      />
    </div>
    <table class="dataTable">
      <template v-for="(value, key, index) in data">
        <tr
          :key="index"
          v-on:click="toggleOpen(value)"
          :class="{ opened: open }"
        >
          <td>
            <h4>{{ key }}:</h4>
          </td>
          <td>
            {{ isPerson(value) ? value.name : value }}
          </td>
          <td>
            <span v-clipboard:copy="value" v-clipboard:success="onCopy"
              ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
            </span>
          </td>
        </tr>
      </template>
    </table>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Company, Person, Article } from "@/types";

@Component
export default class CompanyCard extends Vue {
  @Prop() private data!: Company | Person | Article;
  @Prop() private type!: string;
  private open = false;

  onCopy(e: any) {
    console.log("copied", e);
  }

  copyData() {
    this.$copyText(JSON.stringify(this.data));
  }

  toggleOpen(value: any) {
    if (this.isPerson(value)) {
      this.open = !this.open;
    }
  }

  isPerson(x: any): x is Person {
    return (x as Person).name !== undefined;
  }
}
</script>

<style scoped lang="scss">
.opened {
  background-color: yellow;
}
</style>
