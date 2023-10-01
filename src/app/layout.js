import Nav from "./global/comps/Nav";
import "./global/global.css";

export const metadata = {
  title: "Mayank Bisht",
  description:
    "Unlock the future of web experiences with Mayank Bisht, your destination for cutting-edge design and seamless functionality. Discover more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {
          <>
            <Nav />
            {children}
          </>
        }
      </body>
    </html>
  );
}
