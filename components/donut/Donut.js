export class Donut extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${donutStyle}</style>
      <div class="donut__circle-effect">
        <div class="donut__img"></div>
        <div class="donut__circle-effect--innerBlurr"></div>
      </div>
    `;
  }
}

const donutStyle = `
    .donut__img {
      padding: 10rem;
      position: absolute;
      top: 19%;
      left: 18%;
      background-image: url(/img/background-removebg.png);
      width: 32rem;
      height: 33rem;
      background-position: center;
      background-size: cover;
      z-index: 1;
      cursor: pointer;
      transition: all 0.3s ease;

      }
      .donut__img:hover {
        transform: scale(1.1);
        border-radius: 50%; 
      }
    .donut__circle-effect {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, transparent 0%, #000 100%);
      padding: 0 10rem;
      top: 6%;
      left: 9%;
      width: 47rem;
      height: 67rem;
      }
  
      .donut__circle-effect--innerBlurr {
        position: absolute;
        border-radius: 50%;
        top: 14%;
        left: 15%;
        width: 49rem;
        height: 49rem;
        background-image: linear-gradient(to left bottom, rgba(0, 0, 0, 0.6), black), url(/img/images2.jpg);
        box-shadow: 0rem 0rem 8rem 2rem rgba(255, 255, 255, 0.4);
        background-size: cover;
        background-position: center;
        z-index: 0;
        display: flex;
        align-items: center;
      }
  
      .donut__circle-effect:hover {
        background: radial-gradient(circle, transparent 60%, #fff 30%);
        box-shadow: 0rem 0rem 10rem 10rem rgba(255, 255, 255, 0.3); }
  
      .donut__circle-effect:hover .donut__circle-effect--innerBlurr {
        box-shadow: rgba(255, 255, 255, 0.9) 0rem 2.2rem 3rem 1rem; }
  
  `;
