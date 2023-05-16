import "@styles/globals.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";

export const metadata = {
  title: "promptopia",
  description: "discover and share ai Promps",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {" "}
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
