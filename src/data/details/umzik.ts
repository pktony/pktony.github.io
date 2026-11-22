import type { ProjectDetail } from "@/types/resume";

export const umzikDetail: ProjectDetail = {
  id: "umzik",
  sections: [
    {
      title: "결제 중복 지급 방지",
      bullets: [
        "**DB 조건부 업데이트:** 대기 주문만 완료로 바꾸는 조건부 업데이트와 유니크 인덱스로 중복 지급을 원천 차단",
        "**트랜잭션 분리 & 멱등 환불:** PG 승인은 트랜잭션 밖에서 호출하고, 응답 유실 시 결제 조회로 복구하며 환불은 멱등키로 보호",
      ],
    },
    {
      title: "AI 시트 프레임 추출 & 비용 통제",
      bullets: [
        "**규칙 기반 추출:** AI 포즈가 칸을 넘어 **4칸 중 3칸**이 잘리던 문제를 픽셀 클러스터링으로 해결 (재시도 **CPU 2초**)",
        "**배경 제거:** 캐릭터와 먼 배경색을 자동 선택해 경계 색 번짐을 제거 (잔여 픽셀 ==1,890 → 0==, 탁한 배경은 실패·환불)",
        "**비용 통제:** 유료 AI 호출은 재시도 없이 자동 환불하고 후처리만 재시도해 최종 실패 ==2.1%==, 기존 실패 25건 중 ==19건== 복구",
      ],
    },
    {
      title: "부하 테스트 · 인앱 로그인 · 보안",
      bullets: [
        "**세션 DB 병목 제거:** 로컬 가드 부하 테스트로 6단계 세션 트랜잭션 병목을 찾아 분리, 서버 오류 ==351건 → 0건==",
        "**인앱 로그인 복구:** 틱톡·카카오 인앱 전환 시 쿠키 분리 로그인 실패를 CSRF 보안을 유지한 채 안내 흐름으로 해결",
        "**모니터링 보안:** Moiime와 같은 웹 Sentry 정책을 적용하고 인증 코드가 실리는 업로드 경로는 자동 마스킹",
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
          caption: "8프레임 스프라이트 시트",
        },
      ],
    },
  ],
};
