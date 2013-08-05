function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.acslogin/" + s : s.substring(0, index) + "/com.appcelerator.acslogin/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function loginClick() {
        Cloud.Users.login({
            login: $.usernameTxt.value,
            password: $.passwordTxt.value
        }, function(e) {
            1 == e.success ? settings.loginCallback() : $.msgLbl.text = e.message;
        });
    }
    function forgotClick() {
        resetLoginForm();
        animation.fadeOut($.acsLogin, 200, function() {
            $.acsLogin.visible = false;
        });
        $.acsloginPass.visible = true;
        animation.fadeIn($.acsloginPass, 500);
    }
    function remindClick() {
        Cloud.Users.requestResetPassword({
            email: $.emailTxt.value
        }, function(e) {
            if (1 == e.success) {
                $.emailLbl.text = "Password reminder sent";
                animation.fadeOut($.acsloginPass, 200, function() {
                    $.acsloginPass.visible = false;
                });
                $.acsLogin.visible = true;
                animation.fadeIn($.acsLogin, 500);
            } else $.emailLbl.text = "Error: " + e.message;
        });
    }
    function loginlinkClick() {
        animation.fadeOut($.acsloginAccount, 200, function() {
            $.acsloginAccount.visible = false;
        });
        animation.fadeOut($.acsloginPass, 200, function() {
            $.acsloginPass.visible = false;
        });
        $.acsLogin.visible = true;
        animation.fadeIn($.acsLogin, 500);
        $.emailLbl.text = "";
        resetAccountForm();
        resetEmailForm();
    }
    function createAccountClick() {
        resetLoginForm();
        animation.fadeOut($.acsLogin, 200, function() {
            $.acsLogin.visible = false;
        });
        $.acsloginAccount.visible = true;
        animation.fadeIn($.acsloginAccount, 500);
    }
    function createClick() {
        Cloud.Users.create({
            username: $.usernameNew.value,
            password: $.passwordNew.value,
            email: $.usernameNew.value,
            password_confirmation: $.passwordConfirm.value
        }, function(e) {
            $.accountLbl.text = 1 == e.success ? "Account Created!" : "Error: " + e.message;
        });
    }
    function resetEmailForm() {
        $.emailLbl.text = "";
        $.emailTxt.value = "";
    }
    function resetAccountForm() {
        $.accountLbl.text = "";
        $.usernameNew.value = "";
        $.passwordNew.value = "";
        $.passwordConfirm.value = "";
    }
    function resetLoginForm() {
        $.msgLbl.text = "";
        $.usernameTxt.value = "";
        $.passwordTxt.value = "";
    }
    new (require("alloy/widget"))("com.appcelerator.acslogin");
    this.__widgetId = "com.appcelerator.acslogin";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.acsloginMain = Ti.UI.createView({
        borderColor: "green",
        borderWidth: 0,
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        id: "acsloginMain"
    });
    $.__views.acsloginMain && $.addTopLevelView($.__views.acsloginMain);
    $.__views.acsLogin = Ti.UI.createView({
        borderColor: "green",
        borderWidth: 0,
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "acsLogin"
    });
    $.__views.acsloginMain.add($.__views.acsLogin);
    $.__views.msgLbl = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        bottom: 10,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "14dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636",
        width: "80%",
        id: "msgLbl"
    });
    $.__views.acsLogin.add($.__views.msgLbl);
    $.__views.usernameTxt = Ti.UI.createTextField({
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10,
        hintText: "Username",
        id: "usernameTxt"
    });
    $.__views.acsLogin.add($.__views.usernameTxt);
    $.__views.passwordTxt = Ti.UI.createTextField({
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10,
        hintText: "Password",
        passwordMask: true,
        id: "passwordTxt"
    });
    $.__views.acsLogin.add($.__views.passwordTxt);
    $.__views.loginBtn = Ti.UI.createButton({
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
        width: "80%",
        title: "Login",
        id: "loginBtn"
    });
    $.__views.acsLogin.add($.__views.loginBtn);
    loginClick ? $.__views.loginBtn.addEventListener("click", loginClick) : __defers["$.__views.loginBtn!click!loginClick"] = true;
    $.__views.passwordLbl = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        bottom: 10,
        color: "#fff",
        font: {
            fontSize: "12dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636",
        text: "Forgot your password?",
        id: "passwordLbl"
    });
    $.__views.acsLogin.add($.__views.passwordLbl);
    forgotClick ? $.__views.passwordLbl.addEventListener("click", forgotClick) : __defers["$.__views.passwordLbl!click!forgotClick"] = true;
    $.__views.accountBtn = Ti.UI.createButton({
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
        width: "80%",
        title: "Create Account",
        id: "accountBtn"
    });
    $.__views.acsLogin.add($.__views.accountBtn);
    createAccountClick ? $.__views.accountBtn.addEventListener("click", createAccountClick) : __defers["$.__views.accountBtn!click!createAccountClick"] = true;
    $.__views.acsloginPass = Ti.UI.createView({
        borderColor: "green",
        borderWidth: 0,
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "vertical",
        opacity: 0,
        visible: false,
        id: "acsloginPass"
    });
    $.__views.acsloginMain.add($.__views.acsloginPass);
    $.__views.emailLbl = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        bottom: 10,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "14dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636",
        width: "80%",
        id: "emailLbl"
    });
    $.__views.acsloginPass.add($.__views.emailLbl);
    $.__views.emailTxt = Ti.UI.createTextField({
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10,
        hintText: "Email",
        id: "emailTxt"
    });
    $.__views.acsloginPass.add($.__views.emailTxt);
    $.__views.emailBtn = Ti.UI.createButton({
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
        width: "80%",
        title: "Remind Me!",
        id: "emailBtn"
    });
    $.__views.acsloginPass.add($.__views.emailBtn);
    remindClick ? $.__views.emailBtn.addEventListener("click", remindClick) : __defers["$.__views.emailBtn!click!remindClick"] = true;
    $.__views.loginLbl = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        bottom: 10,
        color: "#fff",
        font: {
            fontSize: "12dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636",
        text: "Login",
        id: "loginLbl"
    });
    $.__views.acsloginPass.add($.__views.loginLbl);
    loginlinkClick ? $.__views.loginLbl.addEventListener("click", loginlinkClick) : __defers["$.__views.loginLbl!click!loginlinkClick"] = true;
    $.__views.acsloginAccount = Ti.UI.createView({
        borderColor: "green",
        borderWidth: 0,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "transparent",
        layout: "vertical",
        opacity: 0,
        visible: false,
        id: "acsloginAccount"
    });
    $.__views.acsloginMain.add($.__views.acsloginAccount);
    $.__views.accountLbl = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        bottom: 10,
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "14dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636",
        width: "80%",
        id: "accountLbl"
    });
    $.__views.acsloginAccount.add($.__views.accountLbl);
    $.__views.usernameNew = Ti.UI.createTextField({
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10,
        hintText: "Email",
        id: "usernameNew"
    });
    $.__views.acsloginAccount.add($.__views.usernameNew);
    $.__views.passwordNew = Ti.UI.createTextField({
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10,
        hintText: "Password",
        passwordMask: true,
        id: "passwordNew"
    });
    $.__views.acsloginAccount.add($.__views.passwordNew);
    $.__views.passwordConfirm = Ti.UI.createTextField({
        color: "#363636",
        height: "32dp",
        width: "80%",
        backgroundColor: "transparent",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        font: {
            fontSize: "14dp"
        },
        bottom: 10,
        hintText: "Confirm Password",
        passwordMask: true,
        id: "passwordConfirm"
    });
    $.__views.acsloginAccount.add($.__views.passwordConfirm);
    $.__views.createBtn = Ti.UI.createButton({
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
        width: "80%",
        title: "Create Account",
        id: "createBtn"
    });
    $.__views.acsloginAccount.add($.__views.createBtn);
    createClick ? $.__views.createBtn.addEventListener("click", createClick) : __defers["$.__views.createBtn!click!createClick"] = true;
    $.__views.loginLbl = Ti.UI.createLabel({
        borderColor: "blue",
        borderWidth: 0,
        bottom: 10,
        color: "#fff",
        font: {
            fontSize: "12dp"
        },
        shadowOffset: 1,
        shadowColor: "#363636",
        text: "Login",
        id: "loginLbl"
    });
    $.__views.acsloginAccount.add($.__views.loginLbl);
    loginlinkClick ? $.__views.loginLbl.addEventListener("click", loginlinkClick) : __defers["$.__views.loginLbl!click!loginlinkClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Cloud = require("ti.cloud");
    var animation = require("alloy/animation");
    var settings = {
        loginCallback: null,
        createCallback: null
    };
    exports.init = function(params) {
        settings.loginCallback = params.loginCallback;
    };
    __defers["$.__views.loginBtn!click!loginClick"] && $.__views.loginBtn.addEventListener("click", loginClick);
    __defers["$.__views.passwordLbl!click!forgotClick"] && $.__views.passwordLbl.addEventListener("click", forgotClick);
    __defers["$.__views.accountBtn!click!createAccountClick"] && $.__views.accountBtn.addEventListener("click", createAccountClick);
    __defers["$.__views.emailBtn!click!remindClick"] && $.__views.emailBtn.addEventListener("click", remindClick);
    __defers["$.__views.loginLbl!click!loginlinkClick"] && $.__views.loginLbl.addEventListener("click", loginlinkClick);
    __defers["$.__views.createBtn!click!createClick"] && $.__views.createBtn.addEventListener("click", createClick);
    __defers["$.__views.loginLbl!click!loginlinkClick"] && $.__views.loginLbl.addEventListener("click", loginlinkClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;