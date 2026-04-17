/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
	Mail,
	Phone,
	Github,
	Linkedin,
	Zap,
	BarChart3,
	Layers,
	Smartphone,
	Globe,
	Terminal,
	CheckCircle2,
	ChevronRight,
	BrainCircuit,
	Users,
	Award,
	ArrowUp,
	Languages,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

interface ResumeProject {
	id: string;
	title: string;
	category: string;
	subtitle: string;
	tags: string[];
	link?: string;
	images: string[];
	achievements: string[];
	icon: React.ReactNode;
	color: string;
}

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function App() {
	const [scrolled, setScrolled] = useState(false);
	const [activeTab, setActiveTab] = useState("All");
	const [selectedProject, setSelectedProject] = useState<ResumeProject | null>(
		null,
	);
	const [lang, setLang] = useState<"ko" | "en">("ko");
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const workEthicRef = useRef<HTMLDivElement>(null);

	const t = {
		ko: {
			nav: {
				profile: "프로필",
				impact: "성과",
				stack: "기술",
				projects: "프로젝트",
				career: "경력",
				contact: "연락하기",
			},
			hero: {
				badge: "성능 최적화 전문가",
				title1: "55만 유저의",
				title2: "안정성을 설계하는 해결사.",
				desc: "복잡한 비즈니스 요구사항을 정교한 기술 스펙으로 번역하여 최적의 비용으로 구현해내는 프론트엔드 엔지니어 이희운입니다.",
				resume: "이력서",
				coverLetter: "자기소개서",
				summaryTitle: "전문가 요약",
				summaryDesc:
					'"최고의 공부는 실전이다"라는 신념 아래, Cursor 및 MCP 등 차세대 AI 도구를 활용한 워크플로우 혁신으로 Swift 네이티브 프레임워크를 단기 습득하여 하드웨어 진단 로직을 구현하는 등 플랫폼의 경계를 넘나드는 압도적 생산성을 증명합니다.',
				summaryPoint1: "비정상 종료율 99% 개선 경험",
				summaryPoint2: "AI 기반 워크플로우 혁신 주도",
				summaryPoint3: "비즈니스-기술 브릿지 역할 수행",
			},
			stats: {
				stability: "서비스 안정성",
				performance: "UX 퍼포먼스",
				productivity: "개발 생산성",
				efficiency: "운영 효율성",
				stabilityDesc: "Crashlytics 기반 에러 추적 및 리팩토링",
				performanceDesc: "Reanimated 기반 인터랙션 최적화",
				productivityDesc: "Atomic Design 기반 컴포넌트 추상화",
				efficiencyDesc: "RBAC 시스템 구축 및 QA 통과율 달성",
			},
			tech: {
				title: "핵심 기술 스택",
				desc: "React·React Native·TypeScript부터 네이티브·Firebase, AI 생산성 도구까지 리포트에 정리한 스택을 중심으로 서비스를 설계합니다.",
				cat1: "프론트엔드 & 상태관리",
				cat2: "네이티브 & 인프라",
				cat3: "AI & 생산성",
				cat4: "특화 기술",
			},
			projects: {
				title: "주요 프로젝트",
				desc: "실제 비즈니스 가치를 창출한 핵심 프로젝트 경험입니다.",
				gallery: "갤러리 보기",
				download: "앱 다운로드",
				visit: "사이트 방문",
				achievements: "핵심 성과",
				impact: "프로젝트 임팩트",
				cats: ["전체", "앱", "웹", "네이티브/PWA"],
			},
			mindset: {
				title: "Work Ethic",
				m1Title: "사용자 중심의 사고",
				m1Desc:
					"단순한 기능 구현을 넘어, 실제 사용자가 겪는 불편함을 데이터와 피드백으로 분석하여 최적의 UX를 설계합니다.",
				m2Title: "지속 가능한 코드",
				m2Desc:
					"팀원 누구나 이해할 수 있는 클린 코드를 지향하며, 유지보수가 용이하고 확장성 있는 아키텍처를 고민합니다.",
				m3Title: "능동적인 문제 해결",
				m3Desc:
					"기술적 한계에 부딪혔을 때 포기하지 않고, 다양한 대안을 제시하며 비즈니스 목표 달성을 위한 최선의 경로를 찾습니다.",
				m4Title: "철저한 서비스 안정성",
				m4Desc:
					"장애 발생 가능성을 사전에 차단하기 위해 꼼꼼한 테스트와 모니터링을 생활화하며, 안정적인 서비스 운영을 최우선으로 합니다.",
			},
			career: {
				title: "경력",
				edu: "학력 및 기타",
				connecti:
					"가입자 55만·MAU 10만 규모 '열달후에' 앱 개발·성능·안정성 개선",
				biskit: "패스룸 케어 앱 및 운영 어드민(RBAC·엑셀 연동 등) 개발",
				univ: "글로벌 비즈니스학과 졸업",
				exchange:
					"대만 Ming Chuan University 교환학생(1년) — 글로벌 서비스에 필요한 적응력·유연한 사고",
				globalTitle: "글로벌 역량",
				globalDesc:
					"비즈니스 영어 커뮤니케이션과 글로벌 버전 기능 구현·유지보수를 전담할 수 있는 역량을 갖추고 있습니다.",
				extraTitle: "성실성 및 책임감",
				extraDesc:
					"30사단 훈련소 훈련 성적 전체 2등(500명 중) 수료, 사단장 표창. 맡은 환경에서 성과를 내는 책임감을 증명했습니다.",
				notion: "자세한 이력 확인하기 (Notion)",
			},
			footer: {
				built: "이희운이 디자인하고 구축함 © 2026",
			},
		},
		en: {
			nav: {
				profile: "Profile",
				impact: "Impact",
				stack: "Stack",
				projects: "Projects",
				career: "Career",
				contact: "Contact",
			},
			hero: {
				badge: "PERFORMANCE OPTIMIZATION EXPERT",
				title1: "Architecting Stability",
				title2: "for 550K Users.",
				desc: "I am Heeun Lee, a frontend engineer who translates complex business requirements into sophisticated technical specifications, delivering optimal value.",
				resume: "Resume",
				coverLetter: "Cover Letter",
				summaryTitle: "Professional Summary",
				summaryDesc:
					"With a 'learning by doing' mindset, I demonstrate overwhelming productivity across platforms—such as quickly mastering Swift to implement hardware diagnostics through AI-driven workflow innovations like Cursor and MCP.",
				summaryPoint1: "99% Crash Rate Improvement",
				summaryPoint2: "AI-Driven Workflow Innovation",
				summaryPoint3: "Business-Tech Bridge Role",
			},
			stats: {
				stability: "Service Stability",
				performance: "UX Performance",
				productivity: "Development Productivity",
				efficiency: "Operational Efficiency",
				stabilityDesc: "Crashlytics-based error tracking & refactoring",
				performanceDesc: "Reanimated-based interaction optimization",
				productivityDesc: "Atomic Design-based component abstraction",
				efficiencyDesc: "RBAC system & 100% QA pass rate",
			},
			tech: {
				title: "Core Tech Stacks",
				desc: "From frontend core to native integration, infra, and AI tools, I hold a stack that transcends platform boundaries.",
				cat1: "Frontend & State",
				cat2: "Native & Infra",
				cat3: "AI & Productivity",
				cat4: "Specialized Skills",
			},
			projects: {
				title: "Featured Projects",
				desc: "Key project experiences that created real business value.",
				gallery: "View Gallery",
				download: "Download App",
				visit: "Visit Site",
				achievements: "Key Achievements",
				impact: "Project Impact",
				cats: ["All", "App", "Web", "Native/PWA"],
			},
			mindset: {
				title: "Work Ethic",
				m1Title: "User-Centric Thinking",
				m1Desc:
					"Beyond simple implementation, I analyze user pain points with data and feedback to design the optimal UX.",
				m2Title: "Sustainable Code",
				m2Desc:
					"I aim for clean code that any team member can understand, focusing on maintainable and scalable architecture.",
				m3Title: "Proactive Problem Solving",
				m3Desc:
					"I don't give up when facing technical limits; I propose various alternatives to find the best path for business goals.",
				m4Title: "Uncompromising Stability",
				m4Desc:
					"I prioritize stable service operation by making thorough testing and monitoring a habit to prevent potential failures.",
			},
			career: {
				title: "Career",
				edu: "Education & More",
				connecti:
					"Yeoldal app (550K signups, 100K MAU): development, performance, and stability",
				biskit: "Pet IoT app and ops admin (RBAC, Excel integration, etc.)",
				univ: "B.A. in Global Business",
				exchange:
					"Exchange at Ming Chuan University, Taiwan (1 year)—adaptability for global services",
				globalTitle: "Global competence",
				globalDesc:
					"Business English and ownership of global-version features and maintenance.",
				extraTitle: "Diligence & responsibility",
				extraDesc:
					"2nd of 500 at 30th Division training; brigade commander's commendation.",
				notion: "View Detailed CV (Notion)",
			},
			footer: {
				built: "Designed & Built by Heeun Lee © 2026",
			},
		},
	}[lang];

	const { scrollY } = useScroll();
	const { scrollYProgress: workEthicProgress } = useScroll({
		target: workEthicRef,
		offset: ["start end", "end start"],
	});

	const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
	const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
	const xWork = useTransform(workEthicProgress, [0, 1], [-200, 200]);
	const xEthic = useTransform(workEthicProgress, [0, 1], [200, -200]);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);

		// Drag to scroll logic (only enhance on desktop)
		const container = scrollContainerRef.current;
		if (!container) return;

		const isDesktop = window.matchMedia("(min-width: 768px)").matches;

		let isDown = false;
		let startX: number;
		let scrollLeft: number;

		const handleMouseDown = (e: MouseEvent) => {
			if (!isDesktop) return;
			isDown = true;
			container.classList.add("active");
			startX = e.clientX;
			scrollLeft = container.scrollLeft;
		};

		const handleMouseLeave = () => {
			if (!isDesktop) return;
			isDown = false;
			container.classList.remove("active");
		};

		const handleMouseUp = (e: MouseEvent) => {
			if (!isDesktop) return;
			isDown = false;
			container.classList.remove("active");

			// Prevent click if dragged
			const walk = Math.abs(e.clientX - startX);
			if (walk > 5) {
				const preventClick = (ev: MouseEvent) => {
					ev.stopImmediatePropagation();
					container.removeEventListener("click", preventClick, true);
				};
				container.addEventListener("click", preventClick, true);
			}
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!isDesktop || !isDown) return;
			e.preventDefault();
			const walk = e.clientX - startX;
			container.scrollLeft = scrollLeft - walk;
		};

		container.addEventListener("mousedown", handleMouseDown);
		container.addEventListener("mouseleave", handleMouseLeave);
		container.addEventListener("mouseup", handleMouseUp);
		container.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			container.removeEventListener("mousedown", handleMouseDown);
			container.removeEventListener("mouseleave", handleMouseLeave);
			container.removeEventListener("mouseup", handleMouseUp);
			container.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const projects: ResumeProject[] = [
		{
			id: "yeoldal",
			title: lang === "ko" ? "열달후에" : "Yeoldal",
			category: "App",
			subtitle:
				lang === "ko"
					? "임신·출산·육아 통합 앱 (가입자 55만·MAU 10만)"
					: "Pregnancy & parenting app (550K signups, 100K MAU)",
			tags: ["React Native", "Reanimated", "eCharts", "Android 15"],
			link: "https://apps.apple.com/kr/app/%EC%97%B4%EB%8B%AC%ED%9B%84%EC%97%90-%EC%9E%84%EC%8B%A0-%EC%B6%9C%EC%82%B0-%EC%9C%A1%EC%95%84-%ED%95%84%EC%88%98-%EC%95%B1/id1491862784",
			images: [
				"https://picsum.photos/seed/yeoldal1/800/1200",
				"https://picsum.photos/seed/yeoldal2/800/1200",
			],
			achievements:
				lang === "ko"
					? [
							"서비스 안정성: Crashlytics 분석·클래스형→함수형(Hooks) 전환으로 비정상 종료율 3.89% → 0.02%",
							"UX·성능: Reanimated 헤더 교체·API 디바운싱으로 40fps → 60fps, 헤더 깜빡임(Glitch) 제거",
							"차트: eCharts 스크롤 지연을 줄이기 위해 ScrollView 기반 커스텀 차트 설계·구현",
							"Android 15: 16KB 페이지 사이즈 메모리 이슈 선제 분석·라이브러리 호환으로 연속 서비스 유지",
							"구조: Atomic Design·모듈화·스니펫에 기여 전체 코드량 약 20% 절감, 기술 부채 축소",
						]
					: [
							"Stability: Crashlytics + class-to-hooks migration; crash rate 3.89% → 0.02%",
							"UX: Reanimated header & API debouncing; 40fps → 60fps; removed header glitch",
							"Charts: Custom ScrollView-based charts to reduce eCharts scroll lag",
							"Android 15: 16KB page-size analysis and library compatibility for continuity",
							"Structure: Contributions to Atomic Design & modularization; 20% less code, less tech debt",
						],
			icon: <Smartphone className="text-brand-accent" />,
			color: "bg-blue-50",
		},
		{
			id: "pethroom-app",
			title: lang === "ko" ? "페스룸 케어 App" : "Pethroom Care App",
			category: "App",
			subtitle:
				lang === "ko" ? "반려동물 IoT 앱 (비스키트)" : "Pet IoT app (Biskit)",
			tags: ["React Native", "Axios", "Bluetooth"],
			link: "https://apps.apple.com/kr/app/%ED%8E%98%EC%8A%A4%EB%A3%B8-%EC%BC%80%EC%96%B4-pethroom-care/id1634567890",
			images: [
				"https://picsum.photos/seed/pethroom1/800/1200",
				"https://picsum.photos/seed/pethroom2/800/1200",
			],
			achievements:
				lang === "ko"
					? [
							"통합 인증: Axios Interceptor로 JWT·소셜 로그인(카카오·구글·애플)을 단일 진입점으로 추상화",
							"보안: Response Interceptor로 중복 로그인 방어·토큰 만료 등 예외를 전역에서 처리",
							"성능: FlatList 최적화·메모이제이션으로 IoT 데이터 렌더링 지연 완화, 런타임 메모리 약 15% 절감",
						]
					: [
							"Auth: Axios interceptors; JWT & social login (Kakao, Google, Apple) behind one entry",
							"Security: Response interceptor for duplicate-login defense and token expiry handling",
							"Performance: FlatList tuning & memoization; less IoT list lag; ~15% lower runtime memory",
						],
			icon: <Zap className="text-brand-accent" />,
			color: "bg-orange-50",
		},
		{
			id: "pethroom-admin",
			title: lang === "ko" ? "페스룸 케어 Admin" : "Pethroom Care Admin",
			category: "Web",
			subtitle:
				lang === "ko"
					? "IoT 운영 어드민 (비스키트)"
					: "Pet IoT operations admin (Biskit)",
			tags:
				lang === "ko"
					? ["React", "MUI DataGrid", "RBAC", "Excel 연동"]
					: ["React", "MUI DataGrid", "RBAC", "Excel"],
			images: [
				"https://picsum.photos/seed/admin1/1200/800",
				"https://picsum.photos/seed/admin2/1200/800",
				"https://picsum.photos/seed/admin3/1200/800",
			],
			achievements:
				lang === "ko"
					? [
							"운영·QA: 레거시 결함 전수 조사 후 MUI DataGrid 기반 RBAC 구축, QA 통과·운영 효율 60% → 100%",
							"권한·데이터: 역할별 화면·대량 IoT·케어 데이터 운영 흐름 정리",
							"엑셀 커스텀 연동으로 운영팀 데이터 핸들링 생산성 향상",
						]
					: [
							"Ops & QA: Legacy defect triage; RBAC on MUI DataGrid; QA & ops efficiency 60% → 100%",
							"RBAC & data: Role-based views for large-scale device and care data",
							"Custom Excel integration for faster ops workflows",
						],
			icon: <BarChart3 className="text-brand-accent" />,
			color: "bg-amber-50",
		},
		{
			id: "findirect",
			title:
				lang === "ko"
					? "핀다이렉트 중고폰 검사"
					: "Findirect used-phone inspection",
			category: "Native/PWA",
			subtitle:
				lang === "ko"
					? "네이티브 진단 프레임워크 & PWA"
					: "Native diagnostic framework & PWA",
			tags: ["Swift", "Native Module", "Blob API", "PWA"],
			images: [
				"https://picsum.photos/seed/findirect1/800/1200",
				"https://picsum.photos/seed/findirect2/1200/800",
			],
			achievements:
				lang === "ko"
					? [
							"Native 융합: Swift 단기 습득으로 카메라, 센서, FaceID 등 하드웨어 진단 모듈 개발",
							"심층 디버깅: SSL 인증서 이슈 우회 및 Network Reachability 실시간 판단 로직 구축",
							"PWA 미디어 처리: Blob/MediaDevices API 활용 영상 서버 전송 및 스트림 제어 최적화",
						]
					: [
							"Native Fusion: Developed hardware diagnostic modules (Camera, Sensors, FaceID) via Swift",
							"Deep Debugging: SSL certificate bypass and real-time Network Reachability logic",
							"PWA Media: Optimized video streaming and server transfer via Blob/MediaDevices API",
						],
			icon: <Terminal className="text-brand-accent" />,
			color: "bg-purple-50",
		},
		{
			id: "wnms",
			title: lang === "ko" ? "JEJU-WNMS" : "JEJU-WNMS",
			category: "Web",
			subtitle:
				lang === "ko"
					? "전국·지역 AP 장비 상태 모니터링 관제 대시보드"
					: "Nationwide/regional AP monitoring & control dashboard",
			tags: ["React", "Redux Toolkit", "MUI", "ECharts", "Kakao Map API"],
			images: [
				"https://picsum.photos/seed/wnms1/1200/800",
				"https://picsum.photos/seed/wnms2/1200/800",
			],
			achievements:
				lang === "ko"
					? [
							"Kakao Map API·마커 커스터마이징으로 장비 상태(정상/장애) 실시간 시각화",
							"ECharts로 트래픽·가동률 등 네트워크 통계를 직관적 그래프로 제공",
						]
					: [
							"Kakao Map + custom markers for live AP health visualization",
							"ECharts dashboards for traffic, uptime, and network statistics",
						],
			icon: <Globe className="text-brand-accent" />,
			color: "bg-emerald-50",
		},
	];

	const filteredProjects =
		activeTab === "All"
			? projects
			: projects.filter((p) => p.category === activeTab);

	return (
		<div className="min-h-screen bg-brand-bg text-brand-primary selection:bg-brand-accent selection:text-white relative overflow-x-hidden">
			{/* Parallax Background Elements */}
			<div className="fixed inset-0 pointer-events-none z-0">
				<motion.div
					style={{ y: y1 }}
					className="absolute top-[10%] left-[5%] w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl"
				/>
				<motion.div
					style={{ y: y2 }}
					className="absolute top-[60%] right-[5%] w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"
				/>
				<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay" />
			</div>

			{/* Navigation */}
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3 shadow-sm" : "py-6"}`}>
				<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
							HW
						</div>
						<span className="font-bold tracking-tighter text-xl">
							HEEUN LEE
						</span>
					</div>
					<div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-secondary">
						<a
							href="#profile"
							className="hover:text-brand-primary transition-colors">
							{t.nav.profile}
						</a>
						<a
							href="#stats"
							className="hover:text-brand-primary transition-colors">
							{t.nav.impact}
						</a>
						<a
							href="#tech"
							className="hover:text-brand-primary transition-colors">
							{t.nav.stack}
						</a>
						<a
							href="#projects"
							className="hover:text-brand-primary transition-colors">
							{t.nav.projects}
						</a>
						<a
							href="#career"
							className="hover:text-brand-primary transition-colors">
							{t.nav.career}
						</a>
					</div>
					<div className="flex items-center gap-4">
						<button
							onClick={() => setLang(lang === "ko" ? "en" : "ko")}
							className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
							<Languages size={16} />
							<span>{lang === "ko" ? "EN" : "KO"}</span>
						</button>
						<a
							href="mailto:hosy12@gmail.com"
							className="px-4 py-2 bg-brand-primary text-white text-sm font-semibold rounded-full hover:bg-brand-secondary transition-all">
							{t.nav.contact}
						</a>
					</div>
				</div>
			</nav>

			<main>
				{/* Hero Section */}
				<section id="profile" className="pt-32 pb-20 px-6 overflow-hidden">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial="initial"
							animate="animate"
							variants={staggerContainer}
							className="grid lg:grid-cols-[1fr_400px] gap-12 items-end">
							<motion.div>
								<motion.div
									variants={fadeIn}
									className="inline-flex items-center gap-2 px-3 py-1 bg-brand-surface border border-brand-border rounded-full text-xs font-bold text-brand-accent mb-6">
									<Zap size={14} />
									<span>{t.hero.badge}</span>
								</motion.div>
								<motion.h1
									variants={fadeIn}
									className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-8 text-brand-primary">
									{lang === "ko" ? (
										<>
											<span className="text-[calc(1em+4px)]">55만</span>
											<span className="text-[calc(1em-4px)]"> 유저의</span>
											<br />
											<span className="text-[calc(1em+6px)]">안정성을</span>
											<br />
											<span className="text-[calc(1em+6px)]">설계하는</span>
											<span className="text-[calc(1em-4px)]"> 해결사.</span>
										</>
									) : (
										<>
											<span className="text-[calc(1em+6px)]">Architecting</span>
											<span className="text-[calc(1em-4px)]"> </span>
											<span className="text-[calc(1em+6px)]">Stability</span>
											<br />
											<span className="text-[calc(1em-4px)]">for </span>
											<span className="text-[calc(1em+4px)]">550K</span>
											<span className="text-[calc(1em-4px)]"> Users.</span>
										</>
									)}
								</motion.h1>
								<motion.p
									variants={fadeIn}
									className="text-xl md:text-2xl text-brand-secondary max-w-2xl leading-relaxed mb-10 text-balance">
									{t.hero.desc}
								</motion.p>

								<motion.div
									variants={fadeIn}
									className="flex flex-wrap gap-6 items-center">
									<div className="flex items-center gap-2 text-sm font-medium">
										<Mail size={18} className="text-brand-accent" />
										<span>hosy12@gmail.com</span>
									</div>
									<div className="flex items-center gap-2 text-sm font-medium">
										<Phone size={18} className="text-brand-accent" />
										<span>010-8362-3454</span>
									</div>
									<div className="flex flex-wrap gap-3 items-center">
										<a
											href="https://heeunlee.notion.site/325e4eb522558063b927e485e4511c28?pvs=74"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 rounded-full border border-brand-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary transition-colors hover:bg-brand-surface hover:text-brand-accent">
											<span
												className="inline-flex shrink-0 items-center justify-center rounded-full p-2 text-[15px] font-black leading-none text-brand-secondary"
												aria-hidden>
												N
											</span>
											<span className="leading-none">{t.hero.resume}</span>
										</a>
										<a
											href="https://heeunlee.notion.site/321e4eb522558019a22ef41d4080ed30?pvs=74"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 rounded-full border border-brand-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary transition-colors hover:bg-brand-surface hover:text-brand-accent">
											<span
												className="inline-flex shrink-0 items-center justify-center rounded-full p-2 text-[15px] font-black leading-none text-brand-secondary"
												aria-hidden>
												N
											</span>
											<span className="leading-none">{t.hero.coverLetter}</span>
										</a>
									</div>
									<div className="flex gap-4">
										<a
											href="https://github.com/khosyk"
											target="_blank"
											rel="noreferrer"
											className="p-2 border border-brand-border rounded-full hover:bg-brand-surface transition-colors">
											<Github size={20} />
										</a>
										<a
											href="https://www.linkedin.com/"
											target="_blank"
											rel="noreferrer"
											className="p-2 border border-brand-border rounded-full hover:bg-brand-surface transition-colors">
											<Linkedin size={20} />
										</a>
									</div>
								</motion.div>
							</motion.div>

							<motion.div
								variants={fadeIn}
								className="bg-brand-surface border border-brand-border p-8 rounded-3xl shadow-xl lg:translate-y-12">
								<h3 className="text-xs font-bold uppercase tracking-widest text-brand-secondary mb-6">
									{t.hero.summaryTitle}
								</h3>
								<p className="text-sm leading-relaxed text-brand-secondary mb-6">
									{t.hero.summaryDesc}
								</p>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<CheckCircle2 size={16} className="text-brand-accent" />
										<span className="text-xs font-semibold">
											{t.hero.summaryPoint1}
										</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={16} className="text-brand-accent" />
										<span className="text-xs font-semibold">
											{t.hero.summaryPoint2}
										</span>
									</div>
									<div className="flex items-center gap-3">
										<CheckCircle2 size={16} className="text-brand-accent" />
										<span className="text-xs font-semibold">
											{t.hero.summaryPoint3}
										</span>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Stats Section */}
				<section
					id="stats"
					className="pt-12 pb-20 bg-brand-primary text-white overflow-hidden relative">
					<div className="max-w-7xl mx-auto px-6">
						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							variants={staggerContainer}
							className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
							<motion.div variants={fadeIn}>
								<StatItem
									label={t.stats.stability}
									value="0.02%"
									subValue={
										lang === "ko" ? "기존 3.89% 대비" : "vs. prior 3.89%"
									}
									desc={t.stats.stabilityDesc}
									color="text-white"
								/>
							</motion.div>
							<motion.div variants={fadeIn} className="md:translate-y-8">
								<StatItem
									label={t.stats.performance}
									value="60fps"
									subValue="40fps → 60fps"
									desc={t.stats.performanceDesc}
									color="text-white"
								/>
							</motion.div>
							<motion.div variants={fadeIn}>
								<StatItem
									label={t.stats.productivity}
									value="+20%"
									subValue={lang === "ko" ? "코드량 절감" : "Code reduction"}
									desc={t.stats.productivityDesc}
									color="text-white"
								/>
							</motion.div>
							<motion.div variants={fadeIn} className="md:translate-y-8">
								<StatItem
									label={t.stats.efficiency}
									value="100%"
									subValue="60% → 100%"
									desc={t.stats.efficiencyDesc}
									color="text-white"
								/>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Tech Stack Section */}
				<section id="tech" className="py-24 px-6 border-b border-brand-border">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true, margin: "-100px" }}
							variants={staggerContainer}
							className="flex flex-col md:flex-row gap-12">
							<motion.div variants={fadeIn} className="md:w-1/3">
								<h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">
									{t.tech.title}
								</h2>
								<p className="text-brand-secondary leading-relaxed">
									{t.tech.desc}
								</p>
							</motion.div>
							<div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
								<motion.div variants={fadeIn}>
									<TechCategory
										title={t.tech.cat1}
										icon={<Layers size={20} />}
										items={[
											"React Native",
											"React",
											"TypeScript",
											"JavaScript",
											"PWA",
											"MobX",
											"Redux Toolkit",
											"Zustand",
											"TanStack Query",
											"Reanimated",
											"Styled Components",
											"MUI",
											"Lottie",
											"Figma",
										]}
									/>
								</motion.div>
								<motion.div variants={fadeIn}>
									<TechCategory
										title={t.tech.cat2}
										icon={<Smartphone size={20} />}
										items={[
											"Swift 5.x",
											"Android Native Module",
											"Singleton/Delegate",
											"Firebase (FCM, Dynamic Links)",
											"AWS S3",
											"REST API",
											"WebSocket",
											"Axios Interceptor",
										]}
									/>
								</motion.div>
								<motion.div variants={fadeIn}>
									<TechCategory
										title={t.tech.cat3}
										icon={<BrainCircuit size={20} />}
										items={[
											"Cursor",
											"MCP",
											"Claude",
											"Stitch AI",
											"Git",
											"Jira",
											"App Store Connect",
											"Google Play Console",
										]}
									/>
								</motion.div>
								<motion.div variants={fadeIn}>
									<TechCategory
										title={t.tech.cat4}
										icon={<Terminal size={20} />}
										items={[
											lang === "ko"
												? "PWA Blob·미디어 처리"
												: "PWA Blob & media",
											lang === "ko"
												? "Android 15 (SDK 35) 16KB 페이지"
												: "Android 15 SDK 35 16KB pages",
											"Atomic Design",
											"RBAC",
										]}
									/>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="py-24 px-6 bg-brand-surface overflow-hidden">
					<div className="">
						<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-8 text-center md:text-left">
							<div className="flex flex-col items-center md:items-start">
								<h2 className="text-5xl font-black tracking-tighter uppercase mb-4">
									{t.projects.title}
								</h2>
								<p className="text-brand-secondary">{t.projects.desc}</p>
							</div>

							{/* Tabs */}
							<div className="flex bg-white p-1 rounded-xl border border-brand-border shadow-sm">
								{t.projects.cats.map((cat: string, i: number) => {
									const internalCat = ["All", "App", "Web", "Native/PWA"][i];
									return (
										<button
											key={internalCat}
											onClick={() => setActiveTab(internalCat)}
											className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
												activeTab === internalCat
													? "bg-brand-primary text-white shadow-md"
													: "text-brand-secondary hover:bg-brand-surface"
											}`}>
											{cat}
										</button>
									);
								})}
							</div>
						</div>

						{/* Horizontal Scroll Container */}
						<div className="relative group -mx-6">
							{/* Navigation Buttons */}
							<div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 hidden lg:block">
								<button
									onClick={() => {
										const el = document.getElementById(
											"project-scroll-container",
										);
										if (el) el.scrollBy({ left: -500, behavior: "smooth" });
									}}
									className="p-4 bg-white border border-brand-border rounded-full shadow-xl hover:bg-brand-primary hover:text-white transition-all">
									<ChevronRight size={24} className="rotate-180" />
								</button>
							</div>
							<div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 hidden lg:block">
								<button
									onClick={() => {
										const el = document.getElementById(
											"project-scroll-container",
										);
										if (el) el.scrollBy({ left: 500, behavior: "smooth" });
									}}
									className="p-4 bg-white border border-brand-border rounded-full shadow-xl hover:bg-brand-primary hover:text-white transition-all">
									<ChevronRight size={24} />
								</button>
							</div>

							<div
								id="project-scroll-container"
								ref={scrollContainerRef}
								className="flex gap-6 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none">
								{/* leading spacer for proper centering */}
								<div className="shrink-0 w-[10vw]" aria-hidden />
								<AnimatePresence mode="popLayout">
									{filteredProjects.map((project) => (
										<motion.div
											key={project.id}
											layout
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.9 }}
											transition={{ duration: 0.4 }}
											className="min-w-[280px] w-[80vw] sm:w-auto sm:min-w-[420px] md:min-w-[520px] lg:min-w-[620px] snap-center">
											<ProjectCard
												project={project}
												t={t.projects}
												onViewDetails={(p) => {
													if (p.link) {
														window.open(p.link, "_blank");
													} else {
														setSelectedProject(p);
													}
												}}
											/>
										</motion.div>
									))}
								</AnimatePresence>
								{/* trailing spacer so last card can center */}
								<div className="shrink-0 w-[10vw]" aria-hidden />
							</div>

							{/* Scroll Indicators (Mobile) */}
							<div className="flex justify-center gap-2 mt-4 md:hidden">
								{filteredProjects.map((_, i) => (
									<div
										key={i}
										className="w-1.5 h-1.5 rounded-full bg-brand-border"
									/>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Work Ethic Section */}
				<section
					ref={workEthicRef}
					className="py-32 px-6 bg-brand-surface/30 relative overflow-hidden">
					{/* Background Decorative Text */}
					<div className="absolute inset-0 flex flex-col justify-between py-10 pointer-events-none select-none overflow-hidden">
						<motion.div
							style={{ x: xWork, opacity: 0.02 }}
							className="text-[25vw] font-black leading-none">
							WORK
						</motion.div>
						<motion.div
							style={{ x: xEthic, opacity: 0.02 }}
							className="text-[25vw] font-black leading-none self-end">
							ETHIC
						</motion.div>
					</div>

					<div className="max-w-7xl mx-auto relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center mb-24">
							<h2 className="text-5xl font-black tracking-tighter uppercase mb-4">
								{t.mindset.title}
							</h2>
							<div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full" />
						</motion.div>

						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true, margin: "-100px" }}
							variants={staggerContainer}
							className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
							<motion.div variants={fadeIn} className="h-full">
								<MindsetItem
									icon={<Zap size={32} />}
									title={t.mindset.m1Title}
									desc={t.mindset.m1Desc}
								/>
							</motion.div>
							<motion.div variants={fadeIn} className="h-full">
								<MindsetItem
									icon={<Users size={32} />}
									title={t.mindset.m2Title}
									desc={t.mindset.m2Desc}
								/>
							</motion.div>
							<motion.div variants={fadeIn} className="h-full">
								<MindsetItem
									icon={<BrainCircuit size={32} />}
									title={t.mindset.m3Title}
									desc={t.mindset.m3Desc}
								/>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Experience & Education */}
				<section id="career" className="py-24 px-6 bg-brand-primary text-white">
					<div className="max-w-7xl mx-auto">
						<motion.div
							initial="initial"
							whileInView="animate"
							viewport={{ once: true, margin: "-100px" }}
							variants={staggerContainer}
							className="grid md:grid-cols-2 gap-20">
							<motion.div variants={fadeIn}>
								<h2 className="text-4xl font-black tracking-tighter uppercase mb-12 flex items-center gap-4">
									<Award className="text-brand-accent" /> {t.career.title}
								</h2>
								<div className="space-y-12">
									<ExperienceItem
										company="커넥트아이 (Connect-i)"
										role="App Developer"
										period="2024.05 ~ 현재"
										desc={t.career.connecti}
									/>
									<ExperienceItem
										company="비스키트 (Biskit)"
										role="Junior Developer"
										period="2022.04 ~ 2023.10"
										desc={t.career.biskit}
									/>
								</div>
							</motion.div>
							<motion.div variants={fadeIn}>
								<h2 className="text-4xl font-black tracking-tighter uppercase mb-12 flex items-center gap-4">
									<Globe className="text-brand-accent" /> {t.career.edu}
								</h2>
								<div className="space-y-12">
									<ExperienceItem
										company={lang === "ko" ? "수원대학교" : "Suwon University"}
										role={t.career.univ}
										period="2010.03 ~ 2018.03"
										desc={t.career.exchange}
									/>
									<div className="p-6 border border-white/10 rounded-2xl bg-white/5">
										<h4 className="text-lg font-bold mb-2">
											{t.career.globalTitle}
										</h4>
										<p className="text-sm text-white/60 leading-relaxed">
											{t.career.globalDesc}
										</p>
									</div>
									<div className="p-6 border border-white/10 rounded-2xl bg-white/5">
										<h4 className="text-lg font-bold mb-2">
											{t.career.extraTitle}
										</h4>
										<p className="text-sm text-white/60 leading-relaxed">
											{t.career.extraDesc}
										</p>
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</main>

			<footer className="py-12 px-6 border-t border-brand-border text-center">
				<div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
					<div className="flex gap-4">
						<a
							href="https://github.com/khosyk"
							target="_blank"
							rel="noreferrer"
							className="p-2 border border-brand-border rounded-full text-brand-secondary hover:bg-brand-surface hover:text-brand-primary transition-colors">
							<Github size={20} />
						</a>
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							rel="noreferrer"
							className="p-2 border border-brand-border rounded-full text-brand-secondary hover:bg-brand-surface hover:text-brand-primary transition-colors">
							<Linkedin size={20} />
						</a>
						<a
							href="https://heeunlee.notion.site/325e4eb522558063b927e485e4511c28?pvs=74"
							target="_blank"
							rel="noopener noreferrer"
							className="w-9 h-9 border border-brand-border rounded-full text-brand-secondary hover:bg-brand-surface hover:text-brand-primary transition-colors flex items-center justify-center font-black text-sm"
							title="Notion">
							N
						</a>
					</div>
					<p className="text-xs font-bold text-brand-secondary uppercase tracking-widest">
						{t.footer.built}
					</p>
				</div>
			</footer>

			{/* Scroll to Top Button */}
			<AnimatePresence>
				{scrolled && (
					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="fixed bottom-8 right-8 z-50 p-4 bg-brand-primary text-white rounded-full shadow-2xl hover:bg-brand-secondary transition-all">
						<ArrowUp size={24} />
					</motion.button>
				)}
			</AnimatePresence>

			{/* Image Gallery Modal */}
			<AnimatePresence>
				{selectedProject && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
						onClick={() => setSelectedProject(null)}>
						<motion.div
							initial={{ scale: 0.9, y: 20 }}
							animate={{ scale: 1, y: 0 }}
							exit={{ scale: 0.9, y: 20 }}
							className="relative max-w-6xl w-full bg-white rounded-[2rem] overflow-hidden flex flex-col max-h-[90vh]"
							onClick={(e) => e.stopPropagation()}>
							<div className="p-6 border-b border-brand-border flex justify-between items-center bg-white sticky top-0 z-10">
								<div>
									<h3 className="text-2xl font-black tracking-tighter">
										{selectedProject.title}
									</h3>
									<p className="text-brand-secondary text-sm font-medium">
										{selectedProject.subtitle}
									</p>
								</div>
								<button
									onClick={() => setSelectedProject(null)}
									className="p-2 hover:bg-brand-surface rounded-full transition-colors">
									<Zap className="rotate-45" />
								</button>
							</div>

							<div className="overflow-y-auto p-6 md:p-10 no-scrollbar">
								<div
									className={`grid gap-8 ${selectedProject.category === "App" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
									{selectedProject.images?.map((img: string, i: number) => (
										<div key={i} className="space-y-2">
											<img
												src={img}
												alt={`${selectedProject.title} screenshot ${i + 1}`}
												className="w-full rounded-2xl shadow-lg border border-brand-border"
												referrerPolicy="no-referrer"
											/>
											<p className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest text-center">
												{selectedProject.category === "App"
													? `Screen ${i + 1}`
													: `Dashboard View ${i + 1}`}
											</p>
										</div>
									))}
								</div>

								<div className="mt-12 p-8 bg-brand-surface rounded-3xl">
									<h4 className="text-sm font-black uppercase tracking-widest mb-4">
										{t.projects.impact}
									</h4>
									<ul className="grid md:grid-cols-2 gap-4">
										{selectedProject.achievements.map(
											(item: string, i: number) => (
												<li key={i} className="flex gap-3 items-start">
													<CheckCircle2
														size={16}
														className="text-brand-accent mt-0.5"
													/>
													<p className="text-sm font-medium text-brand-secondary leading-relaxed">
														{item}
													</p>
												</li>
											),
										)}
									</ul>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

function StatItem({
	label,
	value,
	subValue,
	desc,
	color = "text-white",
	subValueColor = "bg-brand-accent/20 text-brand-accent",
}: {
	label: string;
	value: string;
	subValue: string;
	desc: string;
	color?: string;
	subValueColor?: string;
}) {
	return (
		<motion.div whileHover={{ y: -5 }} className="flex flex-col">
			<span className="text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
				{label}
			</span>
			<span className={`text-5xl font-black tracking-tighter mb-1 ${color}`}>
				{value}
			</span>
			<div
				className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold w-fit mb-4 ${subValueColor}`}>
				{subValue}
			</div>
			<p className="text-xs text-white/40 leading-tight">{desc}</p>
		</motion.div>
	);
}

function TechCategory({
	title,
	icon,
	items,
}: {
	title: string;
	icon: React.ReactNode;
	items: string[];
}) {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 text-brand-primary">
				{icon}
				<h4 className="font-bold text-sm uppercase tracking-wider">{title}</h4>
			</div>
			<div className="flex flex-wrap gap-2">
				{items.map((item, i) => (
					<motion.span
						key={item}
						initial={{
							backgroundColor: "rgba(248, 249, 250, 1)",
							color: "rgba(108, 117, 125, 1)",
							scale: 1,
						}}
						whileInView={{
							backgroundColor: [
								"rgba(248, 249, 250, 1)",
								"rgba(226, 232, 240, 1)",
								"rgba(255, 255, 255, 1)",
								"rgba(226, 232, 240, 1)",
								"rgba(248, 249, 250, 1)",
							],
							color: [
								"rgba(108, 117, 125, 1)",
								"rgba(15, 23, 42, 1)",
								"rgba(0, 0, 0, 1)",
								"rgba(15, 23, 42, 1)",
								"rgba(108, 117, 125, 1)",
							],
							scale: [1, 1.05, 1.1, 1.05, 1],
							boxShadow: [
								"0 0 0 rgba(0,0,0,0)",
								"0 0 15px rgba(255,255,255,0.5)",
								"0 0 30px rgba(255,255,255,0.9), inset 0 0 15px rgba(255,255,255,0.8)",
								"0 0 15px rgba(255,255,255,0.5)",
								"0 0 0 rgba(0,0,0,0)",
							],
							borderColor: [
								"rgba(222, 226, 230, 1)",
								"rgba(255, 255, 255, 1)",
								"rgba(255, 255, 255, 1)",
								"rgba(255, 255, 255, 1)",
								"rgba(222, 226, 230, 1)",
							],
						}}
						viewport={{ once: false, amount: 0.8 }}
						transition={{
							duration: 2,
							delay: i * 0.15,
							ease: "easeInOut",
							repeat: Infinity,
							repeatDelay: 4,
						}}
						className="px-3 py-1 bg-brand-surface border border-brand-border rounded-md text-xs font-black relative overflow-hidden group">
						<motion.div
							initial={{ x: "-150%", skewX: -20 }}
							whileInView={{ x: "250%" }}
							transition={{
								duration: 1.2,
								delay: i * 0.15,
								repeat: Infinity,
								repeatDelay: 4.8,
								ease: "linear",
							}}
							className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-10"
						/>
						<span className="relative z-0">{item}</span>
					</motion.span>
				))}
			</div>
		</div>
	);
}

interface ProjectCardStrings {
	achievements: string;
	gallery: string;
	download: string;
	visit: string;
}

function ProjectCard({
	project,
	t,
	onViewDetails,
}: {
	project: ResumeProject;
	t: ProjectCardStrings;
	onViewDetails: (p: ResumeProject) => void;
}) {
	return (
		<div className="h-full flex flex-col bg-white border border-brand-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group/card">
			<div
				className={`p-8 ${project.color} border-b border-brand-border flex justify-between items-start`}>
				<div>
					<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover/card:scale-110 transition-transform duration-500">
						{project.icon}
					</div>
					<h3 className="text-3xl font-black tracking-tighter mb-2">
						{project.title}
					</h3>
					<p className="text-brand-secondary font-bold text-sm mb-4">
						{project.subtitle}
					</p>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag: string) => (
							<span
								key={tag}
								className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-brand-primary text-white rounded">
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="p-8 md:p-10 flex-grow flex flex-col">
				<h4 className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
					<div className="w-4 h-[1px] bg-brand-accent" />
					{t.achievements}
				</h4>
				<ul className="space-y-4 flex-grow">
					{project.achievements.map((item: string, i: number) => (
						<li key={i} className="flex gap-3 items-start">
							<div className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
							<p className="text-brand-secondary leading-relaxed text-sm font-medium">
								{item}
							</p>
						</li>
					))}
				</ul>
				<div className="mt-8 pt-6 border-t border-brand-border flex justify-between items-center">
					<span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">
						{project.category}
					</span>
					{project.link && project.category !== "App" && (
						<button
							onClick={() => onViewDetails(project)}
							className="text-xs font-bold flex items-center gap-1 group/btn">
							{t.visit}
							<ChevronRight
								size={14}
								className="group-hover/btn:translate-x-1 transition-transform"
							/>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

function MindsetItem({
	icon,
	title,
	desc,
}: {
	icon: React.ReactNode;
	title: string;
	desc: string;
}) {
	return (
		<div className="p-8 border border-brand-border rounded-3xl hover:bg-brand-surface transition-colors h-full flex flex-col">
			<div className="text-brand-accent mb-6">{icon}</div>
			<h4 className="text-xl font-bold mb-4">{title}</h4>
			<p className="text-brand-secondary leading-relaxed text-sm flex-grow">
				{desc}
			</p>
		</div>
	);
}

function ExperienceItem({
	company,
	role,
	period,
	desc,
}: {
	company: string;
	role: string;
	period: string;
	desc: string;
}) {
	return (
		<div className="relative pl-8 border-l border-white/10">
			<div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-accent" />
			<span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2 block">
				{period}
			</span>
			<h3 className="text-2xl font-bold mb-1">{company}</h3>
			<p className="text-white/60 font-medium mb-4">{role}</p>
			<p className="text-sm text-white/40 leading-relaxed">{desc}</p>
		</div>
	);
}
