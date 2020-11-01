import React, { useState, useRef } from "react";

import { ThemeProvider } from "styled-components";
import Burger from "./components/Burger/Burger";
import { useOnClickOutside } from "./components/hooks";
import Menu from "./components/Menu/Menu";
import { GlobalStyles } from "./globaj";
import { theme } from "./theme";

// import { Burger, Menu } from "./components";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
        </div>

        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
