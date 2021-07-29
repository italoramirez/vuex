<template>
  <div id="app" class="container">
    <cabecera></cabecera>
    <lista></lista>
    <butonn></butonn>

  </div>
</template>

<script>

import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'
import Butonn from './components/Butonn.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista,
    Butonn,
  }
}
</script>

