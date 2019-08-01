<template>
    <div id="editar">
        {{ token }}
    </div>
</template>

<script>
export default {
    computed: {
        token() {
            return this.$store.state.tk
        }
    }
}
</script>

<style>

</style>
