<template>
  <div style="display: inline-block">
    <span>{{ title }}</span>
    <el-input class="input" style="padding: 0 10px" :placeholder="placeholder">
    </el-input>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "",
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
  updated() {},
  beforeDestroy() {},
  filters: {},
};
</script>
<style lang="scss" scoped>
.input {
  width: 200px !important;
}
</style>
