<template>
    <div class="people-card">
        <p>{{cardData.description}}</p>
        <div class="d-flex justify-content-between align-items-center">
            <b-form-rating 
                v-model="rateValue" 
                variant="warning" 
                >
            </b-form-rating>
            <div class="people-card-user">
                <b-img :src="cardData.avatar"></b-img>
                <span class="people-name">{{cardData.userName}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'people-card',
    props: {
        cardData: {
            type: Object
        }
    },
    data() {
        return {
            rateValue: 5
        }
    }
}
</script>

<style lang="scss">
    .people-card {
        padding: 32px;
        background-color: white;
        box-shadow: 0px 0px 80px rgba(171, 171, 171, 0.15);
        border-radius: 12px;
        min-height: 256px;
        margin-bottom: 32px;
        p {
            font-size: 1.286em;
            text-align: left;
            margin-bottom: 24px;
            font-style: italic;
            line-height: 32px;
        }
        .b-rating {
            border: none;
            width: 112px;
            padding-left: 0;
            padding-right: 0;
        }
        .people-card-user {
            display: inline-flex;
            align-items: center;
            img {
                width: 40px;
                height: 40px;
                margin-right: 16px;
            }
            .people-name {
                font-size: 1.14em;
                line-height: 16px;
            }
        }
    }
</style>