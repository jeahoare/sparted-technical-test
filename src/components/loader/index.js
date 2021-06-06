const m = require("mithril");

require("./style.css");

function Loader() {
    const loader = "../../../assets/pictures/loader.png";

    return {
        view: function() {
            return m("div", { class: "loader-visible" }, [
                m("img", { class: "loader-logo", src: loader, alt: "loader" })
            ]);
        }
    }
}

module.exports = Loader;
