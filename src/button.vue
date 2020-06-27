<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg class="icon" v-if="icon">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <div class="content">
            <slot></slot>

        </div>
    </button>
</template>

<script>
    export default {
        name: 'button',
        props: ["icon", "iconPosition"]
    }
</script>

<style scoped lang="scss">
    .g-button {
        font-size: var(--button-font-size);
        height: var(--button-height);
        padding: 0 1.1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;

        > .content {
            order: 2;
        }

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        &.icon-right {
            > .content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;


            }
        }

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }
    }


</style>