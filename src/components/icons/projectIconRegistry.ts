import type { ComponentType } from "react";
import type { ProjectIconName } from "@/types/resume";
import { AvatarIcon } from "./AvatarIcon";
import { CubeIcon } from "./CubeIcon";
import { GridIcon } from "./GridIcon";
import { MapPinIcon } from "./MapPinIcon";
import { SpriteIcon } from "./SpriteIcon";
import { WidgetIcon } from "./WidgetIcon";

// 새 프로젝트 아이콘은 이 표에 한 줄만 추가하면 된다 (ProjectIcon은 수정 불필요)
export const projectIconRegistry: Record<ProjectIconName, ComponentType<{ size?: number }>> = {
  avatar: AvatarIcon,
  map: MapPinIcon,
  widget: WidgetIcon,
  sprite: SpriteIcon,
  cube: CubeIcon,
  grid: GridIcon,
};
