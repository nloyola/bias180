import escapeHTML from 'escape-html';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Media } from '../../../../payload-types';
import { Button } from '../../ui/button';
import { RewindIcon } from '../../rewind-incon';

type Node = {
  type: string;
  value?: {
    url: string;
    alt: string;
  };
  children?: Node[];
  url?: string;
  [key: string]: unknown;
  newTab?: boolean;
};

export type CustomRenderers = {
  [key: string]: (args: { node: Node; Serialize: SerializeFunction; index: number }) => JSX.Element; // eslint-disable-line
};

type SerializeFunction = React.FC<{
  content?: Node[];
  customRenderers?: CustomRenderers;
}>;

const isText = (value: any): boolean => typeof value === 'object' && value !== null && typeof value.text === 'string';

export const Serialize: SerializeFunction = ({ content, customRenderers }) => {
  return (
    <Fragment>
      {content?.map((node, i) => {
        if (isText(node)) {
          // @ts-expect-error
          let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;

          if (node.bold) {
            text = (
              <strong key={i} className="font-semibold">
                {text}
              </strong>
            );
          }

          if (node.code) {
            text = (
              <code key={i} className="font-mono">
                {text}
              </code>
            );
          }

          if (node.italic) {
            text = (
              <em key={i} className="italic">
                {text}
              </em>
            );
          }

          if (node.underline) {
            text = (
              <span style={{ textDecoration: 'underline' }} key={i}>
                {text}
              </span>
            );
          }

          if (node.strikethrough) {
            text = <s key={i}>{text}</s>;
          }

          return <Fragment key={i}>{text}</Fragment>;
        }

        if (!node) {
          return null;
        }

        if (customRenderers && customRenderers[node.type] && typeof customRenderers[node.type] === 'function') {
          return customRenderers[node.type]({ node, Serialize, index: i });
        }

        switch (node.type) {
          case 'br':
            return <br key={i} />;

          case 'h1':
            return (
              <h1 key={i} className="flex items-baseline gap-1 text-6xl font-semibold">
                <RewindIcon />
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h1>
            );

          case 'h2':
            return (
              <h2 key={i} className="flex items-baseline gap-1 text-5xl font-semibold">
                <RewindIcon />
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h2>
            );

          case 'h3':
            return (
              <h3 key={i} className="flex items-baseline gap-1 text-4xl font-semibold">
                <RewindIcon />
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h3>
            );

          case 'h4':
            return (
              <h4 key={i} className="flex items-baseline gap-1 text-4xl font-semibold">
                <RewindIcon />
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h4>
            );

          case 'h5':
            return (
              <h5 key={i} className="flex items-baseline gap-1 pt-8 text-2xl font-semibold">
                <RewindIcon />
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h5>
            );

          case 'h6':
            return (
              <h6 key={i} className="flex items-baseline gap-1 text-xl font-semibold">
                <RewindIcon />
                <Serialize content={node.children} customRenderers={customRenderers} />
              </h6>
            );

          case 'quote':
            return (
              <blockquote key={i}>
                <Serialize content={node.children} customRenderers={customRenderers} />
              </blockquote>
            );

          case 'ul':
            return (
              <ul key={i} className="ml-6 list-outside list-disc">
                <Serialize content={node.children} customRenderers={customRenderers} />
              </ul>
            );

          case 'ol':
            return (
              <ol key={i} className="ml-6 list-outside list-decimal">
                <Serialize content={node.children} customRenderers={customRenderers} />
              </ol>
            );

          case 'li':
            return (
              <li key={i} className="py-2">
                <Serialize content={node.children} customRenderers={customRenderers} />
              </li>
            );

          case 'link':
            return (
              <Link
                href={escapeHTML(node.url)}
                key={i}
                className="font-semibold text-sky-500"
                {...(node.newTab
                  ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }
                  : {})}
              >
                <Serialize content={node.children} customRenderers={customRenderers} />
              </Link>
            );

          case 'indent':
            return (
              <div className="pl-8">
                <Serialize content={node.children} customRenderers={customRenderers} />
              </div>
            );

          case 'upload': {
            if (!node.value) {
              return null;
            }

            const media = node.value as Media;
            const alt = media.alt ?? 'No value';
            const url = media.url;

            if (media.mimeType.startsWith('image')) {
              return (
                <Image
                  key={i}
                  src={url}
                  alt={alt}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              );
            }

            if (media.mimeType === 'application/pdf') {
              return (
                <a key={i} href={url} target="_blank">
                  <Button>{alt}</Button>
                </a>
              );
            }

            throw new Error('invalid uplod type');
          }

          default:
            return (
              <p key={i} className="mt-4">
                <Serialize content={node.children} customRenderers={customRenderers} />
              </p>
            );
        }
      })}
    </Fragment>
  );
};
