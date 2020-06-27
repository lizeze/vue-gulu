<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-button-group",
        mounted() {
            for (let node of this.$el.children) {
                let nodeName = node.nodeName.toLocaleLowerCase()
                if (nodeName !== 'button')
                    console.warn(`g-button-group的子元素应该全是g-button,但是你写的是${nodeName}`)
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button-group {
        vertical-align: middle;
        display: inline-flex;

        > .g-button {
            border-radius: 0px;

            &:not(:first-child) {
                border-left: -1px;
            }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-buttom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>