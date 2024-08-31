const oldGeniusPageQueryParam = "?bagon=1";

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: [{
      id: 1,
      priority: 1,
      action: {
        type: 'redirect',
        redirect: {
          transform: {
            queryTransform: {
              addOrReplaceParams: [{
                key: "bagon",
                value: "1"
              }]
            }
          }
        },
      },
      condition: {
        regexFilter: 'genius\.com\/[a-zA-Z0-9-]+-(lyrics|annotated)',
        resourceTypes: ['main_frame']
      },
    }],
  });
});
