import * as React from "react";
// import config from "../../../components/config.json";
import AdsSidebar from "../../../components/adsense/sidebar";
import AdsBot from "../../../components/adsense/bot";
import { redirect } from "next/navigation";

// export async function generateMetadata(props: any) {
//   const url = props.params.url;

//   return {
//     title: "ok",
//     description: "ok",
//     alternates: {
//       canonical: config.url + url,
//     },
//   };
// }

const PostPage = async (props: any) => {
  const url = props.params.url;
  const response = await fetch(
    `https://snapdouyin.app/wp-json/aio-dl/video-data/`,
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: "url=" + Buffer.from(url, "base64").toString("utf-8"),
    }
  );
  const data = await response.json();
  
  if (data.error || data.code) redirect("/tiktok");
  const img = data.thumbnail;
  const dlink = Buffer.from(data.medias[0].url).toString("base64");
  const size = data.medias[0].formattedSize
  return (
    <div className="relative">
      <div className="none lg:absolute min-h-full -right-80 w-[300px]">
        <div className="sticky w-full mx-2 top-10">
          <div>
            <AdsSidebar />
          </div>
        </div>
      </div>
      <article className="">
        <div className="flex flex-col items-center gap-3">
          <img
            className="text-center rounded-lg h-3/5"
            src={img}
            alt="Tiktok"
          />
          <a
            href="/tiktok"
            className="px-4 py-2 text-white transition duration-150 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Download Another Video
          </a>
          <a
            href={`https://dl.muscdn.app/ZGwubXlwdXJ0ZWNoLmNvbQ==/hd/${dlink}`}
            className="px-4 py-2 text-white transition duration-150 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Download Video ({size})
          </a>
        </div>
        <div>
          <AdsBot />
        </div>
        <div className="my-2 prose">
          <h2 className="text-2xl">Download Mypurtech Tiktok</h2>
          <p>
            Download Mypurtech Tiktok adalah alat online yang membantu Anda
            download video dari TikTok tanpa watermark. Download Mypurtech
            Tiktok adalah salah satu TikTok video downloader yang paling populer
            yang dapat membantu anda menyimpan video dari TikTok dengan kualitas
            terbaik, dalam format file MP4 dengan resolusi HD.
          </p>
          <h2 className="text-2xl">Download Video Tiktok</h2>
          <ul className="px-4 list-disc">
            <li>
              <p>
                Buka aplikasi <strong>TikTok</strong> /{" "}
                <strong>TikTok Lite</strong> di HP kamu.
              </p>
            </li>
            <li>
              <p>Cari video yang ingin kamu download.</p>
            </li>
            <li>
              <p>
                Klik tombol <strong>Bagikan</strong>, lalu pilih menu{" "}
                <strong>Salin Tautan</strong>.
              </p>
            </li>
            <li>
              <p>
                Tempel tautan yang telah kamu salin dari aplikasi TikTok ke
                kotak yang disediakan.
              </p>
            </li>
            <li>
              <p>
                Klik tombol <strong>Download</strong>.
              </p>
            </li>
            <li>
              <p>
                Tunggu beberapa saat lalu klik tombol{" "}
                <strong>Download Video</strong>.
              </p>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default PostPage;
