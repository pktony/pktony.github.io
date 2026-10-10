import type { ProjectDetail } from "@/types/resume";

export const matzipmapDetail: ProjectDetail = {
  sections: [
    {
      title: "인프라와 지도 조회 비용",
      bullets: [
        "크롤은 GitHub Actions에서 매일 실행(동시 실행 방지, 수동 실행 버튼)해 Vercel 컴퓨트를 쓰지 않음",
        "**문제:** 지도는 뷰포트가 조금만 달라도 다른 쿼리가 되어 엣지 캐시를 빗나가면 DB 요청이 나감",
        "**선택:** 공개 장소 전체를 1시간 스냅샷 캐시로 두고 메모리에서 필터와 격자 클러스터링을 처리",
        "SQL 경로와 같은 결과를 내도록 계산을 맞추고, 지도에 보이는 집합이 바뀔 때만 캐시를 무효화",
      ],
    },
  ],
};
