var bundle = [
  "[aurelia-kendoui-bridge]",
  "[aurelia-kendoui-bridge/**/*.js]",
  "aurelia-kendoui-bridge/**/*.html!text",
  "aurelia-after-attached-plugin",
  "aurelia-after-attached-plugin/**/*",
  "text",
  "json",
  "css",
  "aurelia-framework",
  "aurelia-bootstrapper",
  "aurelia-router",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "aurelia-loader-default",
  "aurelia-history-browser",
  "aurelia-logging-console",
  "aurelia-animator-css",
  "aurelia-binding",
  "aurelia-bootstrapper",
  "aurelia-dependency-injection",
  "aurelia-event-aggregator",
  "aurelia-fetch-client",
  "aurelia-framework",
  "aurelia-history",
  "aurelia-history-browser",
  "aurelia-http-client",
  "aurelia-loader",
  "aurelia-loader-default",
  "aurelia-logging",
  "aurelia-logging-console",
  "aurelia-metadata",
  "aurelia-path",
  "aurelia-route-recognizer",
  "aurelia-router",
  "aurelia-task-queue",
  "aurelia-templating",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router"
];

module.exports = {
  "bundles": {
    "bundles/bundle": {
      "includes": bundle,
      "options": {
        "inject": true,
        "minify": true
      }
    }
  }
}
