import { cn } from '../_lib/utils';

export const CenteredBlock: React.FC<React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren> = ({
  className = '',
  children,
}) => {
  return <div className={cn('container py-8 md:py-16', className)}>{children}</div>;
};
