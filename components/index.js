import { Description } from './description/Description.js';
import { Donut } from './donut/Donut.js';
import { Header } from './header/Header.js';
import { Phone } from './phone/Phone.js';
import { Song } from './song/Song.js';

customElements.define('custom-header', Header);
customElements.define('custom-donut', Donut);
customElements.define('custom-description', Description);
customElements.define('custom-song', Song);
customElements.define('custom-phone', Phone);
