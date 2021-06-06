const m = require("mithril");

require("./style.css");

const Picture = require("../picture");
const PicturesApi = require("../../api-services/pictures-list");

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        PicturesApi.loadList();
    }
});

const PicturesList = {
    oninit: PicturesApi.loadList,
    view: function(vnode) {
        return m("div", { class: "container-imgs" }, 
            PicturesApi.list.map((picture, index) => {
                return m(Picture, {
                    ...picture,
                    index: index,
                    action: vnode.attrs.action,
                    key: index,
                });
            })
        );    
    }
}

module.exports = PicturesList;
