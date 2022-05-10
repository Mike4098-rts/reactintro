/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Home from "./Home";
import Input from "./Input";
import Navbar from "./Navbar";

const styles = {
  content: css`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  `,
};

function App() {
  return (
    <div className="App">
      <Navbar />

      <div css={styles.content}>
        <Home />
        <Input />
      </div>
    </div>
  );
}

export default App;
