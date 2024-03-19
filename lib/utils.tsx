/* eslint-disable max-len */

'use client';

import { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash';

export const useIsMobile = () => {
  const breakPoint = 500;

  const [_isMobile, setIsMobile] = useState(false);

  const _window = typeof window !== 'undefined' ? window : null;

  useEffect(() => {
    setTimeout(() => {
      if (_window) {
        setIsMobile(_window.screen.width <= breakPoint);
      }
    }, 1);
  }, [_window]);

  return _isMobile;
};

export const useIsTablet = () => {
  const breakPoint = 1024;

  const [_isTablet, setIsTablet] = useState(false);

  const _window = typeof window !== 'undefined' ? window : null;

  useEffect(() => {
    setTimeout(() => {
      if (_window) {
        setIsTablet(_window.screen.width <= breakPoint);
      }
    }, 1);
  }, [_window]);

  return _isTablet;
};

export const getSocialIcon = company => {
  switch (company) {
    case 'x':
      return (
        <svg
          className="social-x"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 62 58"
          height="58"
          width="62"
        >
          <g clipPath="url(#clip0_79_29041)">
            <path
              fill="#DBDBDB"
              d="M48.7734 0H58.28L37.4067 24.6125L61.7934 58H42.656L27.6727 37.7107L10.5194 58H1.01271L23.126 31.6753L-0.227295 0H19.3854L32.922 18.5343L48.7734 0ZM45.446 52.2214H50.716L16.616 5.56458H10.9534L45.446 52.2214Z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_79_29041">
              <rect fill="white" height="58" width="62"></rect>
            </clipPath>
          </defs>
        </svg>
      );
    case 'discord':
      return (
        <svg
          className="social-discord"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 127.14 96.36"
        >
          <path
            className="cls-1"
            d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
          />
        </svg>
      );
    case 'instagram':
      return (
        <svg
          className="social-instagram"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Instagram</title>
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          className="social-linkedin"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg
          className="social-youtube"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>YouTube</title>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'vimeo':
      return (
        <svg
          className="social-vimeo"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Vimeo</title>
          <path d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 003.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg
          className="social-whatsapp"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      );
    case 'reddit':
      return (
        <svg
          className="social-reddit"
          width="25"
          height="22"
          viewBox="0 0 25 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.35 0.392334C19.6115 0.392334 18.9815 0.821142 18.6754 1.44058L14.3098 0.511459C14.1872 0.486155 14.061 0.507905 13.9565 0.576281C13.905 0.609617 13.8606 0.652882 13.826 0.703551C13.7914 0.75422 13.7672 0.811278 13.7549 0.871394C13.7549 0.871394 12.4437 7.1173 12.4437 7.15333C9.63787 7.22533 7.1162 8.06483 5.29364 9.37947C4.82183 8.9255 4.18427 8.6483 3.47827 8.6483C2.02673 8.6483 0.852539 9.82604 0.852539 11.274C0.852539 12.3403 1.49003 13.2587 2.40486 13.6693C2.36527 13.9288 2.34366 14.1953 2.34366 14.4654C2.34366 18.5068 7.04782 21.7811 12.8508 21.7811C18.6536 21.7811 23.3579 18.5068 23.3579 14.4655C23.3579 14.1989 23.3361 13.9359 23.2965 13.6765C24.2078 13.2659 24.8525 12.3474 24.8525 11.2741C24.8525 9.82249 23.6785 8.6483 22.2267 8.6483C21.5171 8.6483 20.876 8.92941 20.4041 9.38665C18.6104 8.08984 16.1358 7.25419 13.3803 7.15717L14.576 1.52708L18.4844 2.35918C18.5311 3.35319 19.345 4.14577 20.35 4.14577C21.3874 4.14577 22.2267 3.3065 22.2267 2.26905C22.2267 1.23161 21.3874 0.392334 20.35 0.392334ZM8.71927 11.2741C9.75308 11.2741 10.5958 12.117 10.5958 13.1508C10.5958 14.1846 9.75308 15.0275 8.71927 15.0275C7.68567 15.0275 6.84255 14.1844 6.84255 13.1508C6.84255 12.117 7.68567 11.2741 8.71927 11.2741ZM16.9751 11.2741C18.009 11.2741 18.8518 12.117 18.8518 13.1508C18.8518 14.1844 18.0087 15.0275 16.9751 15.0275C15.9413 15.0275 15.0984 14.1844 15.0984 13.1508C15.0984 12.117 15.9413 11.2741 16.9751 11.2741ZM8.7391 17.2759C8.86334 17.2759 8.98751 17.3237 9.08311 17.4191C9.88984 18.226 11.6152 18.5139 12.8508 18.5139C14.0827 18.5139 15.8115 18.2261 16.6183 17.4191C16.6634 17.3737 16.717 17.3377 16.7761 17.3131C16.8351 17.2886 16.8985 17.2759 16.9624 17.2759C17.0264 17.2759 17.0897 17.2886 17.1488 17.3131C17.2078 17.3377 17.2614 17.3737 17.3065 17.4191C17.3965 17.511 17.4469 17.6345 17.4469 17.7631C17.4469 17.8917 17.3965 18.0152 17.3065 18.107C16.024 19.3857 13.5711 19.4866 12.8507 19.4866C12.1305 19.4866 9.67391 19.3857 8.39523 18.107C8.34984 18.0619 8.31382 18.0083 8.28923 17.9493C8.26465 17.8903 8.25199 17.827 8.25199 17.763C8.25199 17.6991 8.26465 17.6358 8.28923 17.5768C8.31382 17.5177 8.34984 17.4642 8.39523 17.4191C8.44026 17.3738 8.49383 17.3377 8.55285 17.3132C8.61187 17.2886 8.67517 17.2759 8.7391 17.2759Z" />
        </svg>
      );
    case 'github':
      return (
        <svg
          className="social-github"
          width="21"
          height="25"
          viewBox="0 0 21 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.8304 23.292C14.8304 22.793 14.8449 21.1677 14.8449 19.1416C14.8449 17.7279 14.3791 16.8056 13.8551 16.3445C17.0938 15.9665 20.5 14.6889 20.5 8.88295C20.5 7.2349 19.9396 5.88169 19.0007 4.82332C19.1535 4.43777 19.6485 2.90312 18.8551 0.824171C18.8551 0.824171 17.6324 0.415941 14.8595 2.37394C13.695 2.0413 12.4504 1.86743 11.2131 1.86743C9.97586 1.87499 8.73131 2.0413 7.56681 2.37394C4.78657 0.415941 3.56385 0.824171 3.56385 0.824171C2.77054 2.90312 3.27273 4.44533 3.41829 4.82332C2.48669 5.88169 1.919 7.22734 1.919 8.88295C1.919 14.6738 5.31788 15.9741 8.54935 16.3521C8.1345 16.73 7.75604 17.3953 7.62503 18.3705C6.79533 18.7561 4.68468 19.4213 3.38918 17.1156C3.38918 17.1156 2.6177 15.6641 1.16208 15.5583C1.16208 15.5583 -0.257151 15.5356 1.06019 16.4806C1.06019 16.4806 2.01362 16.9493 2.67592 18.6956C2.67592 18.6956 3.52746 21.6364 7.58137 20.7216C7.58864 21.9841 7.6032 22.9367 7.6032 23.292C7.6032 23.6851 7.34119 24.1462 6.63521 24.0253C8.07628 24.5242 9.61924 24.7888 11.2204 24.7888C12.8289 24.7888 14.3718 24.5167 15.8202 24.0177C15.0851 24.1689 14.8304 23.7002 14.8304 23.292ZM16.5917 23.7304C16.5553 23.7456 16.5262 23.7607 16.4898 23.7682C16.5262 23.7531 16.5625 23.7456 16.5917 23.7304ZM15.8857 24.0026C15.9002 23.995 15.9075 23.995 15.9221 23.9875C15.9075 23.995 15.893 23.995 15.8857 24.0026Z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg
          className="social-telegram"
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21.3302 1.06548L1.78963 8.73174C1.78963 8.73174 0.864231 9.04346 0.942159 9.62793C1.01035 10.2124 1.77015 10.4754 1.77015 10.4754L6.68939 12.1314L18.4858 4.64047C18.4858 4.64047 19.1677 4.23135 19.1385 4.64047C19.1385 4.64047 19.2554 4.70866 18.895 5.0496C18.5345 5.39054 9.62145 13.3977 9.62145 13.3977L9.61171 13.5049L9.59223 13.4854L8.98828 18.8625C9.26103 18.9794 9.50456 18.7943 9.50456 18.7943L12.6802 15.9012L17.6286 19.7002C18.9631 20.2847 19.4502 19.0671 19.4502 19.0671L22.9375 1.52332C22.9375 0.364123 21.3302 1.06548 21.3302 1.06548Z" />
        </svg>
      );
    case 'session':
      return (
        <svg
          className="social-session"
          width="21"
          height="23"
          viewBox="0 0 21 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.08355 22.7558C2.52122 22.7558 0.4375 20.6721 0.4375 18.1098C0.4375 15.5486 2.52122 13.4638 5.08355 13.4638H6.6534L3.62776 11.7869C1.66045 10.6968 0.438676 8.62254 0.438676 6.37302C0.438676 3.2063 3.01511 0.629883 6.18186 0.629883H15.7914C18.3538 0.629883 20.4375 2.71359 20.4375 5.2759C20.4375 7.83703 18.3538 9.92192 15.7914 9.92192H14.2216L17.2472 11.5988C19.2145 12.6888 20.4363 14.7631 20.4363 17.0126C20.4363 20.1794 17.8599 22.7558 14.6931 22.7558H5.08355ZM5.08355 15.4205C4.34154 15.4205 3.64893 15.718 3.13623 16.2577C2.62353 16.7963 2.3613 17.503 2.39775 18.2462C2.46831 19.6784 3.68656 20.8003 5.17057 20.8003H14.5908C15.6398 20.8003 16.664 20.3675 17.4013 19.6126C18.1198 18.8765 18.5031 17.9181 18.4796 16.9139C18.4443 15.4169 17.6094 14.0364 16.2994 13.3109L11.4159 10.6051V14.515C11.4159 15.0148 11.009 15.4216 10.5092 15.4216H5.08355V15.4205ZM6.28416 2.5866C5.23524 2.5866 4.21102 3.01933 3.47372 3.77426C2.75523 4.51038 2.37188 5.46875 2.3954 6.47297C2.43068 7.96991 3.26558 9.35042 4.57555 10.076L9.45914 12.7817L9.46031 8.873C9.46031 8.37324 9.86718 7.96638 10.3658 7.96638L15.7914 7.9652C16.5335 7.9652 17.2261 7.6677 17.7388 7.12796C18.2515 6.58939 18.5137 5.88267 18.4772 5.13949C18.4067 3.70724 17.1884 2.58542 15.7044 2.58542H6.28416V2.5866Z" />
        </svg>
      );
    case 'rss':
      return (
        <svg
          className="social-rss"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.73753 18.0823C5.73708 18.8005 5.45143 19.4891 4.94339 19.9967C4.43535 20.5042 3.74651 20.7893 3.02836 20.789C2.6727 20.7893 2.32047 20.7194 1.9918 20.5835C1.66312 20.4476 1.36444 20.2483 1.11279 19.997C0.861143 19.7456 0.661465 19.4472 0.525157 19.1187C0.388848 18.7902 0.318578 18.438 0.318359 18.0823C0.318578 17.7267 0.388848 17.3745 0.525157 17.046C0.661465 16.7175 0.861143 16.4191 1.11279 16.1677C1.36444 15.9164 1.66312 15.7171 1.9918 15.5812C2.32047 15.4453 2.6727 15.3754 3.02836 15.3756C3.74651 15.3754 4.43535 15.6604 4.94339 16.168C5.45143 16.6756 5.73708 17.3642 5.73753 18.0823ZM0.318359 7.60556V11.6148C5.36003 11.6664 9.45169 15.7532 9.50336 20.789H13.5175C13.4659 13.5306 7.58586 7.65723 0.318359 7.60556ZM0.318359 4.79886C9.13503 4.8372 16.2784 11.9606 16.3042 20.789H20.3184C20.2934 9.76309 11.3559 0.827152 0.318359 0.788818V4.79886Z" />
        </svg>
      );
    default:
      return (
        <svg
          className="social-facebook"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Facebook</title>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
  }
};

export const getShareSites = currentUrl => {
  return [
    {
      company: 'facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    },
    {
      company: 'twitter',
      href: `https://twitter.com/intent/tweet?text=&amp;url=${currentUrl}`,
    },
    {
      company: 'linkedin',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&amp;`,
    },
  ];
};

export const useHeroMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true);
    }, 250);
  }, []);

  return hasMounted;
};

export const returnDate = (date, noDay = false, noYear = false) => {
  return new Date(date).toLocaleDateString('en-au', {
    year: noYear ? undefined : 'numeric',
    month: 'long',
    day: noDay ? undefined : 'numeric',
  });
};

export const handlePrint = () => {
  const _window = typeof window !== 'undefined' ? window : null;
  if (!_window) {
    return;
  }
  window.print();
};

export const useThrottledHandleScroll = (callback, interval = 100) => {
  return useRef(throttle(callback, interval));
};

export const stripHtmlFromString = htmlString => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = htmlString;
  return tmp.textContent || tmp.innerText || '';
};
