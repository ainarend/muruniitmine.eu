<template>
  <header aria-label="Päis">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <span class="accent">M</span>uru<span class="accent">N</span>iitmine.eu
      </router-link>
      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="main-nav"
        aria-label="Ava menüü"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="main-nav" :class="{ open: menuOpen }">
        <router-link to="/" @click="menuOpen = false">Avaleht</router-link>
        <router-link to="/meist" @click="menuOpen = false">Meist</router-link>
        <router-link to="/hinnakiri" @click="menuOpen = false">Hinnakiri</router-link>
        <router-link to="/teenused" @click="menuOpen = false">Teenused</router-link>
        <router-link to="/kontakt" @click="menuOpen = false">Kontakt</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => {
  menuOpen.value = false
})
</script>

<style scoped>
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 20;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: #1a1a1a;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

.nav-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav-toggle.open span:nth-child(2) {
  opacity: 0;
}

.nav-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 600px) {
  .nav-toggle {
    display: flex;
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(185, 220, 232, 0.98);
    flex-direction: column;
    padding: 12px 30px 16px;
    border-bottom: 1px solid rgba(140, 190, 210, 0.5);
    z-index: 10;
  }

  nav.open {
    display: flex;
  }
}
</style>
