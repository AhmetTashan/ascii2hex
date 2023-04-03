<script>

import CardComponent from "@/components/CardComponent";
import ToastComponent from "@/components/ToastComponent";

export default {
    name: 'HomeView',
    components: {ToastComponent, CardComponent},
    data() {
        return {
            payload: '',
            error: [],
            cardList: [
                {
                    color: 'green-100',
                    label: 'Text (ASCII/ANSI)',
                    type: 'text'
                },
                {
                    color: 'green',
                    label: 'Binary',
                    type: 'binary'
                },
                {
                    color: 'blue-100',
                    label: 'Url encode',
                    type: 'urlEncode'
                },
                {
                    color: 'blue',
                    label: 'Hexadecimal',
                    type: 'hexadecimal'
                },
                {
                    color: 'purple',
                    label: 'Base64',
                    type: 'base64'
                },
                {
                    color: 'purple-100',
                    label: 'Decimal',
                    type: 'decimal'
                }
            ]
        }
    },
    methods: {
        async changePayload(payload) {
            this.payload = await null;
            this.payload = await payload;
        },
        addError(error) {
            this.error.push(error);
        },
        async clear() {
            await this.changePayload('');
            this.error = [];
        }
    },
    computed: {
        currentYear() {
            let currentYear = new Date().getFullYear();

            if (currentYear === 2023) {
                return currentYear;
            }

            return `2023 - ${currentYear}`;
        }
    },
    metaInfo: {
        title: 'ASCII To Hex',
        titleTemplate: '%s - Free text conversion tools | tashan.cc',
        meta: [
            {
                name: 'description',
                content: 'Our tool helps web developers and programmers save time and effort by eliminating issues related to the use of ASCII characters in different formats.'
            },
            {
                name: 'keywords',
                content: 'ascii, hex, binary, base64, url encode, decimal, text, conversion, tools, free, online, tashan, tashan.cc, tashan.cc/ascii-to-hex, tashan.cc/ascii-to-hex/'
            }
        ]
    }
}
</script>

<template>
    <b-container fluid>

        <h1 class="fs-2 fw-bold mt-4 mb-3">ASCII To Hex</h1>
        <h2 class="fs-2 fw-light mb-3">Free text conversion tools
            <b-button @click="clear" variant="outline-primary" class="py-0">Clear</b-button>
        </h2>
        <b-row no-gutters>
            <b-col class="col-12 col-sm-6 col-md-4" v-for="(item, index) in cardList" :key="index">
                <CardComponent :color="item.color"
                               :label="item.label"
                               :type="item.type"
                               @error="addError"
                               :payload="payload"
                               @update:data="changePayload"/>
            </b-col>
        </b-row>

        <div class="py-4">
            Copyright © {{ currentYear }} <a href="http://www.ahmettashan.com" target="_blank">Ahmet Tashan</a> Works.
            <a href="https://github.com/AhmetTashan/ascii2hex" target="_blank">GitHub</a>
        </div>

        <ToastComponent :error="error"
                        @update:error="error = $event"/>

    </b-container>
</template>
