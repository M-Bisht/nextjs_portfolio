import Nav from "./global/comps/Nav";
import "./global/global.css";

export const metadata = {
  title: "Mayank Bisht",
  description: "Hi, I am Mayank Bisht. A young generation Full Stack Developer",
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
