<template>
  <div>
    <h1>Hinnakiri</h1>
    <ul class="price-list">
      <li>Muruniitmine käsiniidukiga <strong>15 eurot/tund</strong></li>
      <li>Muruniitmine murutraktoriga <strong>25 eurot/tund</strong></li>
      <li>Trimmerdamine <strong>20 eurot/tund</strong></li>
      <li>
        Hekkide pügamine <strong>kokkuleppel</strong>
        <br><small>NB! Hinnasoodustused, kui prahi kokkukorjamise ja äraveo organiseerib majarahvas; hekki on eelneval aastal pügatud</small>
      </li>
      <li>Puude lõikamine/langetamine <strong>kokkuleppel</strong></li>
      <li>Võsalõikus <strong>kokkuleppel</strong></li>
      <li>Muud haljastustööd <strong>kokkuleppel</strong></li>
    </ul>
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
