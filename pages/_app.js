import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset } from "../components/style/reset";
import { customClasses } from "../components/style/customClasses";
import { theme } from "../components/style/theme";
import { useEffect, useState } from "react";
import "../components/style/fonts.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${customClasses}
 
  body {
    font-family: agrandir;
  }
  p, h1, h2, h3, h4 {         
    line-height: 1.2;
  }
  strong {
    font-weight: bolder;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.17rem;
  }  
  h4 {
    font-size: 1rem;
  }  
  h5 {
    font-size: 0.8rem;
  }  
`;

export default function App({ Component, pageProps }) {
  const [vh, setVH] = useState(0);

  useEffect(() => {
    setVH(window.innerHeight / 100);
    window.addEventListener("resize", () => {
      setVH(window.innerHeight / 100);
    });
  });

  const goFullscreen = () => {
    let elem = document.getElementById("__next");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, vh }}>
        <Component {...pageProps} />
        <button onClick={goFullscreen}>FULLSCREEN</button>
      </ThemeProvider>
    </>
  );
}
