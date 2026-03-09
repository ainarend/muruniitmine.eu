<template>
  <div class="app">
    <AppHeader />
    <div class="tagline">
      <p>
        Muru on kasvanud liiga kõrgeks?<br>
        Pole võimalust sellega tegeleda? Oled sattunud õigesse kohta!
      </p>
    </div>
    <main aria-label="Põhisisu">
      <div class="wrapper">
        <div class="card">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </main>
    <footer aria-label="Jalus">
      &copy; 2026 MuruNiitmine.eu &mdash; Kõik õigused kaitstud
    </footer>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
</script>
