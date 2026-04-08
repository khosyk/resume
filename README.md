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
