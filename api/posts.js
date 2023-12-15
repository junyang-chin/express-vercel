import sql from '../db.js';

async function getPosts() {
  const posts = await sql`select * from posts`
  return posts;
}

export default function handler(request, response) {

  getPosts().then(
    (posts) => {
      
      response.status(200).json({
        message: 'posts',
        data: posts
      });
    }
  )



}