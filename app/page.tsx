// import getPostMetadata from "../components/getPostMetadata";
// import PostPreview from "../components/PostPreview";
// import config from "../components/config.json";
import { redirect } from "next/navigation";

const HomePage = () => {
  redirect('/tiktok')
  // const postMetadata = getPostMetadata();
  // const postPreviews = postMetadata.slice(0, 10).map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ));
    
  // return (
  //   <>
  //   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{postPreviews}</div>
  //   </>
  // );
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
