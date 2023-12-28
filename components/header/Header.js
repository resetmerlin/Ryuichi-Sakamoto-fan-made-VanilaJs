export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>${headerStyle}</style>
    <header class='header'>
        <div class='header__logo'>
            <a href='index.html' class='header__title' class='logo'>
            Ryuichi Sakamoto
            </a>
        </div>
        <nav>
            <ul class='header__navigation flex'>
            <li class='active'>
                <a href='songs.html'>Songs</a>
            </li>

            <li>
                <a href='#'> About</a>
            </li>
            <li>
                <a href='#'>How to use</a>
            </li>
            <li>
                <a href='#'>Services</a>
            </li>
            </ul>
        </nav>
    </header>`;
  }
}

const headerStyle = `
.header {
    width: 100%;
    position: relative;
    top: 0;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000;
  }
  .header__logo {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    margin-left: 10rem;
  }
  .header__logo a {
    text-decoration: none;
    color: #fff;
    transition: all 0.5s ease;
  }

  .header__navigation {
    display: flex;
    list-style: none;
    padding: 1.5rem 0;
  }
  .header__navigation a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #fff;
  }
  .header__navigation li {
    margin: 0 2rem;
    display: inline-block;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  .header li:hover {
    transform: translateY(-1rem) scale(1.03);
    border-bottom: 1px solid #fff;
  }

`;
