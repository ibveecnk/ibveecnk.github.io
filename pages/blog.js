import matter from "gray-matter";
import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

const Blogs = (props) => {
  return (
    <>
      <Layout title="blog" />
      <section>
        <BlogList allBlogs={props.allBlogs} />
      </section>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  //get posts & context from folder
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      allBlogs: posts,
    },
  };
}
