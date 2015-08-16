// ==UserScript==
// @name          Gakkougurashi
// @namespace     http://gakkougurashi.com/
// @description  fake-Hours
// @author       SYA-KE
// @run-at document-start
// @include       http://gakkougurashi.com/*
// @version       0.1
// ==/UserScript==

Date.prototype.getHours = (function(){return 1;});
