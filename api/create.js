import sql from '../db.js';

async function createPost({title, content}) {
  const posts = await sql`insert into posts (title, content, created_at) values (${title}, ${content}, NOW()) returning *`


  return posts;
}

export default function handler(request, response) {
  const payload = {
    title: request.body.title,
    content: request.body.content
  }
  createPost(payload
  ).then(
    (post) => {
      response.status(200).json({
        data: post
      });
    }
  )


}