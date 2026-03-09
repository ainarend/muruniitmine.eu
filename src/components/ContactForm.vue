<template>
  <div>
    <h2>Võta ühendust</h2>
    <form name="contact" method="POST" data-netlify="true" @submit.prevent="handleSubmit" novalidate>
      <input type="hidden" name="form-name" value="contact">
      <div class="form-group">
        <input
          v-model="form.name"
          name="name"
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
          name="email"
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
          name="message"
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

async function handleSubmit() {
  if (!validate()) return

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        name: form.name,
        email: form.email,
        message: form.message,
      }).toString(),
    })
    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
    setTimeout(() => {
      submitted.value = false
    }, 4000)
  } catch {
    alert('Viga saatmisel. Palun proovige uuesti.')
  }
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
