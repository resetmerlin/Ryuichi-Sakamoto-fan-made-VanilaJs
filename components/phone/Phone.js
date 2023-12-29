export class Phone extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${phoneStyle}</style>
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

const phoneStyle = `

.box {
  position: absolute;
  left: 68%;
  top: 15%;
  width: 57rem;
  height: 110rem;
  background-color: #666666;
  border-radius: 10rem;
  box-shadow: 0px 5px 10rem 5px rgba(255, 255, 255, 0.7);
  z-index: 10;
}
.box::before {
  content: '';
  position: absolute;
  inset: 0.1rem;
  background-color: #6b6a6a;
  border-radius: 10rem;
}
.box .inner {
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset,
    rgba(0, 0, 0, 0.5) 0px -50px 36px -28px inset;
  position: absolute;
  inset: 0.2rem;
  background-color: white;
  background-size: cover;
  background-position: center;
  border-radius: 10rem;
  height: auto;
  border: 2rem solid #000;
  display: flex;
  justify-content: center;
  opacity: 1;
  transition: 0.5s;
}
.box .inner .icons {
  display: flex;
  align-items: center;
  position: absolute;
  justify-content: center;
  top: 1.8%;
  right: 12%;
  font-size: 3.8rem;
}
.box .inner .icons .bxs-battery {
  margin-top: 1rem;
  font-size: 3.5rem;
}
.box .inner .icons .bx-signal-4 {
  margin-right: -1rem;
}
.box .inner .island_popup {
  position: absolute;
  top: 2rem;
  width: 16rem;
  height: 5rem;
  background-color: #000;
  border-radius: 10rem;
  transition: 0.5s ease-in-out;
}
.box:hover .inner {
  opacity: 1;
}
.box .btn {
  position: absolute;
  top: 17rem;
  left: -0.7rem;
  width: 0.5rem;
  height: 6rem;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  background: radial-gradient(rgba(160, 160, 160, 0.726), #5c5c5c, #252525);
  z-index: 10;
}
.box .btn.btn2 {
  top: 30rem;
  height: 8rem;
}
.box .btn.btn3 {
  top: 41rem;
  height: 8rem;
}
.box .rightSideBtn {
  position: absolute;
  top: 25rem;
  right: -0.3rem;
  width: 0.5rem;
  height: 12rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background: radial-gradient(rgba(160, 160, 160, 0.726), #5c5c5c, #252525);
  z-index: 10;
}
  `;
