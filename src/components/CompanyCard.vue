<template>
  <main>
    <div class="cardHeader">
      <font-awesome-icon
        class="cardHeaderIcon"
        :icon="['fas', 'building']"
        size="2x"
      />
      <font-awesome-icon
        class="cardHeaderIcon cardHeaderCopyIcon"
        :icon="['far', 'clone']"
        size="lg"
        v-on:click="copyCompany()"
      />
    </div>
    <table class="dataTable">
      <tr>
        <td><h4>Name:</h4></td>
        <td>{{ company.companyName }}</td>
        <td>
          <span
            v-clipboard:copy="company.companyName"
            v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Org num:</h4></td>
        <td>{{ company.orgNum }}</td>
        <td>
          <span v-clipboard:copy="company.orgNum" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Vat code:</h4></td>
        <td>{{ company.vatCode }}</td>
        <td>
          <span v-clipboard:copy="company.vatCode" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>CEO:</h4></td>
        <td>{{ company.beneficialOwner }}</td>
        <td>
          <span
            v-clipboard:copy="company.beneficialOwner"
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
import { Company } from "@/types";

@Component
export default class CompanyCard extends Vue {
  @Prop() private company!: Company;

  onCopy(e: any) {
    console.log("copied", e);
  }

  copyCompany() {
    this.$copyText(JSON.stringify(this.company));
  }
}
</script>

<style scoped lang="scss"></style>
