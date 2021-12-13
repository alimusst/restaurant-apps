import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this.__button = button;
    this.__drawer = drawer;
    this.__content = content;

    this.__initialAppShell();
  }

  __initialAppShell() {
    DrawerInitiator.init({
      button: this.__button,
      drawer: this.__drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.__content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
