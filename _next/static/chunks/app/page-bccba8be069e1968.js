(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{564:function(e,t,n){Promise.resolve().then(n.bind(n,2297))},4997:function(e,t){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.G=function(e){if(!e||e.length>254||!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64||t[1].split(".").some(function(e){return e.length>63}))}},4057:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,o=-1,s=0,l=0;l<=e.length;++l){if(l<e.length)n=e.charCodeAt(l);else if(47===n)break;else n=47;if(47===n){if(o===l-1||1===s);else if(o!==l-1&&2===s){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){-1===a?(r="",i=0):i=(r=r.slice(0,a)).length-1-r.lastIndexOf("/"),o=l,s=0;continue}}else if(2===r.length||1===r.length){r="",i=0,o=l,s=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(o+1,l):r=e.slice(o+1,l),i=l-o-1;o=l,s=0}else 46===n&&-1!==s?++s:s=-1}return r}var r={resolve:function(){for(var e,r,i="",o=!1,s=arguments.length-1;s>=-1&&!o;s--)s>=0?r=arguments[s]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(i=r+"/"+i,o=47===r.charCodeAt(0));return(i=n(i,!o),o)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,s=o-i,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var a=n.length-l,C=s<a?s:a,c=-1,d=0;d<=C;++d){if(d===C){if(a>C){if(47===n.charCodeAt(l+d))return n.slice(l+d+1);if(0===d)return n.slice(l+d)}else s>C&&(47===e.charCodeAt(i+d)?c=d:0===d&&(c=0));break}var u=e.charCodeAt(i+d);if(u!==n.charCodeAt(l+d))break;47===u&&(c=d)}var h="";for(d=i+c+1;d<=o;++d)(d===o||47===e.charCodeAt(d))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(l+c):(l+=c,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(n=e.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,o=-1,s=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var l=n.length-1,a=-1;for(r=e.length-1;r>=0;--r){var C=e.charCodeAt(r);if(47===C){if(!s){i=r+1;break}}else -1===a&&(s=!1,a=r+1),l>=0&&(C===n.charCodeAt(l)?-1==--l&&(o=r):(l=-1,o=a))}return i===o?o=a:-1===o&&(o=e.length),e.slice(i,o)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!s){i=r+1;break}}else -1===o&&(s=!1,o=r+1);return -1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,o=!0,s=0,l=e.length-1;l>=0;--l){var a=e.charCodeAt(l);if(47===a){if(!o){r=l+1;break}continue}-1===i&&(o=!1,i=l+1),46===a?-1===n?n=l:1!==s&&(s=1):-1!==n&&(s=-1)}return -1===n||-1===i||0===s||1===s&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var s=-1,l=0,a=-1,C=!0,c=e.length-1,d=0;c>=n;--c){if(47===(i=e.charCodeAt(c))){if(!C){l=c+1;break}continue}-1===a&&(C=!1,a=c+1),46===i?-1===s?s=c:1!==d&&(d=1):-1!==s&&(d=-1)}return -1===s||-1===a||0===d||1===d&&s===a-1&&s===l+1?-1!==a&&(0===l&&o?r.base=r.name=e.slice(1,a):r.base=r.name=e.slice(l,a)):(0===l&&o?(r.name=e.slice(1,s),r.base=e.slice(1,a)):(r.name=e.slice(l,s),r.base=e.slice(l,a)),r.ext=e.slice(s,a)),l>0?r.dir=e.slice(0,l-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(114);e.exports=i}()},2297:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(7437),i=n(2265),o=n(4542),s=n.n(o),l=n(8504),a=n.n(l),C=n(3693),c=n.n(C),d=n(2663),u=n.n(d),h=e=>(0,r.jsxs)("svg",{className:u().logo,viewBox:"0 0 289 163",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("g",{filter:"url(#filter0_b_122_36)",children:[(0,r.jsx)("path",{d:"M26.8589 141.077C26.4901 139.87 26.0709 138.629 25.6015 137.355C25.1655 136.081 24.7297 134.806 24.2937 133.532H10.7134C10.2774 134.806 9.82473 136.081 9.35529 137.355C8.91937 138.629 8.51699 139.87 8.14814 141.077H-0.000106812C1.30763 137.321 2.54831 133.851 3.72193 130.665C4.89555 127.48 6.03562 124.479 7.14218 121.662C8.28227 118.845 9.38882 116.18 10.4618 113.665C11.5684 111.116 12.7085 108.635 13.8821 106.221H21.3764C22.5165 108.635 23.6399 111.116 24.7465 113.665C25.8529 116.18 26.9595 118.845 28.066 121.662C29.2062 124.479 30.363 127.48 31.5366 130.665C32.7102 133.851 33.9509 137.321 35.2586 141.077H26.8589ZM17.4532 114.117C17.2856 114.62 17.034 115.308 16.6987 116.18C16.3634 117.051 15.9778 118.057 15.5419 119.197C15.106 120.338 14.6198 121.595 14.0833 122.97C13.5803 124.345 13.0606 125.786 12.5241 127.295H22.4327C21.8962 125.786 21.3764 124.345 20.8735 122.97C20.3705 121.595 19.8843 120.338 19.4148 119.197C18.979 118.057 18.5933 117.051 18.258 116.18C17.9227 115.308 17.6544 114.62 17.4532 114.117ZM56.7208 121.26C56.0502 121.092 55.2623 120.924 54.3569 120.757C53.4516 120.555 52.4791 120.455 51.4396 120.455C50.9701 120.455 50.4002 120.505 49.7295 120.606C49.0924 120.673 48.6062 120.757 48.2708 120.857V141.077H40.7765V116.029C42.1178 115.559 43.6938 115.123 45.5045 114.721C47.3488 114.285 49.3941 114.067 51.6408 114.067C52.0431 114.067 52.5294 114.101 53.0995 114.168C53.6694 114.201 54.2395 114.268 54.8096 114.369C55.3796 114.436 55.9497 114.536 56.5197 114.671C57.0897 114.771 57.576 114.905 57.9783 115.073L56.7208 121.26ZM61.7561 127.849C61.7561 125.937 62.058 124.143 62.6615 122.467C63.2987 120.757 64.204 119.281 65.3776 118.041C66.5513 116.766 67.9764 115.76 69.6529 115.023C71.3295 114.285 73.2408 113.916 75.3869 113.916C76.7952 113.916 78.0862 114.05 79.2598 114.318C80.4334 114.553 81.5735 114.905 82.68 115.375L81.1209 121.36C80.4167 121.092 79.6454 120.857 78.8072 120.656C77.9688 120.455 77.0299 120.354 75.9904 120.354C73.7773 120.354 72.1175 121.042 71.011 122.416C69.938 123.791 69.4015 125.602 69.4015 127.849C69.4015 130.229 69.9044 132.074 70.9103 133.381C71.9499 134.689 73.7438 135.343 76.2923 135.343C77.1975 135.343 78.17 135.259 79.2095 135.092C80.2489 134.924 81.2046 134.656 82.0764 134.287L83.1327 140.423C82.2609 140.792 81.1711 141.11 79.8634 141.379C78.5556 141.647 77.1138 141.781 75.5378 141.781C73.1235 141.781 71.0445 141.429 69.3008 140.725C67.5572 139.987 66.1153 138.998 64.9752 137.757C63.8687 136.517 63.0471 135.058 62.5106 133.381C62.0077 131.671 61.7561 129.827 61.7561 127.849ZM89.6714 141.077V103.253L97.1658 102.046V114.721C97.6688 114.553 98.3059 114.402 99.0771 114.268C99.8819 114.101 100.653 114.017 101.391 114.017C103.537 114.017 105.314 114.318 106.722 114.922C108.164 115.492 109.304 116.314 110.143 117.387C111.015 118.46 111.618 119.734 111.954 121.209C112.323 122.685 112.507 124.328 112.507 126.138V141.077H105.012V127.044C105.012 124.63 104.694 122.919 104.057 121.913C103.453 120.907 102.313 120.405 100.636 120.405C99.9657 120.405 99.3286 120.472 98.7251 120.606C98.155 120.706 97.6353 120.824 97.1658 120.958V141.077H89.6714ZM138.303 112.256C134.648 112.256 131.999 113.279 130.356 115.324C128.747 117.336 127.941 120.103 127.941 123.624C127.941 125.334 128.143 126.893 128.545 128.301C128.948 129.676 129.551 130.866 130.356 131.872C131.16 132.878 132.166 133.666 133.373 134.236C134.581 134.773 135.989 135.041 137.598 135.041C138.47 135.041 139.209 135.024 139.811 134.991C140.449 134.957 141.002 134.89 141.471 134.79V122.668H149.317V139.92C148.379 140.289 146.871 140.675 144.791 141.077C142.712 141.513 140.147 141.731 137.095 141.731C134.48 141.731 132.1 141.328 129.953 140.524C127.841 139.719 126.03 138.545 124.521 137.003C123.012 135.46 121.839 133.566 121 131.319C120.195 129.073 119.793 126.507 119.793 123.624C119.793 120.706 120.246 118.124 121.151 115.878C122.056 113.631 123.298 111.737 124.873 110.194C126.449 108.618 128.293 107.428 130.406 106.623C132.552 105.818 134.832 105.416 137.246 105.416C138.89 105.416 140.365 105.533 141.673 105.768C143.014 105.969 144.154 106.221 145.092 106.522C146.065 106.791 146.853 107.076 147.457 107.377C148.095 107.679 148.547 107.914 148.815 108.082L146.552 114.369C145.479 113.799 144.238 113.313 142.83 112.91C141.455 112.474 139.946 112.256 138.303 112.256ZM156.367 128.05C156.367 125.703 156.719 123.657 157.423 121.913C158.161 120.136 159.117 118.661 160.29 117.487C161.464 116.314 162.806 115.425 164.314 114.821C165.856 114.218 167.432 113.916 169.042 113.916C172.798 113.916 175.765 115.073 177.945 117.387C180.125 119.667 181.214 123.037 181.214 127.497C181.214 127.932 181.198 128.419 181.164 128.955C181.13 129.458 181.097 129.911 181.063 130.313H164.063C164.231 131.856 164.951 133.08 166.225 133.985C167.5 134.89 169.209 135.343 171.356 135.343C172.73 135.343 174.072 135.226 175.38 134.991C176.721 134.723 177.811 134.404 178.649 134.035L179.655 140.121C179.253 140.322 178.717 140.524 178.046 140.725C177.375 140.926 176.621 141.094 175.782 141.228C174.977 141.395 174.105 141.53 173.166 141.63C172.228 141.731 171.289 141.781 170.35 141.781C167.969 141.781 165.891 141.429 164.113 140.725C162.37 140.021 160.911 139.065 159.737 137.858C158.597 136.617 157.742 135.159 157.171 133.482C156.635 131.805 156.367 129.995 156.367 128.05ZM173.972 125.183C173.938 124.546 173.821 123.925 173.62 123.322C173.452 122.718 173.166 122.182 172.764 121.712C172.396 121.243 171.909 120.857 171.305 120.555C170.736 120.254 170.015 120.103 169.143 120.103C168.304 120.103 167.584 120.254 166.98 120.555C166.376 120.824 165.873 121.193 165.471 121.662C165.068 122.131 164.75 122.685 164.515 123.322C164.314 123.925 164.163 124.546 164.063 125.183H173.972ZM203.042 127.044C203.042 124.63 202.724 122.919 202.087 121.913C201.484 120.907 200.427 120.405 198.919 120.405C198.449 120.405 197.963 120.438 197.46 120.505C196.956 120.539 196.471 120.589 196.001 120.656V141.077H188.506V115.526C189.143 115.358 189.882 115.19 190.719 115.023C191.591 114.821 192.497 114.654 193.436 114.52C194.408 114.352 195.398 114.235 196.403 114.168C197.409 114.067 198.399 114.017 199.371 114.017C201.282 114.017 202.825 114.268 203.998 114.771C205.205 115.241 206.194 115.811 206.966 116.481C208.039 115.71 209.263 115.107 210.638 114.671C212.046 114.235 213.337 114.017 214.511 114.017C216.623 114.017 218.35 114.318 219.691 114.922C221.066 115.492 222.156 116.314 222.961 117.387C223.765 118.46 224.318 119.734 224.621 121.209C224.922 122.685 225.073 124.328 225.073 126.138V141.077H217.579V127.044C217.579 124.63 217.26 122.919 216.623 121.913C216.019 120.907 214.963 120.405 213.454 120.405C213.052 120.405 212.482 120.505 211.744 120.706C211.04 120.907 210.454 121.159 209.983 121.461C210.218 122.232 210.37 123.054 210.437 123.925C210.503 124.764 210.537 125.669 210.537 126.642V141.077H203.042V127.044ZM240.882 141.077H233.387V114.62H240.882V141.077ZM241.587 106.975C241.587 108.35 241.133 109.44 240.228 110.244C239.356 111.016 238.316 111.401 237.11 111.401C235.903 111.401 234.846 111.016 233.941 110.244C233.069 109.44 232.633 108.35 232.633 106.975C232.633 105.6 233.069 104.527 233.941 103.756C234.846 102.951 235.903 102.549 237.11 102.549C238.316 102.549 239.356 102.951 240.228 103.756C241.133 104.527 241.587 105.6 241.587 106.975ZM249.436 115.526C250.71 115.157 252.353 114.821 254.365 114.52C256.377 114.184 258.49 114.017 260.703 114.017C262.949 114.017 264.81 114.318 266.285 114.922C267.794 115.492 268.985 116.314 269.857 117.387C270.729 118.46 271.349 119.734 271.718 121.209C272.086 122.685 272.271 124.328 272.271 126.138V141.077H264.776V127.044C264.776 124.63 264.457 122.919 263.821 121.913C263.184 120.907 261.993 120.405 260.25 120.405C259.714 120.405 259.143 120.438 258.539 120.505C257.936 120.539 257.399 120.589 256.93 120.656V141.077H249.436V115.526ZM288.058 141.077H280.564V114.62H288.058V141.077ZM288.762 106.975C288.762 108.35 288.309 109.44 287.403 110.244C286.533 111.016 285.493 111.401 284.285 111.401C283.078 111.401 282.022 111.016 281.117 110.244C280.245 109.44 279.809 108.35 279.809 106.975C279.809 105.6 280.245 104.527 281.117 103.756C282.022 102.951 283.078 102.549 284.285 102.549C285.493 102.549 286.533 102.951 287.403 103.756C288.309 104.527 288.762 105.6 288.762 106.975Z",fill:"black"}),(0,r.jsx)("path",{d:"M213.677 162.479H210.441L205.261 158.673V162.479H203.232V153.828H205.261V157.432L210.055 153.828H212.972L207.238 157.902L213.677 162.479ZM225.897 157.432C225.897 158.55 225.249 159.109 223.952 159.109H218.521V162.479H216.542V153.828H223.952C225.249 153.828 225.897 154.387 225.897 155.504V157.432ZM223.952 156.929V156.007C223.952 155.717 223.869 155.527 223.7 155.437C223.578 155.359 223.36 155.32 223.047 155.32H218.521V157.617H223.047C223.36 157.617 223.578 157.578 223.7 157.499C223.869 157.41 223.952 157.22 223.952 156.929ZM238.07 153.828L233.31 162.479H231.918L226.923 153.828H229.219L232.723 160.081L236.059 153.828H238.07ZM249.347 162.479H240.413V153.828H249.264V155.303H242.424V157.231H246.414V158.707H242.424V160.852H249.347V162.479ZM263.328 162.479H260.444L256.957 159.209H255.046V162.479H253.067V153.828H260.477C261.774 153.828 262.422 154.387 262.422 155.504V157.533C262.422 158.371 262.087 158.891 261.416 159.092C261.159 159.17 260.467 159.209 259.337 159.209L263.328 162.479ZM260.477 157.047V156.007C260.477 155.717 260.394 155.527 260.226 155.437C260.104 155.359 259.885 155.32 259.572 155.32H255.046V157.734H259.572C259.885 157.734 260.104 157.695 260.226 157.617C260.394 157.527 260.477 157.337 260.477 157.047ZM275.897 160.433C275.897 161.238 275.741 161.78 275.428 162.059C275.115 162.339 274.55 162.479 273.734 162.479H268.386C267.503 162.479 266.923 162.322 266.643 162.009C266.363 161.696 266.224 161.093 266.224 160.199L268 159.83V160.852H274.12V158.874H268.722C267.906 158.874 267.342 158.734 267.029 158.455C266.727 158.176 266.575 157.634 266.575 156.829V155.873C266.575 155.069 266.727 154.527 267.029 154.247C267.342 153.968 267.906 153.828 268.722 153.828H273.633C274.46 153.828 275.025 153.973 275.327 154.264C275.628 154.543 275.779 155.091 275.779 155.907L274.003 156.326V155.337H268.336V157.198H273.734C274.55 157.198 275.115 157.337 275.428 157.617C275.741 157.896 275.897 158.438 275.897 159.243V160.433ZM289 162.479H280.065V153.828H288.916V155.303H282.076V157.231H286.066V158.707H282.076V160.852H289V162.479Z",fill:"black"}),(0,r.jsx)("path",{d:"M181.771 156.605V157.639H178.707V156.605H181.771ZM179.408 161.571V156.246C179.408 155.886 179.478 155.587 179.619 155.35C179.76 155.113 179.955 154.936 180.201 154.817C180.446 154.698 180.726 154.639 181.038 154.639C181.249 154.639 181.441 154.655 181.616 154.688C181.793 154.72 181.925 154.749 182.011 154.775L181.765 155.81C181.712 155.792 181.644 155.776 181.565 155.761C181.488 155.746 181.407 155.738 181.326 155.738C181.123 155.738 180.981 155.786 180.902 155.881C180.822 155.973 180.783 156.104 180.783 156.272V161.571H179.408ZM182.613 161.571V156.605H183.948V157.471H184C184.09 157.163 184.242 156.93 184.456 156.773C184.669 156.613 184.915 156.534 185.193 156.534C185.262 156.534 185.336 156.538 185.416 156.547C185.497 156.555 185.565 156.567 185.626 156.582V157.804C185.561 157.785 185.473 157.768 185.357 157.752C185.243 157.737 185.139 157.73 185.044 157.73C184.842 157.73 184.66 157.774 184.501 157.862C184.343 157.949 184.219 158.069 184.126 158.225C184.036 158.38 183.991 158.559 183.991 158.761V161.571H182.613ZM188.351 161.668C187.848 161.668 187.415 161.561 187.048 161.348C186.684 161.132 186.402 160.832 186.204 160.449C186.006 160.063 185.906 159.616 185.906 159.107C185.906 158.594 186.006 158.146 186.204 157.762C186.402 157.376 186.684 157.077 187.048 156.863C187.415 156.648 187.848 156.54 188.351 156.54C188.853 156.54 189.287 156.648 189.651 156.863C190.017 157.077 190.299 157.376 190.498 157.762C190.696 158.146 190.795 158.594 190.795 159.107C190.795 159.616 190.696 160.063 190.498 160.449C190.299 160.832 190.017 161.132 189.651 161.348C189.287 161.561 188.853 161.668 188.351 161.668ZM188.357 160.601C188.585 160.601 188.776 160.536 188.93 160.407C189.082 160.275 189.198 160.096 189.276 159.87C189.355 159.644 189.395 159.386 189.395 159.097C189.395 158.809 189.355 158.551 189.276 158.325C189.198 158.098 189.082 157.92 188.93 157.788C188.776 157.657 188.585 157.591 188.357 157.591C188.127 157.591 187.933 157.657 187.775 157.788C187.62 157.92 187.502 158.098 187.423 158.325C187.346 158.551 187.306 158.809 187.306 159.097C187.306 159.386 187.346 159.644 187.423 159.87C187.502 160.096 187.62 160.275 187.775 160.407C187.933 160.536 188.127 160.601 188.357 160.601ZM191.691 161.571V156.605H193.004V157.481H193.062C193.165 157.19 193.338 156.96 193.579 156.792C193.82 156.624 194.109 156.54 194.445 156.54C194.785 156.54 195.076 156.625 195.314 156.796C195.554 156.964 195.713 157.192 195.793 157.481H195.844C195.947 157.196 196.129 156.969 196.395 156.799C196.662 156.626 196.978 156.54 197.342 156.54C197.805 156.54 198.182 156.688 198.471 156.983C198.761 157.276 198.907 157.692 198.907 158.231V161.571H197.532V158.503C197.532 158.227 197.459 158.02 197.313 157.882C197.166 157.744 196.983 157.675 196.763 157.675C196.513 157.675 196.318 157.755 196.179 157.914C196.038 158.071 195.968 158.279 195.968 158.538V161.571H194.633V158.474C194.633 158.23 194.563 158.036 194.422 157.892C194.284 157.747 194.103 157.675 193.876 157.675C193.723 157.675 193.586 157.714 193.462 157.791C193.342 157.867 193.246 157.973 193.175 158.111C193.103 158.247 193.067 158.407 193.067 158.59V161.571H191.691Z",fill:"black",fillOpacity:"0.64"})]}),(0,r.jsx)("rect",{className:u()["logo-squircle"],x:"102.357",y:"0.31131",width:"84.2858",height:"84.2858",rx:"19.2176",strokeWidth:"0.622558"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M170.602 42.4543C170.979 42.4543 171.168 42.4543 171.314 42.5326C171.435 42.597 171.539 42.7052 171.598 42.828C171.671 42.9776 171.664 43.159 171.649 43.522C171.431 49.0847 169.508 54.4559 166.127 58.9009C162.531 63.6297 157.485 67.0496 151.76 68.637C146.035 70.2244 139.948 69.8918 134.43 67.6901C128.912 65.4884 124.268 61.539 121.209 56.4465C118.15 51.3541 116.844 45.3993 117.491 39.4939C118.138 33.5885 120.703 28.058 124.793 23.7491C128.883 19.4403 134.272 16.5906 140.136 15.6364C145.647 14.7394 151.293 15.5637 156.306 17.9829C156.634 18.1407 156.797 18.2197 156.895 18.354C156.976 18.4643 157.022 18.6069 157.023 18.7434C157.023 18.9096 156.934 19.076 156.758 19.4087L153.525 25.4852C153.523 25.4903 153.516 25.4922 153.511 25.4895C153.506 25.4868 153.5 25.4888 153.497 25.4938L145.314 40.884C145.036 41.4073 144.897 41.6689 144.927 41.8823C144.952 42.0605 145.048 42.221 145.194 42.3268C145.368 42.4534 145.665 42.4534 146.257 42.4534H166.469C166.469 42.4534 166.469 42.4536 166.469 42.4538C166.469 42.4541 166.47 42.4543 166.47 42.4543H170.602ZM160.323 50.4136C160.873 50.4136 161.148 50.4136 161.323 50.5432C161.464 50.6468 161.567 50.8229 161.588 50.9961C161.614 51.2127 161.487 51.4393 161.231 51.8925C160.803 52.6509 160.322 53.3827 159.791 54.082C157.248 57.4253 153.68 59.8431 149.633 60.9654C145.585 62.0877 141.282 61.8526 137.381 60.296C137.056 60.1665 136.736 60.0286 136.421 59.8823C136.097 59.7322 135.935 59.6571 135.834 59.5226C135.753 59.4132 135.704 59.267 135.703 59.1306C135.702 58.9627 135.79 58.7967 135.966 58.4648L139.946 50.9802C140.057 50.772 140.112 50.6679 140.193 50.5925C140.261 50.5285 140.342 50.4797 140.431 50.4494C140.535 50.4136 140.653 50.4136 140.889 50.4136H160.323ZM128.299 52.7767C128.579 53.216 128.719 53.4356 128.923 53.514C129.086 53.5768 129.29 53.5687 129.447 53.4934C129.644 53.3992 129.773 53.1563 130.032 52.6706L144.879 24.7467C145.137 24.261 145.267 24.0181 145.234 23.8021C145.209 23.6294 145.101 23.4559 144.958 23.3558C144.779 23.2307 144.519 23.2375 143.998 23.2511C143.136 23.2736 142.273 23.3543 141.414 23.494C137.269 24.1687 133.459 26.1834 130.567 29.2297C127.676 32.2761 125.862 36.1862 125.405 40.3613C124.947 44.5364 125.87 48.7464 128.033 52.3468C128.12 52.4914 128.209 52.6348 128.299 52.7767Z",fill:"black"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("filter",{id:"filter0_b_122_36",x:"-9.34782",y:"92.6981",width:"307.695",height:"79.1281",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,r.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,r.jsx)("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:"4.67385"}),(0,r.jsx)("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_122_36"}),(0,r.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_122_36",result:"shape"})]})})]});function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.join(" ")}var m=n(8352),g=n.n(m);let v=g()["auto-scroll"],p=g().center;var x=n(2890),_=n.n(x);let b=_().border,H=_().background,V=f(_().input,b,H);var j=n(8417),w=n.n(j),y=n(8757),k=n(7807);let Z=(0,k.cn)(void 0),M=(0,k.cn)(void 0),A=(0,k.cn)(void 0),L=(0,k.cn)(void 0),N=(0,k.cn)(void 0);var R=e=>{let[t,n]=(0,y.KO)(L);return(0,i.useEffect)(()=>{-1!=navigator.userAgent.indexOf("Win")?n("windows"):-1!=navigator.userAgent.indexOf("Mac")?n("macos"):-1!=navigator.userAgent.indexOf("Linux")&&n("linux")},[]),(0,r.jsxs)("div",{className:f(p,H,b,w().os),children:[(0,r.jsx)("span",{children:"Select your operating system"}),(0,r.jsxs)("div",{className:f(p,w().options),children:[(0,r.jsx)("button",{onClick:()=>{n("windows")},className:f(H,"windows"===t?w().selected:""),children:"Windows"}),(0,r.jsx)("button",{onClick:()=>{n("macos")},className:f(H,"macos"===t?w().selected:""),children:"macOS"}),(0,r.jsx)("button",{onClick:()=>{n("linux")},className:f(H,"linux"===t?w().selected:""),children:"Linux"})]})]})},O=n(4718),E=n.n(O),S=n(4997),K=e=>{let[t,n]=(0,y.KO)(N),[o]=(0,y.KO)(A),[s,l]=(0,i.useState)(void 0);function a(){if(!(void 0===s||""===s.trim()||!1===(0,S.G)(s))){let e=s.toLowerCase();e===o||(void 0===t?n([e]):t.includes(e)||n([...t,e]))}l("")}return(0,r.jsxs)("div",{className:f(p,H,b,E().rcmnd),children:[(0,r.jsx)("span",{className:E().txt,children:"Know someone who shouldn't miss out? Share their email below, and we'll make sure they stay in the loop!"}),(0,r.jsx)("input",{className:f(V,E().input),type:"email",value:s,onChange:e=>{l(e.target.value)},onKeyDown:e=>{["Enter",","].includes(e.key)&&(e.preventDefault(),a())},onBlur:a,placeholder:"Enter emails separated by comma"}),void 0!==t&&t.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:f(v,E().list),children:t.map((e,i)=>(0,r.jsx)("button",{title:"Click to remove ".concat(e),className:f(H,E()["list-item"]),onClick:()=>{n(t.filter((t,n)=>{if(t!==e)return!0}))},children:e},i))}),(0,r.jsx)("span",{className:E()["remove-option"],children:"Click email to remove them"})]}):void 0]})},B=n(4476),G=n.n(B),F=e=>{let[t,n]=(0,y.KO)(Z),[o,s]=(0,y.KO)(M),[l,a]=(0,y.KO)(A),[C]=(0,y.KO)(L),[c,d]=(0,y.KO)(N),[u,h]=(0,i.useState)(void 0),[m,g]=(0,i.useState)(void 0);async function v(){if(void 0!==m)return;let e=[];if(void 0===t&&(e=[...e,"first name"]),void 0===l&&(e=[...e,"email"]),void 0===C&&(e=[...e,"operating system"]),0!==e.length){h(e);return}h(void 0),g("ing... ⏳"),fetch("https://script.google.com/macros/s/AKfycbwb_owGvJmrsdFtXcL3KwB0_l1HgqZy3V0cgG4cw6Rc8R4H3MPVaFjSrPQW1KjAllE_/exec",{method:"POST",mode:"no-cors",body:JSON.stringify({fn:t,ln:o||"",eml:l,os:C,seml:void 0===c||0===c.length?void 0:c.filter(e=>e!==l)})}).then(e=>{g("ed! \uD83D\uDE4C\uD83C\uDFFB. We'll notify you as soon as ArchGemini is ready for you to use! See you in your inbox!"),setTimeout(()=>{g(void 0)},4e3)}).catch(e=>{h("Registration failed!"),g(""),setTimeout(()=>{g(void 0),h(void 0)},1600)}).finally(()=>{n(void 0),s(void 0),a(void 0),d(void 0)})}return(0,r.jsxs)(r.Fragment,{children:[void 0!==u?(0,r.jsx)("div",{className:f(p,b,H,G().error),children:(0,r.jsx)("span",{className:G().txt,children:"string"==typeof u?u:1===u.length?"Your ".concat(u[0]," is required"):"Your ".concat(u.join(", ")," are required")})}):"",(0,r.jsxs)("button",{className:f(b,H,G().btn),onClick:v,children:["Register",m]})]})},T=n(4057);let z=(0,T.join)("/_static");(0,T.join)(z,"archgemini-sun-rising.jpg"),(0,T.join)(z,"magicshare-og.jpg"),(0,T.join)(z,"magicshare.ico");var P=e=>{let[t,n]=(0,y.KO)(Z),[i,o]=(0,y.KO)(M),[s,l]=(0,y.KO)(A);return(0,r.jsxs)("div",{className:f(p,c().form),children:[(0,r.jsx)(h,{}),(0,r.jsxs)("span",{className:c().description,children:["Architectural + Gemini (twins)",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"ArchGemini seamlessly generates temporary twins of your shared folder on demand, revolutionizing file browsing and downloading between devices connected to your local network.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Register now to get an exclusive invite!"]}),(0,r.jsx)("input",{className:f(V),value:t||"",type:"text",placeholder:"Your first name",onChange:e=>{""===e.target.value.trim()?n(void 0):n(e.target.value)}}),(0,r.jsx)("input",{className:f(V),value:i||"",type:"text",placeholder:"Your last name",onChange:e=>{""===e.target.value.trim()?o(void 0):o(e.target.value)}}),(0,r.jsx)("input",{className:f(V),value:s||"",type:"email",placeholder:"Your email",onChange:e=>{l(e.target.value)},onBlur:e=>{""===e.target.value.trim()||!1===(0,S.G)(e.target.value)?l(void 0):l(e.target.value.toLowerCase())}}),(0,r.jsx)(R,{}),(0,r.jsx)(K,{}),(0,r.jsx)(F,{})]})},W=n(1151),D=n.n(W),Y=e=>(0,r.jsxs)("div",{className:f(p,b,H,D().extra),children:[(0,r.jsxs)("span",{className:D().copyright,children:["Copyright \xa9 2024 KPVERSE.",(0,r.jsx)("br",{}),"All Rights Reserved."]}),(0,r.jsx)("span",{className:D()["follow-us"],children:"Follow us on"}),(0,r.jsxs)("div",{className:f(p,D().social),children:[(0,r.jsx)("a",{target:"_blank",href:"https://x.com/TheKPVERSE",children:(0,r.jsx)("svg",{style:{aspectRatio:1,height:24},viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M59.5233 42.3833L96.7567 0H87.9367L55.5933 36.7933L29.78 0H0L39.0433 55.6433L0 100.083H8.82L42.9533 61.22L70.22 100.083H100M12.0033 6.51333H25.5533L87.93 93.89H74.3767",fill:"rgb(var(--color-on-background))"})})}),(0,r.jsx)("a",{target:"_blank",href:"https://linkedin.com/company/kpverse",children:(0,r.jsx)("svg",{style:{aspectRatio:1,height:24},viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M88.8889 100H11.1111C4.97461 100 0 95.0254 0 88.8889V11.1111C0 4.97461 4.97461 0 11.1111 0H88.8889C95.0254 0 100 4.97461 100 11.1111V88.8889C100 95.0254 95.0254 100 88.8889 100ZM71.2717 86.1111H86.1111V55.6267C86.1111 42.7284 78.7996 36.492 68.5869 36.492C58.3695 36.492 54.0695 44.4485 54.0695 44.4485V37.963H39.7685V86.1111H54.0695V60.8363C54.0695 54.064 57.187 50.0341 63.1538 50.0341C68.6386 50.0341 71.2717 53.9066 71.2717 60.8363V86.1111ZM13.8889 22.7736C13.8889 27.6801 17.8362 31.6584 22.7074 31.6584C27.5787 31.6584 31.5236 27.6801 31.5236 22.7736C31.5236 17.8672 27.5787 13.8889 22.7074 13.8889C17.8362 13.8889 13.8889 17.8672 13.8889 22.7736ZM30.2353 86.1111H15.323V37.963H30.2353V86.1111Z",fill:"rgb(var(--color-on-background))"})})}),(0,r.jsx)("a",{target:"_blank",href:"https://youtube.com/@thekpverse",children:(0,r.jsx)("svg",{style:{aspectRatio:1,height:24},viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M89.0679 17.0909C93.3732 18.2433 96.7568 21.6266 97.909 25.9318C99.9916 33.7273 100 50.0016 100 50.0016C100 50.0016 100 66.276 97.909 74.0715C96.7568 78.3768 93.3732 81.76 89.0679 82.9123C81.2727 85.0033 49.9998 85.0033 49.9998 85.0033C49.9998 85.0033 18.7273 85.0033 10.9318 82.9123C6.62661 81.76 3.24333 78.3768 2.09088 74.0715C0 66.276 0 50.0016 0 50.0016C0 50.0016 0 33.7273 2.09088 25.9318C3.24333 21.6266 6.62661 18.2433 10.9318 17.0909C18.7273 15 49.9998 15 49.9998 15C49.9998 15 81.2727 15 89.0679 17.0909ZM65.97 50.0029L39.9904 65.0011V35.0044L65.97 50.0029Z",fill:"rgb(var(--color-on-background))"})})}),(0,r.jsx)("a",{target:"_blank",href:"https://medium.com/@kpverse",children:(0,r.jsx)("svg",{style:{aspectRatio:1,height:24},viewBox:"0 0 177 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M49.66 0C77.0866 0 99.3184 22.387 99.3184 50.0008C99.3184 77.6147 77.0849 100 49.66 100C22.2352 100 0 77.6147 0 50.0008C0 22.387 22.2335 0 49.66 0ZM128.964 2.92892C142.677 2.92892 153.794 24.0016 153.794 50.0008H153.795C153.795 75.9933 142.679 97.0728 128.965 97.0728C115.252 97.0728 104.135 75.9933 104.135 50.0008C104.135 24.0084 115.25 2.92892 128.964 2.92892ZM167.345 7.83182C172.167 7.83182 176.078 26.7112 176.078 50.0008C176.078 73.2837 172.169 92.1699 167.345 92.1699C162.521 92.1699 158.614 73.2888 158.614 50.0008C158.614 26.7129 162.523 7.83182 167.345 7.83182Z",fill:"rgb(var(--color-on-background))"})})})]}),(0,r.jsxs)("span",{className:D()["photo-creds"],children:["Photo by"," ",(0,r.jsx)("a",{target:"_blank",href:"https://unsplash.com/@otohp_by_sakul?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Luk\xe1š Vaň\xe1tko"})," ","on"," ",(0,r.jsx)("a",{target:"_blank",href:"https://unsplash.com/photos/green-trees-and-mountains-during-sunrise-GCNj1_tsAdE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Unsplash"})]})]}),I=e=>(0,r.jsxs)("div",{className:a().window,children:[(0,r.jsx)(P,{}),(0,r.jsx)(Y,{})]}),q=e=>{let[t,n]=(0,i.useState)(!0);return(0,i.useEffect)(()=>(document.body.classList.add("body-with-img"),setTimeout(()=>{n(void 0)},400),()=>{document.body.classList.remove("body-with-img")}),[]),(0,r.jsxs)("div",{className:f(p,s().blur,t?s().invisible:"","dark-theme"),children:[(0,r.jsx)("div",{className:t?s()["blank-space"]:s()["blank-space-collapsed"]}),(0,r.jsx)(I,{})]})}},8352:function(e){e.exports={"auto-scroll":"css_auto-scroll___7YtI",center:"css_center__3le8E"}},2663:function(e){e.exports={logo:"ArchGeminiFromKPVERSE_logo__LzMZf","logo-squircle":"ArchGeminiFromKPVERSE_logo-squircle__F_RET"}},1151:function(e){e.exports={extra:"Extra_extra__LM5tw",copyright:"Extra_copyright__pTS2X","follow-us":"Extra_follow-us__WNHG1",social:"Extra_social__My5E4","photo-creds":"Extra_photo-creds__v4trV"}},3693:function(e){e.exports={form:"Form_form__XQtE8",description:"Form_description__ZXNh5"}},8417:function(e){e.exports={os:"OS_os__GOUp2",options:"OS_options__1GTu_",selected:"OS_selected__skWrI"}},4718:function(e){e.exports={rcmnd:"Recommend_rcmnd__MT39_",txt:"Recommend_txt__scdyz",input:"Recommend_input__c4LLH",list:"Recommend_list__9Y7ZW","list-item":"Recommend_list-item__MmP5C","remove-option":"Recommend_remove-option__Da3bo"}},4476:function(e){e.exports={error:"RegisterBtn_error__ntN4_",txt:"RegisterBtn_txt__Kz9hY",btn:"RegisterBtn_btn__pW8Z8"}},8504:function(e){e.exports={window:"Window_window__bAtlU"}},2890:function(e){e.exports={input:"css_input__3w_sn",border:"css_border__XRSIl",background:"css_background__n0Tpr"}},4542:function(e){e.exports={blur:"main_blur__JfS33",invisible:"main_invisible__Qhdhk","blank-space":"main_blank-space__YAste","blank-space-collapsed":"main_blank-space-collapsed__B7huu"}}},function(e){e.O(0,[757,971,69,744],function(){return e(e.s=564)}),_N_E=e.O()}]);