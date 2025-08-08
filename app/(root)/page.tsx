import { ThemeToggleButton } from '@/components/theme/theme-toggle-button';
import { ModeSwitcher } from '@/components/ui/mode-switcher';

export default function Home() {
  return (
    <div className="p-20">
      <ModeSwitcher />
      <ThemeToggleButton start="bottom-left" variant="circle-blur" />
    </div>
  );
}
