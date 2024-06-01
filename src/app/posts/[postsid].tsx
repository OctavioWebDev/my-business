// import { GetStaticPaths, GetStaticProps } from 'next';
// import { getAllPostIds, getPostData } from '../../../public/lib/posts';
// import { ParsedUrlQuery } from 'querystring';

// interface PostPageProps {
//   postData: {
//     title: string;
//     date: string;
//     contentHtml: string;
//   };
// }

// interface Params extends ParsedUrlQuery {
//   id: string;
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<PostPageProps, Params> = async ({ params }) => {
//   const postData = await getPostData(params!.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// };

// const Post: React.FC<PostPageProps> = ({ postData }) => {
//   return (
//     <article>
//       <h1>{postData.title}</h1>
//       <div>{postData.date}</div>
//       <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//     </article>
//   );
// };

// export default Post;
