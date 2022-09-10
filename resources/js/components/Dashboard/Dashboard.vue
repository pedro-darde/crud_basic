<template>
  <div class="containter">
    <div class="d-flex flex-row justify-content-end">
      <a class="btn btn-dark" href="/curriculo/criar">Adicionar Currículo</a>
    </div>

    <div class="row">
      <curriculo-list :user="user" :items="items"></curriculo-list>
    </div>
  </div>
</template> 
  
  <script src="./script.js">
</script>
  
  <style scoped lang="scss" src="./styles.scss">
</style>
  