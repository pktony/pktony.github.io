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

## 게임 갤러리

- `/games/`: 프로젝트 목록. 문구·화면·상태는 `src/data/games.ts`에서 편집
- `/games/[slug]/`: 화면을 채우는 WebGL 플레이어와 상단 도구 모음
- `config/webgl-builds.json`: 실행할 Unity Release 버전·SHA-256·빌드 주소
- Unity 바이너리는 소스에 넣지 않고 Release ZIP을 검증한 뒤 `out/webgl/`에 조립

```text
npm ci
npm test
npm run build
node scripts/fetch-webgl.mjs
python scripts/assemble-webgl.py
python -m http.server 8775 --directory out
```

`npm run dev`에서 게임도 실행하려면 조립한 `out/webgl/`을 임시로 `public/webgl/`에 복사한다. 이 폴더는 커밋하지 않는다. 최종 검증은 위의 정적 출력으로 진행한다.

새 게임은 데이터에 추가한다. 검증한 빌드 참조가 있을 때만 시작 버튼이 표시되며, 모바일에서는 영상 대안을 제공한다. 새 빌드는 다른 ID와 체크섬으로 등록하고, 이전 빌드로 되돌리려면 manifest와 게임 데이터 참조를 되돌린다.
