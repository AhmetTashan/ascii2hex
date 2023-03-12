<script>

import CardComponents from "@/components/CardComponents";

export default {
    name: 'HomeView',
    components: {CardComponents},
    data() {
        return {
            payload: '',
        }
    }
}
</script>

<template>
    <b-container fluid>

        <h2 class="fs-2 my-5">Free text conversion tools</h2>
        <b-row no-gutters>
            <CardComponents color="green-100"
                            name="Text (ASCII/ANSI)"
                            type="text"
                            :payload="payload"
                            @update:payload="payload = $event"/>
            <CardComponents color="green"
                            name="Binary"
                            type="binary"
                            :payload="payload"
                            @update:payload="payload = $event"/>
            <CardComponents color="blue-100"
                            name="Url encode"
                            type="urlEncode"
                            :payload="payload"
                            @update:payload="payload = $event"/>
            <CardComponents color="blue"
                            name="Hexadecimal"
                            type="hexadecimal"
                            :payload="payload"
                            @update:payload="payload = $event"/>
            <CardComponents color="purple"
                            name="Base64"
                            type="base64"
                            :payload="payload"
                            @update:payload="payload = $event"/>
            <CardComponents color="purple-100"
                            name="Decimal"
                            type="decimal"
                            :payload="payload"
                            @update:payload="payload = $event"/>
        </b-row>

    </b-container>
</template>
