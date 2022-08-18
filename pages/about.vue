<template>
    <h1>About</h1>
</template>

<script >
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
    head: {
            title: 'About App',
            htmlAttrs: {
                lang: 'en'
            },
    },
    meta: [{
        hid: 'About',
        title: 'About',
        description: 'About App game countries'
    }],
    setup() {
        const { title } = useMeta()
        title.value = 'About--1'
    },
})
</script>