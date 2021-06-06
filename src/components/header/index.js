const m = require("mithril");

require("./style.css");

function Header() {
    const logo = "../../../assets/pictures/sparted-180.png";

    return {
        view: function() {
            return m("div", { class: "header" }, [
                m("img", { class: "logo", src: logo, alt: "Sparted logo" }),
            ]);
        }
    }
}

module.exports = Header;
