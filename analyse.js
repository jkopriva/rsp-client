const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "https://sonarcloud.io",
    options: {
      "sonar.projectKey": "jkopriva_rsp-client",
      "sonar.organization": "jkopriva-github",
      "sonar.login": "758f88a6ffd475c3c87ee97ac348c247c4b0ca9a",
      "sonar.typescript.tslint.reportPaths": "report.json",
      "sonar.projectVersion": "0.13.1",
      "sonar.sources": "src",
      "sonar.tests": "test",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => {
    // callback is required
  }
);