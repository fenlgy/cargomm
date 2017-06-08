<template>
            <iframe width="100%" height="100%" src="https://exmail.qq.com/cgi-bin/frame_html?sid=vCmwBRtJPCAZvCB5,2&r=92a51cf614632e056f2f7f16bfd7088f" frameborder="0"></iframe>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>