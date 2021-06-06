const m = require("mithril");

require("./style.css");

const PicturesList = require("../components/pictures-list");
const Header = require("../components/header");
const SelectedPicture = require("../components/selected-picture");
const PicturesApi = require("../api-services/pictures-list");

function App() {
    return {
        pictureIndex: null,
        view: function(vnode) {
            return m("div", [
                m(Header),
                m(PicturesList, {
                    action: function(index) {
                        vnode.state.pictureIndex = index;
                    }
                }),
                vnode.state.pictureIndex ? m(SelectedPicture, {
                    pic: PicturesApi.list[vnode.state.pictureIndex],
                    action: function() {
                        vnode.state.pictureIndex = null;
                    }
                }) : null,   
            ]);
        }
    }
}

module.exports = App;
