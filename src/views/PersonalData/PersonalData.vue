<template>
  <SlotForm>
    <template #Center>
      <Form />
    </template>

  </SlotForm>

</template>

<script>
import Form from "@/components/Register/Form.vue"
import SlotForm from "@/components/Register/SlotForm.vue"

export default {
  name: 'PersonalData',
  components: {
    Form,
    SlotForm,
  }
}
</script>

<style scoped>

</style>
