<template>
    <div class="tags">
        <p>In stock</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.tags {
    box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4px 12px;
gap: 10px;


height: 24px;

/* Positive/P50 */

background: #E9F7E7;
/* Positive/P75 */

border: 1px solid #A4DE9B;
border-radius: 100px;
}
.tags p {
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
/* identical to box height, or 150% */


/* Positive/P400 */

color: #167A08;

}
</style>