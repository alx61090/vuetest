<template>
    <div v-if="element != Object" class="max-w-lg">
        <h1 class="text-4xl">{{element.title}}</h1>
        <p class="text-sm">{{element.type.title}}</p>
    </div>
</template>

<script>
export default{
    data() {
        return {
            element:Object,
        };
    },
    mounted(){
        this.$axios.get('http://127.0.0.1:8000/api/element/url/?url_clean='+ this.$route.params.slug +'&format=json').then((res)=>{
            this.element = res.data
        })
    }
}


</script>