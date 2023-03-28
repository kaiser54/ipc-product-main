<template>
  <div>
    <div class="individual-form">
      <h2 class="h2-medium header-text">Create an individual account</h2>

      <div class="thirdAuth">
        <h3 class="h3-medium header-text">Sign up with</h3>
        <div class="auth-btn-group">
          <button class="btn secondary-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.8755 9.63867H15.4739C15.4904 9.79088 15.4999 9.95248 15.4999 10.1404C15.4999 11.7052 14.9671 13.0203 14.0614 13.9531L13.1526 13.059C13.7009 12.4671 13.9734 11.7819 14.0541 11.2822L14.1478 10.7024H13.5605H10.8755V9.63867Z"
                fill="#3B7DED"
                stroke="#0009B3"
              />
              <path
                d="M14.1877 5.57009L12.5278 7.14045C10.716 5.42036 7.6047 6.21373 6.62424 8.48282L4.92725 6.81318C6.00473 5.122 7.91575 4 10.0984 4C11.7408 4 13.123 4.59291 14.1877 5.57009Z"
                fill="#E43E2B"
              />
              <path
                d="M12.4298 13.049L14.0525 14.6456C13.0422 15.5041 11.6858 15.9999 10.0986 15.9999C7.9877 15.9999 6.13101 14.9505 5.03662 13.352L6.71951 11.6963C7.34182 12.9372 8.62446 13.7887 10.0986 13.7887C11.1334 13.7887 11.8907 13.4758 12.4298 13.049Z"
                fill="#2BA24C"
              />
              <path
                d="M6.71931 11.6962L5.03643 13.3519C4.38171 12.3954 4 11.2424 4 9.99981C4 8.8279 4.33957 7.73562 4.92724 6.81299L6.62426 8.48262C6.42939 8.9329 6.31878 9.44126 6.31878 9.99981C6.31878 10.6096 6.46321 11.1859 6.71931 11.6962Z"
                fill="#F0B501"
              />
            </svg>
            <p>Google</p>
          </button>
          <button class="btn secondary-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="6" fill="white" />
              <path
                d="M15.5 10C15.5 12.22 14.1844 14.1338 12.2894 15.0024V12.5426H13.1182H13.5281L13.6085 12.1407L13.9407 10.4797L14.0603 9.8816H13.4504H12.2894V9.71719C12.2894 9.46231 12.3529 9.36274 12.3923 9.32337C12.4317 9.28397 12.5314 9.22058 12.786 9.22058H13.4504H13.9504V8.72058V7.05957V6.55957H13.4504H13.4485H13.4465H13.4446H13.4426H13.4407H13.4387H13.4368H13.4348H13.4328H13.4309H13.4289H13.427H13.425H13.423H13.421H13.4191H13.4171H13.4151H13.4131H13.4111H13.4092H13.4072H13.4052H13.4032H13.4012H13.3992H13.3972H13.3952H13.3932H13.3912H13.3892H13.3872H13.3852H13.3832H13.3812H13.3792H13.3771H13.3751H13.3731H13.3711H13.3691H13.367H13.365H13.363H13.3609H13.3589H13.3569H13.3548H13.3528H13.3507H13.3487H13.3467H13.3446H13.3426H13.3405H13.3385H13.3364H13.3343H13.3323H13.3302H13.3282H13.3261H13.324H13.3219H13.3199H13.3178H13.3157H13.3136H13.3116H13.3095H13.3074H13.3053H13.3032H13.3011H13.299H13.2969H13.2948H13.2927H13.2906H13.2885H13.2864H13.2843H13.2822H13.2801H13.278H13.2759H13.2737H13.2716H13.2695H13.2674H13.2652H13.2631H13.261H13.2588H13.2567H13.2546H13.2524H13.2503H13.2481H13.246H13.2438H13.2417H13.2395H13.2374H13.2352H13.233H13.2309H13.2287H13.2265H13.2244H13.2222H13.22H13.2178H13.2157H13.2135H13.2113H13.2091H13.2069H13.2047H13.2025H13.2003H13.1981H13.1959H13.1937H13.1915H13.1893H13.1871H13.1849H13.1827H13.1805H13.1782H13.176H13.1738H13.1716H13.1693H13.1671H13.1649H13.1626H13.1604H13.1581H13.1559H13.1537H13.1514H13.1492H13.1469H13.1446H13.1424H13.1401H13.1379H13.1356H13.1333H13.1311H13.1288H13.1265H13.1242H13.122H13.1197H13.1174H13.1151H13.1128H13.1105H13.1082H13.1059H13.1036H13.1013H13.099H13.0967H13.0944H13.0921H13.0898H13.0874H13.0851H13.0828H13.0805H13.0781H13.0758H13.0735H13.0711H13.0688H13.0665H13.0641H13.0618H13.0594H13.0571H13.0547H13.0524H13.05H13.0476H13.0453H13.0429H13.0405H13.0382H13.0358H13.0334H13.031H13.0287H13.0263H13.0239H13.0215H13.0191H13.0167H13.0143H13.0119H13.0095H13.0071H13.0047H13.0023H12.9999H12.9974H12.995H12.9926H12.9902H12.9877H12.9853H12.9829H12.9804H12.978H12.9756H12.9731H12.9707H12.9682H12.9658H12.9633H12.9609H12.9584H12.9559H12.9535H12.951H12.9485H12.9461H12.9436H12.9411H12.9386H12.9361H12.9336H12.9311H12.9286H12.9262H12.9237H12.9211H12.9186H12.9161H12.9136H12.9111H12.9086H12.9061H12.9036H12.901H12.8985H12.896H12.8934H12.8909H12.8884H12.8858H12.8833H12.8807H12.8782H12.8756H12.8731H12.8705H12.8679H12.8654H12.8628H12.8602H12.8577H12.8551H12.8525H12.8499H12.8473H12.8447H12.8421H12.8395H12.8369H12.8343H12.8317H12.8291H12.8265H12.8239H12.8213H12.8187H12.8161H12.8134H12.8108H12.8082H12.8055H12.8029H12.8003H12.7976H12.795H12.7923H12.7897H12.787H12.7844H12.7817H12.779H12.7764H12.7737H12.771H12.7683H12.7657H12.763H12.7603H12.7576H12.7549H12.7522H12.7495H12.7468H12.7441H12.7414H12.7387H12.736H12.7333H12.7306H12.7278H12.7251H12.7224H12.7196H12.7169H12.7142H12.7114H12.7087H12.7059H12.7032H12.7004H12.6977H12.6949H12.6921H12.6894H12.6866H12.6838H12.6811H12.6783H12.6755H12.6727H12.6699H12.6671H12.6643H12.6615H12.6587H12.6559H12.6531H12.6503H12.6475H12.6447H12.6418H12.639H12.6362H12.6334H12.6305H12.6277H12.6248H12.622H12.6192H12.6163H12.6134H12.6106H12.6077H12.6049H12.602H12.5991H12.5962H12.5934H12.5905H12.5876H12.5847H12.5818H12.5789H12.576H12.5731H12.5702H12.5673H12.5644H12.5615H12.5586H12.5557H12.5527H12.5498H12.5469H12.5439H12.541H12.5381H12.5351H12.5322H12.5292H12.5263H12.5233H12.5203H12.5174H12.5144H12.5114H12.5084H12.5055H12.5025H12.4995H12.4965H12.4935H12.4905H12.4875H12.4845H12.4815H12.4785H12.4755H12.4725H12.4694H12.4664H12.4634H12.4604H12.4573H12.4543H12.4512H12.4482H12.4451H12.4421H12.439H12.436H12.4329H12.4298H12.4268H12.4237H12.4206H12.4175H12.4145H12.4114H12.4083H12.4052H12.4021H12.399H12.3959H12.3928H12.3896H12.3865H12.3834H12.3803H12.3772H12.374H12.3709H12.3677H12.3646H12.3615H12.3583H12.3552H12.352H12.3488H12.3457H12.3425H12.3393H12.3362H12.333H12.3298H12.3266H12.3234H12.3202H12.317H12.3138H12.3106H12.3074H12.3042H12.301H12.2978H12.2945H12.2913H12.2881H12.2848H12.2816H12.2784H12.2751H12.2719H12.2686H12.2653H12.2621H12.2588H12.2555H12.2523H12.249H12.2457H12.2424H12.2391H12.2359H12.2326H12.2293H12.226H12.2226H12.2193H12.216H12.2127H12.2094H12.2061H12.2027H12.1994H12.1961H12.1927H12.1894H12.186H12.1827H12.1793H12.1759H12.1726H12.1692H12.1658H12.1625H12.1591H12.1557H12.1523H12.1489H12.1455H12.1421H12.1387H12.1353H12.1319H12.1285H12.1251H12.1216C11.3698 6.55957 10.7294 6.85936 10.2848 7.38698C9.84728 7.90628 9.62839 8.61013 9.62839 9.38499V9.8816H8.79958H8.29958V10.3816V12.0426V12.5426H8.79958H9.62839V15.4876C6.76411 15.2965 4.5 12.9127 4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10Z"
                fill="#5471B8"
                stroke="#0009B3"
              />
            </svg>
            <p>Facebook</p>
          </button>
        </div>
      </div>
      <div class="myAuth-group">
        <h3 class="h3-medium header-text">Sign up with personal details</h3>
        <div class="myAuth">
          <form class="form-group">
            <div class="form-field">
              <div class="personal">
                <div class="input-field firstName-field">
                  <label for="FirstName">First name</label><br />
                  <input
                    class="input"
                    :class="{ 'input-error': invalidEmail }"
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    v-model="FirstName"
                    placeholder="Lanre"
                    required
                  />
                  <div v-show="invalidEmail" class="error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="15"
                      viewBox="0 96 960 960"
                      width="15"
                    >
                      <path
                        d="M479.789 768Q495 768 505.5 757.711q10.5-10.29 10.5-25.5Q516 717 505.711 706.5q-10.29-10.5-25.5-10.5Q465 696 454.5 706.289q-10.5 10.29-10.5 25.5Q444 747 454.289 757.5q10.29 10.5 25.5 10.5ZM444 624h72V384h-72v240Zm36.276 336Q401 960 331 930q-70-30-122.5-82.5T126 725.042q-30-69.959-30-149.5Q96 496 126 426.5t82.5-122Q261 252 330.958 222q69.959-30 149.5-30Q560 192 629.5 222t122 82.5Q804 357 834 426.724q30 69.725 30 149Q864 655 834 725q-30 70-82.5 122.5T629.276 930q-69.725 30-149 30ZM480 888q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"
                      />
                    </svg>
                    <p>Field cannot be empty</p>
                  </div>
                </div>
                <div class="input-field lastName-field">
                  <label for="LastName">Last name</label><br />
                  <input
                    class="input"
                    :class="{ 'input-error': invalidEmail }"
                    type="text"
                    id="LastName"
                    name="LastName"
                    v-model="lastName"
                    placeholder="Bello"
                    required
                  />
                  <div v-show="invalidEmail" class="error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="15"
                      viewBox="0 96 960 960"
                      width="15"
                    >
                      <path
                        d="M479.789 768Q495 768 505.5 757.711q10.5-10.29 10.5-25.5Q516 717 505.711 706.5q-10.29-10.5-25.5-10.5Q465 696 454.5 706.289q-10.5 10.29-10.5 25.5Q444 747 454.289 757.5q10.29 10.5 25.5 10.5ZM444 624h72V384h-72v240Zm36.276 336Q401 960 331 930q-70-30-122.5-82.5T126 725.042q-30-69.959-30-149.5Q96 496 126 426.5t82.5-122Q261 252 330.958 222q69.959-30 149.5-30Q560 192 629.5 222t122 82.5Q804 357 834 426.724q30 69.725 30 149Q864 655 834 725q-30 70-82.5 122.5T629.276 930q-69.725 30-149 30ZM480 888q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"
                      />
                    </svg>
                    <p>Field cannot be empty</p>
                  </div>
                </div>
              </div>
              <div class="input-field email-field">
                <label for="email">Email address</label><br />
                <input
                  class="input"
                  :class="{ 'input-error': invalidEmail }"
                  type="email"
                  id="email"
                  name="email"
                  v-model="email"
                  placeholder="johndoe@gmail.com"
                  required
                />
                <div v-show="invalidEmail" class="error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 96 960 960"
                    width="15"
                  >
                    <path
                      d="M479.789 768Q495 768 505.5 757.711q10.5-10.29 10.5-25.5Q516 717 505.711 706.5q-10.29-10.5-25.5-10.5Q465 696 454.5 706.289q-10.5 10.29-10.5 25.5Q444 747 454.289 757.5q10.29 10.5 25.5 10.5ZM444 624h72V384h-72v240Zm36.276 336Q401 960 331 930q-70-30-122.5-82.5T126 725.042q-30-69.959-30-149.5Q96 496 126 426.5t82.5-122Q261 252 330.958 222q69.959-30 149.5-30Q560 192 629.5 222t122 82.5Q804 357 834 426.724q30 69.725 30 149Q864 655 834 725q-30 70-82.5 122.5T629.276 930q-69.725 30-149 30ZM480 888q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"
                    />
                  </svg>
                  <p>Enter a valid Email address</p>
                </div>
              </div>
              <div class="input-field PhoneNumber-field">
                <label for="PhoneNumber">Phone number</label><br />
                <input
                  class="input no-arrow"
                  :class="{ 'input-error': invalidEmail }"
                  type="number"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  v-model="PhoneNumber"
                  placeholder="091234567809"
                  required
                />
                <div v-show="invalidEmail" class="error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 96 960 960"
                    width="15"
                  >
                    <path
                      d="M479.789 768Q495 768 505.5 757.711q10.5-10.29 10.5-25.5Q516 717 505.711 706.5q-10.29-10.5-25.5-10.5Q465 696 454.5 706.289q-10.5 10.29-10.5 25.5Q444 747 454.289 757.5q10.29 10.5 25.5 10.5ZM444 624h72V384h-72v240Zm36.276 336Q401 960 331 930q-70-30-122.5-82.5T126 725.042q-30-69.959-30-149.5Q96 496 126 426.5t82.5-122Q261 252 330.958 222q69.959-30 149.5-30Q560 192 629.5 222t122 82.5Q804 357 834 426.724q30 69.725 30 149Q864 655 834 725q-30 70-82.5 122.5T629.276 930q-69.725 30-149 30ZM480 888q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"
                    />
                  </svg>
                  <p>Enter a valid phone number</p>
                </div>
              </div>
              <div class="input-field password-field">
                <label for="CreatePassword">Create password</label>
                <div class="password">
                  <input
                    class="input"
                    :class="{ 'input-error': invalidPassword }"
                    :type="inputType"
                    id="CreatePassword"
                    v-model="password"
                    name="CreatePassword"
                    placeholder="Enter password (min. of 4 characters)"
                    required
                  />
                  <span @click="togglePassword">
                    <svg
                      v-if="showPassword"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 96 960 960"
                      width="20"
                    >
                      <path
                        d="M480 744q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.596 0-259.798-78.5T48 576q55-131 172.202-209.5T480 288q142.596 0 259.798 78.5T912 576q-55 131-172.202 209.5T480 864Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127 576q51 100 146 158t207 58Z"
                      />
                    </svg>
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 96 960 960"
                      width="20"
                    >
                      <path
                        d="m637 631-62-62q4-38-23-65.5T487 480l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833 576q-49-101-144.5-158.5T480 360q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912 576q-22 57-58.5 103.5T770 764Zm-2 202L638 836q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48 576q22-57 58-104t84-85L90 287l51-51 678 679-51 51ZM241 439q-35 28-65 61.5T127 576q49 101 144.5 158.5T480 792q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z"
                      />
                    </svg>
                  </span>
                </div>
                <div v-show="invalidPassword" class="error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="15"
                    viewBox="0 96 960 960"
                    width="15"
                  >
                    <path
                      d="M479.789 768Q495 768 505.5 757.711q10.5-10.29 10.5-25.5Q516 717 505.711 706.5q-10.29-10.5-25.5-10.5Q465 696 454.5 706.289q-10.5 10.29-10.5 25.5Q444 747 454.289 757.5q10.29 10.5 25.5 10.5ZM444 624h72V384h-72v240Zm36.276 336Q401 960 331 930q-70-30-122.5-82.5T126 725.042q-30-69.959-30-149.5Q96 496 126 426.5t82.5-122Q261 252 330.958 222q69.959-30 149.5-30Q560 192 629.5 222t122 82.5Q804 357 834 426.724q30 69.725 30 149Q864 655 834 725q-30 70-82.5 122.5T629.276 930q-69.725 30-149 30ZM480 888q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z"
                    />
                  </svg>
                  <p>{{ passwordErrorMessage }}</p>
                </div>
              </div>
            </div>
            <div class="tandc">
              <p>
                By clicking on create account, you agree to the Independent Purchasing
                Company’s <router-link to="#">Terms & Conditions</router-link>
              </p>
            </div>
            <div class="submit-reset">
              <button @click.prevent="submitForm" class="btn primary-btn">
                Create account
              </button>
              <div class="pass-link">
                <p>
                  Have an account already?
                  <nuxt-link :to="{ name: 'login' }">Log in</nuxt-link>
                  <!-- <nuxt-link to="/login">Log in</nuxt-link> -->
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FirstName: "",
      lastName: "",
      email: "",
      PhoneNumber: "",
      password: "",
      inputType: "password",
      invalidEmail: false,
      invalidPassword: false,
      passwordErrorMessage: "",
      showPassword: true,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      if (this.showPassword === false) {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
    submitForm() {
      if (!this.isEmailValid) {
        this.invalidEmail = true;
        if (this.password.length < 4) {
          (this.invalidPassword = true),
            (this.passwordErrorMessage = "please enter a password");
        }
      } else if (!this.invalidEmail && !this.invalidPassword) {
        // Submit form or perform other actions
        console.log("valid");
      }
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
}
</style>

<style scoped>
.individual-form {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
  margin-bottom: 60px;
}
.thirdAuth {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
}
.auth-btn-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px px;
  gap: 16px;
}
.myAuth-group {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 24px;
}
.form-group {
  gap: 24px;
}
.personal {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
}

.password {
  position: relative;
}
.password span svg {
  position: absolute;
  right: 16px;
  top: 14px;
  fill: var(--grey-grey3);
}
.submit-reset {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
}
/* For webkit-based browsers */
input.no-arrow::-webkit-outer-spin-button,
input.no-arrow::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Firefox */
input.no-arrow::-moz-number-spin-box {
  -moz-appearance: none;
  margin: 0;
}
</style>
