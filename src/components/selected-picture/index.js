const m = require("mithril");

require("./style.css");

function SelectedPicture() {
    return {
        view: function(vnode) {
            return m("div", {
                class: "selected-picture-container",
                onclick: function() {
                    vnode.attrs.action()
                }
            }, [
                m("img", {
                    class: "selected-picture",
                    src: vnode.attrs.pic ? vnode.attrs.pic.download_url : "",
                    alt: "Selected picture"
                }),
            ]);
        }
    }
}

module.exports = SelectedPicture;
