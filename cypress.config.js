const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://onedailynugget.com",
  },
  
    "env": {
      "MAILSLURP_API_KEY": '81281cbe5e9013af98a3c58adfd877e1be598535ea13c1ff027c7f4e89ed7d78'
    }
  
}); 
