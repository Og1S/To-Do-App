<template>
  <ion-app>
		<Z-menu />

    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import ZMenu from '@/layout/z-menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    ZMenu
  }
});
</script>