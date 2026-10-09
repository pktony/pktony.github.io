import { ChipList } from "@/components/ui/ChipList";
import type { SkillGroup } from "@/types/resume";

// <dl> 안에서 용어(dt)와 설명(dd)을 한 행으로 묶는다
export function SkillRow({ group }: { group: SkillGroup }) {
  return (
    <div className="contents">
      <dt className="font-bold">{group.label}</dt>
      <dd>
        <ChipList items={group.items} label={`${group.label} 기술`} />
      </dd>
    </div>
  );
}
