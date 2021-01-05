const db = require("../db/config");
const SQL = require("sql-template-strings");

class Blog {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.message = data.message;
    this.link = data.link;
    this.date = Date.now();
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const blogData = await db.run(SQL`SELECT * FROM blogs;`);
        console.log(blogData, "blogData");
        const blogs = blogData.rows.map((blog) => new Blog(blog));
        resolve(blogs);
      } catch (err) {
        reject("Error retriveing blogs");
      }
    });
  }

  static findByID(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const blogData = await db.run(`SELECT * FROM blogs WHERE id = ${id}`);
        const IndividualBlogData = blogData.rows[0];
        const blog = new Blog(blog);
        resolve(blog);
      } catch (err) {
        reject("Blog not found");
      }
    });
  }
}
