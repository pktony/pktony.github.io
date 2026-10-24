import type { ProjectDetail } from "@/types/resume";

export const moiimeDetail: ProjectDetail = {
  sections: [
    {
      title: "해시 기반 에셋 버전 관리와 증분 빌드",
      bullets: [
        "**버전 단위:** 에셋 버전을 해시로 식별",
        "**롤백:** 버전 포인터를 바꿔 이전 버전으로 교체하므로 되돌리기가 쉬움",
        "**증분 빌드:** 변경된 에셋만 올림",
      ],
    },
    {
      title: "라벨링과 에셋 뷰어",
      bullets: [
        "에셋에 **라벨**을 붙여 자연어 파츠 검색에 활용",
        "버전별 에셋을 볼 수 있는 **에셋 뷰어** 제공",
      ],
      images: [
        {
          src: "/project-details/moiime/ai-stylist.webp",
          alt: "아바타 편집 화면. 오른쪽 AI 스타일리스트 패널에 '크리스마스 스타일로 바꿔줘' 요청과 바뀐 원피스·모자 파츠, 응답·검색 시간이 표시됨",
          width: 1200,
          height: 581,
          caption: "자연어로 파츠를 바꾸는 AI 스타일리스트",
        },
      ],
    },
    {
      title: "에셋 암호화",
      bullets: [
        "파츠 에셋과 파츠를 조립하기 위한 **메타데이터**를 암호화",
        "복호화는 **인증 서버**에서 수행",
      ],
    },
  ],
};
