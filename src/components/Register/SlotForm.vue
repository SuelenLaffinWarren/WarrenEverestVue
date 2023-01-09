<template>
    <main>
        <NavBarForm />
        <section style="display: flex;">
            <div id="center" style="width: 65%; border: 3px solid red;">
                <slot name="Center" />
            </div>
            <img :src="imageForm" style="" />
        </section>
    </main>
</template>

<script>
import NavBarForm from '@/components/Register/NavBarForm.vue'
export default {
    name: "slotTest",
    components: {
        NavBarForm,
    },
    data() {
        return {
            imageForm: "/img/form-people2-removebg.png"
        }
    }
}
</script>

<style scoped>

</style>