<template>
    <main dir="rtl" class="main">
        <div class="container">
            <div class="main__header">
                <div class="main__user-avatar">
                    <img src="../assets/user-1.png" alt="user avatar">
                </div>
                <div class="select">
                    <button class="active">תונורחא תועצה</button>
                    <button>וקפוהש תוסילופ</button>
                </div>

                <form class="form">
                    <div>
                        <input type="text" placeholder="שופיח">
                    </div>
                    <input type="button" value="+" @click="toggleIsLogged">
                    <button class="plus" @click="toggleIsLogged">השדח העצה</button>
                </form>
            </div>
            <ul>
                <li class="list-header">
                    <div>
                        ףנע
                    </div>
                    <div>
                        רצומ
                    </div>
                    <div>חטובמ םש</div>
                    <div>יושיר ‘סמ</div>
                    <div>תוהז תדועת</div>
                    <div>העצהה תחיתפ</div>
                    <div>חוטיבה תליחת</div>
                    <div>הסילופ ‘סמ</div>
                    <div>חוקלל חלשנ</div>
                </li>
                <li class="card" v-for="item in list" :key="item.id" @click="toggleChecked(item.id)">
                    <div class="card__buttons">
                        <button class="pencil"></button>
                        <button class="brief"></button>
                    </div>
                    <div class="card__header">
                        <button class="pencil"></button>
                        <button class="brief"></button>
                    </div>
                    <dl class="card__body">
                        <div class="small"> {{item[8]}} </div>
                        <div class="wide">
                            <dt>חטובמ םש</dt>
                            <dd>{{ item[1] }}</dd>
                        </div>
                        <div class="wide">
                            <dt>תוהז תדועת</dt>
                            <dd>{{ item[2] }}</dd>
                        </div>
                        <div class="narrow">
                            <dt>יושיר רפסמ</dt>
                            <dd>{{ item[3] }}</dd>
                        </div>
                        <div class="narrow">
                            <dt>העצה תחיתפ</dt>
                            <dd>{{ item[4] }}</dd>
                        </div>
                        <div class="narrow">
                            <dt>חוטיב תליחת</dt>
                            <dd>{{ item[5] }}</dd>
                        </div>
                        <div class="narrow">
                            <dt>הסילופ</dt>
                            <dd>{{ item[6] }}</dd>
                        </div>
                        <div class="narrow">
                            <dt>הסילופ</dt>
                            <dd>{{ item[7] }}</dd>
                        </div>
                        <div class="narrow">
                            <dd class="selected small" v-if="item.checked"> (חוקלל החלשנ) </dd>
                            <dd class="selected large" v-if="item.checked">&#10004;</dd>
                        </div>
                    </dl>
                </li>
            </ul>
        </div>
    </main>
</template>
<script>
    export default {
        name: 'List',
        props: {
            toggleIsLogged: {
               type: Function,
               required: true
            }
        },
        data () {
          return {
            list: [
              {'id': 0, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': true},
              {'id': 1, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': true},
              {'id': 2, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר',  'checked': true},
              {'id': 3, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': true},
              {'id': 4, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': true},
              {'id': 5, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': true},
              {'id': 6, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': true},
              {'id': 7, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': false},
              {'id': 8, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': false},
              {'id': 9, 1: 'םהרבא ןב קחצי', 2: 'םהרבא ןב קחצי', 3: ' 038974573', 4: '12-345-67', 5: '12.10.2019', 6: '04.04.2020', 7: '123456789012', 8: 'בכר', 'checked': true}
            ]
          }
        },
        methods: {
          toggleChecked(id) {
            this.list.map(el => {
              if(el.id === id) {
                el.checked = !el.checked
              }
            })
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
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }
    .main {
        background: linear-gradient(360deg, rgba(33, 50, 94, 0.95) 0%, rgba(33, 50, 94, 0.9) 10%, rgba(33, 50, 94, 0.8) 100%),
        url(../assets/slider1.png);
        background-size: cover;
        padding: 16px 24px;
        /*height: calc(100vh - 68px);*/
        &__user-avatar {
            display: none;
        }

        &__header {
            margin: 0 auto;
            width: 330px;

            &::after {
                content: '';
                display: block;
                height: 3px;
                border-radius: 2px;
                background-color: #fff;
                margin-top: 26px;
                margin-bottom: 26px;
            }

            .select {
                background-color: #fff;
                border-radius: 50px;
                button {
                    width: 165px;
                    display: inline-block;
                    height: 40px;
                    border-radius: 50px;
                    border: none;
                    color: #5F5F5F;
                    font-size: 18px;
                    background-color: #fff;

                    &:hover {
                        cursor: pointer;
                    }
                }
                button.active {
                    background-color: $orange;
                    color: #fff;
                }
            }
        }
        .form {
            display: flex;
            justify-content: space-between;
            margin-top: 26px;

            div {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    background-image: url(../assets/lens.svg);
                    left: 10px;
                    top: 10px;
                    width: 19px;
                    height: 19px;
                }
            }

            input[type=text] {
                width: 273px;
                height: 40px;
                border-radius: 50px;
                padding: 0 10px 0 40px;
                border: none;
            }

            input[type=button] {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: none;
                background-color: $green;
                color: #fff;
                font-size: 30px;
            }

            .plus {
                display: none;
            }
        }
        .list-header {
            display: none;
        }
        .card {
            margin-bottom: 26px;
            background-color: #fff;
            border-radius: 30px;
            padding: 15px;

            &:hover:before {
                display: block !important;
            }

            &:before {
                content: '';
                display: none;
                position: absolute;
                right: -100px;
                top: 0;
                height: 50px;
                width: 120px;
            }

            &__buttons {
                display: none;
            }

            &__header {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                background-image: url(../assets/car.svg);
                background-repeat: no-repeat;
                background-position: 100% center;

                &:after {
                    content: '';
                    display: block;
                    background-color: $blue;
                    height: 2px;
                    width: 100%;
                    border-radius: 2px;
                    margin-top: 15px;
                }


                button {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 0;
                    background-color: $green;
                    margin-right: 15px;
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        background-color: $orange;
                    }
                }
                button.brief {
                    background-image: url(../assets/brief.svg);
                    background-repeat: no-repeat;
                    background-position: 80% center;
                }
                button.pencil {
                    background-image: url(../assets/pencil.svg);
                    background-repeat: no-repeat;
                    background-position: center;
                }
            }

            &__body {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .small {
                    display: none;
                }

                div {
                    margin-bottom: 14px;
                }

                .wide {
                    width: 100%;
                }
                .narrow {
                    width: 50%;
                    .small {
                        display: block;
                    }
                    .large {
                        display: none;
                    }
                    &:last-of-type {
                        align-self: flex-end;
                    }
                }
            }
        }
        .selected {
            color: $green;
        }
        dd {
            font-size: 20px;
            font-weight: 700;
            margin: 0;
        }
        dt {
            font-size: 18px;

        }
    }
    @media (min-width: 1076px) {
        .main {
            background: linear-gradient(360deg, rgba(33, 50, 94, 0.95) 0%, rgba(33, 50, 94, 0.9) 10%, rgba(33, 50, 94, 0.8) 100%),
            url(../assets/slider.png);

            &__user-avatar {
                display: block;

                img {
                    width: 76px;
                    height: 76px;
                }

            }
            &__header {
               width: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                .select {
                    width: 970px;
                    height: 58px;
                    margin-right: auto;

                    button {
                        height: 58px;
                        width: 485px;
                        font-size: 30px;
                    }
                }
            }
            .form {
                flex-basis: 100%;
                flex-wrap: wrap;
                margin-bottom: 35px;

                &:before {
                    content: '';
                    display: block;
                    height: 5px;
                    width: 100%;
                    border-radius: 2px;
                    margin-bottom: 40px;
                    background-color: #fff;
                }

                input[type=text] {
                    width: 754px;
                    height: 58px;
                }

                input[type=button] {
                    display: none;
                }

                div {
                    &::after {
                        top: 18px;
                        left: 18px;
                    }
                }

                .plus {
                    display: block;
                    width: 284px;
                    height: 58px;
                    font-size: 24px;
                    color: #fff;
                    background-color: $green;
                    border: none;
                    border-radius: 35px;

                    &:after {
                        content: '◀';
                        margin-right: 15px;
                    }
                }

            }
            .list-header {
                display: flex;
                width: 1076px;
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 25px;
                margin-right: 25px;

                div {
                    color: #fff;
                    flex-basis: calc(100% / 9);
                }
            }
            .card {
                position: relative;
                transition: 0.5s all;
                cursor: pointer;

                &:hover {
                    background-color: $orange;
                    color: #fff;
                }

                &__buttons button {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 0;
                    background-color: #fff;
                    margin-right: 10px;
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        background-color: #fff;
                    }
                }

                &__buttons button.brief {
                    background-image: url(../assets/brief-b.svg);
                    background-repeat: no-repeat;
                    background-position: 80% center;
                }
                &__buttons button.pencil {
                    background-image: url(../assets/pencil-b.svg);
                    background-repeat: no-repeat;
                    background-position: center;
                }

                &:hover .card__buttons {
                    position: absolute;
                    display: block;
                    right: -110px;
                    top: 5px
                }

                &__header {
                    display: none;
                }
                &__body {
                    margin: 0;
                    align-items: center;
                    justify-content: space-between;

                    .small {
                        display: block;
                    }

                    div {
                        margin: 0;

                        dd {
                            font-size: 14px;
                        }

                        dt {
                            display: none;
                        }
                    }

                    .wide {
                        width: calc(100% / 9);
                    }
                    .narrow {
                        width: calc(100% / 9);

                        .small {
                            display: none;
                        }

                        .large {
                            display: block;
                            text-align: center;
                            align-self: center;
                        }

                    }
                }
            }
        }
        .container {
            width: 1076px;
            margin: 0 auto;
        }
    }
</style>
