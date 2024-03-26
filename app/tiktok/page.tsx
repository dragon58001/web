import Tiktok from './tiktok'
import config from "../../components/config.json";

export const metadata = {
  title: "TikTok Downloader - Without Watermark Full HD",
  description: "TikTok Downloader - Without Watermark Full HD",
  canonical: config.url,
  openGraph: {
    url: config.url,
    title: config.sitename,
    description: config.desc,
    images: [
      { url: config.logo },
    ],
    siteName: config.sitename,
  }
}

export default function Page(){
  return <Tiktok />
}
