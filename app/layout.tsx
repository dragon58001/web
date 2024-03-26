import Link from "next/link";
import "../styles/globals.css";
import config from "../components/config.json";
import Script from "next/script";
import AdsTop from "../components/adsense/top";

export const metadata = {
  title: config.sitename,
  description: config.desc,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

const header = (
  <header>
    <div className="p-4 my-6 text-center rounded-md bg-slate-800">
      <Link href="/">
        <div className="text-2xl font-bold text-white">{config.sitename}</div>
      </Link>
    </div>
  </header>
);

const footer = (
  <footer>
    <div className="py-6 mt-12 text-center border-t border-slate-400 text-slate-400">
      <h3>{config.sitename}</h3>
    </div>
  </footer>
);

  return (
    <html>
      <head>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5738026098468973"
        />
      </head>
      <body>
        <div className="max-w-2xl px-6 mx-auto">
          {header}
          <AdsTop />
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
