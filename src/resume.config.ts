// 이력서 내용은 이 파일 하나만 고치면 됩니다. (**굵게** 표기 지원)
export type Metric = { value: string; label: string };
export type Experience = {
  company: string;
  role: string;
  period: string;
  badges: string[];
  bullets: string[];
  metrics: Metric[];
};
export type Project = {
  name: string;
  period: string;
  role: string;
  summary: string;
  bullets: string[];
  tech: string[];
  links: { label: string; url: string }[];
  featured: boolean;
};
export type SkillGroup = { label: string; items: string[] };
export type Post = { title: string; url: string };

export const resume = {
  name: "박상원",
  handle: "Pktony.",
  title: "Product Engineer · Unity & Web",
  photo: "", // public/ 아래 이미지 경로 (예: "/profile.jpg")
  email: "pktony@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/pktony", icon: "github" },
    { label: "기술 블로그", url: "https://psw-tony.tistory.com/", icon: "blog" },
  ],
  intro: [
    "Unity 클라이언트에서 시작해 **백엔드·배포·운영까지 연결하는 Product Engineer** 박상원입니다. 현재 일루니 개발2팀 팀장으로 글로벌 3D 소셜 서비스 Moii의 **클라이언트 성능·실시간 동기화·서비스 운영**을 담당하고 있습니다.",
    "AI 생성 서비스 **UMZIK을 기획부터 결제·운영까지 1인으로 개발**했고, NCT WISH 프로모션 위젯과 기획자용 제작 도구를 약 2주 만에 개발·배포했습니다.",
    "프로파일러와 부하테스트로 **병목을 측정한 뒤 고치고**, 기획자와 비개발자가 직접 쓸 수 있는 **도구로 넘기며**, 검증 근거와 변경 이력을 남기는 방식으로 일합니다.",
  ],
  experience: [
    {
      company: "일루니",
      role: "개발2팀 팀장",
      period: "2023.02 ~ 현재",
      badges: ["Unity Client", "Backend", "DevOps", "Team Lead"],
      bullets: [
        "**Moii · 3D 소셜 서비스:** 클라이언트 성능, 실시간 동기화, 서비스 운영 전반 개발. 개발자 4명이 단일 서버를 **19개 서비스로 분리**하고, 로그·알림 설계와 최종 MR 검토를 담당",
        "**성능 최적화:** JSON → Protobuf 전환으로 에셋 용량 70% 절감, Asset Bundle 중복 셰이더 정리로 Shader 메모리 0.83GB → 약 1MB",
        "**실시간 동기화:** Snapshot Interpolation과 제한된 Extrapolation으로 200kb/s 수준에서도 움직임 보간",
        "**배포 자동화:** Unity 피드를 Next.js 웹뷰로 전환해 콘텐츠 반영 3일 → 5분, 4개 프로젝트 iOS·Android 빌드를 8개 Jenkins 파이프라인으로 구성",
        "**관측·운영:** Prometheus·Fluent Bit 기반 지표·로그 수집과 임계치 알림, Claude 루틴으로 일일 운영 보고 자동화",
        "**팀 리딩:** 코드리뷰, 프로젝트 컨벤션, Git Flow, WBS 기반 일정 관리 체계 정착",
      ],
      metrics: [
        { value: "0.83GB → ~1MB", label: "Shader 메모리" },
        { value: "3일 → 5분", label: "콘텐츠 반영 시간" },
        { value: "70%", label: "에셋 용량 절감" },
        { value: "19", label: "마이크로서비스 분리" },
      ],
    },
    {
      company: "베셀에어로스페이스",
      role: "감항엔지니어",
      period: "2021.01 ~ 2022.02",
      badges: ["Aerospace", "Certification"],
      bullets: [
        "중국 항공기 형식인증 프로젝트에서 현지 직원, 인증 대행사와 **영어로 협업**",
        "검증 근거와 변경 이력을 남기는 문서화 경험을 개발 프로세스에 적용",
      ],
      metrics: [],
    },
  ] as Experience[],
  projects: [
    {
      name: "NCT WISH · WISH TOWN 위젯",
      period: "2026.09 ~ 2026.10",
      role: "개발자 1 · 기획자 1 — 위젯·관리자·제작 도구·인프라·로그 관측 전담",
      summary: "NCT WISH 프로모션 페이지에 삽입하는 팬 참여 게임 위젯과, 기획자가 직접 쓰는 제작·운영 도구",
      bullets: [
        "iframe 삽입형 JavaScript 위젯과 2D 스프라이트시트 캐릭터 모션 구현. 탐색·교류·미션·구매 기능과 모바일·다국어 화면",
        "웹 편집 도구와 MCP로 기획자가 에셋 교체·씬 설정·개발환경 배포를 직접 요청하고 확인",
        "사용자 위젯은 S3·CloudFront, 관리자 서버는 EC2로 분리. 로그를 Lambda에서 평탄화하고 정각마다 Athena로 집계해 행동 관측",
        "개발·배포까지 약 **2주**, 프로모션 페이지 오픈 첫 1시간 **83,000 PV**",
      ],
      tech: ["JavaScript", "iframe", "MCP", "S3", "CloudFront", "Lambda", "EC2", "Athena"],
      links: [{ label: "위시랜드", url: "https://www.wishwishwishwishwishland.com/" }],
      featured: true,
    },
    {
      name: "UMZIK · AI 스프라이트 애니메이션 생성 서비스",
      period: "2026.08 ~ 2026.10",
      role: "1인 개발 — 제품 설계 · 프론트엔드 · 백엔드 · 인프라 · 결제 · 운영 도구",
      summary: "사진 한 장으로 스프라이트 애니메이션을 만드는 AI 생성 서비스",
      bullets: [
        "모델별 결과·비용을 비교해 provider를 선별하고, provider별 큐·웹훅으로 긴 생성 작업을 웹 요청에서 분리",
        "토스페이먼츠 결제와 크레딧 차감, 상품·생성·결제 이력과 영수증을 확인하는 Admin, Slack 결제 알림",
        "Locust로 가상 사용자 **1,000명** 동시 생성 시나리오를 3회 실행해 **이중 과금 경로**와 DB 병목(커넥션 풀 9 → 25) 수정",
        "내부 생성 기록 934건 중 **911건 성공** (97.5%)",
      ],
      tech: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Toss Payments", "Locust"],
      links: [{ label: "umzik.com", url: "https://umzik.com" }],
      featured: true,
    },
    {
      name: "Moiime · 자연어 아바타 파츠 검색·조립",
      period: "2026.06 ~ 현재",
      role: "검색 · 백엔드 · SDK · 인프라",
      summary: "자연어 조건으로 약 1,600개 파츠를 검색하고 아바타로 조립하는 서비스",
      bullets: [
        "자연어 요청 → 파츠별 프롬프트 추출 → vector·image·lexical 검색 → 카테고리별 선택 → 아바타 조립",
        "앱·인증·아바타 생성 서버의 역할을 재설계해 프로토타입 인수 후 **3주 만에 출시**",
        "데모 게임에 SDK를 직접 연동해 사용성을 검증하고, SDK와 삽입형 위젯을 분리",
      ],
      tech: ["TypeScript", "NestJS", "React", "PostgreSQL", "MongoDB", "Vector Search", "S3", "CDN"],
      links: [{ label: "moii.me", url: "https://moii.me" }],
      featured: true,
    },
    {
      name: "Modular Grid Inventory",
      period: "2026.09",
      role: "개인 프로젝트 — 설계 · 구현 · 제작 도구 · 테스트",
      summary: "중첩 가방·독립 포켓·수납 제한·스택을 지원하는 Unity 인벤토리 패키지",
      bullets: [
        "이동 실패 시 상태 유지, 자기 자신·자손 가방으로의 순환 중첩 방지",
        "Custom Inspector에서 포켓 배치·수납 규칙을 편집하고 미리보기·Undo 지원",
        "테스트 **125건**(Edit 101 · Play 24), Asset Store 심사 제출",
      ],
      tech: ["Unity", "C#", "uGUI", "ScriptableObject", "Unity Test Framework"],
      links: [
        { label: "데모", url: "https://youtu.be/cyUhx101tj8" },
        { label: "GitHub", url: "https://github.com/pktony/modular-grid-inventory" },
      ],
      featured: false,
    },
    {
      name: "Moii · Text to Animation 시맨틱 캐시",
      period: "2026.02 ~ 2026.04",
      role: "Moii 프로젝트 내 기능 개발",
      summary: "query embedding과 semantic cache로 매 요청의 모델 실행을 줄인 텍스트 → 애니메이션 서비스",
      bullets: [
        "정규화한 입력으로 캐시를 조회하고 miss일 때만 추론. 생성 지연 **15초 → 3초**",
        "프롬프트 표준화, cache builder와 threshold 조정 도구 구현",
        "SMPL-H 52 joints를 Unity Humanoid 22 joints로 리타게팅, MediaPipe 영상에서 애니메이션 추출",
      ],
      tech: ["Python", "pgvector", "MediaPipe", "Unity Humanoid"],
      links: [],
      featured: false,
    },
    {
      name: "AI 피드 운영 자동화",
      period: "2025.12 ~ 2026.01",
      role: "워크플로 설계·구현, 생성물 검수, 관리 화면",
      summary: "콘텐츠 생성과 실행을 분리한 LangGraph 워크플로로 피드 봇 7개를 운영",
      bullets: [
        "서비스 톤에 맞춘 데이터와 fine-tuning으로 콘텐츠 생성, 커뮤니티 가이드라인 검색과 생성물 검수",
        "7개 봇을 하루 9시간, 20~60분 간격으로 운영해 첫 3개월 월 **5,600~17,000건**의 액션 처리",
        "성공·실패·거절 로그와 기획자용 관리 화면 구현",
      ],
      tech: ["NestJS", "LangGraph", "Fine-tuning"],
      links: [],
      featured: false,
    },
  ] as Project[],
  skills: [
    { label: "Unity Client", items: ["Unity", "C#", "Memory Profiler", "Addressables", "URP", "iOS·Android 네이티브 연동"] },
    { label: "Backend / Web", items: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "MongoDB", "결제 연동"] },
    { label: "Infra / Ops", items: ["AWS (S3·CloudFront·Lambda·EC2·Athena)", "Jenkins", "Prometheus", "Grafana", "Fluent Bit"] },
    { label: "AI", items: ["LangGraph", "Semantic Cache", "MCP", "Python", "MediaPipe"] },
  ] as SkillGroup[],
  education: [{ school: "인하대학교", major: "항공우주공학과 학사", period: "2014.03 ~ 2021.08" }],
  awards: [
    { title: "NC소프트 3D AI 게임 제작 공모전 가작", period: "2025.08" },
    { title: "사내 게임개발 대회 1등", period: "2025.12" },
  ],
  certificates: [
    { title: "AICE Associate (KT)", period: "2025.12" },
    { title: "TOEIC Speaking AL", period: "2021.02" },
    { title: "HSK 5급", period: "2020.08" },
    { title: "항공산업기사", period: "2018.12" },
  ],
  writing: [] as Post[],
};
