<template>
    <div class="overall">
         <button @click="setShowModal()">Click here</button>
        <ModalCard v-if="modalVisible" @removeModal="removedModal()" @unmountModal="removedModal()" class="modal" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            modalVisible: false

        }
    },
    methods: {
        setShowModal() {
            this.modalVisible = true
            console.log('work')


        },
        removedModal() {
            this.modalVisible = false
            console.log("remove")
            localStorage.setItem('modalShown', 'true')
        },

    }

}
</script>

<style scoped>
@media screen and (max-width:768px) {}
</style>