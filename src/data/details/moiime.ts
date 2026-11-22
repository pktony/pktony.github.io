import type { ProjectDetail } from "@/types/resume";

export const moiimeDetail: ProjectDetail = {
  id: "moiime",
  sections: [
    {
      title: "자연어 캐릭터 제작 & 모델 평가",
      bullets: [
        "**모델 비교 & 튜닝:** 121건 골든셋으로 5개 LLM을 비교해 경량 모델 적중률을 ==95%==(상위 모델 동급)까지 높여 비용 절감",
        "**없는 컨셉 대응:** 카탈로그에 없는 요청(\"마녀\" 등)은 유사도 하한 미달 시 컨셉 색 기반 재검색으로 보완",
        "**하이브리드 검색:** 43건 측정으로 하이브리드(==95.3%==)를 채택, 데이터 1.5MB라 벡터 DB 없이 메모리에서 ==1ms 미만== 처리",
      ],
      images: [
        {
          src: "/project-details/moiime/ai-stylist.webp",
          alt: "캐릭터 편집 화면. 왼쪽 AI 스타일리스트 패널에서 '크리스마스 스타일로 바꿔줘' 요청 후 산타 모자와 옷으로 바뀐 캐릭터와 부위별 후보 파츠가 표시됨",
          width: 1200,
          height: 575,
          caption: "문장으로 만든 캐릭터를 '크리스마스 스타일로 바꿔줘'로 수정한 화면",
        },
      ],
    },
    {
      title: "외부 도구 연동 배포",
      bullets: [
        "**원격 MCP & 3D 위젯:** API 키 대신 OAuth 2.1 로그인만으로 AI 앱에서 캐릭터 조회와 3D 미리보기를 바로 실행",
        "**Blender 애드온:** 손발 IK·FK 스냅, Body·Face 피커, 흔들림 굽기와 자동 업데이트·격리 테스트까지 구축",
        "**VRChat 패키지:** VPM 저장소 배포로 FBX 입력 한 번에 메시 병합·표정·입 모양·제스처 메뉴를 자동 세팅",
      ],
      images: [
        {
          src: "/project-details/moiime/mcp-3d-widget.webp",
          alt: "AI 앱에서 '루돌프 보여줘' 요청 후 Moiime 원격 MCP 서버의 3D 미리보기 위젯이 렌더링된 화면",
          width: 876,
          height: 624,
          full: true,
          caption: "OAuth 2.1 로그인 후 AI 앱에서 3D 위젯으로 캐릭터를 바로 미리보는 화면",
        },
        {
          src: "/project-details/moiime/blender-face-picker.webp",
          alt: "Blender 4.2 이상에서 실행된 Moiime 컨트롤 리그 애드온 v8의 Face 피커와 얼굴 핸들 제어 화면",
          width: 840,
          height: 479,
          caption: "Blender 컨트롤 리그 애드온(v8): Face 피커 및 얼굴 핸들",
        },
        {
          src: "/project-details/moiime/blender-body-picker.webp",
          alt: "Blender에서 실행된 Moiime 컨트롤 리그 애드온 v8의 Body 피커와 IK·FK 포즈 제어 화면",
          width: 840,
          height: 479,
          caption: "Blender 컨트롤 리그 애드온(v8): Body 피커 및 IK·FK 포즈",
        },
      ],
    },
    {
      title: "에셋 발행 · 프리뷰 보호 · 모니터링",
      bullets: [
        "**해시 불변 발행:** 변경된 파일만 증분 업로드하고 사전 점검(dry-run)과 원본 비삭제 원칙으로 덮어쓰기 ==0건==",
        "**프리뷰 에셋 보호:** 공개 키로 2초 만에 ==8,300개==가 뚫리던 구조를 암호화·목록 차단·세션 워터마크로 방어",
        "**웹 Sentry 표준화:** 서버 에러와 노이즈를 거르고 개인정보 마스킹·소스맵 삭제를 적용해 UMZIK까지 확장",
      ],
      images: [
        {
          src: "/project-details/moiime/asset-manager-publish.webp",
          alt: "에셋 관리 툴 발행 화면. 내용 해시 릴리즈와 파츠·썸네일·애니메이션 증분 복사 및 복호 키 적재 완료 상태가 표시됨",
          width: 1024,
          height: 640,
          full: true,
          caption: "에셋 관리 툴 발행 화면: 내용 해시 릴리즈, 변경분 증분 복사, 복호 키 적재 과정",
        },
        {
          src: "/project-details/moiime/preview-watermark.webp",
          alt: "얼굴, 몸통·팔·다리, 원피스 프리뷰 파츠에 세션별 식별 워터마크가 적용된 화면",
          width: 961,
          height: 346,
          full: true,
          caption: "프리뷰 에셋 보호: 세션별 식별 워터마크가 적용된 파츠 미리보기",
        },
      ],
    },
    {
      title: "애니메이션 리타게팅 & 회귀 검증",
      bullets: [
        "**알고리즘 직접 구현:** Three.js 기본 리타게팅의 아바타 오염·관절 뒤틀림을 피하기 위해 클론 비파괴 추출과 상대 회전 변환을 구현",
        "**정밀 검증 & 과금 유지:** Blender·Unity 대조로 정점 오차 ==1µm 미만==·회전 ==0°==를 확인하고, 3차 회귀 ==16/16== 통과와 재다운로드 과금 ==0==을 입증",
      ],
      diagram: "moiime-retargeting",
    },
  ],
};
