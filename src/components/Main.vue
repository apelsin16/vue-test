<template>
    <main dir="rtl" class="main">
        <div class="container">
            <div class="main__user">
                <div class="main__user-avatar">
                    <img src="../assets/user-1.png" alt="user avatar">
                </div>
                <p class="main__user-info">תכרעמל הסינכ
                    ריחמה תעצהב היפצ</p>
            </div>
            <h2 class="main__title">תא ןזה הסינכה דוק תלבקל
                דיינה ןופלטה רפסמ
            </h2>
            <form class="form">
                <label for="login">
                    שמתשמ םש
                </label>
                <div>
                    <input v-model="login" type="text" class="login" id="login">
                    <input
                        type="button"
                        value="&#215;"
                        @click="clearLogin"
                    >
                </div>
                <label for="password">
                    אמסיס
                </label>
                <input type="password" class="password" id="password">
                <div class="button__wrapper">
                    <button class="button--green" @click="toggleIsLogged">לוטיב</button>
                    <button class="button--gray"  @click="toggleIsLogged">הסינכ</button>
                </div>
            </form>
        </div>
    </main>
</template>
<script>
    export default {
       name: "Main",
       props: {
         toggleIsLogged: {
           type: Function,
           required: true
         }
       },
       data() {
            return {
                login: ''
            }
       },
      methods: {
          clearLogin() {
            this.login = ''
          }
      }

    }
</script>
<style lang="scss" scoped>
    @import 'src/styles/styles';
    * {
        box-sizing: border-box;
        font-family: 'Arimo', sans-serif;
    }
    .main {
        background: linear-gradient(360deg, rgba(33, 50, 94, 0.95) 0%, rgba(33, 50, 94, 0.9) 10%, rgba(33, 50, 94, 0.8) 100%),
                    url(../assets/slider1.png) ;
        background-size: cover;
        padding: 16px 24px;
        height: calc(100vh - 68px);

        &__user {
            display: flex;
            flex-wrap: wrap;

            &::after {
                content: '';
                height: 3px;
                flex-basis: 100%;
                background-color: #fff;
                border-radius: 2px;
            }


            &-info {
                margin: 0;
                color: #fff;
                font-weight: 700;
                max-width: 215px;
            }
        }
        
        &__title {
            font-size: 24px;
            text-align: center;
            color: #fff;
            font-weight: normal;
            margin-top: 48px;
        }
    }
    .container {
        margin: 0 auto;
        max-width: 1076px;
    }

    .form {
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 330px;

        label {
            color: #fff;
            align-self: start;
            margin-bottom: 12px;
        }
        button {
            height: 40px;
            width: 156px;
            color: #fff;
            border: none;
            font-weight: bold;
            font-size: 18px;
            border-radius: 35px;
        }
        #login {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            width: 290px;
        }
        input {
            border-radius: 50px;
            border: none;
            width: 330px;
            height: 40px;
            display: block;
        }
        input[type=button] {
            width: 40px;
            height: 40px;
            color: $blue;
            border: none;
            background-color: #fff;
            font-weight: bold;
            line-height: 40px;
            font-size: 40px;
        }
        div {
            display: flex;
            margin-bottom: 50px;
            background-color: #fff;
            border-radius: 50px;
        }
        .button__wrapper {
            background: inherit;
            margin-top: 90px;
            width: 330px;
        }
        .button {
            &--green {
                background-color: $green;
                margin-left: auto;
            }
            &--gray {
                background-color: $gray;

                &::after {
                    content: '◀';
                    margin-right: 20px;
                }
            }
        }
    }

    @media (min-width: 1076px) {
        .main {
            background: linear-gradient(360deg, rgba(33, 50, 94, 0.95) 0%, rgba(33, 50, 94, 0.9) 10%, rgba(33, 50, 94, 0.8) 100%),
            url(../assets/bg.png) ;
            height: 100vh;

            &__user {
                &::after {
                    height: 5px;
                }
                &-info {
                    max-width: 100%;
                    font-size: 48px;
                    line-height: 76px;
                }

                &-avatar {
                    img {
                        width: 76px;
                        height: 76px;
                    }
                }

            }
            &__title {
                font-size: 48px;
            }
        }
        .form {
            label {
                font-size: 24px;
                margin-right: 40px;
            }
            input {
                width: 350px;
                height: 58px;
            }
            input[type=button] {
                width: 58px;
                height: 58px;
            }
            #login {
                width: 292px;
                height: 58px;
            }
            button {
                width: 350px;
                height: 58px;
                font-size: 24px;
            }
            .button__wrapper {
                width: 790px;
            }
        }

    }


</style>
