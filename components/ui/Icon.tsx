import { Globe, LayoutGrid, MonitorSmartphone, Smartphone, SearchCheck } from "lucide-react";
import type { IconName } from "@/content/site";

const icons = {
  erp: LayoutGrid,
  ai: SearchCheck,
  pos: MonitorSmartphone,
  web: Globe,
  mobile: Smartphone,
};

export function Icon({ name }: { name: IconName }) {
  const Cmp = icons[name];
  return <Cmp size={36} strokeWidth={1.6} className="text-amber" aria-hidden="true" />;
}
