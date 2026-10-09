import type { SocialIconName } from "@/types/resume";
import { socialIconRegistry } from "./socialIconRegistry";

export function SocialIcon({ name }: { name: SocialIconName }) {
  const Icon = socialIconRegistry[name];
  return <Icon />;
}
