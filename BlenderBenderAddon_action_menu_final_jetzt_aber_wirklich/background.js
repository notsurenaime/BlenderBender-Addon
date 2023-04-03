chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({message: 'Hello'}, function() {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        console.log('Message saved.');
      }
    });
  });
  
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.local.get('message', function(result) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        var message = result.message || 'Hello';
        var popup = chrome.runtime.getURL('popup.html');
        chrome.browserAction.setPopup({tabId: tab.id, popup: popup}, function() {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          } else {
            console.log('Popup set.');
          }
        });
        chrome.tabs.executeScript(tab.id, {code: 'alert("' + message + '");'}, function() {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
          } else {
            console.log('Script executed.');
          }
        });
      }
    });
  });
  