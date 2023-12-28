export class Description extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${headerStyle}</style>
      <div class="description">
        <span>Ryuichi Sakamoto</span>, Japanese composer, pianist, singer,
        record producer and actor who has pursued a diverse range of s tyles as
        a solo artist and as a member of Yellow Magic Orchestra (YMO).
      </div>
      <div class="nonstop-text">
        <div class="nonstop-text--scrolling">
           負けたら終わりじゃなくて。やめたら終わりなんだよね。
        </div>
      </div>`;
  }
}

const headerStyle = `
  
.description {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 60rem;
    height: 28rem;
    font-size: 1.6rem;
    transition: all 0.3s;
    color: white;
  }
  .description span {
    font-size: 3rem;
    font-weight: 700;
  }
  .description:hover {
    transform: translateY(-6rem);
  }
  .nonstop-text {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60rem;
    padding: 2rem;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1rem;
    display: flex;
    justify-content: flex-start;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    align-items: center;
  }
  .nonstop-text--scrolling {
    width: 100%;
    position: absolute;
    text-align: start;
    white-space: nowrap;
    animation: moveInfinite 22s linear;
    animation-delay: 0.2s;
  }
  
  @keyframes moveInfinite {
    0% {
      left: 0%;
    }
    100% {
      left: 100%;
    }
  }
  `;
