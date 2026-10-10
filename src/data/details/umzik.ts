import type { ProjectDetail } from "@/types/resume";

export const umzikDetail: ProjectDetail = {
  sections: [
    {
      title: "생성 결과 예시",
      bullets: ["입력 이미지에서 결과 애니메이션, 스프라이트 시트(8프레임)까지 모두 같은 생성 건"],
      images: [
        {
          src: "/project-details/umzik/cheer-input.webp",
          alt: "생성 입력으로 쓴 토끼 캐릭터 이미지",
          width: 600,
          height: 900,
          caption: "입력 이미지",
        },
        {
          src: "/project-details/umzik/cheer-result.webp",
          alt: "토끼 캐릭터가 응원 동작을 하는 생성 결과 애니메이션",
          width: 256,
          height: 256,
          caption: "결과 애니메이션 (cheer)",
        },
        {
          src: "/project-details/umzik/cheer-sprite-sheet.webp",
          alt: "같은 생성 건에서 나온 8프레임 스프라이트 시트",
          width: 600,
          height: 75,
          caption: "같은 생성 건의 8프레임 스프라이트 시트",
        },
      ],
    },
    {
      title: "Locust 시나리오 테스트",
      bullets: [
        "가상 사용자 ==1,000명== 동시 생성 시나리오 **3개**를 Locust로 실행해 문제를 찾아 수정",
        "**DB 병목:** 긴 트랜잭션을 분리하고 커넥션 풀을 9개에서 25개로 조정",
        "**정합성:** 한 사용자의 탈퇴가 다른 사용자의 batch 결과를 지우던 **소유권 오류** 수정",
      ],
    },
  ],
};
