module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "View",
    style: {
        borderColor: "green",
        borderWidth: 0
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        borderColor: "blue",
        borderWidth: 0
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "TextArea",
    style: {
        borderColor: "red",
        borderWidth: 1
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "ImageView",
    style: {
        borderColor: "pink",
        borderWidth: 1
    }
}, {
    isApi: true,
    priority: 1000.0005,
    key: "Window",
    style: {
        backgroundColor: "#fff",
        fullscreen: false
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "acsLoginAccountTxt",
    style: {
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10
    }
} ];