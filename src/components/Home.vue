<template>
  <main>
    <div>
      <h1>
        Fejk
      </h1>
    </div>
    <section class="controls">
      <div class="ctrl">
        <font-awesome-icon class="ctrlIcon" :icon="['fas', 'user']" size="lg" />
        <select
          v-model="numOfPeople"
          @change="onNumOfPeopleChange()"
          id="numOfPeople"
          name="numOfPeople"
        >
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
        <font-awesome-icon
          class="backspaceIcon"
          :icon="['fas', 'backspace']"
          size="lg"
          v-on:click="resetPeople()"
        />
      </div>
      <div class="ctrl">
        <font-awesome-icon
          class="ctrlIcon"
          :icon="['fas', 'building']"
          size="lg"
        />
        <select
          v-model="numOfCompanies"
          @change="onNumOfCompaniesChange()"
          id="numOfCompanies"
          name="numOfCompanies"
        >
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
        <font-awesome-icon
          class="backspaceIcon"
          :icon="['fas', 'backspace']"
          size="lg"
          v-on:click="resetCompanies()"
        />
      </div>
      <div class="ctrl">
        <font-awesome-icon
          class="ctrlIcon"
          :icon="['fas', 'boxes']"
          size="lg"
        />
        <select
          v-model="numOfArticles"
          @change="onNumOfArticlesChange()"
          id="numOfArticles"
          name="numOfArticles"
        >
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
        <font-awesome-icon
          class="backspaceIcon"
          :icon="['fas', 'backspace']"
          size="lg"
          v-on:click="resetArticles()"
        />
      </div>
      <div class="ctrl">
        <font-awesome-icon
          class="ctrlIcon"
          :icon="['fas', 'undo']"
          size="lg"
          v-on:click="resetAll()"
        />
      </div>
    </section>
    <section class="cardContainer">
      <PersonCard
        v-for="person in people"
        :key="person.name"
        :person="person"
        class="card"
      />
      <CompanyCard
        v-for="company in companies"
        :key="company.companyName"
        :company="company"
        class="card"
      />
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
        class="card"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PersonCard from "@/components/PersonCard.vue";
import CompanyCard from "@/components/CompanyCard.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import DataService from "@/services/data.service";
import { Person, Company, Article } from "@/types";

@Component({
  components: {
    PersonCard,
    CompanyCard,
    ArticleCard,
  },
})
export default class Home extends Vue {
  private people: Person[] = [];
  private companies: Company[] = [];
  private articles: Article[] = [];
  private numOfPeople = 1;
  private numOfCompanies = 0;
  private numOfArticles = 0;

  mounted() {
    this.loadPeople(this.numOfPeople);
  }

  onNumOfPeopleChange() {
    this.loadPeople(this.numOfPeople);
  }

  onNumOfCompaniesChange() {
    this.loadCompanies(this.numOfCompanies);
  }

  onNumOfArticlesChange() {
    this.loadArticles(this.numOfArticles);
  }

  resetPeople() {
    this.people = [];
    this.numOfPeople = 0;
  }

  resetArticles() {
    this.articles = [];
    this.numOfArticles = 0;
  }

  resetCompanies() {
    this.companies = [];
    this.numOfCompanies = 0;
  }

  resetAll() {
    this.numOfPeople = 1;
    this.numOfCompanies = 0;
    this.numOfArticles = 0;
    this.companies = [];
    this.articles = [];
    if (this.people.length < 1) {
      this.loadPeople(1);
    } else {
      this.people.length = 1;
    }
  }

  loadPeople(amount: number) {
    DataService.getPeople(amount).then(res => {
      this.people = res.data;
    });
  }

  loadCompanies(amount: number) {
    DataService.getCompanies(amount).then(res => {
      this.companies = res.data;
    });
  }

  loadArticles(amount: number) {
    DataService.getArticles(amount).then(res => {
      this.articles = res.data;
    });
  }
}
</script>

<style lang="scss">
$yellow: #ece31a;
$white: #fff;
$black: #000;

#app {
  font-family: Ubuntu, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}

body {
  background-color: $yellow;
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
  background-color: $white;
  margin: 10px 15px;
  border-radius: 15px;
  color: $black;
}

.cardHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cardHeaderIcon {
  color: $black;
  margin: 16px 16px 0px 16px;
}

.cardHeaderCopyIcon {
  transition: all 0.15s ease-out;
  cursor: pointer;
}

.cardHeaderCopyIcon:hover {
  transform: scale(1.2);
}

h1 {
  color: $white;
  text-transform: uppercase;
  font-size: 10em;
  font-weight: 800;
  margin: 1.5rem;
  padding: unset;
}

h4 {
  margin: unset;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $white;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.ctrl {
  padding: 15px 20px;
}

.ctrlIcon {
  padding-right: 15px;
  color: $black;
}

.backspaceIcon {
  transition: all 0.15s ease-out;
  padding-left: 10px;
  color: $white;
}

.backspaceIcon:hover {
  transform: scale(1.2);
}

table {
  border-collapse: collapse;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
}

th {
  background: $white;
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
  background: darken($white, 5%);
}

.copyIcon {
  transition: all 0.15s ease-out;
  cursor: pointer;
}

.copyIcon:hover {
  transform: scale(1.2);
}
</style>
