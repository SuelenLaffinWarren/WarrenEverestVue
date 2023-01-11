<template>
    <main>
        <NavBarForm />
        <section>
            <div id="center">
                <slot name="Center" />
            </div>
            <img :src="imageForm" style="width: auto;height: calc(100vh - 30px);" />
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
            imageForm: "/img/image-card.png"
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