'use client'
import { useEffect, useRef, useState } from 'react'
import AdsSidebar from "../../components/adsense/sidebar";
import AdsBot from "../../components/adsense/bot";
import { redirect, useRouter } from "next/navigation";

const PostPage = () => {
  // const router = useRouter()
  const [route, setRoute] = useState("")
  const handleSubmit = () => {
      window.location.href = "/tiktok/" + Buffer.from(route).toString("base64")
  }

  const videoUrlInputRef = useRef<HTMLInputElement>(null)
  const pasteButtonRef = useRef<HTMLButtonElement>(null);
  const clearButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const videoUrlInput = videoUrlInputRef.current;
    const pasteButton = pasteButtonRef.current;
    const clearButton = clearButtonRef.current;

    if (videoUrlInput && pasteButton && clearButton) {
      const handlePaste = () => {
        navigator.clipboard.readText()
          .then(text => {
            videoUrlInput.value = text;
            clearButton.classList.remove('hidden');
            pasteButton.classList.add('hidden');
          })
          .catch(err => {
            console.error('Gagal melakukan paste:', err);
          });
      };

      const handleClear = () => {
        videoUrlInput.value = '';
        clearButton.classList.add('hidden');
        pasteButton.classList.remove('hidden');
      };

      const handleInput = () => {
        if (videoUrlInput.value.trim() !== '') {
          clearButton.classList.remove('hidden');
          pasteButton.classList.add('hidden');
        } else {
          clearButton.classList.add('hidden');
          pasteButton.classList.remove('hidden');
        }
      };

      pasteButton.addEventListener('click', handlePaste);
      clearButton.addEventListener('click', handleClear);
      videoUrlInput.addEventListener('input', handleInput);

      return () => {
        pasteButton.removeEventListener('click', handlePaste);
        clearButton.removeEventListener('click', handleClear);
        videoUrlInput.removeEventListener('input', handleInput);
      };
    }
  }, []);
  
  return (
    <>
      <div className="my-3 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Download Tiktok</h1>
        <p className="my-1 text-base text-slate-600">
          TikTok Downloader Without Watermark HD
        </p>
      </div>
      <article className="prose">
        {/* <form id="submit-form" onSubmit={handleSubmit}> */}
          <div className="mb-4">
            <input
              type="text"
              ref={videoUrlInputRef}
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
              onClick={handleSubmit}
              className="px-4 py-2 text-white transition duration-150 ease-in-out bg-green-700 rounded-md hover:bg-green-600"
            >
              Download
            </button>
            <button
              type="button"
              id="pasteButton"
              ref={pasteButtonRef}
              className="px-4 py-2 text-white transition duration-150 ease-in-out bg-blue-700 rounded-md hover:bg-blue-600"
            >
              Paste
            </button>
            <button
              type="button"
              id="clearButton"
              ref={clearButtonRef}
              className="hidden px-4 py-2 text-white transition duration-150 ease-in-out bg-red-700 rounded-md hover:bg-red-600"
            >
              Hapus
            </button>
          </div>
        {/* </form> */}
        <div>
          <AdsBot />
        </div>
        <div className="my-4">
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
    </>
  );
};

export default PostPage;
