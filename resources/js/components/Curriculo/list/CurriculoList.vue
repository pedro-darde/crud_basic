<template>
  <div class="container mt-2">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">Data de Nascimento</th>
          <th scope="col">Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="curriculums && curriculums.length"
          v-for="item in curriculums  "
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ $filters.date(item.birth_date) }}</td>
          <td>{{ item.phone_number }}</td>
          <td>
            <div class="d-flex flex-row justify-content-between">
              <a :href="hrefCurriculo(item)"> {{ canEdit ? 'Editar' : 'Visualizar'}}</a>
              <a href="#" @click="remove(item.id)" v-if="canEdit"> Excluir </a>
            </div>
          </td>
        </tr>
        <tr v-else>
          <td colspan="6">Sem itens</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./script.js">
</script>

<style scoped lang="scss" src="./styles.scss">
</style>
