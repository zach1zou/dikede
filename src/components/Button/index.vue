<template>
  <div style="display: inline-block">
    <div
      class="button"
      :style="{ backgroundColor: backgroundColor }"
      @click="$emit('click')"
    >
      <i :class="icon" :style="{ color: iconColor }"> </i
      ><span :style="{ color: color }">{{ title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
    icon: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
      default: () => "white",
    },
    iconColor: {
      type: String,
      default: () => "white",
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
$height: 36px;
.button {
  width: 80px;
  height: $height;
  font-size: 14px;
  border-radius: 4px;
  line-height: $height;
  text-align: center;
  span {
    padding-left: 5px;
  }
}
</style>
