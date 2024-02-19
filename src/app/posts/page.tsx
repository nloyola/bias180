import { getPayloadClient } from '../../getPayload';
import { ImagePlaceholder } from '../_components/image-placeholder';
import { Button } from '../_components/ui/button';
import { Card, CardContent, CardHeader } from '../_components/ui/card';
import Link from 'next/link';
import { RewindIcon } from '../_components/rewind-incon';

// idea from here: https://play.tailwindcss.com/9Vnsn7VxnW

export default async function Posts() {
  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: 'posts'
  });

  return (
    <>
      <div className="my-4 flex">
        <div className="container">
          <div className="flex items-baseline gap-1">
            <RewindIcon />
            <p className="text-3xl font-bold">Blog Posts</p>
          </div>

          <div className="grid place-content-center gap-8 pt-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="flex max-w-6xl flex-col items-center rounded-lg bg-gray-100 p-2 lg:flex-row"
              >
                <CardHeader className="w-full lg:w-1/2">
                  {post.postImage ? (
                    <img src={post.postImage.url} alt={`image of ${post.postImage.alt}`} className="aspect-[3/2]" />
                  ) : (
                    <ImagePlaceholder message="post image" />
                  )}
                </CardHeader>
                <CardContent className="flex flex-col gap-8 space-y-4 lg:mt-0 lg:w-1/2">
                  <p className="text-3xl font-semibold">{post.postMeta.title}</p>
                  <p>{post.postMeta.description}</p>
                  <div className="flex items-center">
                    <Link href={`/posts/${post.postMeta.slug}`} legacyBehavior passHref>
                      <Button>Read More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
