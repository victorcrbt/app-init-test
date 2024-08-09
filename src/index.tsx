import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Bootstrap } from "./Bootstrap";
import {
  EnvironmentConfigAdapter,
  RumAdapter,
  SessionReplayAdapter,
  LoggerAdapter,
  AppsFlyerAdapter,
  DatabaseAdapter,
  FirebaseAdapter,
} from "./modules";

const environmentConfig = new EnvironmentConfigAdapter();
const appsflyer = new AppsFlyerAdapter();
const database = new DatabaseAdapter();
const firebase = new FirebaseAdapter();
const rum = new RumAdapter();
const sessionReplay = new SessionReplayAdapter();
const logger = new LoggerAdapter();

const bootstrap = new Bootstrap();
bootstrap.addTask(environmentConfig.init, { name: "EnvironmentConfig" }); // 2s
bootstrap.addTask(appsflyer.init, { name: 'AppsFlyer', dependsOn: 'Firebase' }); // 2s
bootstrap.addTask(firebase.init, { name: 'Firebase' }); // 3s
bootstrap.addTask(database.init, { name: 'Database', dependsOn: 'Firebase' }); // 0.5s
bootstrap.addTask(rum.init, { name: "Rum" }); // 2s
bootstrap.addTask(sessionReplay.init, { // 2s
  name: "SessionReplay",
  dependsOn: "Logger",
});
bootstrap.addTask(logger.init, { name: "Logger", dependsOn: "Rum" }); // 1s
bootstrap.run(); // Tempo total = 7s

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
