import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";
import { GlobalStyles } from "./styles/global";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela",
          type: "deposit",
          category: "dev",
          amount: 5000,
          createdAt: new Date("2021-01-10 09:00:00"),
        },
        {
          id: 2,
          title: "Dev",
          type: "withdraw",
          category: "UX",
          amount: 7000,
          createdAt: new Date("2021-01-10 15:35:21"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
