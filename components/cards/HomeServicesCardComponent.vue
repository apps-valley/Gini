<template>
    <div class="services-card">
        <div class="services-card-wrapper">
            <div>
                <b-img :src="cardData.imgUrl"></b-img>
                <h4>{{cardData.title}}</h4>
                <p class="mt-3">{{cardData.description}}</p>
            </div>
            <a :href="cardData.id" v-smooth-scroll="{duration: 2000, updateHistory: false}">Learn more
                <!-- <span class="arrow-icon"></span> -->
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'services-card',
    props: {
        cardData: {
            type: Object
        }
    },
}
</script>

<style lang="scss">
    
</style>