/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/airdit/MS_M/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});