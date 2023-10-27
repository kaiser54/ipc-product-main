<template>
  <div class="random-avatar" :class="buttonClasses" >
    {{ initials }}
  </div>
</template>
  
  <script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "small",
    },
  },
  computed: {
    initials() {
      const [firstName] = this.name.trim().split(" ");
      return (
        firstName.charAt(0).toUpperCase()
      );
    },
    // avatarStyle() {
    //   const fontColor = [179, 143, 0];
    //   const backgroundColor = `rgba(${fontColor.join(",")}, 0.3)`;
    //   return {
    //     color: `rgb(${fontColor.join(",")})`,
    //     backgroundColor,
    //   };
    // },
    buttonClasses() {
      return {
        // Button size
        small: this.size === "small",
        big: this.size === "big",
      };
    },
  },
  methods: {
    generateRandomColor() {
      return [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
      ];
    },
  },
};
</script>
  
  <style scoped>
.random-avatar {
  color:  #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-style: normal;
  font-family: var(--graphikSemibold) ;
  font-weight: 600;
  line-height: 27px; /* 150% */
  letter-spacing: -0.2px;
  border-radius: 50%;
  /* color: rgb(179, 143, 0); */
  background: var(--orange-orange-500, #E54120);

}

.random-avatar.big {
  font-size: 34px !important;
}
</style>
  