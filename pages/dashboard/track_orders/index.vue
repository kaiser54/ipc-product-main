<template>
  <div class="view-page">
    <div class="title-header">
      <h2 class="h2-medium header-text">Track orders</h2>
    </div>
    <div class="order-container">
      <EmptyStates @leaveCart="leaveCart">
        <template v-slot:svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="404"
            height="154"
            viewBox="0 0 404 154"
            fill="none"
          >
            <rect x="81.5" y="78.5" width="257" height="63" rx="15.5" fill="white" />
            <rect x="98" y="95" width="30" height="30" rx="15" fill="#F4F5F8" />
            <rect
              x="98"
              y="95"
              width="30"
              height="30"
              rx="15"
              stroke="white"
              stroke-width="2"
            />
            <rect x="111" y="95" width="30" height="30" rx="15" fill="#F4F5F8" />
            <rect
              x="111"
              y="95"
              width="30"
              height="30"
              rx="15"
              stroke="white"
              stroke-width="2"
            />
            <rect x="124" y="95" width="30" height="30" rx="15" fill="#F4F5F8" />
            <rect
              x="124"
              y="95"
              width="30"
              height="30"
              rx="15"
              stroke="white"
              stroke-width="2"
            />
            <rect x="173" y="94" width="79.875" height="8" rx="4" fill="#E5E7EF" />
            <rect x="173" y="108.188" width="46" height="16" rx="8" fill="#F4F5F8" />
            <rect x="282.812" y="94" width="26" height="8" rx="4" fill="#E5E7EF" />
            <path
              d="M317.666 95.332L320.333 97.9987L317.666 100.665"
              stroke="#BDC0CE"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="81.5" y="78.5" width="257" height="63" rx="15.5" stroke="#F4F5F8" />
            <g filter="url(#filter0_d_4482_23418)">
              <rect x="52" y="53" width="311" height="64" rx="16" fill="white" />
              <rect x="69" y="70" width="30" height="30" rx="15" fill="#F4F5F8" />
              <rect
                x="69"
                y="70"
                width="30"
                height="30"
                rx="15"
                stroke="white"
                stroke-width="2"
              />
              <rect x="82" y="70" width="30" height="30" rx="15" fill="#F4F5F8" />
              <rect
                x="82"
                y="70"
                width="30"
                height="30"
                rx="15"
                stroke="white"
                stroke-width="2"
              />
              <rect x="95" y="70" width="30" height="30" rx="15" fill="#F4F5F8" />
              <rect
                x="95"
                y="70"
                width="30"
                height="30"
                rx="15"
                stroke="white"
                stroke-width="2"
              />
              <rect x="144" y="69" width="79.875" height="8" rx="4" fill="#E5E7EF" />
              <rect x="144" y="83.1875" width="46" height="16" rx="8" fill="#F4F5F8" />
              <rect x="306.812" y="69" width="26" height="8" rx="4" fill="#E5E7EF" />
              <path
                d="M341.666 70.332L344.333 72.9987L341.666 75.6654"
                stroke="#BDC0CE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="52.5"
                y="53.5"
                width="310"
                height="63"
                rx="15.5"
                stroke="#F4F5F8"
              />
            </g>
            <g filter="url(#filter1_d_4482_23418)">
              <rect x="24" y="24" width="356" height="64" rx="16" fill="white" />
              <rect x="41" y="41" width="30" height="30" rx="15" fill="#E5E7EF" />
              <rect
                x="41"
                y="41"
                width="30"
                height="30"
                rx="15"
                stroke="white"
                stroke-width="2"
              />
              <rect x="54" y="41" width="30" height="30" rx="15" fill="#E5E7EF" />
              <rect
                x="54"
                y="41"
                width="30"
                height="30"
                rx="15"
                stroke="white"
                stroke-width="2"
              />
              <rect x="67" y="41" width="30" height="30" rx="15" fill="#E5E7EF" />
              <rect
                x="67"
                y="41"
                width="30"
                height="30"
                rx="15"
                stroke="white"
                stroke-width="2"
              />
              <rect x="116" y="40" width="79.875" height="8" rx="4" fill="#E5E7EF" />
              <rect x="116" y="54.1875" width="46" height="16" rx="8" fill="#E5E7EF" />
              <rect x="323.812" y="40" width="26" height="8" rx="4" fill="#E5E7EF" />
              <path
                d="M358.666 41.332L361.333 43.9987L358.666 46.6654"
                stroke="#BDC0CE"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="24.5"
                y="24.5"
                width="355"
                height="63"
                rx="15.5"
                stroke="#E5E7EF"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_4482_23418"
                x="15"
                y="16"
                width="385"
                height="138"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="18.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.188235 0 0 0 0 0.196078 0 0 0 0 0.215686 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4482_23418"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4482_23418"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_4482_23418"
                x="-13"
                y="-13"
                width="430"
                height="138"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="18.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.188235 0 0 0 0 0.196078 0 0 0 0 0.215686 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_4482_23418"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_4482_23418"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </template>
        <template v-slot:message>
          <div class="message">
            <h2 class="">Let’s make your first order</h2>
            <div class="snippet">
              Visit the market to purchase your food items, kitchen utensils, and other
              necessary products.
            </div>
          </div>
        </template>
      </EmptyStates>
      <!-- de -->
        <!-- <orderProduct :showSvg="true" /> -->
        <OrderedProduct :tagText="tagText" :size="size" :type="type" />

    </div>
  </div>
</template>
<script>
export default {
  layout: "dashboardview",
  // Other component properties and methods
  data() {
    return {
      pageTitle: "IPC | Track orders",
      duplicateCount: 10, // Specify the number of times to duplicate the component
      selectedIndex: 2,
      listSelect: [
        {
          title: "Order procesing",
          type: "warning",
          size: "small",
        },
        {
          title: "Shipped",
          type: "info",
          size: "small",
        },
        {
          title: "Delivered",
          type: "positive",
          size: "small",
        },
      ],
    };
  },
  head() {
    return {
      title: this.pageTitle,
    };
  },
  computed: {
    tagText() {
      return this.listSelect[this.selectedIndex].title;
    },
    type() {
      return this.listSelect[this.selectedIndex].type;
    },
    size() {
      return this.listSelect[this.selectedIndex].size;
    },
  },
  created() {
    this.asyncData();
  },
  methods: {
    leaveCart() {
      this.$router.push("/dashboard/market");
    },
    trackOrder() {
      this.$router.push(`/dashboard/track_orders/${id}`);
    },
  },
};
</script>

<style scoped>
a {
  color: inherit;
  width: 100%;
}

.order-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  max-width: 784px;
  width: 100%;
}
</style>
