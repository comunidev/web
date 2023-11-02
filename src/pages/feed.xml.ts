import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Comunidev - Blog Feed',
    description: 'Las últimas publicaciones creadas por los miembros de Comunidev',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      // TODO: add `date` to config and frontmatter, and get from `post.data.date`
      pubDate: new Date(),
      description: post.data.intro,
      stylesheet: '/rss/styles.xsl',
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}
