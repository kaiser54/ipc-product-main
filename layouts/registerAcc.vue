<template>
  <div>
    <section class="registerAcc">
      <div class="f-d-r">
        <div class="login__ui">
          <!-- <div class="branding__beta">
            <img src="../assets/images/wrong-2.png" alt="" />
            <div class="beta">BETA</div>
          </div> -->
          <div class="branding__beta">
            <img src="../assets/images/wrong-2.png" alt="" />
            <NewTag title="BETA" bgColor="#20AF0B" textColor="#FFFFFF" padding="2px 8px" borderRadius="10px"
              fonts="10px" />
          </div>
          <div class="selected-card">
            <Selected v-for="info in selectedInfo" :key="info.index"
            :title="info.title"
            :snippet="info.snippet">
            <div>
              <NewTag 
                title="COMING SOON" bgColor="#E9F7E7" textColor="#20AF0B"
                  border="1px solid #A4DE9B"
                  padding="4px 15px"
                  borderRadius="15px"
                  fonts="12px"
                  v-if="info.title === 'Buy now, pay later'"
               />
            </div>
            </Selected>
        </div>
        </div>
      </div>
      <div class="page-route-wrap">
        <nuxt class="register-slot" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
            return{
              indexOfCardWithComponent : 3,
                selectedInfo:[
                  
                    {
                      
                        title:"Get instant voice",
                        snippet: "Get an invoice for every bulk or single orders you make immediately after purchase"
                    },
                    {
                        title:"Cheaper price",
                        snippet: "We offer the best rates on food items and materials. Also, enjoy our cash back policy on spoilt or damage orders"
                    },
                    {
                        title:"Track your order in steps",
                        snippet: "Have the ability to track your order at every stage from processing to delivering on IPC"
                    },
                    {
                        title:"Buy now, pay later",
                        snippet: "At IPC, we are offering a credit facility that allows you to make purchase and make payments later within 7 days"
                    },
                ]
            }
        }
};
</script>

<style>
.page-route-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.login__ui {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 56px;
  margin-top: 90px;
  margin-left: 10%;
}

.branding__beta {
  display: flex;
  align-items: center;
  gap: 4px;
}

.beta {
  display: flex;
  height: 16px;
  width: fit-content;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(--white, #fff);

  /* Caption/Caption Medium */
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  /* 150% */

  border-radius: 100px;
  background: var(--positive-p-300, #20af0b);
}

.register-slot {
  max-width: 491px;
  width: 100%;
}
.selected-card{
        display: flex;
        flex-direction: column;
        widows: 100%;
        gap: 35px;
    }
@media (max-width: 1200px) {
  .register-slot {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

::-webkit-scrollbar {
  display: none;
}

.registerAcc {
  display: flex;
  flex-direction: row;
}

.f-d-r {
  background: var(--grey-grey6, #f4f5f8);
  max-width: 42%;
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
}

@media (max-width: 1200px) {
  .f-d-r {
    display: none;
  }
}

.center {
  margin: 48px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.switch-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  max-width: 265px;
  margin-inline: auto;
  height: 40px;

  background: var(--grey-grey6);
  border-radius: 8px;
}

.switch-link button {
  background: transparent;
}

.switch-link p {
  display: flex;
  flex-direction: row;
  align-items: center;
}</style>
