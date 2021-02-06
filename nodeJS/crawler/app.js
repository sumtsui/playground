"use strict";
exports.__esModule = true;
var request_1 = require("../request");
var fs_1 = require("fs");
var path_1 = require("path");
var picDir = path_1["default"].resolve(__dirname, 'pictures');
makeDir(picDir);
// getAlbum(36673, 65);
// getAlbum(36694, 67);
// getAlbum(36664, 68);
// getAlbum(34338, 66);
// getAlbum(34865, 66);
// getAlbum(33666, 60);
getAlbum(34375, 65);
function getAlbum(albumNum, totalPicNum) {
    makeDir(picDir + '/' + albumNum);
    var i = 0;
    while (i <= totalPicNum) {
        getPicture(i, albumNum);
        i++;
    }
}
function getPicture(picNum, albumNum) {
    var picName = picNum + ".jpg";
    request_1.request('tjg.hywly.com', "/a/1/" + albumNum + "/" + picNum + ".jpg")
        .then(function (response) {
        fs_1["default"].writeFile(picDir + '/' + albumNum + '/' + picName, response, function (err) {
            if (err)
                return console.log('fail to save file:', err);
            console.log("successfully saved " + picName);
        });
    })["catch"](function (error) {
        console.log("fail to download " + picName + ":", error);
    });
}
function makeDir(dirname) {
    try {
        if (!fs_1["default"].existsSync(dirname)) {
            fs_1["default"].mkdirSync(dirname);
        }
    }
    catch (err) {
        console.error(err);
    }
}
