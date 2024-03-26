// import getPostMetadata from "../components/getPostMetadata";
// import PostPreview from "../components/PostPreview";
// import config from "../components/config.json";
import { redirect } from "next/navigation";

const HomePage = () => {
  // redirect('/tiktok')
  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.slice(0, 10).map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));

  return (
    <>
    <h1 className="my-2 text-2xl font-bold text-center text-black">Download Video</h1>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="p-4">
        <a href="/tiktok">
          <h2 className="px-6 py-5 mx-10 text-2xl font-bold text-center text-white bg-black rounded-md hover:underline">TikTok</h2>
        </a>
      </div>
    </div>
    </>
  );
};

export default HomePage;

// export const metadata = {
//   title: config.sitename,
//   description: config.desc,
//   canonical: config.url,
//   openGraph: {
//     url: config.url,
//     title: config.sitename,
//     description: config.desc,
//     images: [
//       { url: config.logo },
//     ],
//     siteName: config.sitename,
//   }
// };
