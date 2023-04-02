<template>
  <div>
    <div v-if="loading">
      <SkeletonLoader style="overflow: hidden; height: 100vh" />
    </div>
    <div class="dashboard-wrapper" v-else>
      <section class="section-wrapper">
        <div class="ipc-nav">
          <div class="fixed" v-if="!mobile">
            <div class="solv">
              <section class="dashboard-nav-bar">
                <section class="dashboard-menu">
                  <img
                    src="../assets/images/ipc-logo.png"
                    alt="IPC Logo branding Independence purchasing company"
                  />
                  <section class="menu">
                    <nuxt-link to="/dashboard">
                      <div class="desktop-nav">
                        <div class="nav-content">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 10.2501V20.0001C3 20.5524 3.44771 21.0001 4 21.0001H8.42857C8.98086 21.0001 9.42857 20.5524 9.42857 20.0001V13.2858H14.5714V20.0001C14.5714 20.5524 15.0191 21.0001 15.5714 21.0001H20C20.5523 21.0001 21 20.5524 21 20.0001V10.2501C21 9.93536 20.8518 9.63897 20.6 9.45012L12 3.00012L3.4 9.45012C3.14819 9.63897 3 9.93536 3 10.2501Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>Market</p>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link to="/dashboard/categories">
                      <div class="desktop-nav">
                        <div class="nav-content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 7.00012H19"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5 12.0001H19"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5 17.0001H19"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>Categories</p>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link to="/dashboard/track orders">
                      <div class="desktop-nav">
                        <div class="nav-content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 7.00012H21V19.0001C21 20.1047 20.1046 21.0001 19 21.0001H5C3.89543 21.0001 3 20.1047 3 19.0001V7.00012Z"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3 7.00012L4.96327 3.50986C5.14039 3.19498 5.47357 3.00012 5.83485 3.00012H18.1652C18.5264 3.00012 18.8596 3.19498 19.0367 3.50986L21 7.00012"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15 11.0001C15 12.657 13.6569 14.0001 12 14.0001C10.3431 14.0001 9 12.657 9 11.0001"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>Track orders</p>
                        </div>
                      </div>
                    </nuxt-link>
                    <nuxt-link to="/dashboard/history">
                      <div class="desktop-nav">
                        <div class="nav-content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8 6.00012H16H8ZM8 10.0001H16H8ZM8 14.0001H11H8ZM6 22.0001H18C19.1046 22.0001 20 21.1047 20 20.0001V4.00012C20 2.89555 19.1046 2.00012 18 2.00012H6C4.89543 2.00012 4 2.89555 4 4.00012V20.0001C4 21.1047 4.89543 22.0001 6 22.0001Z"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>History</p>
                        </div>
                      </div>
                    </nuxt-link>
                    <!-- <nuxt-link :to="{ name: 'profile' }"> -->
                    <nuxt-link to="/dashboard/profile">
                      <div class="desktop-nav">
                        <div class="nav-content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>Profile</p>
                        </div>
                      </div>
                    </nuxt-link>
                    <div class="cursor">
                      <div class="desktop-nav" @click="togglePopup">
                        <div class="nav-content">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z"
                              stroke="#303237"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p>More</p>
                        </div>
                      </div>
                    </div>

                    <div class="popup" v-if="showPopup" ref="popup" @click="togglePopup">
                      <nuxt-link :to="{ name: 'index' }">
                        <div class="desktop-nav">
                          <div class="nav-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"
                                stroke="#565C69"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M13 2.5V9H19"
                                stroke="#565C69"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8 17H15"
                                stroke="#303237"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8 13H15"
                                stroke="#303237"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8 9H9"
                                stroke="#303237"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <p>FAQs</p>
                          </div>
                        </div>
                      </nuxt-link>
                      <nuxt-link :to="{ name: 'index' }">
                        <div class="desktop-nav">
                          <div class="nav-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z"
                                stroke="#565C69"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <p>Customer support</p>
                          </div>
                        </div>
                      </nuxt-link>
                      <nuxt-link :to="{ name: 'index' }">
                        <div class="desktop-nav">
                          <div class="nav-content">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M4 12H15"
                                stroke="#FF3B2D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8 7L3 12L8 17"
                                stroke="#FF3B2D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M21 3V21"
                                stroke="#FF3B2D"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <p class="logout">Log out</p>
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </section>
                </section>
                <section class="dashboard-profile">
                  <div class="profile-content">
                    <div class="profile-image">
                      <img src="../assets/images/avatar.png" alt="" />
                    </div>
                    <div class="profile-details">
                      <p class="name">Chicken republic</p>
                      <p class="email truncate">adminchickenrepublic@gmail.com</p>
                    </div>
                  </div>
                </section>
              </section>
            </div>
            <div class="backdrop" v-if="showPopup" @click="closePopup"></div>
          </div>
          <div class="mobile-bottom-nav" v-else>
            <div class="mobile-nav-bar">
              <nuxt-link to="/dashboard">
                <div class="mobile-nav">
                  <div class="mobile-nav-content">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 10.2501V20.0001C3 20.5524 3.44771 21.0001 4 21.0001H8.42857C8.98086 21.0001 9.42857 20.5524 9.42857 20.0001V13.2858H14.5714V20.0001C14.5714 20.5524 15.0191 21.0001 15.5714 21.0001H20C20.5523 21.0001 21 20.5524 21 20.0001V10.2501C21 9.93536 20.8518 9.63897 20.6 9.45012L12 3.00012L3.4 9.45012C3.14819 9.63897 3 9.93536 3 10.2501Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Market</p>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="/dashboard/categories">
                <div class="mobile-nav">
                  <div class="mobile-nav-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 7.00012H19"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12.0001H19"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 17.0001H19"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Categories</p>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="/dashboard/track orders">
                <div class="mobile-nav">
                  <div class="mobile-nav-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 7.00012H21V19.0001C21 20.1047 20.1046 21.0001 19 21.0001H5C3.89543 21.0001 3 20.1047 3 19.0001V7.00012Z"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 7.00012L4.96327 3.50986C5.14039 3.19498 5.47357 3.00012 5.83485 3.00012H18.1652C18.5264 3.00012 18.8596 3.19498 19.0367 3.50986L21 7.00012"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 11.0001C15 12.657 13.6569 14.0001 12 14.0001C10.3431 14.0001 9 12.657 9 11.0001"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Orders</p>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link to="/dashboard/history">
                <div class="mobile-nav">
                  <div class="mobile-nav-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 6.00012H16H8ZM8 10.0001H16H8ZM8 14.0001H11H8ZM6 22.0001H18C19.1046 22.0001 20 21.1047 20 20.0001V4.00012C20 2.89555 19.1046 2.00012 18 2.00012H6C4.89543 2.00012 4 2.89555 4 4.00012V20.0001C4 21.1047 4.89543 22.0001 6 22.0001Z"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>History</p>
                  </div>
                </div>
              </nuxt-link>
              <!-- <nuxt-link :to="{ name: 'profile' }"> -->
              <nuxt-link to="/dashboard/profile">
                <div class="mobile-nav">
                  <div class="mobile-nav-content">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
                        stroke="#565C69"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>Profile</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="top-fixed" @click="closePopup">
          <section class="dashview">
            <div class="ipc-top-fixed">
              <section class="dashboard-top-fixed" v-if="!mobile">
                <section class="top-details">
                  <div class="username-welcome">
                    <div class="welcome">
                      <p>Hello,</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                      >
                        <rect y="0.5" width="20" height="20" fill="url(#pattern0)" />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlink:href="#image0_1757_8288"
                              transform="scale(0.0138889)"
                            />
                          </pattern>
                          <image
                            id="image0_1757_8288"
                            width="72"
                            height="72"
                            xlink:href="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <p class="username">Chicken Republic</p>
                  </div>
                  <div class="search-input">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2006_2516)">
                        <path
                          d="M14.1667 14.1666L18.3334 18.3333L14.1667 14.1666ZM16.2501 8.95829C16.2501 12.9854 12.9855 16.25 8.95842 16.25C4.93134 16.25 1.66675 12.9854 1.66675 8.95829C1.66675 4.93122 4.93134 1.66663 8.95842 1.66663C12.9855 1.66663 16.2501 4.93122 16.2501 8.95829Z"
                          stroke="#7E8494"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2006_2516">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                      class="input-search"
                      type="search"
                      name=""
                      id=""
                      placeholder="Search for products"
                    />
                  </div>
                  <div class="notify-cart">
                    <div class="notification">
                      <div class="circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5.6 9.45798V8.4C5.6 4.86538 8.46538 2 12 2C15.5346 2 18.4 4.86537 18.4 8.4V9.45798C18.4 11.7583 19.0649 14.0096 20.3146 15.9409L21 17H3L3.68539 15.9408C4.93512 14.0096 5.6 11.7583 5.6 9.45798Z"
                            stroke="#565C69"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11 20.8889C11.5344 21.4827 12.4656 21.4827 13 20.8889"
                            stroke="#565C69"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <!-- <div class="badge">
                    <p>10</p>
                  </div> -->
                    </div>

                    <div class="cart">
                      <div class="circle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                            stroke="#565C69"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 10V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9.6888"
                            stroke="#565C69"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div class="badge">
                        <p>10</p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <section class="mobile-dashboard-top-fixed" v-else>
                <section class="mobile-top-details">
                  <div class="welcome-cart">
                    <div class="username-welcome">
                      <div class="welcome">
                        <p>Hello,</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <rect y="0.5" width="20" height="20" fill="url(#pattern0)" />
                          <defs>
                            <pattern
                              id="pattern0"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlink:href="#image0_1757_8288"
                                transform="scale(0.0138889)"
                              />
                            </pattern>
                            <image
                              id="image0_1757_8288"
                              width="72"
                              height="72"
                              xlink:href="data:image/png;base64,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"
                            />
                          </defs>
                        </svg>
                      </div>
                      <p class="username mobile-truncate">Chicken Republic</p>
                    </div>
                    <div class="notify-cart">
                      <div class="notification">
                        <div class="circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5.6 9.45798V8.4C5.6 4.86538 8.46538 2 12 2C15.5346 2 18.4 4.86537 18.4 8.4V9.45798C18.4 11.7583 19.0649 14.0096 20.3146 15.9409L21 17H3L3.68539 15.9408C4.93512 14.0096 5.6 11.7583 5.6 9.45798Z"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M11 20.8889C11.5344 21.4827 12.4656 21.4827 13 20.8889"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <!-- <div class="badge">
                    <p>10</p>
                  </div> -->
                      </div>

                      <div class="cart">
                        <div class="circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 10V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V9.6888"
                              stroke="#565C69"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div class="badge">
                          <p>10</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mobile-search search-input" @click="redirectToSearchPage">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2006_2516)">
                        <path
                          d="M14.1667 14.1666L18.3334 18.3333L14.1667 14.1666ZM16.2501 8.95829C16.2501 12.9854 12.9855 16.25 8.95842 16.25C4.93134 16.25 1.66675 12.9854 1.66675 8.95829C1.66675 4.93122 4.93134 1.66663 8.95842 1.66663C12.9855 1.66663 16.2501 4.93122 16.2501 8.95829Z"
                          stroke="#7E8494"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2006_2516">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <input
                      class="input-search"
                      type=""
                      name=""
                      id=""
                      placeholder="Search for products"
                    />
                  </div>
                </section>
              </section>
            </div>
            <div class="view-wrapper">
              <section class="view">
                <div class="page-wrapper">
                  <div class="page-container">
                    <nuxt />
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      mobile: false,
      loading: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
    // set loading to true again when component is mounted
    // this.loading = true;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    closePopup() {
      if (this.showPopup === true) {
        this.showPopup = false;
      }
    },
    checkScreenSize() {
      if (window.innerWidth <= 950) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    redirectToSearchPage() {
      if (this.mobile) {
        this.$router.push("/dashboard/search");
      }
    },
  },
};
</script>

<style scoped>
section {
  /* height: auto; */
  background: none;
}
.dashboard-wrapper {
  display: flex;
  max-width: 100%;
  width: 100%;
  height: 100%;
}

.section-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-right: 0px;
}
/* section.fixed {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
} */
.fixed {
  position: relative;
}

.mobile-bottom-nav {
  width: 100%;
}

.mobile-nav-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 5.5px;
  gap: 16px;

  position: fixed;
  width: 100%;
  height: 76px;
  left: 0px;
  bottom: 0px;
  z-index: 999;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-top: 1px solid var(--grey-grey5);
  /* Nav bar */

  box-shadow: 0px 0px 20px rgba(48, 50, 55, 0.2);
}
.mobile-nav-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 6px;

  width: 60px;
  height: 68px;
}
.mobile-nav-content svg {
  stroke: var(--grey-grey2);
}

.mobile-nav-content p {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Primary/P300 */

  color: var(--grey-grey3);
}

div.top-fixed {
  width: 100%;
}

.dashboard-nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 48px 24px;
  gap: 48px;

  width: 278px;
  height: 100vh;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-right: 1px solid var(--grey-grey5);
  z-index: 5;
}
.dashboard-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;

  max-width: 230px;
}
.dashboard-menu img {
  max-width: 144.8px;
  height: auto;
}
.menu {
  display: flex;
  flex-direction: column;
  max-width: 230px;
}
.nav-content {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.nav-content svg {
  stroke: var(--grey-grey2);
}
.nav-content p {
  font-weight: 500;
}
.popup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 278px;
  height: 168px;
  left: 0px;
  top: 255px;
  background: var(--white);

  filter: drop-shadow(0px 1px 12px rgba(0, 6, 125, 0.2));
  border-radius: 16px;
  z-index: 12;
}
.popup a {
  width: 100%;
}
.cursor {
  cursor: pointer;
}
.popup .desktop-nav {
  border-radius: 0px;
}
.logout {
  color: var(--negative-n300);
}
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.dashboard-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 8px 24px; */

  max-width: 230px;
}
.profile-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  max-width: 205px;
}
.profile-image {
  width: 40px;
  height: 40px;
}
.profile-image img {
  width: 40px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
}
.profile-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  max-width: 149px;
}
.profile-details .name {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
}
.profile-details .email {
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 200% */

  /* Grey/Grey3 */

  color: var(--grey-grey3);
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 149px; /* or any other value you want to set */
}
/* section.top-fixed {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 10;
  left: 279px;
} */
section.dashview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.dashboard-top-fixed {
  height: 136px;

  /* White */

  background: #ffffff;
  /* Grey/Grey5 */

  border-bottom: 1px solid var(--grey-grey5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.top-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(100vw - 278px - 83px);
  width: 100%;
  gap: 16px;
}
.username-welcome {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  margin-left: 20px;
  max-width: 198px;
}
.username-welcome .welcome {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
}
.username-welcome .welcome p {
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  /* Grey/Grey2 */

  color: var(--grey-grey2);
}

.username-welcome .username {
  font-weight: 500;
  font-size: 20px;
  line-height: 21px;
  /* identical to box height, or 105% */

  /* Grey/Grey1 */

  color: var(--grey-grey1);
  white-space: nowrap;
}
input {
  width: 100%;
}
.search-input {
  display: flex;
  position: relative;
  width: 100%;
  max-width: 522px;
}
.search-input svg {
  top: 22.5px;
  left: 16px;
  position: absolute;
}
.input-search {
  width: 100%;
  padding-left: 52px;
  /* max-width: 522px; */
}
.notify-cart {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
}
.notification,
.cart {
  position: relative;
}
.circle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 10px;

  width: 48px;
  height: 48px;

  /* Grey/Grey4 */

  border: 1px solid var(--grey-grey4);
  border-radius: 100px;
  transition: all 0.2s ease-in;
}
.circle:hover {
  background: var(--grey-grey6);
}
.badge {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 10px;

  position: absolute;
  width: 18px;
  height: 18px;
  left: 30px;
  top: 0px;
  aspect-ratio: 1 !important;

  /* Base-color/Negative */

  background: #ff3b2d;

  text-align: center;
  border-radius: 50%;
  transition: all 0.2s ease-in;
}
.badge svg:hover {
  fill: var(--grey-grey1);
  fill: red;
}
.badge p {
  font-weight: 500;
  font-size: 12px;
  /* line-height: 18px; */
  /* identical to box height, or 150% */

  /* baseColor/white */

  color: #ffffff;
}
.view-wrapper {
  display: flex;
  overflow-y: scroll;
  height: calc(100vh - 136px);
  max-width: calc(100vw - 278px);
  justify-content: center;
}
section.view {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(100vw - 278px);
}

::-webkit-scrollbar {
  /* display: none; */
  display: block !important;
  width: auto; /* Set width of the scrollbar */
}

@media (max-width: 950px) {
  .top-details,
  .view-wrapper,
  section.view {
    max-width: 100%;
  }
  .view-wrapper {
    overflow-y: visible;
  }
  .mobile-dashboard-top-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99999999;
  }
  .mobile-top-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 16px 16px;
    gap: 16px;

    width: 100%;
    height: 153px;

    /* White */

    background: #ffffff;
    /* Grey/Grey5 */

    border-bottom: 1px solid var(--grey-grey5);
  }
  .welcome-cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px;
    width: 100%;
    /* gap: 104px; */
  }
  .username-welcome {
    margin-left: 0px;
  }
  section.view {
    margin-top: 153px;
  }
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 8px;
    /* max-width: 90%;
    margin-inline: auto; */
    /* margin: 16px; */
  }
  .mobile-search {
    max-width: 100% !important;
  }
  /* .page-wrapper {
    background: var(--grey-grey6);
} */
}

@media (max-width: 335px) {
  .mobile-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80px; /* or any other value you want to set */
  }
}

.nuxt-link-exact-active .desktop-nav {
  background: var(--primary-p300);
}
.nuxt-link-exact-active .desktop-nav p {
  color: #fff;
}
.nuxt-link-exact-active .desktop-nav svg {
  stroke: #fff;
}
.nuxt-link-exact-active .desktop-nav .nav-content svg path {
  stroke: #fff !important;
}

.nuxt-link-exact-active .mobile-nav p {
  color: var(--primary-p300);
}
.nuxt-link-exact-active .mobile-nav svg {
  stroke: var(--primary-p300);
}
.nuxt-link-exact-active .mobile-nav .mobile-nav-content svg path {
  stroke: var(--primary-p300) !important;
}
</style>
