<template>
  <div>
    <h1>Avaleht</h1>
    <p class="content-text">
      Tegutseme põhiliselt Tartus, Tartumaal ja ka ülejäänud Lõuna-Eestis, kuid kliendi soovil ka mujal maakondades. Saame hakkama nii väikeste murulapikeste hooldamisega, kui ka suurte kruntidega.
    </p>
    <p class="content-text">
      Küsi julgelt ning aitame lahendada Sinu niitmisprobleemid.
      <router-link to="/kontakt">Meie kontaktid</router-link>
    </p>
    <div class="two-col">
      <ContactForm />
      <NewsSidebar />
    </div>
  </div>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
import NewsSidebar from '../components/NewsSidebar.vue'
</script>
