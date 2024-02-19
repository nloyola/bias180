import { ListField, ListItemField } from '@/model/field';
import { BulletListBlock } from '@app/model/bullet-list';
import React from 'react';
import { Heading } from './heading';

const ListItem: React.FC<{ item: ListItemField }> = ({ item }) => {
  if (!('type' in item) || item.type !== 'li') {
    throw new Error('invalid list type');
  }

  return (
    <>
      {item.children.map((item, index) => {
        return (
          <li key={index} className="py-3">
            {item.text}
          </li>
        );
      })}
    </>
  );
};

const List: React.FC<{ list: ListField }> = ({ list }) => {
  if (!('type' in list) || (list.type !== 'ol' && list.type !== 'ul')) {
    throw new Error('invalid list type');
  }

  return (
    <ul className="ml-6 grid list-outside list-disc">
      {list.children.map((item, index) => {
        return <ListItem key={index} item={item as ListItemField} />;
      })}
    </ul>
  );
};

export const BulletListBlockComponent: React.FC<{ block: BulletListBlock }> = ({ block }) => {
  return (
    <div className="container p-8 md:px-20">
      <Heading label={block.header} />
      {block.content.map((list, index) => (
        <List key={index} list={list as ListField} />
      ))}
    </div>
  );
};
