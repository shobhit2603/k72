import SmoothScrollWrapper from "@/components/common/SmoothScrollWrapper";
import "./globals.css";
import { Stairs } from "@/components/common/Stairs";
import { NavigationWrapper } from "@/components/Navigation/NavigationWrapper";

export const metadata = {
  title: "Home — K72 Agency",
  description: "This is a creative portfolio website for Agence K72",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SmoothScrollWrapper>
          <NavigationWrapper />
          <Stairs>
            {children}
          </Stairs>
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
