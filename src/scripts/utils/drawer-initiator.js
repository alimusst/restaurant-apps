const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      if (drawer.classList.contains('show-drawer')) {
        button.textContent = '☰';
        button.ariaLabel = 'Show Navigation';
      } else {
        this._toggleDrawer(event, drawer);
        button.textContent = 'X';
        button.ariaLabel = 'Close Navigation';
      }
    });

    document.body.addEventListener('click', (event) => {
      if (event.target.className !== 'show-drawer') {
        this._closeDrawer(event, drawer);
        button.textContent = '☰';
        button.ariaLabel = 'Show Navigation';
      }
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('show-drawer');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('show-drawer');
  },
};

export default DrawerInitiator;
