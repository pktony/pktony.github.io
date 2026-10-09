import type { ComponentType } from "react";
import type { SocialIconName } from "@/types/resume";
import { BlogIcon } from "./BlogIcon";
import { GithubIcon } from "./GithubIcon";

// 새 소셜 아이콘은 이 표에 한 줄만 추가하면 된다 (SocialIcon은 수정 불필요)
export const socialIconRegistry: Record<SocialIconName, ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  blog: BlogIcon,
};
