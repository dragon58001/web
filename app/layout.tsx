import Link from "next/link";
import "../styles/globals.css";
import config from "../components/config.json";
import Script from "next/script";
import AdsTop from "../components/adsense/top";
import AdsSidebar from "../components/adsense/sidebar";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";

export const metadata = {
  title: config.sitename,
  description: config.desc,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="p-4 my-6 text-center rounded-md bg-slate-800">
        <Link href="/">
          <div className="text-2xl font-bold text-white">{config.sitename.replace("Download ",'')}</div>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="py-6 mt-12 text-center border-t border-slate-400 text-slate-700">
        <h3>{config.sitename}</h3>
      </div>
    </footer>
  );

  return (
    <html lang="id">
      <head>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5738026098468973"
        />
        <GoogleAnalytics GA_TRACKING_ID="G-JRBC9V68YF" />
      </head>
      <body>
        <div className="relative max-w-2xl px-6 mx-auto">
          {header}
          <AdsTop />
          {children}
          <div className="lg:absolute min-h-full top-0 -right-80  w-[300px]">
            <div className="sticky w-full mx-2 top-5">
              <AdsSidebar />
            </div>
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}
