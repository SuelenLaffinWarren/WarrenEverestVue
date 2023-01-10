<template>
    <main>
        <NavBarForm />
        <section>
            <div id="center">
                <slot name="Center" />
            </div>
            <img :src="imageForm" style="width: 500px" />
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
section {
    display: flex;
}

#center {
    width: 100%;
}
</style>