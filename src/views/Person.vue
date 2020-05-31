<template>
  <div class="person">
    <PersonCard msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonCard from "@/components/PersonCard.vue";

export default {
  name: "Person",
  components: {
    PersonCard,
  },
};
</script>
