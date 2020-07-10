import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@tw/single-spa-poc",
  app: () => System.import("http://localhost:8080/tw-single-spa-poc.js"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@tw/poc-sspa",
  app: () => System.import("http://localhost:8081/tw-poc-sspa.js"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
