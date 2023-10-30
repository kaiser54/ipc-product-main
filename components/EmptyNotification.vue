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
         width: 255px;
         height: 265px;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 24px;
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
        color: var(--grey-grey-1-base, #303237);

/* H3/Heading 3 Small Medium */
font-family: var(--new-primary-font);
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 30px; /* 150% */
letter-spacing: -0.5px;
     }
     .empty-snippet p{
        color: var(--grey-grey-2, #565C69);
text-align: center;
width: 253px;
/* Body Small/Body Small Regular */
font-family: var(--new-primary-font);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px; /* 150% */
     }
 </style>