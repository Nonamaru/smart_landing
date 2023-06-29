<template>
<div>
  {{ test.item1 }}
  {{ test.item2 }}
  <SelectComponent text="г. Екатеринбург" what="city" @selected="(item) => test.item1 = item" />
  <SelectComponent text="base" what="tarif" @selected="(item) => test.item2 = item" />
</div>
</template>
<script>
export default{
  data(){
    return{
      test:{
        item1: '',
        item2: '',
      }
    }
  }
}
</script>
<style scoped>
div{
  margin-top: 10vw;
  margin-bottom: 10vw;
  margin-left: 5vw;
}
</style>