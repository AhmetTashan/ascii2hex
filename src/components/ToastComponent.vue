<script>
export default {
    name: "ToastComponent",
    emits: ["update:error"],
    props: {
        error: {
            type: Array,
            required: true
        }
    },
    methods: {
        close(index) {
            let error = this.error;
            // delete error[index];
            error.splice(index, 1);
            this.$emit("update:error", error);
        }
    }
}
</script>

<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">

        <div class="toast fade show align-items-center text-bg-danger border-0" role="alert" aria-live="assertive"
             aria-atomic="true"
             v-for="(value, index) in error" :key="index">
            <div class="d-flex">
                <div class="toast-body">
                    {{ value }}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close"
                        @click="close(index)"></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
