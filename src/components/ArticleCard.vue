<template>
  <main>
    <div class="cardHeader">
      <font-awesome-icon
        class="cardHeaderIcon"
        :icon="['fas', 'boxes']"
        size="2x"
      />
      <font-awesome-icon
        class="cardHeaderIcon cardHeaderCopyIcon"
        :icon="['far', 'clone']"
        size="lg"
        v-on:click="copyArticle()"
      />
    </div>
    <table class="dataTable">
      <tr>
        <td><h4>Id:</h4></td>
        <td>{{ article.id }}</td>
        <td>
          <span v-clipboard:copy="article.id" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Description:</h4></td>
        <td>{{ article.description }}</td>
        <td>
          <span
            v-clipboard:copy="article.description"
            v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Vat code:</h4></td>
        <td>{{ article.vatCode }}</td>
        <td>
          <span v-clipboard:copy="article.vatCode" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Price:</h4></td>
        <td>{{ article.price }}</td>
        <td>
          <span v-clipboard:copy="article.price" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
      <tr>
        <td><h4>Unit:</h4></td>
        <td>{{ article.unit }}</td>
        <td>
          <span v-clipboard:copy="article.unit" v-clipboard:success="onCopy"
            ><font-awesome-icon class="copyIcon" :icon="['far', 'clone']" />
          </span>
        </td>
      </tr>
    </table>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Article } from "@/types";

@Component
export default class ArticleCard extends Vue {
  @Prop() private article!: Article;

  onCopy(e: any) {
    console.log("copied", e);
  }

  copyArticle() {
    this.$copyText(JSON.stringify(this.article));
  }
}
</script>

<style scoped lang="scss"></style>
