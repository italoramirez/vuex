<template>
  <div class="d-block">
      <button 
        class="btn btn-danger m-3"
        @click="clear"
    >
        Reiniciar
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {

    name: 'Butonn',
    methods: {
        ...mapMutations(['clear'])
    }
}
</script>

<style scoped>
</style>