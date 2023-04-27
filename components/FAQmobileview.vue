<template>
    <div class="user__details__head__group">
        <div class="user__details__head__address udhs">
            <div class="udh__svg__group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 18.2744V18.25" stroke="#565C69" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M12 14.5C14 13.5 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10"
                        stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>FAQs</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654" stroke="#BDC0CE" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div class="user__details__head__address udhs">
            <div class="udh__svg__group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z"
                        stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Customer Support</p>
            </div>
        </div>
        <div class="user__details__head__address udhs">
            <div class="udh__svg__group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
                        stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 2.5V9H19" stroke="#565C69" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M8 17H15" stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 13H15" stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 9H9" stroke="#565C69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Terms and Privacy</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.66675 3.33203L13.3334 9.9987L6.66675 16.6654" stroke="#BDC0CE" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user__details__head__group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    width: 100%;

    /* Grey/Grey6 */

    border: 1px solid #f4f5f8;
    border-radius: 16px;
}

.udhs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 12px;
    gap: 6px;

    width: 100%;
}

.user__details__head__address {}

.udh__svg__group {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 16px;
}

.udh__svg__group p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    /* Grey/Grey1 */

    color: #303237;
}

.verified__svg {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
}
</style>