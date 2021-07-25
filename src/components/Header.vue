<template>
    <header class="header">
        <div class="header__img-wrapper">
            <img src="../assets/header-user.svg" alt="user avatar" class="header__img">
        </div>
        <p class="header__info">ילארשי לארשי <strong> ןכוסה םש</strong>
            <br> למשח תרבח <span class="small"> ביטקלוק </span>
            <span class="number">123456</span>
            <span v-if="!isLogged" class="orange"> השמ םייח ,םולש </span>
        </p>
    </header>
    <div  class="header--bottom" v-if="!isLogged"><span> השמ םייח </span> ,םולש</div>
</template>
<script>
  export default {
    name: 'Header',
    props: {
        isLogged: {
          type: Boolean,
          required: true
        }
        }
  }
</script>
<style scoped lang="scss">
    @import 'src/styles/styles';

    .header {
        padding: 1rem;
        display: flex;
        flex-direction: row-reverse;
        text-align: right;

        &__img-wrapper {
            margin: auto 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 30px;
            height: 30px;
            background-color: $green;
            border-radius: 10px;
        }

        &__img {
            width: 15px;
            height: 15px;
        }

        &__info {
            font-size: 10px;
            color: $green;
            margin: 0 0.75rem;

            .small {
                font-weight: 700;
            }

            .orange {
                display: block;
                color: $orange;
                font-size: 12px;
            }

            .number {
                display: none;
            }
        }

        &--bottom {
            display: none;
        }
    }

    @media (min-width: 1076px) {
        .header {

            &__img-wrapper {
                min-width: 38px;
                height: 38px;
            }

            &__img {
                width: 15px;
                height: 15px;
            }

            &__info {
                font-size: 16px;
                color: $green;
                margin: 0 0.75rem;

                .orange {
                    display: none;
                }

                .small {
                    display: none;
                }

                .number {
                    display: inline;
                    font-weight: 700;
                }
            }

            &--bottom {
                display: block;
                line-height: 76px;
                background: #F5F5F5;
                color: #5F5F5F;
                padding-right: 62px;
                text-align: right;
                box-shadow: inset 0px 9px 5px -5px #ccc;

                span {
                    font-weight: 700;
                }
            }
        }
    }
</style>
