import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
    --bg: #111515;
    --bg-card: #2a2e2e;
    --text-primary: #dfe3f2;
    --text-secondary: #eb3b5a;
    --image-shade: linear-gradient(
        0deg,
        rgba(235, 59, 90, 0.12),
        rgba(235, 59, 90, 0.12)
      );
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    font-size: 1.8rem;
  }

  body {
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
    background: var(--bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2325262a' fill-opacity='0.21'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;
