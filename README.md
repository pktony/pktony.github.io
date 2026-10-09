# pktony.github.io

개인 포트폴리오 사이트. Next.js(정적 export) + Tailwind v4.

## 구조 (파일 하나당 책임 하나)

- `src/data/` - 내용(프로필·경력·프로젝트 등). 문구는 여기서만 수정 (`**굵게**` 지원)
- `src/types/` - 데이터 타입
- `src/lib/` - 순수 함수(굵게 파서, 프로젝트 선택, 테마 로직)
- `src/components/icons/` - 아이콘 (아이콘 하나당 파일 하나, `socialIconRegistry.ts`에 등록)
- `src/components/ui/` - 재사용 UI 조각(Section, Card, Chip, BulletList …)
- `src/components/layout/` - 헤더·푸터와 그 하위 요소
- `src/components/theme/` - 테마 초기화·전환
- `src/components/{experience,projects,skills,credentials}/` - 도메인별 조각
- `src/components/sections/` - 페이지 섹션
- `src/app/page.tsx` - 데이터를 섹션에 연결하는 조립만 담당

## 실행

`npm install && npm run dev` · 배포: `main`에 push하면 GitHub Pages로 자동 배포
