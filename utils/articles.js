import * as matter from "gray-matter";
import path from "path";
import fs from "fs";

const getArticles = async () => {
  const files = await fs.readdirSync(path.join(process.cwd(), "posts"));
  return files.map((file) => {
    const { data } = matter(
      fs.readFileSync(path.join(process.cwd(), "posts", file), "utf8")
    );
    return data;
  });
};

const getArticle = async (slug) => {
  const files = await fs.readdirSync(path.join(process.cwd(), "posts"));
  const file = files.find((file) => file.includes(slug));
  const { data, content } = matter(
    fs.readFileSync(path.join(process.cwd(), "posts", file), "utf8")
  );
  return {
    ...data,
    content,
  };
};

export { getArticles, getArticle };
