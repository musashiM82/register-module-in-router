<template>
  <div class="about">about page</div>
  <h2>state.common.count {{ commonCountGetter }}</h2>
  <h2>state.about.count {{ aboutCountGetter }}</h2>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapMutations, mapActions } from "vuex";

@Options({
  computed: {
    ...mapGetters("common", ["commonCountGetter"]),
    ...mapGetters("about", ["aboutCountGetter"]),
  },
})
export default class About extends Vue {}
</script>