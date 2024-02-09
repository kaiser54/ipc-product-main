<template>
    <LoaderGeneral v-if="loading" />
</template>

<script>
export default {
    data() {
        return{
            loading: true
        }
    }
}
</script>