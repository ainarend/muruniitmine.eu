<template>
  <div>
    <h1>Kontakt</h1>
    <p class="contact-phone">
      Telefon: <a href="tel:+37255986002">55 986 002</a>
    </p>
    <p class="contact-email">
      E-mail: <a href="mailto:info@muruniitmine.eu">info@muruniitmine.eu</a>
    </p>
    <p class="content-text">
      Tööde teostamine toimub vastavalt eelnevale registreerimisele 1–2 päeva jooksul. Tellimusi võetakse vastu kella 8.00–22.00 telefoni ja e-maili teel. Tasumine toimub kas sularahas või arveldusarvele. Suuremahuliste ja korduvate teenuste osutamisel sõlmitakse siduvad töövõtu lepingud.
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
