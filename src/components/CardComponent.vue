<script>
import * as Convert from "@/services/convert.services";

export default {
    name: "CardComponent",
    emits: ["update:data", "error"],
    props: {
        label: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: "light"
        },
        type: {
            type: String,
            required: true,
            enum: ["text", "binary", "urlEncode", "hexadecimal", "base64", "decimal"]
        },
        payload: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            data: ""
        }
    },
    computed: {
        cardColor() {
            return `card-bg-${this.color}`
        }
    },
    methods: {
        convert() {
            let data = "";
            if (this.data === "") {
                this.$emit("update:data", data);
                return;
            }

            switch (this.type) {
                case "text":
                    data = this.data;
                    break;
                case "binary":
                    data = Convert.binaryToString(this.data);
                    break;
                case "urlEncode":
                    data = Convert.urlEncodeToString(this.data);
                    break;
                case "hexadecimal":
                    data = Convert.hexadecimalToString(this.data);
                    break;
                case "base64":
                    data = Convert.base64ToString(this.data);
                    break;
                case "decimal":
                    data = Convert.decimalToString(this.data);
                    break;
            }

            if (typeof data === "string") {
                this.$emit("update:data", data);
            } else {
                this.$emit("error", data.error);
                this.data = "";
            }

        },
        copy() {
            navigator.clipboard.writeText(this.data);
        },
        stringToEncrypt() {
            let payload = "";
            switch (this.type) {
                case "text":
                    payload = this.payload;
                    break;
                case "binary":
                    payload = Convert.stringToBinary(this.payload);
                    break;
                case "urlEncode":
                    payload = Convert.stringToUrlEncode(this.payload);
                    break;
                case "hexadecimal":
                    payload = Convert.stringToHexadecimal(this.payload);
                    break;
                case "base64":
                    payload = Convert.stringToBase64(this.payload);
                    break;
                case "decimal":
                    payload = Convert.stringToDecimal(this.payload);
                    break;
            }

            return payload;
        }
    },
    watch: {
        payload(value) {
            if (value !== null) {
                this.data = this.stringToEncrypt();
            }
        }
    }

}
</script>

<template>
    <b-col class="col-12 col-sm-6 col-md-4">
        <b-card :class="cardColor" class="rounded-0 h-100">
            <h3 class="fs-4 mb-3">{{ label }}</h3>
            <b-form-textarea rows="7" class="shadow-none border-2"
                             spellcheck="false"
                             v-model="data"/>

            <div class="d-flex justify-content-end">

                <b-button variant="outline-secondary" class="my-3 me-3"
                          data-bs-toggle="tooltip" data-bs-placement="top"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="This top tooltip is themed via CSS variables."
                          :disabled="data === ''"
                          @click="copy">
                    Copy
                </b-button>
                <b-button variant="dark" class="my-3"
                          @click="convert">
                    Convert
                </b-button>
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
