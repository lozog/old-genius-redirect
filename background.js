const oldGeniusPageQueryParam = "?bagon=1";

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    const searchParams = url.searchParams;

    if (searchParams.getAll("bagon").includes("1")) return;

    if (!(url.pathname.includes("lyrics") || url.pathname.includes("annotated"))) return;

    return { redirectUrl: url.protocol + url.hostname + url.pathname + oldGeniusPageQueryParam };
  },
  {
    urls: [
      "*://genius.com/*",
      "*://www.genius.com/*",
    ],
    types: [
      "main_frame"
    ],
  },
  ["blocking"]
);
