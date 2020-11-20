<template>
  <div class="home">home page</div>
  <h2>state.common.count {{ commonCountGetter }}</h2>
  <h2>state.home.count {{ countHomeGetter }}</h2>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapMutations, mapActions } from "vuex";

@Options({
  computed: {
    ...mapGetters("common", ["commonCountGetter"]),
    ...mapGetters("home", ["countHomeGetter"]),
  },
})
export default class Home extends Vue {}
</script>
