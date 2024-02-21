import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Media } from '../../payload-types';
import { ImagePlaceholder } from '../_components/image-placeholder';
import { RewindIcon } from '../_components/rewind-incon';
import { Button } from '../_components/ui/button';
import { Card, CardContent, CardHeader } from '../_components/ui/card';
import { getPayloadClient } from '../../getPayload';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {};
};

export async function generateMetadata(params: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const metadata = await parent;
  return {
    title: 'Bias180 Blog Posts',
    description: 'Bias180 Blog Posts',
    alternates: {
      canonical: metadata.metadataBase + 'posts',
    },
    openGraph: {
      title: 'Bias180 Blog Posts',
      description: 'Bias180 Blog Posts',
      url: (await parent).metadataBase + `posts`,
    },
  };
}

async function getPosts() {
  // temp fix to get "yarn build" to work
  await new Promise((r) => setTimeout(r, 1000));

  const payload = await getPayloadClient();
  const { docs: posts } = await payload.find({
    collection: 'posts',
    depth: 1,
    sort: '-published_date',
  });
  return posts;
}

// idea from here: https://play.tailwindcss.com/9Vnsn7VxnW
export default async function Posts() {
  const posts = await getPosts();

  if (posts.length <= 0) {
    return <div className="container flex justify-center p-8 text-8xl font-semibold text-red-500">No blog posts</div>;
  }

  return (
    <>
      <div className="my-4 flex">
        <div className="container">
          <div className="flex items-baseline gap-1">
            <RewindIcon />
            <p className="text-3xl font-bold">Blog Posts</p>
          </div>

          <div className="grid place-content-center gap-8 pt-8">
            {posts.map((post) => {
              const media = post.postImage as Media;
              return (
                <Card
                  key={post.id}
                  className="flex max-w-6xl flex-col items-center rounded-lg bg-gray-100 p-2 lg:flex-row"
                >
                  <CardHeader className="w-full lg:w-1/2">
                    {post.postImage ? (
                      <Image
                        src={media.url}
                        alt={media.alt}
                        className="aspect-[3/2]"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    ) : (
                      <ImagePlaceholder message="post image" />
                    )}
                  </CardHeader>
                  <CardContent className="flex flex-col gap-8 space-y-4 lg:mt-0 lg:w-1/2">
                    <div className="flex flex-col gap-1 py-4">
                      <p className="text-3xl font-bold">{post.title}</p>
                      {post.published_date && (
                        <p className="text-sm font-semibold text-gray-500/90">
                          Published: {format(post.published_date, 'yyyy-MM-dd')}
                        </p>
                      )}
                    </div>
                    <p>{post.postMeta.description}</p>
                    <div className="flex items-center">
                      <Link href={`/posts/${post.slug}`} legacyBehavior passHref>
                        <Button>Read More</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
