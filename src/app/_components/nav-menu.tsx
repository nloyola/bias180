'use client';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/posts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog Posts</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
