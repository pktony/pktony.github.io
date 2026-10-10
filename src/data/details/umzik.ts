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
      title: "이중 과금 경로와 DB 병목",
      bullets: [
        "가상 사용자 ==1,000명== 동시 생성 시나리오를 3회 실행해 **provider 요청 뒤 내부 등록이 실패하면 이중 과금되던 경로**를 찾아 수정",
        "**DB 병목:** 긴 트랜잭션을 분리하고 커넥션 풀을 9개에서 25개로 조정",
      ],
    },
    {
      title: "정합성 수정: 소유권 오류와 작업 복구",
      bullets: [
        "한 사용자의 탈퇴가 다른 사용자의 batch 결과를 지우던 **소유권 오류** 수정",
        "사라진 poll을 주기적으로 복구하는 **reviver** 추가",
      ],
    },
  ],
};
