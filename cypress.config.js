const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://onedailynugget.com",
  },
  
    "env": {
      "MAILSLURP_API_KEY": 'fc15634ba596d29067409244c7ebed77de4cffdab60ba1ca449c088ace31275c'
    }
  
}); 
