const m = require("mithril");

const mixPictures = require("../utils/pictures-list");

const PicturesApi = {
    list: [],
    loadList: function() {
        m.request({
            method: "GET",
            url: "https://picsum.photos/v2/list?page=" + Math.floor(Math.random() * 11) + "&limit=30",
        })
        .then(function(result) {
            PicturesApi.list = [...PicturesApi.list, ...mixPictures(result)];
        })
    },
}

module.exports = PicturesApi;
