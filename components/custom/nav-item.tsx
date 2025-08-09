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
      className={cn(
        'rounded-sm border-0 text-sm shadow-none ring-0',
        active ? 'text-primary' : 'text-muted-foreground'
      )}
      key={item.label}
      size={'sm'}
      variant={active ? 'secondary' : 'ghost'}
    >
      <item.icon />
      <span>{item.label}</span>
    </Button>
  );
}
