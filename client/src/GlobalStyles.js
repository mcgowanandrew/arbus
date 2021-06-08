import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`



  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
  }
///
  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text {
    font-family:  sans-serif;
   
  }

  html, body {
      /* max-width: 100vw;
      font-weight: 300; */
      /* font-size: 10px; */
  }


  



  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
     
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }



  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
//Global styles

a{
    text-decoration: none;
}
  html, body {
      /* max-width: 100vw;
      font-size: 10px; */
      /* background-color: #3F3F3F; */

  }
  h1{
      /* font-weight: 500;
      font-size: 3.0rem; */
/*  */
  }
  h2{
    /* font-weight: 500;
    font-size: 2.0rem; */
}
p,section{
    /* font-weight:400;
    font-size: 1.6rem; */
}
`;
