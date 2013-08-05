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
    priority: 10000.0014,
    key: "acsLoginTxt",
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
}, {
    isClass: true,
    priority: 10000.0016,
    key: "acsLoginBtn",
    style: {
        bottom: 10,
        color: "#fff",
        backgroundColor: "#ba3b56",
        borderRadius: 5,
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        backgroundImage: "/images/com.appcelerator.acslogin/button5.png",
        height: "32dp",
        width: "80%"
    }
}, {
    isClass: true,
    priority: 10000.0018,
    key: "acsloginLbl",
    style: {
        bottom: 10,
        color: "#fff",
        font: {
            fontSize: "12dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636"
    }
}, {
    isClass: true,
    priority: 10000.0019,
    key: "acsloginMsg",
    style: {
        bottom: 10,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "14dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636",
        width: "80%"
    }
}, {
    isClass: true,
    priority: 10101.0017,
    key: "acsloginBtn",
    style: {
        style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "acsloginMain",
    style: {
        backgroundColor: "transparent",
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "acsLogin",
    style: {
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical"
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "acsloginPass",
    style: {
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical",
        opacity: 0,
        visible: false
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "acsloginAccount",
    style: {
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "transparent",
        layout: "vertical",
        opacity: 0,
        visible: false
    }
}, {
    isId: true,
    priority: 100000.002,
    key: "usernameTxt",
    style: {
        hintText: "Username"
    }
}, {
    isId: true,
    priority: 100000.0021,
    key: "passwordTxt",
    style: {
        hintText: "Password",
        passwordMask: true
    }
}, {
    isId: true,
    priority: 100000.0022,
    key: "emailTxt",
    style: {
        hintText: "Email"
    }
}, {
    isId: true,
    priority: 100000.0023,
    key: "usernameNew",
    style: {
        hintText: "Email"
    }
}, {
    isId: true,
    priority: 100000.0024,
    key: "passwordNew",
    style: {
        hintText: "Password",
        passwordMask: true
    }
}, {
    isId: true,
    priority: 100000.0025,
    key: "passwordConfirm",
    style: {
        hintText: "Confirm Password",
        passwordMask: true
    }
} ];