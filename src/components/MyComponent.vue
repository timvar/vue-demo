<template>
  <div class="mycomponent">
    <h1>{{ myMsg }}</h1>
    
    
   
    
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    myMsg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
