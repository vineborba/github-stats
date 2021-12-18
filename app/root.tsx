import type { LinksFunction } from "remix";
import { LiveReload, Outlet, Links } from "remix";

import tailwindStyles from "./tailwind.css";

import AppBar from "./components/AppBar";

export const links: LinksFunction = () => [
    {
      rel: "stylesheet",
      href: tailwindStyles,
    },
  ];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>GitHub Stats</title>
        <Links />
      </head>
      <body>
        <AppBar />
        <Outlet />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
