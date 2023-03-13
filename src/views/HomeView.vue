<script>

import CardComponent from "@/components/CardComponent";
import ToastComponent from "@/components/ToastComponent";

export default {
    name: 'HomeView',
    components: {ToastComponent, CardComponent},
    data() {
        return {
            payload: '',
            error: []
        }
    },
    methods: {
        addError(error) {
            this.error.push(error);
        }
    }
}
</script>

<template>
    <b-container fluid>

        <h2 class="fs-2 mt-5 mb-3">Free text conversion tools</h2>
        <b-row no-gutters>

            <CardComponent color="green-100"
                           name="Text (ASCII/ANSI)"
                           type="text"
                           @error="addError"
                           :payload="payload"
                           @update:data="payload = $event"/>

            <CardComponent color="green"
                           name="Binary"
                           type="binary"
                           @error="addError"
                           :payload="payload"
                           @update:data="payload = $event"/>

            <CardComponent color="blue-100"
                           name="Url encode"
                           type="urlEncode"
                           @error="addError"
                           :payload="payload"
                           @update:data="payload = $event"/>

            <CardComponent color="blue"
                           name="Hexadecimal"
                           type="hexadecimal"
                           @error="addError"
                           :payload="payload"
                           @update:data="payload = $event"/>

            <CardComponent color="purple"
                           name="Base64"
                           type="base64"
                           @error="addError"
                           :payload="payload"
                           @update:data="payload = $event"/>

            <CardComponent color="purple-100"
                           name="Decimal"
                           type="decimal"
                           @error="addError"
                           :payload="payload"
                           @update:data="payload = $event"/>
        </b-row>

        <ToastComponent :error="error"
                        @update:error="error = $event"/>

    </b-container>
</template>
