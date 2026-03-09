<template>
  <div>
    <h1>Meist</h1>
    <p class="content-text">
      Muruniitmine.eu meeskond näeb kohustuseks viia tükike loodust iga inimese südamesse, pakkudes neile võimalust maandada pingeid kaunil haljastusalal.
    </p>
    <p class="content-text">
      Töö tehakse kiirelt ja professionaalselt. Tegutseme antud valdkonnas juba kaheksandat aastat. Tellimuste täitmisel lühikesed tähtajad. Haljastustööde käigus toimub ka klientide nõustamine hoolduse valdkonnas.
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
