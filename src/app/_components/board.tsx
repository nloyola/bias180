import { BoardBlock } from '@/model/board';
import { FieldChildrenComponent } from './field-children';
import { Heading } from './heading';
import { ImagePlaceholder } from './image-placeholder';

export const BoardBlockComponent: React.FC<{ block: BoardBlock }> = ({ block }) => {
  return (
    <div className="container mx-auto py-8 md:px-20">
      <Heading label="Inaugural board of directors" />
      {block.members.map((member, index) => (
        <div key={index} className="mx-4 grid gap-4 border-b pt-8 md:grid-cols-6 md:border-0">
          {member.image ? (
            <img src={member.image.url} alt={`image of ${member.name}`} className="place-self-center md:w-60" />
          ) : (
            <ImagePlaceholder />
          )}
          <div className="py-4 md:col-span-5">
            <span className="mr-1 font-semibold text-sky-600">{member.name}</span>
            {member.bio.map((child, index) => (
              <FieldChildrenComponent key={index} fieldChildren={child} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
