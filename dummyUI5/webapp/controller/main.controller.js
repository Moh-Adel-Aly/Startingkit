sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast',
    "./BaseController",
    "../model/formatter",

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, JSONModel, MessageToast, BaseController, formatter) {
        "use strict";

        return BaseController.extend("dummyUI5.controller.main", {

            formatter: formatter,

            onInit: function () {
            },

            onSendRequest: function () {
                var sMessage = this.getResourceBundle().getText("sendRequestMessageToastText");
                MessageToast.show(sMessage);
            },

            onShowIcon: function (oEvent) {
                var oIcon = oEvent.getSource().getParent().getParent();
                if (oIcon.aCustomStyleClasses.includes("markProduct")) {
                    oEvent.getSource().setIcon("sap-icon://sys-add");
                    oEvent.getSource().setType("Accept");
                    oIcon.removeStyleClass("markProduct");
                } else {
                    oIcon.addStyleClass("markProduct");
                    oEvent.getSource().setIcon("sap-icon://sys-minus");
                    oEvent.getSource().setType("Reject");
                }
            },

            onShowingTrue: function (oEvent) {
                var oIcon = oEvent.getSource();
                var sSrc = oIcon.getSrc();

                if (sSrc === "sap-icon://accept") {
                    oIcon.setSrc("sap-icon://cart-3");
                    oIcon.setColor("");
                    oIcon.setHoverBackgroundColor("");
                    oIcon.setHoverColor("");
                } else {
                    oIcon.setSrc("sap-icon://accept");
                    oIcon.setColor("green");
                    oIcon.setHoverBackgroundColor("red");
                    oIcon.setHoverColor("red");
                }
            }
        });
    });
