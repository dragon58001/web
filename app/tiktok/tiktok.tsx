'use client'
import { useState } from 'react'
import AdsSidebar from "../../components/adsense/sidebar";
import AdsBot from "../../components/adsense/bot";
import { useRouter } from "next/navigation";

const PostPage = () => {
  const router = useRouter()
  const [route, setRoute] = useState("")
  const handleSubmit = (e:any) => {
      e.preventDefault()
      router.push("/tiktok/" + Buffer.from(route).toString("base64"))
  }
  return (
    <div className="relative">
      <div className="none lg:absolute min-h-full -right-80 w-[300px]">
        <div className="sticky w-full mx-2 top-10">
          <div>
            <AdsSidebar />
          </div>
        </div>
      </div>
      <div className="my-3 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Download Tiktok</h1>
        <p className="my-1 text-base text-slate-600">
          TikTok Downloader Tanpa Watermark HD
        </p>
      </div>
      <article className="prose">
        <form id="submit-form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="videoUrl"
              name="videoUrl"
              placeholder="URL Video TikTok"
              onChange={(e:any)=>{setRoute(e.target.value)}}
              className="w-full px-4 py-2 placeholder-gray-400 transition duration-150 ease-in-out border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex justify-center gap-3">
            <button
              type="submit"
              className="px-4 py-2 text-white transition duration-150 ease-in-out bg-green-500 rounded-md hover:bg-green-600"
            >
              Download
            </button>
            <button
              type="button"
              id="pasteButton"
              className="px-4 py-2 text-white transition duration-150 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Paste
            </button>
            <button
              type="button"
              id="clearButton"
              className="hidden px-4 py-2 text-white transition duration-150 ease-in-out bg-red-500 rounded-md hover:bg-red-600"
            >
              Hapus
            </button>
          </div>
        </form>
        <div>
          <AdsBot />
        </div>
        <div className="my-2">
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
