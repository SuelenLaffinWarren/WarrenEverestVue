<template>
  <div class="register">
    <NavBarForm />
    <Form />
  </div>
</template>

<script>
import NavBarForm from "../components/Register/NavBarForm.vue"
import Form from "../components/Register/Form.vue"
export default {
  name: 'Register',
  components: {
    NavBarForm,
    Form,
  }
}
</script>

<style scoped>

</style>
