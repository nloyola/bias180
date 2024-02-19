import { FieldChildrenComponent } from '../../_components/field-children';
import { ImagePlaceholder } from '../../_components/image-placeholder';
import { Alert, AlertTitle } from '../../_components/ui/alert';
import { AlertBlock } from '../../_model/alert-block';
import { ContentBlock } from '../../_model/content-block';
import { QuoteBlock } from '../../_model/quote-block';
import { faCircleInfo, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPayloadClient } from '../../../getPayload';
import { Post } from '../../_model/post';
import { RewindIcon } from '../../_components/rewind-incon';
import type { Metadata, ResolvingMetadata } from 'next';

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
    <Alert variant={variant}>
      <FontAwesomeIcon icon={faCircleInfo} />
      <AlertTitle>{block.message}</AlertTitle>
    </Alert>
  );
};

const ContentBlockCmp: React.FC<{ block: ContentBlock }> = ({ block }) => {
  return (
    <>
      {block.content.map((child, index) => (
        <div key={index} className="my-4">
          <FieldChildrenComponent fieldChildren={child} />
        </div>
      ))}
    </>
  );
};

const QuoteBlockCmp: React.FC<{ block: QuoteBlock }> = ({ block }) => {
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

  const post = docs[0] as Post;
  return {
    title: post.postMeta.description,
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

  const post = docs[0] as Post;

  return (
    <>
      <div className="container max-w-screen-lg">
        <div className="flex justify-center">
          {post.postImage ? (
            <img
              src={post.postImage.url}
              alt={`image of ${post.postImage.alt}`}
              className="aspect-[3/2] h-1/5 lg:h-[30rem]"
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

Post.getInitialProps = async (context) => {
  const { req, query, res, asPath, pathname } = context;
  if (req) {
    let host = req.headers.host; // will give you localhost:3000
    console.log(host);
  }
  console.log(query);
};
