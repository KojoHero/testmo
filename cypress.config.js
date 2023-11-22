const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-results.xml',
    jenkinsMode: true,
    outputs: true,
    testCaseSwitchClassnameAndName: true
  }
});

//testmo_api_eyJpdiI6Ik1mcmNNRkM3UlpObjNKdDA0ZS9BSXc9PSIsInZhbHVlIjoiL1JtRktaekUvUXcxellJL25nSnFLTHJ4YjI3c0xGaVA2K3FJZUN1MXg4MD0iLCJtYWMiOiJlNTIyZjQ3ODZmM2Q3OTAxZWM5MzlmOWI3MDJjNDY3OGExNTVjYzQ5NDg5ZDNhYTlhNjQyMzUwMjdkN2E4ZjdlIiwidGFnIjoiIn0=