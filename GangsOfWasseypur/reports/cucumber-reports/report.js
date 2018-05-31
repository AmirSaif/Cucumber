$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RedBus.feature");
formatter.feature({
  "line": 2,
  "name": "Login to flipkart and search for IPhoneX.",
  "description": "",
  "id": "login-to-flipkart-and-search-for-iphonex.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search for IPhoneX on flipkart.",
  "description": "",
  "id": "login-to-flipkart-and-search-for-iphonex.;search-for-iphonex-on-flipkart.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on \"\u003cflipkart\u003e\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"\u003cMobile_Phones\u003e\" in Search bar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Search\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-to-flipkart-and-search-for-iphonex.;search-for-iphonex-on-flipkart.;",
  "rows": [
    {
      "cells": [
        "flipkart",
        "Mobile_Phones"
      ],
      "line": 12,
      "id": "login-to-flipkart-and-search-for-iphonex.;search-for-iphonex-on-flipkart.;;1"
    },
    {
      "cells": [
        "http://www.flipkart.com",
        "IPhoneX"
      ],
      "line": 13,
      "id": "login-to-flipkart-and-search-for-iphonex.;search-for-iphonex-on-flipkart.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Search for IPhoneX on flipkart.",
  "description": "",
  "id": "login-to-flipkart-and-search-for-iphonex.;search-for-iphonex-on-flipkart.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on \"http://www.flipkart.com\" site",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"IPhoneX\" in Search bar",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Search\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.flipkart.com",
      "offset": 9
    }
  ],
  "location": "Steps.open_the_chrome_and_launch_the_application(String)"
});
formatter.result({
  "duration": 12266015357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IPhoneX",
      "offset": 9
    }
  ],
  "location": "Steps.enter_the_search_item(String)"
});
formatter.result({
  "duration": 237794814,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Reset_the_credential()"
});
formatter.result({
  "duration": 4144124445,
  "status": "passed"
});
formatter.uri("Youtube.feature");
formatter.feature({
  "line": 2,
  "name": "Login to youtube and search for IPhoneX.",
  "description": "",
  "id": "login-to-youtube-and-search-for-iphonex.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search for IPhoneX on youtube.",
  "description": "",
  "id": "login-to-youtube-and-search-for-iphonex.;search-for-iphonex-on-youtube.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on \"\u003cyoutube\u003e\" video site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"\u003cMobile_Phones\u003e\" in Search",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"Search\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-to-youtube-and-search-for-iphonex.;search-for-iphonex-on-youtube.;",
  "rows": [
    {
      "cells": [
        "youtube",
        "Mobile_Phones"
      ],
      "line": 12,
      "id": "login-to-youtube-and-search-for-iphonex.;search-for-iphonex-on-youtube.;;1"
    },
    {
      "cells": [
        "https://www.youtube.com/",
        "IPhoneX"
      ],
      "line": 13,
      "id": "login-to-youtube-and-search-for-iphonex.;search-for-iphonex-on-youtube.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Search for IPhoneX on youtube.",
  "description": "",
  "id": "login-to-youtube-and-search-for-iphonex.;search-for-iphonex-on-youtube.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on \"https://www.youtube.com/\" video site",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Enter \"IPhoneX\" in Search",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click \"Search\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.youtube.com/",
      "offset": 9
    }
  ],
  "location": "youtube.open_the_chrome_and_launch_the_website(String)"
});
formatter.result({
  "duration": 11554943517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IPhoneX",
      "offset": 9
    }
  ],
  "location": "youtube.enter_the_search_item(String)"
});
formatter.result({
  "duration": 205040509,
  "status": "passed"
});
formatter.match({
  "location": "youtube.Reset_the_credential()"
});
formatter.result({
  "duration": 4107964920,
  "status": "passed"
});
});