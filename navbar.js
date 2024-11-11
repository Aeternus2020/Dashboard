// Variable to store the element with the user's name in the header
const userNameContainer = document.querySelector('.header__user-name');
const hand = '<svg width="24px" height="24px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M44.8965 37.3225C45.7322 38.2432 46.4789 39.4482 46.1607 39.7665C45.8425 40.0847 44.8668 39.5076 44.1201 38.7609C43.3735 38.0141 41.5917 45.9484 41.4178 46.3514C41.2905 46.6527 39.2117 49.0287 38.1257 51.2944C37.7651 52.0497 37.816 54.3239 37.6803 54.4596C37.133 55.007 36.4457 54.9476 34.9482 53.6238C33.4549 52.3 32.6785 60.1706 34.4603 61.4138C37.5063 63.5395 43.6026 71.9956 51.6503 71.9956C60.9622 71.9956 69.5869 62.2793 69.5869 55.147C69.5869 48.0189 67.4954 45.3119 67.6312 39.3337C67.7457 34.2719 71.4239 31.8577 71.4239 29.3289C71.4239 27.2032 68.2633 26.6855 67.2282 26.6855C65.387 26.6855 60.6738 29.0446 60.6738 35.252C60.6738 37.6662 59.9823 39.8513 57.5132 39.8513C55.0442 39.8513 52.2824 36.457 50.6152 33.8136" fill="url(#paint0_linear)"/> <path d="M71.4324 29.3289C71.4324 28.1706 70.4991 27.4917 69.4767 27.1099C70.6985 31.1661 64.4919 31.3443 64.4919 45.172C64.4919 58.9996 56.4442 63.0219 53.1097 63.7135C49.7752 64.4051 43.8995 64.6045 39.4281 59.1142C38.0536 57.4297 36.1912 55.5968 34.1252 53.8657C33.2512 55.3295 33.0646 60.4337 34.4688 61.4138C37.5148 63.5395 43.6111 71.9957 51.6588 71.9957C60.9708 71.9957 69.5955 62.2794 69.5955 55.147C69.5955 48.0189 67.504 45.312 67.6397 39.3337C67.75 34.2761 71.4324 31.8619 71.4324 29.3289Z" fill="url(#paint1_linear)"/> <path d="M34.9525 53.6237C33.4592 52.2999 29.9212 48.5364 27.6218 46.695C25.3225 44.8536 23.3116 44.879 21.9286 46.9072C20.5499 48.9353 24.5716 52.5036 25.4922 53.4243C26.9006 54.833 32.6787 60.1706 34.4604 61.418" fill="url(#paint2_linear)"/> <path d="M41.4177 46.3517C41.2438 46.7548 40.0729 47.0306 37.7396 44.4933C35.9578 42.5543 31.1852 36.9791 28.3683 34.4461C25.5514 31.9173 23.3666 30.8821 21.5254 32.2016C19.6842 33.5254 20.7321 36.279 22.7896 38.5829C25.335 41.4299 28.2622 44.3321 31.0664 47.1197C33.2597 49.3005 38.2232 53.9041 37.676 54.4514" fill="url(#paint3_linear)"/> <path d="M50.6195 33.8137C48.9522 31.1704 42.1093 22.6591 40.442 20.2449C38.7748 17.8307 36.5306 17.8307 34.9821 18.9211C33.4294 20.0115 32.9712 22.1966 36.4627 26.8426C38.6645 29.7702 40.5014 32.4687 44.9007 37.3226L50.017 36.9662L50.6195 33.8137Z" fill="url(#paint4_linear)"/> <path d="M44.1202 38.761C43.3736 38.0143 36.764 30.1776 35.2664 28.4974C32.4623 25.3491 28.9114 18.6071 24.6733 21.6111C22.4461 23.1895 23.6509 25.4764 24.2872 26.3971C24.9193 27.3178 33.141 36.805 33.9471 37.6112C34.7531 38.4173 41.5918 45.9485 41.4221 46.3516" fill="url(#paint5_linear)"/> <path d="M31.0709 47.1282C33.1411 49.186 37.6762 53.3992 37.7228 54.3284C38.3762 53.3059 37.1798 50.2765 35.9156 49.2115C28.6146 43.0593 21.5553 33.1436 20.6602 33.4406C20.2741 34.8832 21.2499 36.8646 22.7941 38.5915C25.3352 41.4342 28.2667 44.3406 31.0709 47.1282Z" fill="url(#paint6_linear)"/> <path d="M44.8965 37.3225C45.6983 38.205 46.4153 39.3548 46.1904 39.724C48.8588 37.577 43.2165 31.2763 40.0221 27.4916C37.5488 24.564 36.8785 20.8387 35.1052 18.8403C35.0628 18.8658 35.0204 18.8955 34.978 18.9252C33.4253 20.0156 32.9671 22.2007 36.4585 26.8467C38.6645 29.7743 40.4972 32.4686 44.8965 37.3225Z" fill="url(#paint7_linear)"/> <path d="M33.9471 37.6112C34.7532 38.4173 41.5918 45.9485 41.4221 46.3516C43.5348 43.5046 35.3429 35.1376 31.3763 30.9116C27.9357 27.2457 27.346 24.0381 23.9903 22.2349C22.7431 23.7411 23.7358 25.591 24.2873 26.3972C24.9194 27.3179 33.1411 36.805 33.9471 37.6112Z" fill="url(#paint8_linear)"/> <path d="M41.2653 46.5173C41.0234 46.6658 40.5312 46.6785 39.7717 46.2373C40.336 46.6997 40.8622 46.8737 41.2653 46.5173Z" fill="url(#paint9_linear)"/> <path d="M26.5017 61.6179C26.4508 61.6179 26.3999 61.6094 26.349 61.5967C21.1012 59.9971 15.4165 54.2606 14.1819 49.3219C14.1141 49.0461 14.2795 48.7618 14.5595 48.6939C14.8353 48.626 15.1195 48.7915 15.1874 49.0715C16.3243 53.6242 21.7885 59.1231 26.6502 60.6081C26.9217 60.6929 27.0787 60.9815 26.9939 61.253C26.926 61.4737 26.7223 61.6179 26.5017 61.6179Z" fill="#000000"/> <path d="M29.0005 68.1304C28.9623 68.1304 28.9242 68.1261 28.8817 68.1177C24.5376 67.1078 19.4934 63.862 15.039 59.216C10.873 54.8713 8.17485 50.2507 8.00092 47.1576C7.98395 46.8733 8.20455 46.6273 8.48879 46.6103C8.77302 46.5933 9.01908 46.814 9.03604 47.0982C9.19301 49.9113 11.8445 54.3876 15.7856 58.499C20.1043 63.0049 24.966 66.1405 29.1193 67.1078C29.3993 67.1715 29.569 67.4515 29.5053 67.7273C29.4502 67.9692 29.2381 68.1304 29.0005 68.1304Z" fill="#000000"/> <path d="M51.2516 22.8334C51.0225 22.8334 50.8147 22.6806 50.751 22.4473C50.0213 19.6851 46.7165 15.718 43.7045 14.9373C43.4287 14.8652 43.2633 14.5851 43.3311 14.3051C43.4032 14.0293 43.6833 13.8638 43.9633 13.9317C47.3571 14.81 50.9334 19.0869 51.7522 22.18C51.8243 22.4558 51.6589 22.74 51.3831 22.8122C51.3407 22.8291 51.294 22.8334 51.2516 22.8334Z" fill="#000000"/> <path d="M57.7764 23.7538C57.5473 23.7538 57.3352 23.5968 57.2758 23.3635C55.3328 15.7262 48.0826 9.76918 43.9463 9.02667C43.6663 8.97576 43.4797 8.70844 43.5306 8.42417C43.5815 8.14413 43.8488 7.95745 44.133 8.00837C48.6469 8.81877 56.2109 14.9583 58.2854 23.1089C58.3576 23.3847 58.1879 23.669 57.9121 23.7369C57.8612 23.7496 57.8188 23.7538 57.7764 23.7538Z" fill="#000000"/> <path d="M67.7246 27.5472C69.4809 27.2332 69.7906 27.4326 69.4766 27.1102C68.6197 26.7919 67.7076 26.6816 67.2367 26.6816C65.3955 26.6816 60.6823 29.0407 60.6823 35.2481C60.6823 37.6623 59.9908 39.8474 57.5217 39.8474C56.546 39.8474 55.5278 39.3171 54.5479 38.5194C58.8878 43.3266 62.2944 38.7994 62.8119 35.6936C63.3295 32.5878 62.5744 28.4764 67.7246 27.5472Z" fill="url(#paint10_radial)"/> <path d="M34.4476 19.3921C33.3743 20.6056 33.4082 22.7864 36.4584 26.8426C38.6602 29.7703 40.4972 32.4687 44.8965 37.3226C45.7322 38.2434 46.4789 39.4483 46.1607 39.7666C46.8946 34.7345 39.7378 29.7915 37.4087 25.9941C35.5676 22.9901 35.1985 21.2165 34.4476 19.3921Z" fill="url(#paint11_linear)"/> <path d="M33.9471 37.6115C34.7531 38.4176 41.5918 45.9488 41.4221 46.3519C42.9324 45.2742 41.9015 43.5982 39.5682 41.2646C34.7871 36.4829 28.1308 30.0548 25.4539 24.7639C25.1994 24.2632 24.7327 23.8941 24.1769 23.822C22.7345 23.6353 23.8036 25.6973 24.2872 26.4017C24.9194 27.3181 33.141 36.8053 33.9471 37.6115Z" fill="url(#paint12_linear)"/> <path d="M22.794 38.5869C25.3394 41.4339 28.2666 44.3361 31.0708 47.1237C33.2641 49.3045 38.2276 53.9081 37.6804 54.4554C40.7561 51.8673 26.4679 42.5031 20.6559 33.436C20.2741 34.8786 21.2498 36.8601 22.794 38.5869Z" fill="url(#paint13_linear)"/> <path d="M37.0523 54.9778C37.345 54.8632 37.4978 54.7274 37.5444 54.5789C37.0184 54.9863 36.3226 54.8378 34.9523 53.6243C33.459 52.3005 29.9209 48.537 27.6215 46.6956C26.6118 45.8852 25.6573 45.4397 24.7876 45.3633C26.0349 46.1397 25.4579 46.424 28.2282 48.5497C29.7088 49.6868 35.1517 55.7245 37.0523 54.9778Z" fill="url(#paint14_linear)"/> <path d="M33.4295 41.1752C35.4488 43.6319 39.3857 47.6924 41.1548 46.568C40.6669 46.7335 39.5554 46.4662 37.7397 44.489C35.9579 42.55 31.1853 36.9748 28.3684 34.4417C26.086 32.3924 24.2193 31.3232 22.6157 31.6966C27.2908 33.241 31.5162 38.8501 33.4295 41.1752Z" fill="url(#paint15_linear)"/> <path d="M35.6143 30.5931C38.8385 34.0978 43.6154 41.0476 46.042 39.8342C45.6433 39.9572 44.7905 39.4268 44.1245 38.7607C43.3778 38.014 36.7683 30.1773 35.2707 28.4971C33.3277 26.3163 31.0284 22.4128 28.3896 21.2163C31.0496 23.3123 33.0011 27.7546 35.6143 30.5931Z" fill="url(#paint16_linear)"/> <path d="M54.5435 38.5236C53.0375 37.2932 51.6291 35.4178 50.6194 33.814C48.9521 31.1707 42.1093 22.6594 40.442 20.2452C39.933 19.5111 39.3729 18.9978 38.7917 18.6753C39.5681 19.7912 40.0051 21.3823 41.7614 23.351C44.5783 26.512 48.2564 32.2059 49.5248 34.1619C50.7891 36.1137 52.8296 40.2378 54.5435 38.5236Z" fill="url(#paint17_linear)"/> <path d="M63.7665 66.586C62.7187 64.0402 61.1914 62.4916 58.9812 63.9469C52.9528 67.914 46.0166 66.5775 37.324 59.547C29.569 53.2759 25.56 48.7912 21.7885 47.1704C20.8849 49.2325 24.6139 52.5419 25.4963 53.4245C26.9048 54.8331 32.6829 60.1707 34.4647 61.4181C37.5107 63.5438 43.6069 71.9999 51.6546 71.9999C56.1473 71.9957 60.483 69.73 63.7665 66.586Z" fill="url(#paint18_linear)"/> <path d="M67.6355 39.3336C67.75 34.2718 71.4281 31.8576 71.4281 29.3288C71.4281 28.5821 71.042 28.039 70.4905 27.6401C71.1651 29.6088 69.5615 31.3569 67.173 34.3312C64.5852 37.5516 64.0125 42.554 65.7943 47.5564C67.576 52.5588 65.3361 59.4578 61.7131 61.6429C58.0902 63.828 53.2794 73.4297 39.5002 62.5805C39.496 62.5763 39.496 62.5763 39.4917 62.5721C38.6517 61.7914 37.8203 61.0998 36.976 60.5779C31.1555 56.9714 27.8423 53.7298 25.335 51.0059C24.8429 50.4713 23.5193 48.4134 21.9412 49.0923C22.7302 50.8786 24.8556 52.7837 25.492 53.4243C26.9004 54.833 32.6785 60.1706 34.4603 61.418C34.6937 61.5792 34.9439 61.7786 35.2112 62.0077C35.2791 62.0671 35.3512 62.1266 35.4233 62.1902C35.4403 62.2072 35.4615 62.2241 35.4785 62.2411C35.5252 62.2835 35.5676 62.3217 35.6142 62.3642C35.6227 62.3726 35.6354 62.3811 35.6439 62.3938C37.4512 64.0359 39.9414 66.7556 42.9917 68.8813C42.9917 68.8813 42.9959 68.8813 42.9959 68.8855C43.2632 69.0722 43.5347 69.2546 43.8104 69.4328C43.8147 69.4371 43.8189 69.4371 43.8232 69.4413C44.0989 69.6153 44.3747 69.785 44.6589 69.9462C44.6632 69.9462 44.6631 69.9505 44.6674 69.9505C46.7801 71.164 49.1176 71.9998 51.646 71.9998C60.958 71.9998 69.5827 62.2835 69.5827 55.1512C69.5911 48.0189 67.4997 45.3119 67.6355 39.3336Z" fill="url(#paint19_linear)"/> <defs> <linearGradient id="paint0_linear" x1="65.0642" y1="73.8382" x2="57.3873" y2="55.8548" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> <linearGradient id="paint1_linear" x1="71.5866" y1="76.6479" x2="57.6706" y2="53.1894" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> <linearGradient id="paint2_linear" x1="23.5636" y1="48.5439" x2="33.0508" y2="55.5289" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> <linearGradient id="paint3_linear" x1="20.1094" y1="30.053" x2="36.7558" y2="47.4734" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> <linearGradient id="paint4_linear" x1="38.0868" y1="21.833" x2="47.7473" y2="37.0119" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> <linearGradient id="paint5_linear" x1="28.1165" y1="24.3547" x2="41.2271" y2="42.0632" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> <linearGradient id="paint6_linear" x1="32.8867" y1="40.3991" x2="27.3841" y2="45.5821" gradientUnits="userSpaceOnUse"> <stop stop-color="#F0C492" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint7_linear" x1="43.7062" y1="26.4916" x2="35.4263" y2="33.9655" gradientUnits="userSpaceOnUse"> <stop stop-color="#F0C492" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint8_linear" x1="36.091" y1="31.8173" x2="24.7064" y2="40.139" gradientUnits="userSpaceOnUse"> <stop stop-color="#F0C492" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint9_linear" x1="44.5716" y1="43.419" x2="33.1874" y2="51.7427" gradientUnits="userSpaceOnUse"> <stop stop-color="#F0C492" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <radialGradient id="paint10_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.5159 29.9035) scale(13.6657 13.6676)"> <stop stop-color="#DEBA94" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </radialGradient> <linearGradient id="paint11_linear" x1="45.2212" y1="25.0238" x2="38.1487" y2="31.5779" gradientUnits="userSpaceOnUse"> <stop offset="0.3072" stop-color="#D2A374" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint12_linear" x1="39.8062" y1="28.5769" x2="30.4913" y2="36.9707" gradientUnits="userSpaceOnUse"> <stop offset="0.3072" stop-color="#D2A374" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint13_linear" x1="36.6586" y1="37.6567" x2="25.1588" y2="47.3152" gradientUnits="userSpaceOnUse"> <stop offset="0.3072" stop-color="#D2A374" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint14_linear" x1="24.1117" y1="44.6746" x2="37.4802" y2="55.5405" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#DEBA94" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint15_linear" x1="26.6703" y1="31.2037" x2="37.1072" y2="47.0725" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#D2A374" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint16_linear" x1="34.8441" y1="32.3371" x2="37.7765" y2="30.095" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#F0C492" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint17_linear" x1="46.9502" y1="27.0993" x2="41.5445" y2="55.9641" gradientUnits="userSpaceOnUse"> <stop offset="0.3118" stop-color="#DEBA94" stop-opacity="0"/> <stop offset="1" stop-color="#D2A374"/> </linearGradient> <linearGradient id="paint18_linear" x1="44.2494" y1="54.3063" x2="36.0838" y2="68.5654" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> <linearGradient id="paint19_linear" x1="70.6811" y1="86.7385" x2="36.5232" y2="18.7768" gradientUnits="userSpaceOnUse"> <stop offset="0.00132565" stop-color="#D2A374"/> <stop offset="1" stop-color="#DEBA94"/> </linearGradient> </defs> </g></svg>'
userNameContainer.innerHTML = `Hello <span class="header__user-name-text" title="Change name">Evano</span> ${hand},`; // Default value with tooltip

const userName = document.querySelector('.header__user-name-text');

let user = 'Evano'; // Default value

function formHeaderEdit() {
    // Create a container for the modal window
    const container = document.createElement("div");
    container.classList.add("header__modal-wrapper");

    // HTML markup for the modal window with BEM style classes
    container.innerHTML = `
        <div class="header__modal">
            <div class="header__modal-content">
                <button class="header__modal-close" aria-label="Close">
                    &times;
                </button>
                <h2 class="header__modal-title">Enter your name</h2>
                <input type="text" class="header__modal-input" placeholder="Your name">
                <button class="header__modal-save">Save</button>
            </div>
        </div>
    `;

    document.body.appendChild(container);

    // Function to update the user's name
    function updateUserName() {
        userName.textContent = user || 'Evan';
    }

    // Function to handle saving the name
    function saveName() {
        const input = container.querySelector('.header__modal-input').value.trim();
        user = input.length > 0 ? input : 'Evan'; // Use 'Evan' if input is empty
        updateUserName();
        document.body.removeChild(container);
    }

    // Close the modal when clicking outside of the modal content
    container.addEventListener('click', (event) => {
        if (event.target === container) {
            updateUserName();
            document.body.removeChild(container);
        }
    });

    // Closing the modal window with the close button
    container.querySelector('.header__modal-close').addEventListener('click', () => {
        updateUserName(); // Update name before closing
        document.body.removeChild(container);
    });

    // Saving the name when clicking the "Save" button
    container.querySelector('.header__modal-save').addEventListener('click', saveName);

    // Listen for Enter key press in the input field to save the name
    const inputField = container.querySelector('.header__modal-input');
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            saveName();
        }
    });

    return container;
}

// Open modal window on page load
window.addEventListener('load', formHeaderEdit);

// Add click event to userName span to reopen the modal window
userName.addEventListener('click', formHeaderEdit);


// menuItems
const menuItems = [
    { image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="#9197B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.45 16.28L9.59998 15.42" stroke="#9197B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.3945 10.7H13.4035" stroke="#9197B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', name: 'Dashboard' },
    { image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#9197B3"/><path d="M12.0006 13.0797C11.8706 13.0797 11.7406 13.0497 11.6206 12.9797L6.32061 9.9197C5.96061 9.7097 5.84059 9.2497 6.05059 8.8997C6.26059 8.5397 6.72061 8.4197 7.07061 8.6297L11.9906 11.4797L16.8806 8.6497C17.2406 8.4397 17.7006 8.5697 17.9006 8.9197C18.1006 9.2697 17.9806 9.7397 17.6306 9.9397L12.3706 12.9797C12.2606 13.0397 12.1306 13.0797 12.0006 13.0797Z" fill="#9197B3"/><path d="M12 18.5201C11.59 18.5201 11.25 18.1801 11.25 17.7701V12.3301C11.25 11.9201 11.59 11.5801 12 11.5801C12.41 11.5801 12.75 11.9201 12.75 12.3301V17.7701C12.75 18.1801 12.41 18.5201 12 18.5201Z" fill="#9197B3"/><path d="M12.0002 18.7498C11.4202 18.7498 10.8503 18.6198 10.3903 18.3698L7.19025 16.5898C6.23025 16.0598 5.49023 14.7898 5.49023 13.6898V10.2998C5.49023 9.20981 6.24025 7.9398 7.19025 7.3998L10.3903 5.6198C11.3103 5.1098 12.6902 5.1098 13.6102 5.6198L16.8102 7.3998C17.7702 7.9298 18.5103 9.19981 18.5103 10.2998V13.6898C18.5103 14.7798 17.7602 16.0498 16.8102 16.5898L13.6102 18.3698C13.1502 18.6298 12.5802 18.7498 12.0002 18.7498ZM12.0002 6.7498C11.6702 6.7498 11.3502 6.8098 11.1202 6.9398L7.92026 8.7198C7.43026 8.9898 6.99023 9.7498 6.99023 10.2998V13.6898C6.99023 14.2498 7.43026 14.9998 7.92026 15.2698L11.1202 17.0498C11.5802 17.3098 12.4202 17.3098 12.8802 17.0498L16.0802 15.2698C16.5702 14.9998 17.0103 14.2398 17.0103 13.6898V10.2998C17.0103 9.73981 16.5702 8.9898 16.0802 8.7198L12.8802 6.9398C12.6502 6.8098 12.3302 6.7498 12.0002 6.7498Z" fill="#9197B3"/></svg>', name: 'Product' },
    { image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0006 22.7498H9.00063C7.68063 22.7498 6.58063 22.6198 5.65063 22.3398C5.31063 22.2398 5.09063 21.9098 5.11063 21.5598C5.36063 18.5698 8.39063 16.2197 12.0006 16.2197C15.6106 16.2197 18.6306 18.5598 18.8906 21.5598C18.9206 21.9198 18.7006 22.2398 18.3506 22.3398C17.4206 22.6198 16.3206 22.7498 15.0006 22.7498ZM6.72063 21.0598C7.38063 21.1898 8.13063 21.2498 9.00063 21.2498H15.0006C15.8706 21.2498 16.6206 21.1898 17.2806 21.0598C16.7506 19.1398 14.5606 17.7197 12.0006 17.7197C9.44063 17.7197 7.25063 19.1398 6.72063 21.0598Z" fill="#9197B3"/><path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.9999 14.92C9.60992 14.92 7.66992 12.97 7.66992 10.58C7.66992 8.19002 9.60992 6.25 11.9999 6.25C14.3899 6.25 16.3299 8.19002 16.3299 10.58C16.3299 12.97 14.3899 14.92 11.9999 14.92ZM11.9999 7.75C10.4399 7.75 9.16992 9.02002 9.16992 10.58C9.16992 12.15 10.4399 13.42 11.9999 13.42C13.5599 13.42 14.8299 12.15 14.8299 10.58C14.8299 9.02002 13.5599 7.75 11.9999 7.75Z" fill="#9197B3"/></svg>', name: 'Customers' },
    { image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7516 16.8604V18.8904C10.7516 20.6104 9.15158 22.0004 7.18158 22.0004C5.21158 22.0004 3.60156 20.6104 3.60156 18.8904V16.8604C3.60156 18.5804 5.20158 19.8004 7.18158 19.8004C9.15158 19.8004 10.7516 18.5704 10.7516 16.8604Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7501 14.11C10.7501 14.61 10.6101 15.07 10.3701 15.47C9.78006 16.44 8.57004 17.05 7.17004 17.05C5.77004 17.05 4.56003 16.43 3.97003 15.47C3.73003 15.07 3.59009 14.61 3.59009 14.11C3.59009 13.25 3.99007 12.48 4.63007 11.92C5.28007 11.35 6.17003 11.01 7.16003 11.01C8.15003 11.01 9.04006 11.36 9.69006 11.92C10.3501 12.47 10.7501 13.25 10.7501 14.11Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7516 14.11V16.86C10.7516 18.58 9.15158 19.8 7.18158 19.8C5.21158 19.8 3.60156 18.57 3.60156 16.86V14.11C3.60156 12.39 5.20158 11 7.18158 11C8.17158 11 9.06161 11.35 9.71161 11.91C10.3516 12.47 10.7516 13.25 10.7516 14.11Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 10.9699V13.03C22 13.58 21.56 14.0299 21 14.0499H19.0399C17.9599 14.0499 16.97 13.2599 16.88 12.1799C16.82 11.5499 17.0599 10.9599 17.4799 10.5499C17.8499 10.1699 18.36 9.94995 18.92 9.94995H21C21.56 9.96995 22 10.4199 22 10.9699Z" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5" stroke="#9197B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', name: 'Income' },
    { image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.7503C11.37 22.7503 10.78 22.5104 10.34 22.0604L8.82001 20.5404C8.70001 20.4204 8.38 20.2904 8.22 20.2904H6.06C4.76 20.2904 3.70999 19.2403 3.70999 17.9403V15.7804C3.70999 15.6204 3.57999 15.3004 3.45999 15.1804L1.94 13.6604C1.5 13.2204 1.25 12.6303 1.25 12.0003C1.25 11.3703 1.49 10.7803 1.94 10.3403L3.45999 8.82028C3.57999 8.70028 3.70999 8.3803 3.70999 8.2203V6.06039C3.70999 4.76039 4.76 3.71029 6.06 3.71029H8.22C8.38 3.71029 8.70001 3.58029 8.82001 3.46029L10.34 1.94027C11.22 1.06027 12.78 1.06027 13.66 1.94027L15.18 3.46029C15.3 3.58029 15.62 3.71029 15.78 3.71029H17.94C19.24 3.71029 20.29 4.76039 20.29 6.06039V8.2203C20.29 8.3803 20.42 8.70028 20.54 8.82028L22.06 10.3403C22.5 10.7803 22.75 11.3703 22.75 12.0003C22.75 12.6303 22.51 13.2204 22.06 13.6604L20.54 15.1804C20.42 15.3004 20.29 15.6204 20.29 15.7804V17.9403C20.29 19.2403 19.24 20.2904 17.94 20.2904H15.78C15.62 20.2904 15.3 20.4204 15.18 20.5404L13.66 22.0604C13.22 22.5104 12.63 22.7503 12 22.7503ZM4.51999 14.1203C4.91999 14.5203 5.20999 15.2204 5.20999 15.7804V17.9403C5.20999 18.4103 5.59 18.7904 6.06 18.7904H8.22C8.78 18.7904 9.48001 19.0803 9.88 19.4803L11.4 21.0003C11.72 21.3203 12.28 21.3203 12.6 21.0003L14.12 19.4803C14.52 19.0803 15.22 18.7904 15.78 18.7904H17.94C18.41 18.7904 18.79 18.4103 18.79 17.9403V15.7804C18.79 15.2204 19.08 14.5203 19.48 14.1203L21 12.6003C21.16 12.4403 21.25 12.2303 21.25 12.0003C21.25 11.7703 21.16 11.5604 21 11.4004L19.48 9.88034C19.08 9.48034 18.79 8.7803 18.79 8.2203V6.06039C18.79 5.59039 18.41 5.21029 17.94 5.21029H15.78C15.22 5.21029 14.52 4.92035 14.12 4.52035L12.6 3.00033C12.28 2.68033 11.72 2.68033 11.4 3.00033L9.88 4.52035C9.48001 4.92035 8.78 5.21029 8.22 5.21029H6.06C5.59 5.21029 5.20999 5.59039 5.20999 6.06039V8.2203C5.20999 8.7803 4.91999 9.48034 4.51999 9.88034L3 11.4004C2.84 11.5604 2.75 11.7703 2.75 12.0003C2.75 12.2303 2.84 12.4403 3 12.6003L4.51999 14.1203Z" fill="#9197B3"/><path d="M15.0002 16C14.4402 16 13.9902 15.55 13.9902 15C13.9902 14.45 14.4402 14 14.9902 14C15.5402 14 15.9902 14.45 15.9902 15C15.9902 15.55 15.5502 16 15.0002 16Z" fill="#9197B3"/><path d="M9.01001 10C8.45001 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.56001 10 9.01001 10Z" fill="#9197B3"/><path d="M8.99945 15.7495C8.80945 15.7495 8.61945 15.6795 8.46945 15.5295C8.17945 15.2395 8.17945 14.7595 8.46945 14.4695L14.4695 8.46945C14.7595 8.17945 15.2395 8.17945 15.5295 8.46945C15.8195 8.75945 15.8195 9.23951 15.5295 9.52951L9.52945 15.5295C9.37945 15.6795 9.18945 15.7495 8.99945 15.7495Z" fill="#9197B3"/></svg>', name: 'Promote' },
    { image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 22.3199C7.72 22.3199 7.42998 22.2499 7.16998 22.1099C6.59998 21.8099 6.25 21.2099 6.25 20.5699V19.15C3.23 18.84 1.25 16.6199 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.8799 20.44 19.1899 17 19.1899H13.23L8.96997 22.03C8.67997 22.22 8.34 22.3199 8 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.43C2.75 16.01 4.42 17.68 7 17.68C7.41 17.68 7.75 18.02 7.75 18.43V20.56C7.75 20.69 7.83 20.75 7.88 20.78C7.93001 20.81 8.03001 20.84 8.14001 20.77L12.59 17.81C12.71 17.73 12.86 17.68 13.01 17.68H17.01C19.59 17.68 21.26 16.01 21.26 13.43V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7Z" fill="#9197B3"/><path d="M11.9998 12.1099C11.5898 12.1099 11.2498 11.7699 11.2498 11.3599V11.1499C11.2498 9.9899 12.0998 9.41989 12.4198 9.19989C12.7898 8.94989 12.9098 8.7799 12.9098 8.5199C12.9098 8.0199 12.4998 7.60986 11.9998 7.60986C11.4998 7.60986 11.0898 8.0199 11.0898 8.5199C11.0898 8.9299 10.7498 9.2699 10.3398 9.2699C9.92984 9.2699 9.58984 8.9299 9.58984 8.5199C9.58984 7.1899 10.6698 6.10986 11.9998 6.10986C13.3298 6.10986 14.4098 7.1899 14.4098 8.5199C14.4098 9.6599 13.5698 10.2299 13.2598 10.4399C12.8698 10.6999 12.7498 10.8699 12.7498 11.1499V11.3599C12.7498 11.7799 12.4098 12.1099 11.9998 12.1099Z" fill="#9197B3"/><path d="M12 14.6001C11.58 14.6001 11.25 14.2601 11.25 13.8501C11.25 13.4401 11.59 13.1001 12 13.1001C12.41 13.1001 12.75 13.4401 12.75 13.8501C12.75 14.2601 12.42 14.6001 12 14.6001Z" fill="#9197B3"/></svg>', name: 'Help' },
];

// Get the element where the menu should be inserted
const sideMenuList = document.querySelector('.side-menu__list');

// Iterate over the menuItems array and create elements for the menu
menuItems.forEach(item => {
    // Create <li> for each item
    const li = document.createElement('li');
    li.classList.add('side-menu__list-item');

    // Check if the item is "Dashboard"
    if (item.name === 'Dashboard') {
        // Create <span> for text without link and arrow
        const span = document.createElement('span');
        span.classList.add('side-menu__list-text-first');
        span.textContent = item.name;

        // Create <img> for the icon
        const img = document.createElement('img');
        img.classList.add('side-menu__list-icon');
        img.alt = item.name;

        // Check if there is an image, and if so, insert it
        if (item.image) {
            if (item.image.includes('<svg')) {
                img.src = `data:image/svg+xml;base64,${btoa(item.image)}`;
            } else {
                img.src = item.image;
            }
        }

        // Append elements to <li>
        li.appendChild(img);
        li.appendChild(span);

    } else {
        // Create <a> for the link
        const a = document.createElement('a');
        a.href = "javascript:void(0);";
        let namePage = (item.name).toLowerCase();
        a.setAttribute('data-name', namePage);

        // Create <img> for the icon
        const img = document.createElement('img');
        img.classList.add('side-menu__list-icon');
        img.alt = item.name;

        // Check if there is an image, and if so, insert it
        if (item.image) {
            if (item.image.includes('<svg')) {
                img.src = `data:image/svg+xml;base64,${btoa(item.image)}`;
            } else {
                img.src = item.image;
            }
        }

        // Create <img> for the arrow
        const arrow = document.createElement('img');
        arrow.classList.add('side-menu__list-arrow');
        arrow.alt = `${item.name} arrow`;
        arrow.src = `data:image/svg+xml;base64,${btoa('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12L10 8L6 4" stroke="#9197B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')}`;

        // Create <span> for the text
        const span = document.createElement('span');
        span.classList.add('side-menu__list-text');
        span.textContent = item.name;

        // Append elements to <li>
        a.appendChild(img);
        a.appendChild(span);
        a.appendChild(arrow);
        li.appendChild(a);
    }

    // Append <li> to ul
    sideMenuList.appendChild(li);
});

// Variable to store the current page name
let currentPage = 'customers'; // Default page

// Get all links with the data-name attribute
const links = document.querySelectorAll('.side-menu__list-item a');

// Function to load content based on the page name
function loadPage(page) {
    const content = document.getElementById('content');

    if (page?.length > 0) {
        fetch(`pages/${page}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                content.innerHTML = '<div><h2>Not Found</h2><p>Page not found.</p></div>';
                console.error('There was a problem with the fetch operation:', error);
            });
    } else {
        content.innerHTML = '<div><h2>Not Found</h2><p>Page not found.</p></div>';
    }
}

// Function to set the active link
function setActiveLink() {
    // Remove 'active' class from all items
    document.querySelectorAll('.side-menu__list-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the current page's item
    const activeItem = document.querySelector(`.side-menu__list-item a[data-name="${currentPage}"]`);
    if (activeItem) {
        activeItem.closest('.side-menu__list-item').classList.add('active');
    }
}

// Add event listeners to all links
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link behavior
        currentPage = this.getAttribute('data-name');
        loadPage(currentPage);  // Load the corresponding content based on the page name
        setActiveLink();  // Set the active class on the clicked item
    });
});

// Initial page load and setting the active class
loadPage(currentPage);

window.addEventListener('load', () => {
    loadPage(currentPage);
    setActiveLink(); // Ensure the active class is set when the page loads
});

const sideMenuTitleImage = document.querySelector('.side-menu__title-image');
sideMenuTitleImage.innerHTML = '<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5003 34.8876C17.4674 34.8876 16.419 34.6564 15.602 34.1784L7.12284 29.2914C3.66951 26.9634 3.45367 26.6089 3.45367 22.9551V14.0443C3.45367 10.3905 3.65409 10.0359 7.04576 7.73887L15.5865 2.80553C17.2053 1.86512 19.749 1.86512 21.3678 2.80553L29.8778 7.70803C33.3311 10.0359 33.547 10.3905 33.547 14.0443V22.9397C33.547 26.5934 33.3465 26.948 29.9549 29.2451L21.414 34.1784C20.5815 34.6564 19.5332 34.8876 18.5003 34.8876ZM18.5003 4.42428C17.8528 4.42428 17.2207 4.54762 16.7736 4.8097L8.29451 9.7122C5.78159 11.408 5.78159 11.408 5.78159 14.0443V22.9397C5.78159 25.5759 5.78159 25.5759 8.35617 27.318L16.7736 32.1743C17.6832 32.6984 19.3328 32.6984 20.2424 32.1743L28.7215 27.2718C31.219 25.5759 31.219 25.5759 31.219 22.9397V14.0443C31.219 11.408 31.219 11.408 28.6445 9.66595L20.227 4.8097C19.7799 4.54762 19.1478 4.42428 18.5003 4.42428Z" fill="black"/><path d="M18.5 24.2812C15.3088 24.2812 12.7188 21.6912 12.7188 18.5C12.7188 15.3088 15.3088 12.7188 18.5 12.7188C21.6912 12.7188 24.2812 15.3088 24.2812 18.5C24.2812 21.6912 21.6912 24.2812 18.5 24.2812ZM18.5 15.0312C16.5883 15.0312 15.0312 16.5883 15.0312 18.5C15.0312 20.4117 16.5883 21.9688 18.5 21.9688C20.4117 21.9688 21.9688 20.4117 21.9688 18.5C21.9688 16.5883 20.4117 15.0312 18.5 15.0312Z" fill="black"/></svg>';

// Set the user's name in the span
const userNameSpan = document.querySelector('.side-menu__user-name');
userNameSpan.innerHTML = user; // Set the user's name dynamically