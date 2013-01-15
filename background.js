// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	var str ="(function(){var readStyle='style-newspaper';var readSize='size-large';var readMargin='margin-wide';var _readability_script=document.createElement('SCRIPT');_readability_script.type='text/javascript';_readability_script.src='http://q2.xiaoqianbao.com/r/js/readability.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(_readability_script);_readability_css=document.createElement('LINK');_readability_css.rel='stylesheet';_readability_css.href='http://q2.xiaoqianbao.com/r/css/readability.css';_readability_css.type='text/css';_readability_css.media='screen';document.getElementsByTagName('head')[0].appendChild(_readability_css);_readability_print_css=document.createElement('LINK');_readability_print_css.rel='stylesheet';_readability_print_css.href='http://q2.xiaoqianbao.com/r/css/readability-print.css';_readability_print_css.media='print';_readability_print_css.type='text/css';document.getElementsByTagName('head')[0].appendChild(_readability_print_css);})();";
  chrome.tabs.executeScript(
  	null,{code:str});
});

/**
var i = 0;
window.setInterval(function() {
  chrome.browserAction.setBadgeText({text:String(i)});
  i++;
}, 10);
*/
