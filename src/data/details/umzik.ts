import type { ProjectDetail } from "@/types/resume";

export const umzikDetail: ProjectDetail = {
  id: "umzik",
  sections: [
    {
      title: "큐 기반 생성 파이프라인과 후처리 복구",
      bullets: [
        "**처리 흐름:** 생성 요청 → provider별 생성 큐 → 외부 AI API → 웹훅 → 별도 후처리 워커 큐 → 결과 전달",
        "**실행 제어:** 동시 실행 수 제한, provider 요청 제한 대응, 중복 처리 방지 구현",
        "**AI 생성 실패:** 호출 비용을 고려해 자동 재시도하지 않고 실패 기록과 Slack 알림으로 대응",
        "**후처리 복구:** 생성된 이미지 결과를 가져와 처리하는 워커는 재시도 지원. 워커가 중단돼도 재시작하면 작업을 복구하고, 사용자는 복구된 결과를 비동기로 수신",
      ],
    },
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
        "**DB 병목:** 세션 갱신의 6단계가 한 트랜잭션에 묶이고 일부 조회가 추가 연결을 사용하는 구조 확인. 세션 갱신 전체의 트랜잭션을 해제하고 토큰 정리를 1시간 주기 작업으로 분리",
        "**설정 조정:** 커넥션 풀 9 → 25, 트랜잭션 제한 시간 5초 → 15초로 함께 조정",
        "**관측 결과:** 수정 전 8분간 DB 오류 351건, 수정 후 1,000명 규모의 약 28분 테스트에서 서버 오류 0건 관측. 여러 변경을 동시에 적용해 개별 효과는 분리하지 못함",
        "**검증 범위:** 수정 후에도 높은 응답 지연과 외부 AI API 한도 문제가 남아 생성 완료 사용자는 없었음. 전체 생성 파이프라인의 부하 안정성 검증과는 구분",
        "**정합성:** 한 사용자의 탈퇴가 다른 사용자의 batch 결과를 지우던 **소유권 오류** 수정",
      ],
    },
  ],
};
