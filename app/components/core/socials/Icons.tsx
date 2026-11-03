type IconProps = {
    color?: string;
    colorBg?: string ;
    classnameHoverRect?: string; 
    classnameHoverPath?: string;
};

export function InstagramIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
        <svg aria-hidden="true" focusable="false" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={classnameHoverRect} width="60" height="60" rx="7.74194" fill="#F4EFE8"/>
            <path className={classnameHoverPath} d="M30.0008 25.4141C28.7843 25.4141 27.6176 25.8973 26.7575 26.7575C25.8973 27.6176 25.4141 28.7843 25.4141 30.0008C25.4141 31.2172 25.8973 32.3839 26.7575 33.244C27.6176 34.1042 28.7843 34.5875 30.0008 34.5875C31.2172 34.5875 32.3839 34.1042 33.244 33.244C34.1042 32.3839 34.5875 31.2172 34.5875 30.0008C34.5875 28.7843 34.1042 27.6176 33.244 26.7575C32.3839 25.8973 31.2172 25.4141 30.0008 25.4141Z" fill="#1E1E1E"/>
            <path className={classnameHoverPath} fillRule="evenodd" clipRule="evenodd" d="M22.6189 17.4164C27.5246 16.8729 32.4753 16.8729 37.381 17.4164C40.061 17.7156 42.2217 19.8254 42.5364 22.5154C43.1178 27.4897 43.1178 32.5148 42.5364 37.4892C42.2217 40.1791 40.061 42.289 37.3824 42.5896C32.4762 43.1331 27.5251 43.1331 22.6189 42.5896C19.9389 42.289 17.7782 40.1791 17.4635 37.4906C16.882 32.5158 16.882 27.4902 17.4635 22.5154C17.7782 19.8254 19.9389 17.7156 22.6189 17.4164ZM37.0564 21.5345C36.6821 21.5345 36.3231 21.6832 36.0585 21.9479C35.7938 22.2125 35.6451 22.5715 35.6451 22.9458C35.6451 23.3201 35.7938 23.6791 36.0585 23.9437C36.3231 24.2084 36.6821 24.3571 37.0564 24.3571C37.4307 24.3571 37.7897 24.2084 38.0543 23.9437C38.319 23.6791 38.4677 23.3201 38.4677 22.9458C38.4677 22.5715 38.319 22.2125 38.0543 21.9479C37.7897 21.6832 37.4307 21.5345 37.0564 21.5345ZM23.2963 30.0023C23.2963 28.2243 24.0026 26.5193 25.2598 25.2621C26.5169 24.0049 28.222 23.2986 29.9999 23.2986C31.7779 23.2986 33.4829 24.0049 34.7401 25.2621C35.9973 26.5193 36.7036 28.2243 36.7036 30.0023C36.7036 31.7802 35.9973 33.4853 34.7401 34.7424C33.4829 35.9996 31.7779 36.7059 29.9999 36.7059C28.222 36.7059 26.5169 35.9996 25.2598 34.7424C24.0026 33.4853 23.2963 31.7802 23.2963 30.0023Z" fill="#1E1E1E"/>
        </svg>
    );
}

export function FacebookIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
         <svg aria-hidden="true" focusable="false" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={classnameHoverRect} width="56" height="56" rx="28" fill={colorBg}/>
            <path className={classnameHoverPath} d="M39.6673 28.3542C39.6673 21.8715 34.444 16.6162 28.0007 16.6162C21.5573 16.6162 16.334 21.8715 16.334 28.3542C16.334 34.2128 20.6003 39.0689 26.1777 39.9495V31.7472H23.2155V28.3542H26.1777V25.7682C26.1777 22.8263 27.9196 21.2014 30.5844 21.2014C31.8609 21.2014 33.1959 21.4306 33.1959 21.4306V24.3193H31.7249C30.2757 24.3193 29.8236 25.2241 29.8236 26.1524V28.3542H33.0592L32.542 31.7472H29.8236V39.9495C35.4011 39.0689 39.6673 34.213 39.6673 28.3542Z" fill={color}/>
        </svg>
    );
}

export function XIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
        <svg aria-hidden="true" focusable="false" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={classnameHoverRect} width="56" height="56" rx="28" fill={colorBg}/>
            <path className={classnameHoverPath} d="M34.0388 18.9492H37.2589L30.2238 26.8562L38.5 37.6159H32.0199L26.9443 31.0903L21.1368 37.6159H17.9147L25.4394 29.1585L17.5 18.9492H24.1447L28.7325 24.9139L34.0388 18.9492ZM32.9085 35.7205H34.6929L23.1751 20.745H21.2604L32.9085 35.7205Z" fill={color}/>
        </svg>
    );
}

export function LinkIdnIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
        <svg aria-hidden="true" focusable="false" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={classnameHoverRect} width="56" height="56" rx="28" fill={colorBg}/>
            <path className={classnameHoverPath} fillRule="evenodd" clipRule="evenodd" d="M19.25 17.7822C18.2835 17.7822 17.5 18.5657 17.5 19.5322V37.0322C17.5 37.9987 18.2835 38.7822 19.25 38.7822H36.75C37.7165 38.7822 38.5 37.9987 38.5 37.0322V19.5322C38.5 18.5657 37.7165 17.7822 36.75 17.7822H19.25ZM23.9409 22.4521C23.9475 23.5677 23.1124 24.2551 22.1214 24.2502C21.1879 24.2453 20.3742 23.5021 20.3791 22.4537C20.384 21.4677 21.1633 20.6753 22.1756 20.6982C23.2026 20.7212 23.9475 21.4743 23.9409 22.4521ZM28.3263 25.6709H25.3863H25.3847V35.6574H28.492V35.4244C28.492 34.9812 28.4916 34.5379 28.4913 34.0944C28.4903 32.9117 28.4893 31.7276 28.4954 30.5452C28.497 30.2581 28.5101 29.9595 28.5839 29.6855C28.8611 28.6617 29.7816 28.0006 30.8086 28.1631C31.4682 28.2664 31.9045 28.6487 32.0882 29.2705C32.2015 29.6592 32.2524 30.0776 32.2573 30.4829C32.2706 31.7051 32.2687 32.9273 32.2668 34.1496C32.2661 34.5811 32.2654 35.0127 32.2654 35.4442V35.6558H35.3827V35.4163C35.3827 34.8889 35.3824 34.3617 35.3821 33.8345C35.3815 32.5168 35.3808 31.199 35.3843 29.8808C35.3859 29.2852 35.322 28.6979 35.1759 28.122C34.9578 27.2656 34.5066 26.5568 33.7732 26.045C33.2531 25.6808 32.6822 25.4462 32.044 25.4199C31.9713 25.4169 31.8981 25.413 31.8244 25.409C31.4981 25.3913 31.1664 25.3734 30.8545 25.4363C29.962 25.6152 29.1779 26.0237 28.5855 26.7439C28.5167 26.8265 28.4494 26.9103 28.3489 27.0355L28.3263 27.0639V25.6709ZM20.6286 35.6607H23.7212V25.6774H20.6286V35.6607Z" fill={color}/>
        </svg>
    );
}

export function YouTubeIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
        <svg aria-hidden="true" focusable="false" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={classnameHoverRect} width="56" height="56" rx="28" fill={colorBg}/>
            <path className={classnameHoverPath} d="M39.1912 22.4032C39.0584 21.9102 38.7987 21.4605 38.438 21.099C38.0773 20.7376 37.6283 20.4769 37.1356 20.3428C35.3086 19.8412 27.9994 19.833 27.9994 19.833C27.9994 19.833 20.6914 19.8248 18.8632 20.3043C18.3708 20.4445 17.9227 20.7089 17.5619 21.0722C17.2011 21.4354 16.9397 21.8853 16.8029 22.3787C16.3211 24.2057 16.3164 27.995 16.3164 27.995C16.3164 27.995 16.3117 31.803 16.7901 33.6113C17.0584 34.6112 17.8459 35.401 18.8469 35.6705C20.6926 36.1722 27.9819 36.1803 27.9819 36.1803C27.9819 36.1803 35.2911 36.1885 37.1181 35.7102C37.611 35.5764 38.0604 35.3163 38.422 34.9556C38.7836 34.5948 39.0447 34.146 39.1796 33.6534C39.6626 31.8275 39.6661 28.0394 39.6661 28.0394C39.6661 28.0394 39.6894 24.2302 39.1912 22.4032ZM25.6614 31.5055L25.6672 24.5055L31.7421 28.0113L25.6614 31.5055Z" fill={color}/>
        </svg>
    );
}

export function TelegramIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
        <svg aria-hidden="true" focusable="false" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={classnameHoverRect} width="60" height="60" rx="7.74194" fill="#F4EFE8"/>
            <path className={classnameHoverPath} d="M42.2908 18.2229C42.2908 18.2229 45.0322 17.1539 44.8029 19.75C44.7274 20.819 44.0422 24.561 43.5087 28.6079L41.6811 40.5968C41.6811 40.5968 41.5287 42.3532 40.1576 42.6587C38.7873 42.9636 36.731 41.5897 36.35 41.2841C36.0451 41.0548 30.6385 37.6183 28.7346 35.9389C28.2012 35.4802 27.5915 34.5643 28.8108 33.4952L36.8072 25.8587C37.721 24.9414 38.6348 22.8033 34.8272 25.4001L24.1649 32.6541C24.1649 32.6541 22.9462 33.4183 20.6621 32.731L15.7112 31.2033C15.7112 31.2033 13.8836 30.058 17.0061 28.9128C24.6221 25.3238 33.9896 21.6587 42.2901 18.2222" fill="#1E1E1E"/>
        </svg>
    );
}

export function MailIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
       <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_94_1221)">
        <mask id="mask0_94_1221" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <path d="M32 0H0V32H32V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_94_1221)">
        <path d="M29.3337 14.0003V20.667C29.3337 25.3337 26.667 27.3337 22.667 27.3337H9.33366C5.33366 27.3337 2.66699 25.3337 2.66699 20.667V11.3337C2.66699 6.66699 5.33366 4.66699 9.33366 4.66699H18.667" stroke="#8C8C8C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.33398 12L13.5073 15.3333L16.0007 17.3333L20.0007 14.6667" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
        <path d="M26.0003 10.6667C27.8413 10.6667 29.3337 9.17428 29.3337 7.33333C29.3337 5.49239 27.8413 4 26.0003 4C24.1594 4 22.667 5.49239 22.667 7.33333C22.667 9.17428 24.1594 10.6667 26.0003 10.6667Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_94_1221">
        <rect width="32" height="32" fill="white"/>
        </clipPath>
        </defs>
    </svg>

    );
}

export function TelegramGreyIcon ({color = 'white', colorBg = '#313131', classnameHoverRect = '', classnameHoverPath = ''}:IconProps) {
    return (
        <svg aria-hidden="true" focusable="false" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_95_2340)">
            <mask id="mask0_95_2340" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
            <path d="M27.417 0.583008V27.417H0.583008V0.583008H27.417Z" fill="white" stroke="white" strokeWidth="1.16667"/>
            </mask>
            <g mask="url(#mask0_95_2340)">
            <path d="M11.7949 15.9256L15.9716 11.7373" stroke="white" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M8.63395 7.37351L18.539 4.07185C22.984 2.59018 25.399 5.01685 23.929 9.46185L20.6273 19.3669C18.4106 26.0286 14.7706 26.0286 12.554 19.3669L11.5739 16.4269L8.63395 15.4469C1.97228 13.2302 1.97228 9.60185 8.63395 7.37351Z" stroke="#8C8C8C" strokeWidth="1.75" strokeLinecap="round"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_95_2340">
            <rect width="28" height="28" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    );
}