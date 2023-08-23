<template>
	<div v-if="showModal">
		<div class="bigscreen modal">
			<div class="desktop-modal">
				<div class="modal-visual">
					<div class="modal-cancel-btn">
						<button @click="setDismissModal()">
							<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.333 20.6673L20.6663 11.334M11.333 11.334L20.6663 20.6673L11.333 11.334Z" stroke="#565C69"
									stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#BDC0CE" />
							</svg>
						</button>
					</div>
					<!-- </div> -->
					<div class="modal-image">
						<img :src="content.image" alt="" />
					</div>
				</div>
				<div class="modal-content">
					<div class="modal-text">
						<div class="modal-title">
							<h3>{{ content.title }}</h3>
							<slot name="tag"></slot>
						</div>
						<div class="modal-description">
							<p>{{ content.description }}</p>
						</div>
					</div>
					<div class="modal-bottom">
						<div class="modal-index-icon">
							<slot name="icon"></slot>
						</div>
						<div class="modal-button">
							<div class="modal-bton">
								<slot name="neutral"> </slot>
							</div>

							<div class="modal-btn">
								<DynamicButton class="primary-btn" @clickButton="nextTab()" size="standard" type="primary"
									buttonText="Continue" :showText="true">
								</DynamicButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="smallScreen">
			<div class="smallScreen-modal">
				<div class="mobile-modal-visual">
					<div class="mobile-top-icon">
						<div class="scroll-icon">
							<svg width="37" height="5" viewBox="0 0 37 5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="0.900391" y="0.226562" width="35.1985" height="4.55009" rx="2.27504" fill="#E8E7EB" />
							</svg>
						</div>
						<div class="modal-cancel-icon">
							<button @click="setDismissModal()">
								<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.333 20.6673L20.6663 11.334M11.333 11.334L20.6663 20.6673L11.333 11.334Z" stroke="#565C69"
										stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									<rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#BDC0CE" />
								</svg>
							</button>
						</div>

					</div>
					<div class="mobile-modal-images">
						<img :src="content.mobileImage" alt="">
					</div>
				</div>
				<div class="mobile-modal-content">
					<div class="mobile-modal-title">
						<h3>{{ content.title }}</h3>
						<slot name="tag"></slot>
					</div>
					<div class="mobile-modal-description">
						<p>{{ content.description }}</p>
					</div>
				</div>
				<div class="mobile-modal-bottom">
					<div class="mobile-index-icon">
						<slot name="icon"></slot>
					</div>
					<div class="mobile-modal-button">
						<div class="mobile-modal-bttn">
							<slot name="neutral"> </slot>
						</div>
						<div class="mobile-modal-btn">
							<DynamicButton class="primary-btn" @clickButton="nextTab()" size="standard" type="primary"
								buttonText="Continue" :showText="true">
							</DynamicButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			showText: true,
			showModal: true,
		
		};
	},
	props: {
		content: {
			type: Object,
			required: true,
		},


	},
	methods: {
		setDismissModal() {
			this.$emit("cancelModal");
			console.log("try");
		},
		nextTab() {
			// console.log('emit')
			this.$emit("nextTab");
		},
		getImageSource() {
			return this.isMobile ? content.mobileImage : content.image;
		},
	},
};
</script>
  
<style scoped>
* {
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

.smallScreen {
	display: none;
}

.bigscreen {
	display: flex;
}

.modal {
	display: flex;
	justify-content: center;
	/* Center horizontally */
	align-items: center;
	/* Center vertically */
	min-height: 100vh;
}

.mobilee-modal {
	/* display: flex; */
	/* justify-content: center; */
	/* Center horizontally */
	/* align-items: center; */
	/* Center vertically */
	/* min-height: 100vh; */
}

.desktop-modal {
	display: flex;
	width: 512px;
	margin: auto;
	height: 521px;

	padding: 16px 24px 24px 24px;
	flex-direction: column;
	align-items: flex-end;
	gap: 32px;
	/* border: 1px solid red; */
	/*styling */
	border-radius: 16px;
	background: #fff;
	box-shadow: 0px 0px 0px 0px rgba(0, 2, 46, 0.1), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
		0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05),
		0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
}

/* .mobile-modal {
    display: flex;
    width: 100%;
    padding: 0px 16px 24px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    border-radius: 24px 24px 0px 0px;
    background: var(--white, #fff);
    box-shadow: 0px 0px 0px 0px rgba(0, 2, 46, 0.1), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
      0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05),
      0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
  
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    box-sizing: border-box;
    transform: translateY(0);
    transition: transform 0.5s ease-in-out;
  } */

/* .mobile-modal.slide-up {
    transform: translateY(0);
  } */

.modal-image {
	max-width: 464px;
	width: 100%;
	height: 205px;
	align-self: stretch;
	/* height: fit-content; */
	/* border: 1px solid green; */
}

/* .mobile-modal-image {
    display: flex;
    max-width: 344px;
    width: 100%;
    height: 212px;
    justify-content: center;
    align-items: center;
    height: fit-content;
    border: 1px solid green;
  } */

.modal-text {
	max-width: 464px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: left;
	gap: 8px;
	align-self: stretch;
}

/* .mobile-modal-text {
    max-width: 343px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  } */

.modal-title {
	display: flex;
	align-items: center;
	gap: 8px;
}

/* .mobile-modal-title {
    display: flex;
    align-items: center;
    gap: 8px;
  } */

.modal-title h3 {
	color: #303237;
	text-align: left;
	/* H3/Heading 3 Bold */
	font-family: Switzer;
	font-size: 24px;
	font-style: normal;
	font-weight: 600;
	line-height: 36px;
	/* 150% */
	letter-spacing: -0.5px;
}

/* .mobile-modal-title h3 {
    color: var(--grey-grey-1, #303237);
  
    font-family: Switzer;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  
    letter-spacing: -0.5px;
  } */

.modal-description {
	align-self: stretch;
	color: #565c69;
	text-align: left;
}

/* .mobile-modal-description {
    align-self: stretch;
    color: #565c69;
    text-align: left;
  } */

.modal-description p {
	font-family: Switzer;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	/* 150% */
}

/* .mobile-modal-description p {
    color: var(--grey-grey-3, #7e8494);
    font-family: Switzer;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  } */

.modal-content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	align-self: stretch;
	/* border: 1px solid blue; */
}

.modal-button {
	display: flex;
	align-items: center;
	gap: 16px;
}

/* .mobile-modal-button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  } */

template svg {
	width: 20px;
	height: 20px;
}

.modal-cancel-btn {
	display: flex;
	width: 32px;
	/* height: 32px; */
	/* padding: 6px; */
	justify-content: center;
	align-items: flex-end;
	gap: 10px;
	/* border: 1px solid red; */
}

/* .mobile-top-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  } */

.pop-icon {
	/* margin: auto; */
	display: flex;
	width: 343px;
	height: 25px;
	padding: 8px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	/* border: 1px solid red; */
}

.modal-visual {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 16px;
	align-self: stretch;
	/* border: 1px solid red; */
}

.modal-btn {
	width: 102px;
	height: 48px;
}

.modal-bton {
	width: 113px;
	height: 48px;
}

/* .mobile-modal-btn {
    width: 163.5px;
    height: 48px;
  } */

/* .mobile-modal-bton {
    width: 163.5px;
    height: 48px;
  } */

.modal-bottom {
	max-width: 464px;
	/* border: 1px solid red; */
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

/* .mobile-modal-bottom{
    max-width: 343px;
  
    width: 100%;
    display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  
  } */
/* .mobile-modal-bottom {
    max-width: 343px;
    border: 1px solid red;
    width: 100%;
    display: flex;
    gap: 32px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  } */

@media screen and (max-width:600px) {

	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	.bigscreen {
		display: none;
	}

	.smallScreen {
		margin: 0px;
		width: 100%;
		display: flex;
		/* padding-bottom: 24px; */

		border-radius: 24px 24px 0px 0px;
		background: var(--white, #fff);
		box-shadow: 0px 216px 60px 0px rgba(0, 2, 46, 0), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
			0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px hsla(237, 100%, 9%, 0.05),
			0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
		border: 1px solid red;



	}

	.smallScreen-modal {
		display: flex;
		padding: 0px 16px 24px 16px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 32px;
		position: fixed;
		bottom: 0;
		left: 0;
		border-radius: 24px 24px 0px 0px;
		background: var(--white, #fff);
		box-shadow: 0px 216px 60px 0px rgba(0, 2, 46, 0), 0px 9px 19px 0px rgba(0, 2, 46, 0.1),
			0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px hsla(237, 100%, 9%, 0.05),
			0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0);
	}

	.mobile-top-icon {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 8px;
		/* border: 1px solid green; */
	}

	.scroll-icon {
		display: flex;
		width: 100%;
		height: 25px;
		padding: 8px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		/* border: 1px solid red; */
	}

	.modal-cancel-icon button {
		display: flex;
		width: 32px;
		height: 32px;
		padding: 6px;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.mobile-modal-visual {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 16px;
	}

	.mobile-modal-images {

		display: flex;
		width: 100%;
		/* width: 344px; */
		height: 212px;
		justify-content: center;
		align-items: center;
		/* border: 1px solid black; */
	}

	.mobile-modal-images img {
		display: flex;
		/* width: 344px; */
		width: 100%;
		height: 212px;
		justify-content: center;
		align-items: center;
	}

	.mobile-modal-content {
		/* width: 343px; */
		width: 91%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		align-self: stretch;
		/* border: 1px solid red; */
	}

	.mobile-modal-title {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.mobile-modal-title h3 {
		color: var(--grey-grey-1, #303237);

		/* H3/Heading 3 Small Bold */
		font-family: Switzer;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 30px;
		/* 150% */
		letter-spacing: -0.5px;
	}

	.mobile-modal-description p {
		color: var(--grey-grey-3, #7E8494);
		align-self: stretch;
		/* Body Large/Body Large Regular */
		font-family: Switzer;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
		/* 150% */
		text-align: left;
	}

	.mobile-modal-bottom {
		/* width:343px; */
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
		align-self: stretch;
	}

	.mobile-index-icon {}

	.mobile-modal-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		align-self: stretch;
		/* border: 1px solid red; */
	}

	.mobile-modal-bttn,
	.mobile-modal-btn {
		width: 163.5px;
	}
}
</style>
  