# Portfolio - Lee Hee-un (이희운)

프론트엔드 엔지니어 이희운의 포트폴리오 웹사이트입니다. 55만 유저 서비스의 안정성을 설계하고, AI 기반 워크플로우 혁신을 주도하는 전문성을 담고 있습니다.

## 🚀 기술 스펙 (Technical Stack)

### Core

- **React 19**
- **TypeScript**
- **Vite 6**

### Styling & Animation

- **Tailwind CSS 4.0**
- **Framer Motion (motion/react)**
- **Lucide React**

## 🧠 기술 스택 선택 이유 & 강조 포인트

이 포트폴리오의 기술 선택은 "화려한 도구 나열"보다, 실제 서비스에서 중요한 세 가지를 전달하기 위해 구성했습니다.

### React + Vite를 선택한 이유 (vs HTML/CSS only)

- **초기 제작 속도만** 보면 HTML/CSS가 더 빠를 수 있습니다.
- 하지만 이 포트폴리오는 언어 토글, 프로젝트 필터/모달, 스크롤 인터랙션처럼 **상태와 상호작용**이 많아 React가 유지보수에 유리합니다.
- 프로젝트/성과 콘텐츠를 데이터로 관리해 **반복 UI 수정 비용**을 낮추고, 컴포넌트 재사용성을 확보했습니다.
- Vite를 통해 빠른 dev server/HMR로 수정-검증 루프를 짧게 유지해 **지속 개선**에 최적화했습니다.

### 1) 왜 이 스택을 선택했는가 (Why This Stack)

- **React + TypeScript**  
  화면 구현 속도와 타입 안정성을 동시에 가져가기 위한 기본 축입니다.  
  이력서 성격상 잦은 콘텐츠 수정이 필요하므로, 변경 비용을 줄이는 타입 기반 구조를 우선했습니다.

- **Vite**  
  빠른 부팅/빌드로 수정-검증 루프를 짧게 유지하기 위해 선택했습니다.  
  "작게 자주 개선"하는 포트폴리오 운영 방식과 잘 맞습니다.

- **Tailwind CSS**  
  디자인 토큰을 빠르게 조합하고, 반응형 레이아웃을 일관되게 유지하기 위해 사용했습니다.  
  컴포넌트별 스타일 맥락이 코드에 바로 보이기 때문에 피드백 반영 속도가 빠릅니다.

- **Framer Motion (motion/react)**  
  과한 시각 효과보다, 정보 계층을 부드럽게 전달하는 데 초점을 맞췄습니다.  
  스크롤 기반 인터랙션을 통해 "정적 문서"가 아닌 "문맥이 있는 경험"을 만들고자 했습니다.

### 2) 이 포트폴리오에서 강조하고 싶은 역량 (What This Portfolio Signals)

- **성능 최적화 관점**: 단순 기능 구현이 아니라 스크롤, 렌더링, 상호작용 체감 품질까지 본다는 점
- **운영 가능성**: 반응형, 타입 안정성, 빌드 단순성 등 유지보수 가능한 구조를 만든다는 점
- **문제 해결 방식**: 기술 선택 이유를 수치/사례(안정성, FPS, 운영 효율)와 함께 설명할 수 있다는 점
- **플랫폼 확장성**: Web 중심 구현이라도 Native/PWA 경험과 연결되는 사고방식을 갖고 있다는 점

### 3) 리드미 작성 주안점

- **공부용**  
  "왜 이 기술을 골랐는지"를 코드와 문서로 함께 남겨, 기능보다 의사결정 과정을 복기할 수 있습니다.

- **피드백용**  
  리뷰어가 단순 UI보다 구조/성능/유지보수성 관점으로 코멘트하기 쉬운 형태입니다.  
  (예: 스크롤 UX, 스냅 전략, 컴포넌트 경계, 타입 모델링)

- **홍보용**  
  경력 소개를 스택-성과-문제해결 흐름으로 연결해, "무엇을 했는지"보다 "왜 잘하는지"가 보이도록 구성했습니다.

## 📐 아키텍처 개념 요약 & 폴더 구조 (학습용)

아래는 프론트/백엔드에서 자주 등장하는 **구조 설계 관점**을 한 줄씩만 정리한 것입니다. (공식 표준 폴더가 정해진 것은 아니며, 팀마다 변형합니다.)

### 개념별 한 줄 정리

| 개념 | 한 줄 |
|------|--------|
| **DDD** | 업무(도메인) 언어·규칙·경계(바운디드 컨텍스트)를 중심에 두고 모델링한다. 폴더는 팀이 정하며 DDD가 강제하지 않는다. |
| **Strategic DDD** | 시스템을 큰 맥락(컨텍스트)으로 나누는 설계. 폴더 최상위가 `order/`, `payment/`처럼 컨텍스트 단위가 되기 쉽다. |
| **Tactical DDD** | 엔티티·값 객체·애그리거트·리포지토리 등 구현 패턴. 보통 `domain/` 아래에 도메인별 폴더로 둔다. |
| **Clean / Hexagonal** | 비즈니스 코어를 안쪽에 두고 DB·HTTP는 바깥(어댑터). `domain` + `application` + `adapters` 형태가 흔하다. |
| **Layered** | presentation / application / domain / infrastructure 등 **역할(계층)**으로 나눈다. |
| **FSD** | 프론트 전용 슬라이스: `app` → `pages` → `widgets` → `features` → `entities` → `shared` + import 규칙. 대형 SPA·팀 규칙에 강하다. |
| **Atomic Design** | UI를 atom → molecule → organism → template → page 크기로 층 나눈다. 디자인 시스템·UI 키트에 잘 맞는다. |
| **Feature 폴더** | `features/cart`, `features/profile`처럼 **기능 단위**로만 나눈다. FSD보다 루스하고 도입 비용이 낮다. |
| **Route-based** | URL·라우트와 폴더가 1:1 (예: Next `app/dashboard/`). |
| **Colocation** | 컴포넌트 옆에 테스트·스타일을 두어 수정 단위를 한 폴더에 모은다. |

**FSD vs Atomic:** FSD는 **기능·도메인·의존 방향**이 축이고, Atomic은 **UI 조각 크기**가 충이다. 서로 배타가 아니라 `shared/ui` 안을 Atomic 규칙으로 쓰는 식으로 **병행**하기도 한다.

### 이 저장소를 분리할 때 권장하는 폴더 구조 (목표안)

현재는 단일 `App.tsx`에 집중되어 있다. **최소 분리** 시 아래처럼 두는 것을 권장한다. (FSD 전체를 도입하지 않고, **경량 Feature Slice + 공용 UI**에 가깝다.)

```txt
src/
  App.tsx                 # 라우팅·전역 상태·섹션 조립만 (오케스트레이터)
  components/
    ui/                   # 여러 섹션에서 재사용하는 작은 조각
      StatItem.tsx
      TechCategory.tsx
      ProjectCard.tsx
      ...
  features/
    hero/
      HeroSection.tsx
    projects/
      ProjectsSection.tsx
      projects.data.ts    # 프로젝트 카드 데이터·타입
    career/
      CareerSection.tsx
  shared/                 # (선택) 상수, copy 타입, 공용 유틸
    i18n/
```

### 왜 이 분할 방식을 선택하는가

- **FSD 전체를 쓰지 않는 이유**  
  페이지가 하나이고 팀 규모가 작다. `widgets` / `entities` 레이어까지 두면 **규칙 학습·보일러플레이트**가 이득보다 커질 수 있다.

- **Atomic만으로 끝내지 않는 이유**  
  Atomic은 UI 크기 분류에는 좋지만, **히어로·프로젝트·경력** 같은 **기능·콘텐츠 경계**는 `features/*`로 나누는 편이 수정 시 찾기 쉽다.

- **`components/ui`를 따로 두는 이유**  
  카드·스탯·태그 칩 등은 여러 섹션에서 재사용된다. **표현 전용(presentational)** 으로 빼면 `App`과 섹션 파일이 짧아지고 리뷰 포인트가 명확해진다.

- **`App`을 오케스트레이터로 남기는 이유**  
  언어 전환, 프로젝트 필터, 모달, 스크롤 ref 등 **페이지 단위 상태**가 한곳에 모여 있다. 무리하게 전역 스토어를 도입하지 않아도 된다.

- **점진적 이동이 가능**  
  한 번에 전부 옮기지 않고, `StatItem` → `projects` 데이터 → `ProjectsSection` 순으로 옮겨도 동작을 유지하기 쉽다.

## ✨ 주요 기능 (Key Features)

- **Responsive Design**: 모바일, 태블릿, 데스크탑을 아우르는 최적화된 레이아웃
- **Multi-language Support**: 한국어 및 영어 지원 (i18n 직접 구현)
- **Interactive Gallery**: 프로젝트 상세 정보 및 성과를 확인할 수 있는 인터랙티브 갤러리
- **Performance Optimized**: 이미지 최적화 및 효율적인 렌더링 전략 적용
- **Scroll Interactions**: 사용자 경험을 풍부하게 하는 스크롤 기반 시각 효과

## 📂 주요 프로젝트 (Key Projects)

### 1. 열달후에 (Yeoldal) - App

**임신·출산·육아 통합 관리 앱 (가입자 55만)**

- **기술 스택**: React Native, Reanimated, eCharts, Android 15
- **핵심 성과**:
  - Android 15 대응: 16KB 페이지 사이즈 메모리 이슈 선제적 분석 및 해결
  - UI 안정성: Reanimated 기반 신규 컴포넌트로 헤더 깜빡임(Glitch) 현상 제거
  - 차트 최적화: ScrollView 기반 커스텀 차트 설계로 네이티브 수준 스크롤 구현
  - 아키텍처: 클래스형 컴포넌트의 함수형(Hooks) 전면 리팩토링으로 기술 부채 절감

### 2. 페스룸 케어 (Pethroom Care) - App

**반려동물 IoT 서비스 전용 앱**

- **기술 스택**: React Native, WebSocket, Bluetooth, Atomic Design
- **핵심 성과**:
  - 안정성 혁신: Crashlytics 기반 에러 추적 및 리팩토링으로 비정상 종료율 3.89% → 0.02% 개선
  - 실시간 통신: WebSocket 기반 기기 상태 동기화 및 푸시 알림 시스템 구축
  - UX 퍼포먼스: Reanimated 기반 인터랙션 최적화로 렌더링 성능 향상 (40fps → 60fps)
  - 생산성 향상: Atomic Design 시스템 도입으로 개발 공수 20% 절감

### 3. 페스룸 케어 Admin - Web

**IoT 서비스 통합 관리 시스템**

- **기술 스택**: React, MUI DataGrid, RBAC, Axios Interceptor
- **핵심 성과**:
  - 운영 효율화: RBAC(역할 기반 권한 제어) 시스템 구축으로 운영 효율 100% 달성
  - 보안 인증: Axios Interceptor 기반 JWT 인증 로직 전역화 및 소셜 로그인 추상화
  - 데이터 시각화: 대규모 기기 상태 및 사용자 데이터를 실시간 그리드와 차트로 구현
  - 운영 자동화: 엑셀 커스텀 연동 및 대량 데이터 처리 로직 구축으로 운영 시간 단축

### 4. 핀다이렉트 중고폰 검사 - Native/PWA

**네이티브 진단 프레임워크 & PWA**

- **기술 스택**: Swift, Native Module, Blob API, PWA
- **핵심 성과**:
  - Native 융합: Swift 단기 습득으로 카메라, 센서, FaceID 등 하드웨어 진단 모듈 개발
  - 심층 디버깅: SSL 인증서 이슈 우회 및 Network Reachability 실시간 판단 로직 구축
  - PWA 미디어: Blob/MediaDevices API 활용 영상 서버 전송 및 스트림 제어 최적화

### 5. WNMS - Web

**네트워크 장비(AP) 관제 대시보드**

- **기술 스택**: React, Redux-Toolkit, MUI, ECharts, Kakao Map API
- **핵심 성과**:
  - 지도 기반 관제: Kakao Map API 연동 및 마커 커스터마이징으로 장비 상태 시각화
  - 데이터 시각화: ECharts 활용 트래픽 통계 및 MUI DataGrid 활용 대용량 리스트 최적화
  - 보안 및 세션: Axios Interceptor와 sessionStorage를 결합한 안정적인 인증 체계 구축

## 🛠 설치 및 실행 (Setup & Run)

```bash
# 의존성 설치
yarn install

# 로컬 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build
```

---

© 2026 Lee Hee-un. All rights reserved.
