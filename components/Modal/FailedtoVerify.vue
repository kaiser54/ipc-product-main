<template>
    <div>
        <div class="content">
            <div class="confirmation">
                <div class="confirmation-wrap">
                    <div class="svg-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_2260_9969)">
                                <path d="M8 5.33334V8" stroke="#FF3B2D" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M8 10.6797V10.6667" stroke="#FF3B2D" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                                    stroke="#FF3B2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2260_9969">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="message">
                        <h2 class="header">Verification Unsuccessful</h2>
                        <div class="snippet">
                            <p>
                                This Verification for this email
                                <span>{{ this.maskedEmail }}</span>
                                was Unsuccessful, Please try again.
                            </p>
                        </div>
                    </div>
                </div>
                <nuxt-link to="/auth/login" class="btn primary-btn">Back to log in</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["maskedEmail"],
}
</script>

<style scoped>
.confirmation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 32px;

    max-width: 446px;
    margin-inline: auto;
}
.header{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    /* or 150% */

    text-align: center;

}

.confirmation-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;
}

.confirmation .btn {
    width: auto;
}

.svg-bg svg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 40px;
    height:40px;

    /* Positive/P50 */

    border-radius: 100%;
}

.message {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
    text-align: center;
}

.snippet p,
.snippet {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    text-align: center;

    color: var(--grey-grey3);
}

.message span {
    font-weight: 700;
    color: var(--grey-grey1);
}

@media (max-width: 750px) {
    br {
        display: none;
    }


    h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        /* identical to box height, or 150% */

        letter-spacing: -1px;
    }
    .content{
        border: 1px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px;
        width: 100%;

    }
    .confirmation {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 32px;
    max-width: 446px;
    margin:0;
}
}
</style>
