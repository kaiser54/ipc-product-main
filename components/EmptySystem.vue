<template>
   <div class="body">
    <div class="container">
        <div class="image">
            <slot name="svg"></slot>
        </div>
        <div class="empty-text">
            <div class="empty-header">
                <h2>{{ header }}</h2>
            </div>
            <div class="empty-snippet">
                <p>
                    {{ snippet }}
                </p>
            </div>
        </div>
        <div class="button">
            <PrimaryBtn :buttonText="buttonText" @click="redirect()" class="button" />
        </div>
    </div>
   </div>
</template>

<script>
    export default {
        props:{
            header:{
                type: String,
                required: true
            },
            snippet:{
                type: String,
                required: true
            },
            buttonText: {
      type: String,
      default: "Go to market",
    },
        },
        methods:{
            redirect(){
                this.$emit("leavePage");
                this.$router.push("/dashboard/market")
                console.log("u")
            }
        }
    }
</script>

<style scoped>
   .body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* This ensures the container is centered vertically on the screen */
    }
    .container{
        width: 360px;
        /* height: 210px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
    }
    .image svg{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .empty-text{
        display: flex;
        width: 356px;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    .empty-header h2{
        color: var(--grey-grey-1, #303237);
        text-align: center;

        /* H2/Heading 2 Small Medium */
        font-family: Switzer;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 36px; /* 150% */
        letter-spacing: -1px;
    }
    .empty-snippet p{
        color: var(--grey-grey-3, #7E8494);
        text-align: center;

        /* Body Large/Body Large Regular */
        font-family: Switzer;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
</style>