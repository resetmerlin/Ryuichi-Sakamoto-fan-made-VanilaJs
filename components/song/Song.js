export class Song extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${songStyle}</style>
      <li class="song">
        <img src="/img/img1.jpg" class="song-img" alt="song-img" />
        <div>
            <div class="column flex-start">
            <div class="song-title">Amore</div>
            <div class="song-subtitle">Ryuichi Sakamoto</div>
            </div>
            <i class="bx bx-play-circle music-play"></i>
        </div>
    </li>`;
  }
}

const songStyle = `
 .song{
padding 2rem;
display: flex;
transition: all 0.2s ease-in-out;

    .song-img {
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1rem;
    }

}

  .song:hover {
    background-color: rgba(192, 192, 192, 0.3);
    transform: translateY(-2rem) scale(1.03);
  }

  .song-title {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
  }
  .song-subtitle {
    font-size: 1rem;
    color: #fff;
  }

  
  .music-play {
    color: #fff;
    transition: all 0.4s ease-in-out;
  }
  .music-play:hover {
    transform: rotate(360deg);
  }
  
  `;
