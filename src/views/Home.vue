<template>
  <div class="home">
    <!-- Add components here -- <MyComponent props="" /> -->
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
// import MyComponent from '@/components/MyComponent.vue'
import Form from '@/components/Form.vue';

export default {
  name: 'home',
  
  components: {
    //MyComponent
    'Form': Form
  }
}
</script>
