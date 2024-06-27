const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '8n6iom',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "defaultCommandTimeout" : 10000,
  reporter: 'mochawesome',
  "env":{
    "url":"https://rahulshettyacademy.com"
  }
});

