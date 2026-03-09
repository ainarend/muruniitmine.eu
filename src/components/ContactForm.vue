<template>
  <div>
    <h2>Võta ühendust</h2>
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="form-group">
        <input
          v-model="form.name"
          type="text"
          placeholder="Sinu nimi"
          aria-label="Sinu nimi"
          :class="{ error: errors.name }"
        >
        <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
      </div>
      <div class="form-group">
        <input
          v-model="form.email"
          type="email"
          placeholder="email@naide.ee"
          aria-label="E-posti aadress"
          :class="{ error: errors.email }"
        >
        <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <textarea
          v-model="form.message"
          placeholder="Sinu kirja sisu"
          aria-label="Kirja sisu"
          :class="{ error: errors.message }"
        ></textarea>
        <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
      </div>
      <button class="btn-submit" type="submit" :disabled="submitted">
        {{ submitted ? 'Saadetud!' : 'Saada' }}
      </button>
      <p v-if="submitted" class="success-msg">Täname! Võtame teiega peagi ühendust.</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Palun sisesta oma nimi'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Palun sisesta e-posti aadress'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Palun sisesta korrektne e-posti aadress'
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Palun sisesta sõnum'
    valid = false
  }

  return valid
}

function handleSubmit() {
  if (!validate()) return

  // In production, replace with actual API call
  // e.g. fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
  submitted.value = true

  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    submitted.value = false
  }, 4000)
}
</script>

<style scoped>
.error-msg {
  display: block;
  color: #c62828;
  font-size: 0.78rem;
  margin-top: 3px;
}

.success-msg {
  color: #2e7d32;
  font-size: 0.85rem;
  margin-top: 8px;
}

input.error,
textarea.error {
  border-color: #c62828;
}
</style>
