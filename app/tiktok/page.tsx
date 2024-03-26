import Tiktok from './tiktok'
import config from "../../components/config.json";

export const metadata = {
  title: config.sitename,
  description: config.desc,
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
