<template>
  <div>
    <h1>Teenused</h1>
    <ul class="price-list">
      <li>Muruniitmine (käsiniidukiga, mults, kogur. Murutraktoriga, multsimis võimalus)</li>
      <li>Trimmerdamine</li>
      <li>Hekkide pügamine</li>
      <li>Puude lõikamine/langetamine</li>
      <li>Võsalõikus</li>
      <li>Aedade ehitus</li>
      <li>Tänavakivide paigaldus</li>
      <li>Erinevad kokkuleppelised tööd</li>
    </ul>
    <p class="content-text">
      <router-link to="/hinnakiri">Vaata hindasid!</router-link>
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
