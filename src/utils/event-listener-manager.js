const m = require("mithril");

module.exports = {
    manageEventListenerOnPicture: function (element, vnode) {
        if (element.complete && element.naturelHeight !== 0) {
            vnode.state.mounted = true;
            element.removeEventListener("load", () => manageEventListenerOnPicture(element, vnode));
            m.redraw();
        }
    },
    manageEventOnInifitePage: function (PicturesApi) {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            PicturesApi.loadList();
        }
    }
};
