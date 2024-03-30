import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";


const GlobalStyle = createGlobalStyle`
/* font samim*/
@font-face {
  font-family: 'samim';
  src: url('/assets/fonts/Samim-FD.woff2') format('woff2'),
       url('/assets/fonts/Samim-FD.woff') format('woff'),
       url('/assets/fonts/Samim-FD.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: 'samim';
  src: url('/assets/fonts/Samim-Bold-FD.woff2') format('woff2'),
       url('/assets/fonts/Samim-Bold-FD.woff') format('woff'),
       url('/assets/fonts/Samim-Bold-FD.ttf') format('truetype');
  font-weight: bold;
}
@font-face {
    font-family: "SamimEn";
    src: url("/assets/fonts/Samim.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
body,html{
  /* overflow-x:scroll; */
  font-family:'samim';
  padding-right: 0!important;
  padding-left: 0!important;
  margin: 0;
  font-size: 14px;
  direction:rtl;
  scroll-behavior: smooth;
  background-color: #fcfcfc;
}
div, p, span {
    user-select: none;
}
  header#header {
    border-radius: 0 0 35px 35px;
    min-height: 120px;
    max-height: 243px;
    background-color: ${colors.primary};
  }
ul{
  padding: 0;
  margin: 0;
  li{
    list-style-type: none;
  }
}
/* global classes */
.preLineSpace{
  white-space:pre-line;
}
.rtl{
  direction: rtl !important;
}
.ltr{
  direction: ltr !important;
}
/* tags css config */
h1,h2,h3,h4,h5,h6{
    font-weight: bold;
    color: ${colors.dark};
}
a{
  color: ${colors.gray};
  text-decoration:none;
  display:block;
}
p,label{
  color:${colors.gray};
  font-size:1rem;
}
img{
  width: 100%;
  height: auto;
}
`

export default GlobalStyle;