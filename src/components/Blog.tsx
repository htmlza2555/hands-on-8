import { BlogDTO } from "../types/dto";
import classes from "./Blog.module.css";

interface IBlogProps {
  blog: BlogDTO;
}

const Blog = ({ blog }: IBlogProps) => {
  return (
    <div className={classes.blog}>
      <div className={classes.miniblog}>
        <p className={classes.author}>{blog.author}</p>
        <p>{blog.date}</p>
        <p>· {blog.readingTime}</p>
      </div>
      <h1 className={classes.header}>{blog.header}</h1>
      <p className={classes.description}>{blog.description}</p>
      <div className={classes.tags}>
        {blog.tags.map((tag) => {
          return (
            <p className={classes.bodytag} key={tag}>
              #{tag}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Blog;
