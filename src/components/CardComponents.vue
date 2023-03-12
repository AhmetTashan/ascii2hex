<script>
export default {
    name: "CardComponents",
    emits: ["update:payload"],
    props: {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: "light"
        },
        type: {
            type: String,
            required: true
        },
        payload: {
            type: String,
            default: ""
        }
    },
    computed: {
        cardColor() {
            return `card-bg-${this.color}`
        }
    }

}
</script>

<template>
    <b-col class="col-12 col-sm-6 col-md-4">
        <b-card :class="cardColor" class="rounded-0">
            <h3 class="fs-4 mb-3">{{ name }}</h3>
            <b-form-textarea rows="7" class="shadow-none border-2"/>

            <div class="d-flex justify-content-end">

                <b-button variant="outline-secondary" class="my-3 me-3">Copy</b-button>
                <b-button variant="dark" class="my-3">Convert</b-button>
            </div>
        </b-card>
    </b-col>

</template>

<style lang="scss" scoped>
.card-bg-green-100 {
    background-color: #dbf9da;
}

.card-bg-green {
    background-color: #a0df9c;
}

.card-bg-blue-100 {
    background-color: #d7e6fa;
}

.card-bg-blue {
    background-color: #9ec2dd;
}

.card-bg-purple-100 {
    background-color: #d9d5fb;
}

.card-bg-purple {
    background-color: #a89de0;
}

.form-control {
    border: var(--bs-border-width) solid #ced4da;

    &:focus {
        border-color: var(--bs-blue);
    }
}
</style>
