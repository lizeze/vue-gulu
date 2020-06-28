<template>
    <button class="g-button " :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
        <g-icon v-if="loading" name="loading" class="loading icon"></g-icon>

        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'

    export default {
        components: {'g-icon': Icon},
        name: 'button',
        props: {
            loading: {

                type: Boolean
            },
            iconPosition: {
                default: 'left',
                type: String,
                validator: function (value) {
                    if (value !== 'left' && value !== 'right') return false
                    return true
                }
            },
            icon: {}
        }
    }
</script>
<style scoped lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .loading {
        animation: spin 2s infinite linear;
    }

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