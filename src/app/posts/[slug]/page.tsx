import { ImagePlaceholder } from '../../_components/image-placeholder';
import { Alert, AlertTitle } from '../../_components/ui/alert';
import { faCircleInfo, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPayloadClient } from '../../../getPayload';
import { RewindIcon } from '../../_components/rewind-incon';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { RichText } from '../../_components/RichText';
import { Alert as AlertBlock, Content, Media, Quote } from '../../../payload-types';

const AlertBlockCmp: React.FC<{ block: AlertBlock }> = ({ block }) => {
  let variant: 'info' | 'success' | 'warning' | 'destructive';
  switch (block.type) {
    case 'info':
    case 'success':
    case 'warning':
      variant = block.type;
      break;

    default:
      variant = 'destructive';
  }

  return (
    <Alert variant={variant} className="pb-4">
      <FontAwesomeIcon icon={faCircleInfo} />
      <AlertTitle>{block.message}</AlertTitle>
    </Alert>
  );
};

const ContentBlockCmp: React.FC<{ block: Content }> = ({ block }) => {
  return <RichText content={block.content} className="grid" />;
};

const QuoteBlockCmp: React.FC<{ block: Quote }> = ({ block }) => {
  return (
    <blockquote className="flex flex-col rounded-md bg-gray-200 p-6">
      <div className="flex gap-2">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <p className="prose">{block.quote}"</p>
      </div>
      <footer className="pt-2 text-right text-xs font-semibold italic text-sky-500">{block.author}</footer>
    </blockquote>
  );
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const payload = await getPayloadClient();
  const slug = params.slug;

  // fetch data
  const product = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      'postMeta.slug': {
        equals: params.slug
      }
    }
  });

  const post = docs[0];
  return {
    title: post.postMeta.title,
    description: post.postMeta.description,
    keywords: post.postMeta.keywords,
    alternates: {
      canonical: `/posts/${params.slug}`
    }
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'posts',
    where: {
      'postMeta.slug': {
        equals: params.slug
      }
    }
  });

  const post = docs[0];
  const media = post.postImage as Media;

  return (
    <>
      <div className="container max-w-screen-lg">
        <div className="flex justify-center">
          {post.postImage ? (
            <Image
              src={media.url}
              alt={media.alt}
              className="aspect-[3/2] h-1/5 lg:h-[30rem]"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <ImagePlaceholder message="post image" />
          )}
        </div>

        <div className="flex items-baseline gap-1 py-8">
          <RewindIcon />
          <p className="text-3xl font-bold">{post.title}</p>
        </div>

        {post.layout.map((block, index) => {
          switch (block.blockType) {
            case 'alert':
              return <AlertBlockCmp key={index} block={block} />;

            case 'content':
              return <ContentBlockCmp key={index} block={block} />;

            case 'quote':
              return <QuoteBlockCmp key={index} block={block} />;

            default:
              //return <pre>{JSON.stringify(block, null, 2)}</pre>;
              throw new Error('invalid layout block: ' + block);
          }
        })}
      </div>
    </>
  );
}
