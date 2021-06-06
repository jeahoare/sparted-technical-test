const m = require("mithril");

require("./style.css");

const Loader = require("../loader");

function Picture() {
    return {
        mounted: false,
        oncreate: function(vnode) {
            const element = document.getElementById(vnode.attrs.index);

            element.addEventListener("load", event => {
                vnode.state.mounted = true;
                m.redraw();
            });
        },
        view: function (vnode) {
            return m("div", { class: "div-img" }, [
                m("img", {
                    id: vnode.attrs.index,
                    class: "img-list",
                    onclick: function() {
                        vnode.attrs.action(vnode.attrs.index)
                    },
                    src: vnode.attrs.download_url,
                    loading: "lazy",
                    alt: "Picture of " + vnode.attrs.author,
                    style: (!vnode.state.mounted) ? {
                        width: "100%",
                        minHeight: "300px",
                    } : {}
                }),
                !vnode.state.mounted ? m(Loader) : null,
                m("h5", { class: "author-name" }, vnode.attrs.author ),
            ]);
        }  
    }
}

module.exports = Picture;
