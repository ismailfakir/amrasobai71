<template>
    <v-overlay :value="showLoader">
      <v-progress-circular indeterminate :size="70" :width="7" color="red"></v-progress-circular>
    </v-overlay>
</template>
<script>
  export default {
    name: 'Loader',
    data: () => ({
      //overlay: this.showLoader()
    }),
    computed: {
        showLoader() {
          //console.log(this.$store.state.isLoading)
            return this.$store.state.isLoading;
        }
    }
  }
</script>