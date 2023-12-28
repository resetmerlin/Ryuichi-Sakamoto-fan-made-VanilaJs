export class Phone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${headerStyle}</style>
      <div class="box">
      <div class="inner">
        <div class="icons">
          <i class="bx bx-signal-4"></i>
          <i class="bx bx-wifi-2"></i>
          <i class="bx bxs-battery"></i>
        </div>

        <div class="island_popup"></div>
        <div class="line"></div>
        <div class="player">
          <div class="wrapper">
            <div class="details">
              <div class="now-playing">PLAYING x OF y</div>
              <div class="track-art"></div>
              <div class="track-name">Track Name</div>
              <div class="track-artist">Track Artist</div>
            </div>

            <div class="slider_container">
              <div class="current-time">00:00</div>
              <input
                type="range"
                min="1"
                max="100"
                value="0"
                class="seek_slider"
                onchange="seekTo()"
              />
              <div class="total-duration">00:00</div>
            </div>

            <div class="slider_container slider_container--last">
              <i class="fa fa-volume-down"></i>
              <input
                type="range"
                min="1"
                max="100"
                value="99"
                class="volume_slider"
                onchange="setVolume()"
              />
              <i class="fa fa-volume-up"></i>
            </div>

            <div class="buttonsMusic">
              <div class="random-track" onclick="randomTrack()">
                <i class="fas fa-random fa-2x" title="random"></i>
              </div>
              <div class="prev-track" onclick="prevTrack()">
                <i class="fa fa-step-backward fa-2x"></i>
              </div>
              <div class="playpause-track" onclick="playpauseTrack()">
                <i class="fa fa-play-circle fa-5x"></i>
              </div>
              <div class="next-track" onclick="nextTrack()">
                <i class="fa fa-step-forward fa-2x"></i>
              </div>
              <div class="repeat-track" onclick="repeatTrack()">
                <i class="fa fa-repeat fa-2x" title="repeat"></i>
              </div>
            </div>

            <div id="wave">
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
              <span class="stroke"></span>
            </div>
          </div>
        </div>
      </div>
      <i class="btn btn1"></i>
      <i class="btn btn2"></i>

      <i class="btn btn3"></i>

      <i class="rightSideBtn"></i>
    </div>`;
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
