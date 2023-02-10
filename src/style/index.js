// @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  border: 0;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
input,
legend,
li,
ol,
p,
select,
table,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font-size: 16px;
  line-height: 18px;
  color: #333;

  /* font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Malgun Gothic",
    "맑은 고딕", helvetica, "Apple SD Gothic Neo", sans-serif; */
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  line-height: inherit;
}
textarea {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: transparent;
  border: 0;
  word-break: keep-all;
  word-wrap: break-word;
}
button,
input {
  -webkit-border-radius: 0;
  border-radius: 0;
  border: 0;
}
button {
  background-color: transparent;
  cursor: pointer;
}
fieldset,
img {
  border: 0;
}
img {
  vertical-align: top;
}
ol,
ul {
  list-style: none;
}
address,
em {
  font-style: normal;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
iframe {
  overflow: hidden;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: top;
}
mark {
  background-color: transparent;
}
i {
  font-style: normal;
}
div {
  box-sizing: border-box;
}

main {
  display: block;
}

a:hover {
  text-decoration: none;
}
`;

export default GlobalStyle;