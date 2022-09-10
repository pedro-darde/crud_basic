<template>
  <form @submit.prevent="save">
    <div class="mb-3">
      <label class="form-label" for="name"> Nome </label>
      <input
        type="text"
        required
        id="name"
        v-model="curriculum.name"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        required
        v-model="curriculum.email"
      />
    </div>
    <div class="mb-3">
      <label class="form-label"> Data de Nascimento</label>
      <input
        type="date"
        id="birth_date"
        required
        v-model="curriculum.birth_date"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label class="form-label"> Telefone </label>
      <input
        type="text"
        id="phone_number"
        required
        v-model="curriculum.phone_number"
        class="form-control"
        v-maska="maskOf()"
      />
    </div>
    <button class="btn btn-danger" type="button" @click="back">Voltar</button>
    <button type="submit" class="btn btn-dark float-end">Salvar</button>
  </form>
</template>

<script src="./script.js">
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
