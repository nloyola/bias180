import Image from 'next/image';
import { BoardMembersBlock, Media } from '../../payload-types';
import { RichText } from './RichText';
import { Heading } from './heading';
import { ImagePlaceholder } from './image-placeholder';

export const BoardBlockComponent: React.FC<{ block: BoardMembersBlock }> = ({ block }) => {
  return (
    <div className="container mx-auto py-8 md:px-20">
      <Heading label="Inaugural board of directors" />
      {block.members.map((member, index) => {
        const media = member.image as Media;
        return (
          <div key={index} className="mx-4 grid gap-4 border-b-2 pt-8 md:grid-cols-6 md:border-0">
            {member.image ? (
              <Image
                src={media.url}
                alt={`image of ${member.name}`}
                className="place-self-center md:w-60"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            ) : (
              <ImagePlaceholder />
            )}
            <div className="py-4 md:col-span-5">
              <span className="font-semibold text-sky-600">{member.name}</span>
              <RichText content={member.bio} className="grid" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
