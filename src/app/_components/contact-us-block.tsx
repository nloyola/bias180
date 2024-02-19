"use client";

import { ContactDetailsBlock } from '../_model/contact-details';
import { faEnvelope, faHandPointRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog';

export const ContactUsBlockComponent: React.FC<{ block: ContactDetailsBlock }> = ({ block }) => {
  let style = {};
  if (block.backgroundImage) {
    style = { ...style, backgroundImage: `url("${block.backgroundImage.url}")` };
  }

  return (
    <div
      className="mt-10 flex h-[400px] min-h-full min-w-full items-center justify-center bg-cover bg-scroll bg-bottom"
      style={style}
    >
      <div className="container font-bold text-white">
        <div className="flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded border-4 border-gray-800 bg-gray-300/70 px-4 py-2 uppercase text-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-100/70">
                Contact Us
                <FontAwesomeIcon icon={faHandPointRight} className="ml-1" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader className="grid place-content-center">
                <DialogTitle className="text-sky-600">Contact Us</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1">
                <div className="grid place-content-center gap-4 py-4 text-sky-600">
                  <p className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href={`mailto:${block.email}`}>{block.email}</a>
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-baseline gap-4">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <p className="self-auto">
                        {block.street}
                        <br />
                        {block.city}, {block.province}, {block.country}
                        <br />
                        {block.postalCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Ok</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
