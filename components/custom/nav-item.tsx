import { cn } from '@/lib/utils';
import type { Tservices } from '@/types';
import { Button } from '../ui/button';
export default function NavItem({
  item,
  active,
}: {
  item: Tservices;
  active: boolean;
}) {
  return (
    <Button
      className={cn('group rounded-sm border-0 text-sm shadow-none ring-0')}
      key={item.label}
      size={'sm'}
      variant={active ? 'default' : 'ghost'}
    >
      <item.icon
        className={cn(
          ' group-hover:text-primary',
          !active && 'text-muted-foreground'
        )}
      />
      <span>{item.label}</span>
    </Button>
  );
}
