/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const styles = {
  navbar: css`
    padding: 20px;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
  `,
  heading: css`
    color: #f1356d;
  `,
  links: css`
    margin-left: auto;
  `,
  a: css`
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
    &:hover {
      color: #f1356d;
    }
  `,
};

const Navbar = () => {
  return (
    <nav css={styles.navbar}>
      <h1 css={styles.heading}>The Dojo Blog</h1>
      <div css={styles.links}>
        <a href="/" css={styles.a}>
          Home
        </a>
        <a href="/create" css={styles.a}>
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
