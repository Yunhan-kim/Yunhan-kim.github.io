/* =====================================================================
   Yunhan Kim — Personal Academic Website
   Bilingual (KO / EN) content data
   ===================================================================== */

const DATA = {
  profile: {
    name:        { en: "Yunhan Kim", ko: "김윤한" },
    title:       { en: "Senior Researcher, Ph.D.", ko: "선임연구원, 공학박사" },
    affiliation: {
      en: "Autonomous Manufacturing Research Center,<br>Korea Electronics Technology Institute (KETI)",
      ko: "한국전자기술연구원(KETI)<br>자율제조연구센터"
    },
    location: {
      en: "42, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea, 13449",
      ko: "경기도 성남시 수정구 창업로 42, 13449, 대한민국"
    },
    email: "yunhan.kim@keti.re.kr",
    linkedin: "https://www.linkedin.com/in/yunhan-kim/",
    scholar: "https://scholar.google.com/citations?user=O6DL_hsAAAAJ&hl=ko&oi=ao",
    orcid: "https://orcid.org/0000-0002-9732-8648"
  },

  about: {
    en: "Yunhan Kim is a Senior Researcher at the Autonomous Manufacturing Research Center, Korea Electronics Technology Institute (KETI), where he leads the technical development of national R&D programs driving Korea's shift toward <b>AI Autonomous Manufacturing</b>. He received his B.S. and Ph.D. in Mechanical and Aerospace Engineering from Seoul National University (2016, 2022), and previously served as a Staff Engineer at Samsung Electronics and a Visiting Scholar at the University of Toronto. His work pushes industrial AI beyond monitoring toward genuine autonomy — building <b>manufacturing &amp; robot foundation models</b>, <b>factory AI agents</b>, and <b>humanoid robots</b> that perceive, reason about, and physically operate real production processes. He has authored 5 first-author SCIE papers (3 in top-5% journals) and holds 9 granted Korean patents, with research recognized by the PHM Society, KSME, CDE, and KSMTE.",
    ko: "김윤한은 한국전자기술연구원(KETI) 자율제조연구센터 선임연구원으로, 대한민국의 <b>AI 자율제조</b> 전환을 이끄는 다수의 국가 R&D 과제 기술 개발을 총괄하고 있습니다. 서울대학교에서 기계항공공학 학사(2016)·박사(2022)를 취득하였으며, 삼성전자 책임연구원과 캐나다 University of Toronto 방문연구원을 역임하였습니다. 그의 연구는 산업 AI를 단순 모니터링을 넘어 진정한 <b>자율성</b>으로 끌어올리는 데 초점을 둡니다 — 생산 공정을 직접 인식·추론·수행하는 <b>제조·로봇 파운데이션 모델</b>, <b>Factory AI 에이전트</b>, <b>휴머노이드 로봇</b>을 개발합니다. 제1저자 SCIE 논문 5편(상위 5% 저널 3편)과 등록특허 9건을 보유하고 있으며, PHM Society·대한기계학회(KSME)·한국CDE학회(CDE)·한국생산제조학회(KSMTE) 등에서 수상하며 연구를 인정받았습니다."
  },

  research: {
    /* hero rotating keywords */
    keywords: {
      en: ["Manufacturing AI", "Foundation Models", "Humanoid Robotics", "Factory AI Agents", "Industrial Anomaly Detection", "Generative AI"],
      ko: ["제조 AI", "파운데이션 모델", "휴머노이드 로보틱스", "Factory AI Agent", "산업용 이상 탐지", "생성형 AI"]
    },
    intro: {
      en: "My research builds both the <span class=\"kw-intel\">intelligence</span> and the <span class=\"kw-embod\">embodiment</span> of AI Autonomous Manufacturing — foundation models that understand the factory, agents that reason and decide, and humanoid robots that physically act. It spans three tightly connected thrusts:",
      ko: "제 연구는 AI 자율제조의 <span class=\"kw-intel\">지능(intelligence)</span>과 <span class=\"kw-embod\">신체(embodiment)</span>를 함께 구축합니다 — 공장을 이해하는 파운데이션 모델, 추론하고 결정하는 에이전트, 그리고 직접 행동하는 휴머노이드 로봇. 서로 긴밀히 연결된 세 가지 축으로 진행됩니다:"
    },
    /* concept band: Intelligence — AI Autonomous Manufacturing — Embodiment */
    concept: {
      left:  { icon:"intelligence", title:{en:"Intelligence",ko:"지능 (Intelligence)"}, sub:{en:"Data · Knowledge · Reasoning",ko:"데이터 · 지식 · 추론"} },
      core:  { title:{en:"AI Autonomous Manufacturing",ko:"AI 자율제조"}, sub:{en:"Unifying intelligence &amp; embodiment",ko:"지능과 신체의 통합"} },
      right: { icon:"embodiment", title:{en:"Embodiment",ko:"신체 (Embodiment)"}, sub:{en:"Perception · Action · Execution",ko:"인식 · 행동 · 실행"} }
    },
    /* closing flow band */
    flow: {
      steps: [ {en:"Understand the Factory",ko:"공장을 이해하다"},
               {en:"Decide for the Factory",ko:"공장을 위해 결정하다"},
               {en:"Act in the Factory",ko:"공장에서 행동하다"} ],
      tagline: {en:"Unifying intelligence, embodiment, and decision-making",ko:"지능 · 신체 · 의사결정의 통합"}
    },
    /* three featured research pillars with illustrations */
    featured: [
      { icon: "fm", role: { en: "Understand the Factory", ko: "공장을 이해하다" },
        title: { en: "Manufacturing &amp; Robot Foundation Models", ko: "제조·로봇 파운데이션 모델" },
        lead:  { en: "Large-scale foundation models serving as the shared intelligence layer of autonomous manufacturing.",
                 ko: "자율제조의 공통 지능 계층이 되는 대규모 파운데이션 모델을 구축합니다." },
        points:{ en: ["Manufacturing Foundation Model (MFM): a unified high-frequency time-series model for cross-domain fault classification",
                      "Robot Foundation Model (RFM): omnimodal perception–reasoning–action for humanoid tasks, pre-trained in physics simulation",
                      "Generative (latent-diffusion) augmentation synthesizing micro-defect images to overcome data imbalance"],
                 ko: ["제조 파운데이션 모델(MFM): 도메인을 아우르는 결함 분류용 통합 고주파 시계열 모델",
                      "로봇 파운데이션 모델(RFM): 물리 시뮬레이션 사전학습 기반 휴머노이드용 옴니모달 인식–추론–행동",
                      "Latent Diffusion 생성 증강으로 미세 결함 이미지 합성 — 데이터 불균형 해소"] } },
      { icon: "humanoid", role: { en: "Act in the Factory", ko: "공장에서 행동하다" },
        title: { en: "Humanoid Robotics for Autonomous Manufacturing", ko: "자율제조를 위한 휴머노이드 로보틱스" },
        lead:  { en: "Skilled-worker-level humanoid robots that physically operate real production processes — centered on force-aware, contact-rich manipulation and on-site autonomous operation.",
                 ko: "실제 생산 공정을 직접 수행하는 숙련공 수준의 휴머노이드 로봇 — 힘-인지 기반 접촉 정밀 조작과 현장 자율 운영에 중점을 둡니다." },
        points:{ en: ["Channel-decoupled force-tokenization, ACT-style imitation learning that keeps each finger/contact-force channel independently addressable",
                      "Force-aware policies fusing RGB, proprioception, and per-finger force — improving grasp reliability in contact-rich tasks",
                      "Validated on real manufacturing testbeds — bearing-ring sorting and parts transfer for machine tending"],
                 ko: ["손가락·접촉 힘 채널을 독립적으로 다루는 채널 분리 힘 토큰화 기반 ACT 모방학습",
                      "RGB·관절상태·손가락별 힘을 융합한 힘-인지 정책으로 접촉 기반 작업의 파지 신뢰성 향상",
                      "베어링 링 분류·머신 텐딩 부품 이송 등 실제 제조 테스트베드에서 검증"] } },
      { icon: "agent", role: { en: "Decide for the Factory", ko: "공장을 위해 결정하다" },
        title: { en: "Factory AI Agents", ko: "Factory AI 에이전트" },
        lead:  { en: "LLM-powered agents that perceive, reason about, and act over factory data, tools, and equipment to support autonomous decision-making.",
                 ko: "공장 데이터·도구·설비를 인식·추론·실행하여 자율 의사결정을 지원하는 LLM 기반 에이전트를 설계합니다." },
        points:{ en: ["Multi-agent architecture: an Orchestrator coordinating Analysis, Retrieval (RAG / vector DB), and Monitoring agents bridging ERP/MES/QMS/SCM",
                      "LLM reasoning that turns predictions into <i>What–Why–How</i> — answer, root-cause, and recommended action — not a bare number",
                      "Manufacturing-domain knowledge structuring for context-optimized retrieval, aligned to SOPs and work instructions"],
                 ko: ["멀티 에이전트 구조: 오케스트레이터가 분석·검색(RAG/Vector DB)·ERP/MES/QMS/SCM 연동 모니터링 에이전트를 조율",
                      "LLM 추론으로 예측을 <i>What–Why–How</i>(결과·원인·조치)로 제공 — 단순 수치가 아님",
                      "SOP·작업지시서에 정렬된 컨텍스트 최적화 검색을 위한 제조 도메인 지식 구조화"] } }
    ]
  },

  education: [
    {
      org:    { en: "Seoul National University", ko: "서울대학교" },
      period: { en: "Mar. 2016 – Feb. 2022", ko: "2016.03 – 2022.02" },
      place:  { en: "Seoul, Republic of Korea", ko: "서울, 대한민국" },
      detail: { en: "Ph.D. in Mechanical and Aerospace Engineering (Advisor: Prof. Byeng D. Youn) · GPA 3.86 / 4.3",
                ko: "기계항공공학부 박사 (지도교수: 윤병동 교수) · 학점 3.86 / 4.3" }
    },
    {
      org:    { en: "Seoul National University", ko: "서울대학교" },
      period: { en: "Mar. 2010 – Feb. 2016", ko: "2010.03 – 2016.02" },
      place:  { en: "Seoul, Republic of Korea", ko: "서울, 대한민국" },
      detail: { en: "B.S. in Mechanical and Aerospace Engineering (Minor in Statistics) · GPA 3.64 / 4.3 (Cum Laude)",
                ko: "기계항공공학부 학사 (통계학 부전공) · 학점 3.64 / 4.3 (우등 졸업)" }
    }
  ],

  experience: [
    { org:{en:"Korea Electronics Technology Institute (KETI)",ko:"한국전자기술연구원 (KETI)"},
      role:{en:"Senior Researcher",ko:"선임연구원"},
      period:{en:"Mar. 2024 – Present",ko:"2024.03 – 현재"},
      place:{en:"Seongnam, Republic of Korea",ko:"성남, 대한민국"} },
    { org:{en:"Samsung Electronics",ko:"삼성전자"},
      role:{en:"Staff Engineer",ko:"책임연구원 (Staff Engineer)"},
      period:{en:"Mar. 2022 – Feb. 2024",ko:"2022.03 – 2024.02"},
      place:{en:"Suwon, Republic of Korea",ko:"수원, 대한민국"} },
    { org:{en:"University of Toronto",ko:"토론토 대학교"},
      role:{en:"Visiting Scholar",ko:"방문연구원"},
      period:{en:"Sep. 2021 – Nov. 2021",ko:"2021.09 – 2021.11"},
      place:{en:"Toronto, ON, Canada",ko:"토론토, 캐나다"} },
    { org:{en:"Seoul National University",ko:"서울대학교"},
      role:{en:"Teaching Assistant (Eng. Mathematics, ME Lab., Advanced Topics in ME)",ko:"조교 (공업수학, 기계공학실험, 기계공학특론)"},
      period:{en:"Sep. 2016 – Dec. 2018",ko:"2016.09 – 2018.12"},
      place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"} },
    { org:{en:"Hyundai Motors",ko:"현대자동차"},
      role:{en:"Winter Intern",ko:"동계 인턴"},
      period:{en:"Jan. 2015 – Feb. 2015",ko:"2015.01 – 2015.02"},
      place:{en:"Yongin, Republic of Korea",ko:"용인, 대한민국"} },
    { org:{en:"Korea Student Aid Foundation (KOSAF)",ko:"한국장학재단"},
      role:{en:"Student Ambassador",ko:"학생 홍보대사"},
      period:{en:"Jan. 2014 – Dec. 2014",ko:"2014.01 – 2014.12"},
      place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"} },
    { org:{en:"Korea National Police Agency",ko:"대한민국 경찰청"},
      role:{en:"Auxiliary Police (Military Service)",ko:"의무경찰 (병역)"},
      period:{en:"Mar. 2011 – Dec. 2012",ko:"2011.03 – 2012.12"},
      place:{en:"Busan, Republic of Korea",ko:"부산, 대한민국"} }
  ],

  projects: [
    { role:"lead", title:{en:"Autonomous Process Operation Technology Based on Humanoid Robots for Autonomous Manufacturing",
             ko:"주력 제조업종의 자율제조를 위한 휴머노이드 로봇 기반 자율공정 운영 기술 개발"},
      period:{en:"Sep. 2024 – Dec. 2028 · Korea Planning & Evaluation Institute of Industrial Technology (KEIT)",ko:"2024.09 – 2028.12 · 산업기술기획평가원(KEIT)"},
      detail:{en:"Developing reinforcement-learning-based control algorithms for humanoid robots",
              ko:"휴머노이드 로봇을 위한 강화학습 기반 제어 알고리즘 개발"},
      summary:"assets/projects/humanoid_proc.jpg" },
    { role:"copi", title:{en:"Development of Core Technologies for Manufacturing Foundation Models",
             ko:"제조 특화 파운데이션 모델(MFM) 핵심 기술 개발"},
      period:{en:"Aug. 2025 – Feb. 2028 · Korea Planning & Evaluation Institute of Industrial Technology (KEIT)",ko:"2025.08 – 2028.02 · 산업기술기획평가원(KEIT)"},
      detail:{en:"Developing manufacturing-specific foundation models and factory AI agents",
              ko:"제조 특화 파운데이션 모델 및 Factory AI 에이전트 개발"},
      summary:"assets/projects/mfm.jpg" },
    { role:"lead", title:{en:"On-Device Generative-AI-Based Quality Inspection Using Small-Scale Data",
             ko:"생성형 AI 및 스몰데이터 기반 온디바이스 AI 품질 검사 최적화 기술 개발"},
      period:{en:"Jun. 2024 – Feb. 2027 · Korea Planning & Evaluation Institute of Industrial Technology (KEIT)",ko:"2024.06 – 2027.02 · 산업기술기획평가원(KEIT)"},
      detail:{en:"Developing a defect-image generation model using image generation AI",
              ko:"이미지 생성 AI를 활용한 결함 이미지 생성 모델 개발"},
      summary:"assets/projects/ondevice.jpg" },
    { title:{en:"Korea-Germany Intelligent Manufacturing Systems Laboratory",
             ko:"한국-독일 지능형 제조 시스템 연구실"},
      period:{en:"Aug. 2018 – Feb. 2022 · National Research Foundation of Korea (NRF)",ko:"2018.08 – 2022.02 · 한국연구재단(NRF)"},
      detail:{en:"Developed deep-learning machining quality monitoring for laser-assisted micro-milling of glass",
              ko:"유리 레이저 보조 미세 가공의 딥러닝 기반 가공 품질 모니터링 개발"},
      summary:"assets/projects/kgims.jpg" },
    { role:"sole", title:{en:"Deep-Learning-Based Fault Diagnostics for Manufacturing Systems Considering Data Imbalance",
             ko:"데이터 불균형을 고려한 딥러닝 기반 제조 설비 고장 예측진단 연구"},
      period:{en:"Sep. 2021 – Nov. 2021 · National Research Foundation of Korea (NRF) & Mitacs Globalink",ko:"2021.09 – 2021.11 · 한국연구재단(NRF) & Mitacs Globalink"},
      detail:{en:"Developed a fault-diagnostic model robust to imbalanced datasets",
              ko:"불균형 데이터셋에 강건한 고장 진단 모델 개발"},
      summary:"assets/projects/imbalance_phm.jpg" },
    { role:"sole", title:{en:"Inception-Based CNN for Fault Diagnostics in Manufacturing Systems",
             ko:"제조 시스템의 고장 진단을 위한 인셉션 기반 합성곱 신경망 연구"},
      period:{en:"Jun. 2020 – May 2021 · National Research Foundation of Korea (NRF)",ko:"2020.06 – 2021.05 · 한국연구재단(NRF)"},
      detail:{en:"Developed deep-learning fault diagnostics for industrial gearboxes",
              ko:"산업용 기어박스를 위한 딥러닝 고장 진단 개발"},
      summary:"assets/projects/inception_cnn.jpg" },
    { title:{en:"Health State Diagnostics & Prognostics Integrating AI and Expert Knowledge",
             ko:"인공지능-전문가지식 융합형 변전설비 상태진단 및 예측기술 개발"},
      period:{en:"Apr. 2019 – Aug. 2020 · Korea Electric Power Corporation (KEPCO)",ko:"2019.04 – 2020.08 · 한국전력공사(KEPCO)"},
      detail:{en:"Developed anomaly detection for GIS circuit breakers",
              ko:"GIS 차단기 이상 탐지 개발"},
      summary:"assets/projects/kepco.jpg" },
    { title:{en:"Reliability & Process Advisory Group for Enterprise Parts",
             ko:"신뢰성 기법 적용 부품 확대를 위한 산학 자문단 운영"},
      period:{en:"Aug. 2020 – May 2021 · Hyundai Motors",ko:"2020.08 – 2021.05 · 현대자동차"},
      detail:{en:"Reliability and failure analysis for 7-speed dual-clutch transmission (DCT)",
              ko:"7단 듀얼 클러치 변속기(DCT) 신뢰성·고장 분석"},
      summary:"assets/projects/advisory.jpg" },
    { title:{en:"Health Feature Model in an Industrial Robot Considering Operating Conditions",
             ko:"운행 환경을 고려한 산업용 로봇 건전성 인자 모델 개발"},
      period:{en:"Sep. 2017 – Aug. 2018 · Hyundai Robotics",ko:"2017.09 – 2018.08 · 현대로보틱스"},
      detail:{en:"Fault detection for gearboxes in industrial robots",
              ko:"산업용 로봇 기어박스 고장 감지"},
      summary:"assets/projects/healthfeature.jpg" },
    { title:{en:"Experimental Assessment of Fault Detection Methods for an Industrial Robot",
             ko:"로봇 작동조건에 따른 RV 감속기 고장진단 성능 평가"},
      period:{en:"Jun. 2016 – May 2017 · Hyundai Heavy Industries",ko:"2016.06 – 2017.05 · 현대중공업"},
      detail:{en:"Fault detection for gearboxes in industrial robots",
              ko:"산업용 로봇 기어박스 고장 감지"},
      summary:"assets/projects/faultassess.jpg" }
  ],

  /* Journal publications. doi -> https://doi.org/<doi> */
  journals: [
    {id:"J15", authors:"Yunhan Kim", title:"Joint Reconstruction and Localization Network via Pre-trained Feature Mapping for Industrial Anomaly Detection", venue:"Engineering Applications of Artificial Intelligence", info:"v176, 114744", year:2026, doi:"10.1016/j.engappai.2026.114744", first:true},
    {id:"J14", authors:"Kyumin Na, Yunhan Kim, Heonjun Yoon, Byeng D. Youn", title:"FASER: Fault-affected Signal Energy Ratio for Fault Diagnosis of Gearboxes Under Repetitive Operating Conditions", venue:"Expert Systems with Applications", info:"v128, 122078", year:2024, doi:"10.1016/j.eswa.2023.122078"},
    {id:"J13", authors:"Yeongtak Oh, Yunhan Kim, Kyumin Na, Byeng D. Youn", title:"A deep transferable motion-adaptive fault detection method for industrial robots using a residual-convolutional neural network", venue:"ISA Transactions", info:"v128, p521-534", year:2022, doi:"10.1016/j.isatra.2021.11.019"},
    {id:"J12", authors:"Yunhan Kim, Taekyum Kim, Byeng D. Youn, Sung-Hoon Ahn", title:"Machining quality monitoring (MQM) in laser-assisted micro-milling of glass using cutting force signals: an image-based deep transfer learning", venue:"Journal of Intelligent Manufacturing", info:"v33, n6, p1813-1828", year:2022, doi:"10.1007/s10845-021-01764-5", roles:{first:[0,1],corr:[2,3]}},
    {id:"J11", authors:"Yunhan Kim, Kyumin Na, Byeng D. Youn", title:"A health-adaptive time-scale representation (HTSR) embedded convolutional neural network for gearbox fault diagnostics", venue:"Mechanical Systems and Signal Processing", info:"v167, 108575", year:2022, doi:"10.1016/j.ymssp.2021.108575", first:true},
    {id:"J10", authors:"Jungho Park, Yunhan Kim, Kyumin Na, Byeng D. Youn, Yuejian Chen, Ming J. Zuo, Yong-Chae Bae", title:"An image-based feature extraction method for fault diagnosis of variable-speed rotating machinery", venue:"Mechanical Systems and Signal Processing", info:"v167, 108524", year:2022, doi:"10.1016/j.ymssp.2021.108524", roles:{first:[0],corr:[3,5]}},
    {id:"J9", authors:"Yunhan Kim, Jong M. Ha, Kyumin Na, Jungho Park, Byeng D. Youn", title:"Cepstrum-assisted empirical wavelet transform (CEWT)-based improved demodulation analysis for fault diagnostics of planetary gearboxes", venue:"Measurement", info:"v183, 109796", year:2021, doi:"10.1016/j.measurement.2021.109796", first:true},
    {id:"J8", authors:"Myeongbaek Youn, Yunhan Kim, Dongki Lee, Minki Cho, Byeng D. Youn", title:"Fatigue Crack Length Estimation and Prediction using Trans-fitting with Support Vector Regression", venue:"International Journal of Prognostics and Health Management", info:"v11, n1, p1-12", year:2020, doi:"10.36001/ijphm.2020.v11i1.2606"},
    {id:"J7", authors:"Minji Yoo, Taejin Kim, Joung T. Yoon, Yunhan Kim, Sooho Kim, Byeng D. Youn", title:"A resilience measure formulation that considers sensor faults", venue:"Reliability Engineering & System Safety", info:"v199, 106393", year:2020, doi:"10.1016/j.ress.2019.02.025", roles:{first:[0,1],corr:[5]}},
    {id:"J6", authors:"Yunhan Kim, Jungho Park, Kyumin Na, Hao Yuan, Byeng D. Youn, Chang-soon Kang", title:"Phase-based time domain averaging (PTDA) for fault detection of a gearbox in an industrial robot using vibration signals", venue:"Mechanical Systems and Signal Processing", info:"v138, 106544", year:2020, doi:"10.1016/j.ymssp.2019.106544", first:true},
    {id:"J5", authors:"Jungho Park, Yunhan Kim, Kyumin Na, Byeng D. Youn", title:"Variance of energy residual (VER): An efficient method for planetary gear fault detection under variable speed conditions", venue:"Journal of Sound and Vibration", info:"v453, p253-267", year:2019, doi:"10.1016/j.jsv.2019.04.017"},
    {id:"J4", authors:"Joung T. Yoon, Byeng D. Youn, Minji Yoo, Yunhan Kim, Sooho Kim", title:"Life-cycle maintenance cost analysis framework considering time-dependent false and missed alarms for fault diagnosis", venue:"Reliability Engineering & System Safety", info:"v184, p181-192", year:2019, doi:"10.1016/j.ress.2018.06.006"},
    {id:"J3", authors:"Jungho Park, Moussa Hamadache, Jong M. Ha, Yunhan Kim, Byeng D. Youn", title:"A positive energy residual (PER) based planetary gear fault detection method under variable speed conditions", venue:"Mechanical Systems and Signal Processing", info:"v117, p347-360", year:2019, doi:"10.1016/j.ymssp.2018.08.010"},
    {id:"J2", authors:"Jong M. Ha, Jungho Park, Kyumin Na, Yunhan Kim, Byeng D. Youn", title:"Toothwise Fault Identification for a Planetary Gearbox Based on a Health Data Map", venue:"IEEE Transactions on Industrial Electronics", info:"v65, n7, p5903-5912", year:2018, doi:"10.1109/TIE.2017.2779416"},
    {id:"J1", authors:"Joung T. Yoon, Byeng D. Youn, Minji Yoo, Yunhan Kim", title:"A newly formulated resilience measure that considers false alarms", venue:"Reliability Engineering & System Safety", info:"v167, p417-427", year:2017, doi:"10.1016/j.ress.2017.06.013"}
  ],

  confIntl: [
    {id:"C16", authors:"In C. Lee, Su J. Kim, Yunhan Kim, Joo H. Im, Minseok Chae, Byeng D. Youn", title:"A Statistical Approach for Estimating Component Lifetime Based on Accelerated Life Testing Data", venue:"Asia Pacific Conference of the Prognostics and Health Management Society 2021 (PHMAP 2021)", place:"Jeju, Republic of Korea", date:"2021.09.08–11", year:2021},
    {id:"C15", authors:"Yunhan Kim, Kyumin Na, Byeng D. Youn", title:"A Novel Multiscale Convolutional Neural Network for Industrial Gearbox Fault Diagnostics", venue:"Asia Pacific Conference of the Prognostics and Health Management Society 2021 (PHMAP 2021)", place:"Online", date:"2021.09.08–11", year:2021, award:"Best Student Award – Bronze"},
    {id:"C14", authors:"Yunhan Kim, Kyumin Na, Byeng D. Youn", title:"Intelligent Fault Diagnostics Based on a New Convolutional Neural Network for Smart Manufacturing", venue:"International Conference on Energy, Aquatech and Sustainability 2021 (ICEAS 2021)", place:"Online", date:"2021.08.11–13", year:2021},
    {id:"C13", authors:"Yeongtak Oh, Yunhan Kim, Kyumin Na, Byeng D. Youn", title:"A Novel Fault Detection Method of Industrial Robots Using Motor Current Signals via Convolutional Neural Network (CNN)", venue:"5th International Conference on Materials and Reliability (ICMR 2019)", place:"Jeju, Republic of Korea", date:"2019.11.27–29", year:2019, award:"Best Paper Award"},
    {id:"C12", authors:"Myeongbaek Youn, Yunhan Kim, Dongki Lee, Minki Cho", title:"A Fatigue Crack Length Estimation and Prediction Using Trans-fitting with Support Vector Regression", venue:"11th Annual Conference of the Prognostics and Health Management Society (PHM 2019)", place:"Scottsdale, AZ, USA", date:"2019.09.23–26", year:2019, award:"1st Place Winner — 2019 PHM Society Data Challenge"},
    {id:"C11", authors:"Jungho Park, Yunhan Kim, Kyumin Na, Byeng D. Youn", title:"Fault Detection of a Planetary Gear under Variable-speed Conditions Based on Time-frequency Image", venue:"International Conference on Quality, Reliability, Risk, Maintenance, and Safety Engineering (QR2MSE 2019)", place:"Zhangjiajie, China", date:"2019.08.06–09", year:2019},
    {id:"C10", authors:"Hao Yuan, Jungho Park, Yunhan Kim, Byeng D. Youn", title:"Elimination of Multi-axis Interference in Fault Detection of Industrial Robot Based on Blind Source Separation", venue:"Asia Pacific Conference of the Prognostics and Health Management 2019 (PHM Asia Pacific 2019)", place:"Beijing, China", date:"2019.07.22–24", year:2019},
    {id:"C9", authors:"Yunhan Kim, Jungho Park, Kyumin Na, Hao Yuan, Byeng D. Youn", title:"Vibration-based Fault Detection of a Gearbox in an Industrial Robot Using Improved Time Domain Averaging", venue:"International Symposium on Precision Engineering and Sustainable Manufacturing (PRESM 2019)", place:"Da Nang, Vietnam", date:"2019.07.10–13", year:2019},
    {id:"C8", authors:"Kyumin Na, Jungho Park, Yunhan Kim, Byeng D. Youn", title:"Optimal Frequency Band Energy for Fault Diagnosis of Industrial Robot using Current Signal", venue:"International Conference on Energy and Sustainability (ICES 2018)", place:"Seoul, Republic of Korea", date:"2018.10.17–19", year:2018},
    {id:"C7", authors:"Yunhan Kim, Jungho Park, Kyumin Na, Byeng D. Youn, Chang-soon Kang, Jae-Sang You", title:"Robust Fault Detection Method for Industrial Robots under Various Operating Conditions", venue:"ASME 2018 International Design Engineering Technical Conferences & Computers and Information in Engineering Conference (IDETC/CIE 2018)", place:"Quebec City, Canada", date:"2018.08.26–29", year:2018},
    {id:"C6", authors:"Yunhan Kim, Jungho Park, Kyumin Na, Byeng D. Youn, Chang-soon Kang, Jae-Sang You", title:"Fault Detection Method of an Industrial Robot under Various Operating Conditions", venue:"US-Korea Conference on Science, Technology and Entrepreneurship (UKC 2018)", place:"New York, USA", date:"2018.08.01–04", year:2018, award:"Poster Award – 1st prize"},
    {id:"C5", authors:"Joung T. Yoon, Minji Yoo, Yunhan Kim, Byeng D. Youn", title:"A Probabilistic Approach to Maintenance Cost Analysis Considering Time-dependent False Alarms for PHM Design", venue:"Asia Pacific Conference of the Prognostics and Health Management Society 2017 (PHMAP 2017)", place:"Jeju, Republic of Korea", date:"2017.07.10–14", year:2017},
    {id:"C4", authors:"Minji Yoo, Joung T. Yoon, Yunhan Kim, Byeng D. Youn", title:"Does PHM Make an Engineered System Resilient under Sensor Faults?", venue:"Asia Pacific Conference of the Prognostics and Health Management Society 2017 (PHMAP 2017)", place:"Jeju, Republic of Korea", date:"2017.07.10–14", year:2017},
    {id:"C3", authors:"Jungho Park, Yunhan Kim, Jong M. Ha, Byeng D. Youn, Jin-Gyun Park", title:"Fault Detection of Gearboxes in an Industrial Robot under Various Operating Conditions", venue:"Asia Pacific Conference of the Prognostics and Health Management Society 2017 (PHMAP 2017)", place:"Jeju, Republic of Korea", date:"2017.07.10–14", year:2017},
    {id:"C2", authors:"Jungho Park, Moussa Hamadache, Jong M. Ha, Yunhan Kim, Byeng D. Youn", title:"A Time-varying Energy Residual (TVER) Method for Fault Detection of a Planetary Gear under Variable Speed Conditions", venue:"Asia Pacific Conference of the Prognostics and Health Management Society 2017 (PHMAP 2017)", place:"Jeju, Republic of Korea", date:"2017.07.10–14", year:2017},
    {id:"C1", authors:"Joung T. Yoon, Minji Yoo, Byeng D. Youn, Yunhan Kim", title:"A New Resilience-driven System Design Framework Considering False Alarms", venue:"12th World Congress of Structural and Multidisciplinary Optimization (WCSMO-12)", place:"Braunschweig, Germany", date:"2017.06.05–09", year:2017}
  ],

  /* Domestic conferences. venue/place bilingual (Korean society names from the original KOR document). */
  confDomestic: [
    {id:"D42",corr:true,authors:{en:"Hyeonyoung Kim, Yunhan Kim",ko:"김현영, 김윤한"},title:{en:"Development of a Workflow Graph-based AI Agent for Manufacturing-Specific Tool Integration",ko:"제조 특화 도구 통합을 위한 다단계 추론 그래프 기반 AI 에이전트 개발"},venue:{en:"Korea Institute of Information Technology (KIIT) 2026 Summer Conference",ko:"2026년도 한국정보기술학회 하계종합학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2026.06.04–06",year:2026},
    {id:"D41",corr:true,authors:{en:"Yeji Kim, Yunhan Kim",ko:"김예지, 김윤한"},title:{en:"Analyzing Stage-wise Training Strategies of Vision-Language Models for Industrial Safety Understanding",ko:"산업 안전 이해를 위한 비전-언어 모델의 단계별 학습 전략 분석 연구"},venue:{en:"Korea Institute of Information Technology (KIIT) 2026 Summer Conference",ko:"2026년도 한국정보기술학회 하계종합학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2026.06.04–06",year:2026},
    {id:"D40",corr:true,authors:{en:"Sangmin Park, Yunhan Kim",ko:"박상민, 김윤한"},title:{en:"A Unified High-Frequency Time-Series Foundation Model for Fault Classification in Manufacturing Domains",ko:"다양한 제조 도메인의 결함 분류를 위한 고주파 시계열 파운데이션 모델 구축"},venue:{en:"Korea Institute of Information Technology (KIIT) 2026 Summer Conference",ko:"2026년도 한국정보기술학회 하계종합학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2026.06.04–06",year:2026},
    {id:"D39",corr:true,authors:{en:"Hyeonyoung Kim, Yunhan Kim",ko:"김현영, 김윤한"},title:{en:"An AI Agent-based Framework for Decision Support in Manufacturing Using Domain-specific AI Models",ko:"제조 특화 AI 모델 연동 AI 에이전트 기반 의사결정 지원 프레임워크 개발"},venue:{en:"Korean Society of Manufacturing Technology Engineers (KSMTE) 2025 Autumn Conference",ko:"한국생산제조학회 2025년도 추계학술대회"},place:{en:"Busan, Republic of Korea",ko:"부산, 대한민국"},date:"2025.12.09–12",year:2025},
    {id:"D38",corr:true,authors:{en:"Yeji Kim, Yunhan Kim",ko:"김예지, 김윤한"},title:{en:"Defect Mask Dilation-based Latent Diffusion Model for Micro-defect Image Generation",ko:"결함 마스크 팽창 기반 Latent Diffusion 모델을 이용한 미세 결함 이미지 생성 기법"},venue:{en:"Korean Society of Manufacturing Technology Engineers (KSMTE) 2025 Autumn Conference",ko:"한국생산제조학회 2025년도 추계학술대회"},place:{en:"Busan, Republic of Korea",ko:"부산, 대한민국"},date:"2025.12.09–12",year:2025},
    {id:"D37",corr:true,authors:{en:"Beomjoon Kim, Yunhan Kim",ko:"김범준, 김윤한"},title:{en:"A Foundation Model-based Humanoid Robot Learning Framework for Autonomous Manufacturing",ko:"자율 제조를 위한 파운데이션 모델 기반 휴머노이드 로봇 학습 프레임워크 개발"},venue:{en:"Korean Society of Manufacturing Technology Engineers (KSMTE) 2025 Autumn Conference",ko:"한국생산제조학회 2025년도 추계학술대회"},place:{en:"Busan, Republic of Korea",ko:"부산, 대한민국"},date:"2025.12.09–12",year:2025},
    {id:"D36",corr:true,authors:{en:"Sangmin Park, Yunhan Kim",ko:"박상민, 김윤한"},title:{en:"Development of Degradation Stage-informed Bearing Remaining Useful Life Prediction",ko:"열화 단계 인식 기반 베어링 잔존 유효 수명 예측 방법"},venue:{en:"Korean Society of Manufacturing Technology Engineers (KSMTE) 2025 Autumn Conference",ko:"한국생산제조학회 2025년도 추계학술대회"},place:{en:"Busan, Republic of Korea",ko:"부산, 대한민국"},date:"2025.12.09–12",year:2025},
    {id:"D35",authors:{en:"Yunhan Kim",ko:"김윤한"},title:{en:"Development of Training-free Robotic Manipulation Based on Large Language Models",ko:"대규모 언어 모델 기반 Training-free 로봇 조작 기술 개발"},venue:{en:"Korean Society of Manufacturing Technology Engineers (KSMTE) 2025 Autumn Conference",ko:"한국생산제조학회 2025년도 추계학술대회"},place:{en:"Busan, Republic of Korea",ko:"부산, 대한민국"},date:"2025.12.09–12",year:2025,award:"Best Presentation Award"},
    {id:"D34",corr:true,authors:{en:"Jeonghyun Lee, Yunhan Kim",ko:"이정현, 김윤한"},title:{en:"Prompt-guided Defect Image Synthesis Using Diffusion Models",ko:"프롬프트 제어를 통한 Diffusion 모델 기반 결함 이미지 합성 방법"},venue:{en:"Korean Institute of Industrial Engineers (KIIE) 2025 Spring Joint Conference",ko:"대한산업공학회 2025 춘계공동학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2025.06.18–21",year:2025},
    {id:"D33",corr:true,authors:{en:"Sangmin Park, Yunhan Kim",ko:"박상민, 김윤한"},title:{en:"High-Quality Defect Image Generation Using Limited Data via Diffusion Models",ko:"소량의 결함 이미지를 활용한 Diffusion 모델 기반 고품질 결함 이미지 생성"},venue:{en:"Korean Institute of Industrial Engineers (KIIE) 2025 Spring Joint Conference",ko:"대한산업공학회 2025 춘계공동학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2025.06.18–21",year:2025},
    {id:"D32",corr:true,authors:{en:"Seungmin Ryu, Yunhan Kim",ko:"류승민, 김윤한"},title:{en:"Development of a Robotic Manipulation System Leveraging Perception-to-Language Model for Object Recognition",ko:"시각 정보 언어화 모델을 활용한 객체 인식 기반 로봇 제어 시스템 개발"},venue:{en:"Korean Institute of Industrial Engineers (KIIE) 2025 Spring Joint Conference",ko:"대한산업공학회 2025 춘계공동학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2025.06.18–21",year:2025},
    {id:"D31",corr:true,authors:{en:"Jong-Won Park, Yunhan Kim",ko:"박종원, 김윤한"},title:{en:"A Study on the Imitation Learning System for Humanoid Robots",ko:"휴머노이드 로봇의 모방학습을 위한 시스템 설계"},venue:{en:"Korean Society of Mechanical Engineers (KSME) Dynamics, Control & Robotics Division 2025 Spring Conference",ko:"대한기계학회 동역학·제어·로봇부문 2025년 춘계학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2025.04.22–27",year:2025},
    {id:"D30",corr:true,authors:{en:"Jihyun Lee, Yunhan Kim",ko:"이지현, 김윤한"},title:{en:"Simultaneous Localization and Mapping for a Mobile Dual-Arm Robot in Factory Autonomous Navigation",ko:"공장 환경 내 자율주행을 위한 이동형 양팔 로봇의 동시적 위치추정 및 지도 작성 방법"},venue:{en:"Korean Society of Mechanical Engineers (KSME) Dynamics, Control & Robotics Division 2025 Spring Conference",ko:"대한기계학회 동역학·제어·로봇부문 2025년 춘계학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2025.04.22–27",year:2025},
    {id:"D29",authors:{en:"Yunhan Kim",ko:"김윤한"},title:{en:"Industrial Anomaly Detection Using Image Reconstruction Based on Pre-trained Feature Embedding",ko:"사전 학습 특징 임베딩 기반 이미지 복원을 활용한 산업용 이상 탐지"},venue:{en:"Society for Computational Design and Engineering (CDE) 2025 Winter Conference",ko:"한국CDE학회 2025 동계학술대회"},place:{en:"Pyeongchang, Republic of Korea",ko:"평창, 대한민국"},date:"2025.02.19–22",year:2025,award:"Best Presentation Award"},
    {id:"D28",corr:true,authors:{en:"Jeonghyun Lee, Yunhan Kim",ko:"이정현, 김윤한"},title:{en:"Conceptual Design for Control System for Collaborative Robots Using Large Language Models (LLM)",ko:"대규모 언어 모델을 활용한 협동 로봇 제어 시스템 개념 설계"},venue:{en:"Korea Institute of Information Technology (KIIT) 2024 Autumn Conference",ko:"2024년도 한국정보기술학회 추계종합학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2024.11.21–23",year:2024},
    {id:"D27",authors:{en:"Yunhan Kim",ko:"김윤한"},title:{en:"A Defect Image Synthesis Method Using Text-guided GANs for Industrial Anomaly Detection",ko:"산업용 이상 탐지를 위한 텍스트 정보 활용 적대적 생성 신경망 기반 결함 이미지 합성 방법"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2024 Annual Meeting",ko:"대한기계학회 2024년도 학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2024.11.06–09",year:2024},
    {id:"D26",authors:{en:"Yunhan Kim",ko:"김윤한"},title:{en:"Research on Industrial AI-based PHM for AI Autonomous Manufacturing",ko:"AI 자율제조를 위한 산업 AI 기반 PHM 연구"},venue:{en:"Korean Society of PHM (PHM Korea) 2024 Conference",ko:"한국PHM학회 2024년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2024.06.24–26",year:2024,award:"Invited Talk"},
    {id:"D25",authors:{en:"Yunhan Kim, Jong M. Ha, Kyumin Na, Byeng D. Youn",ko:"김윤한, 하종문, 나규민, 윤병동"},title:{en:"Improved Wavelet Transform Based Demodulation Analysis for Fault Diagnostics of Planetary Gearboxes",ko:"유성기어박스의 고장 진단을 위한 향상된 웨이블릿 변환 기반 신호 복조 방법"},venue:{en:"Korean Society for Precision Engineering (KSPE) 2020 Conference",ko:"한국정밀공학회 2020년도 통합학술대회"},place:{en:"Online",ko:"온라인"},date:"2020.09.14–16",year:2020},
    {id:"D24",authors:{en:"Yunhan Kim, Taekyum Kim, Byeng D. Youn, Sung-Hoon Ahn",ko:"김윤한, 김태겸, 윤병동, 안성훈"},title:{en:"An Image-based Transfer Learning for Machining Quality Classification in Laser-assisted Micro-milling of Glass",ko:"유리의 레이저 보조 미세 가공에서의 가공 품질 분류를 위한 이미지 기반 전이학습 방법"},venue:{en:"Korean Society of Mechanical Engineers (KSME) CAE & Applied Mechanics Division 2020 Spring Conference",ko:"대한기계학회 CAE 및 응용역학부문 2020년도 춘계학술대회"},place:{en:"Gyeongju, Republic of Korea",ko:"경주, 대한민국"},date:"2020.08.19–21",year:2020},
    {id:"D23",authors:{en:"Yeongtak Oh, Kyumin Na, Yunhan Kim, Byeng D. Youn",ko:"오영탁, 나규민, 김윤한, 윤병동"},title:{en:"Motion-adaptive Few-shot Fault Detection Method of Industrial Robot Gearboxes",ko:"산업용 로봇 기어박스의 동작 적응형 퓨샷 고장 감지 기법"},venue:{en:"Korean Society of PHM (PHM Korea) 2020 Conference",ko:"한국PHM학회 2020년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2020.07.21–23",year:2020},
    {id:"D22",authors:{en:"Kyumin Na, Yunhan Kim, Byeng D. Youn",ko:"나규민, 김윤한, 윤병동"},title:{en:"Multicomponent Signal Decomposition Using Vertex Path Minimization for Fault Diagnosis of Planetary Gearbox",ko:"순간 주파수 기반 신호 분해를 활용한 기어박스 고장 진단"},venue:{en:"Korean Society of PHM (PHM Korea) 2020 Conference",ko:"한국PHM학회 2020년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2020.07.21–23",year:2020},
    {id:"D21",authors:{en:"Yunhan Kim, Jin G. Jeong, Sooho Kim, Byeng D. Youn",ko:"김윤한, 정진교, 김수호, 윤병동"},title:{en:"Development of Deep Learning-based Fault Detection for High Voltage Circuit Breakers Based on Coil Current Analysis",ko:"코일 전류 분석을 활용한 고압 차단기의 딥러닝 기반 고장 감지 방법 개발"},venue:{en:"Korean Society of PHM (PHM Korea) 2020 Conference",ko:"한국PHM학회 2020년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2020.07.21–23",year:2020,award:"Best Presentation Award"},
    {id:"D20",authors:{en:"Yunhan Kim, Taekyum Kim, Byeng D. Youn, Sung-Hoon Ahn",ko:"김윤한, 김태겸, 윤병동, 안성훈"},title:{en:"Development of Deep-learning Based Machining Quality Monitoring in Laser-assisted Micro-milling of Glass",ko:"유리의 레이저 보조 미세 가공의 딥러닝 기반 가공 품질 모니터링 방법 개발"},venue:{en:"Korean Society of Manufacturing Technology Engineers (KSMTE) 2020 Spring Conference",ko:"한국생산제조학회 2020년도 춘계학술대회"},place:{en:"Pyeongchang, Republic of Korea",ko:"평창, 대한민국"},date:"2020.07.13–14",year:2020},
    {id:"D19",authors:{en:"Kyumin Na, Jungho Park, Yunhan Kim, Byeng D. Youn",ko:"나규민, 박정호, 김윤한, 윤병동"},title:{en:"Transfer CNN Using Fault Information Enhancement Image for Fault Diagnosis of Gearbox in Excavator",ko:"굴삭기 기어박스 고장 진단을 위한 고장 정보 강화 전처리 이미지 기반 트랜스퍼 러닝"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2019 Annual Meeting",ko:"대한기계학회 2019년도 학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2019.11.13–16",year:2019},
    {id:"D18",authors:{en:"Yunhan Kim, Jungho Park, Kyumin Na, Byeng D. Youn",ko:"김윤한, 박정호, 나규민, 윤병동"},title:{en:"Improved Demodulation Analysis Based Fault Diagnostics of Planetary Gearboxes Using Envelope Averaging",ko:"포락선 평균법을 활용한 향상된 복조 분석 기반 유성기어박스 고장 진단 방법"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2019 Annual Meeting",ko:"대한기계학회 2019년도 학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2019.11.13–16",year:2019,award:"Best Student Paper Award"},
    {id:"D17",authors:{en:"Hao Yuan, Jungho Park, Yunhan Kim, Byeng D. Youn",ko:"유안하오, 박정호, 김윤한, 윤병동"},title:{en:"Vibration Signal Separation for Fault Detection of Industrial Robot Gearboxes under Multi-axis Interference",ko:"다축 간섭 환경에서 산업용 로봇 기어박스 고장 감지를 위한 진동 신호 분리"},venue:{en:"Korean Society of PHM (PHM Korea) 2019 Conference",ko:"한국PHM학회 2019년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2019.04.10–12",year:2019},
    {id:"D16",authors:{en:"Kyumin Na, Jungho Park, Yunhan Kim, Byeng D. Youn",ko:"나규민, 박정호, 김윤한, 윤병동"},title:{en:"Autonomous Selection of Optimal Frequency Band Energy for Fault Diagnosis of Industrial Robots",ko:"산업용 로봇의 고장 진단을 위한 자율적 최적 주파수 에너지 선택 기법"},venue:{en:"Korean Society of PHM (PHM Korea) 2019 Conference",ko:"한국PHM학회 2019년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2019.04.10–12",year:2019,award:"Best Presentation Award"},
    {id:"D15",authors:{en:"Jungho Park, Yunhan Kim, Kyumin Na, Byeng D. Youn, Ming J. Zuo",ko:"박정호, 김윤한, 나규민, 윤병동, 주오밍"},title:{en:"Fault Detection of Planetary Gears under Variable-speed Conditions Using Time-frequency Image Data",ko:"이미지 데이터를 이용한 가변 속도 유성기어의 고장 감지 기법 개발"},venue:{en:"Korean Society of PHM (PHM Korea) 2019 Conference",ko:"한국PHM학회 2019년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2019.04.10–12",year:2019},
    {id:"D14",authors:{en:"Yunhan Kim, Jungho Park, Kyumin Na, Hao Yuan, Byeng D. Youn",ko:"김윤한, 박정호, 나규민, 유안하오, 윤병동"},title:{en:"Time Domain Averaging with Phase Angle (TDAP) for Fault Detection of Gearboxes in an Industrial Robot",ko:"산업용 로봇 기어박스 고장 감지를 위한 위상 정보 활용 시간 영역 평균법"},venue:{en:"Korean Society of PHM (PHM Korea) 2019 Conference",ko:"한국PHM학회 2019년도 정기학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2019.04.10–12",year:2019},
    {id:"D13",authors:{en:"Vikas Sharma, Yunhan Kim, Jungho Park, Byeng D. Youn",ko:"샤마비카스, 김윤한, 박정호, 윤병동"},title:{en:"Joint Decomposition Analysis for Fault Diagnosis of Planet Gears under Non-stationary Speed Conditions",ko:"비정상 속도 조건에서 유성기어 고장 진단을 위한 결합 분해 분석"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2018 Annual Meeting",ko:"대한기계학회 2018년도 학술대회"},place:{en:"Jeongseon, Republic of Korea",ko:"정선, 대한민국"},date:"2018.12.12–15",year:2018},
    {id:"D12",authors:{en:"Jungho Park, Yunhan Kim, Kyumin Na, Byeng D. Youn",ko:"박정호, 김윤한, 나규민, 윤병동"},title:{en:"Fault Detection of a Planetary Gear under Variable Speed Conditions Using Time-frequency Image Data",ko:"시간-주파수 이미지 데이터를 활용한 가변 속도 유성기어의 고장 감지법 개발"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2018 Annual Meeting",ko:"대한기계학회 2018년도 학술대회"},place:{en:"Jeongseon, Republic of Korea",ko:"정선, 대한민국"},date:"2018.12.12–15",year:2018},
    {id:"D11",authors:{en:"Hao Yuan, Jungho Park, Yunhan Kim, Byeng D. Youn",ko:"유안하오, 박정호, 김윤한, 윤병동"},title:{en:"Elimination of Multi-axis Interference in Industrial Robot Fault Detection",ko:"산업용 로봇 고장 감지에서의 다축 간섭 제거"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2018 Annual Meeting",ko:"대한기계학회 2018년도 학술대회"},place:{en:"Jeongseon, Republic of Korea",ko:"정선, 대한민국"},date:"2018.12.12–15",year:2018},
    {id:"D10",authors:{en:"Yunhan Kim, Jungho Park, Kyumin Na, Byeng D. Youn",ko:"김윤한, 박정호, 나규민, 윤병동"},title:{en:"Fault Detection of Industrial Robot Using Time Domain Averaging with Phase",ko:"위상 정보 활용 시간 영역 평균법을 이용한 산업용 로봇 고장 진단"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2018 Annual Meeting",ko:"대한기계학회 2018년도 학술대회"},place:{en:"Jeongseon, Republic of Korea",ko:"정선, 대한민국"},date:"2018.12.12–15",year:2018},
    {id:"D9",authors:{en:"Sooho Kim, Yunhan Kim, Byeng D. Youn",ko:"김수호, 김윤한, 윤병동"},title:{en:"Effect of Vibration Data Acquisition Resolution on AI-based Fault Diagnosis for Planetary Gearbox",ko:"인공지능 기반 유성기어박스 고장 진단 알고리즘 개발에 진동 센서 분해 성능이 미치는 영향 분석"},venue:{en:"Korean Society for Noise and Vibration Engineering (KSNVE) 2018 Autumn Conference",ko:"한국소음진동공학회 2018년도 추계학술대회"},place:{en:"Yeosu, Republic of Korea",ko:"여수, 대한민국"},date:"2018.10.17–20",year:2018},
    {id:"D8",authors:{en:"Yunhan Kim, Jungho Park, Kyumin Na, Byeng D. Youn, Chang-soon Kang, Jae-Sang You",ko:"김윤한, 박정호, 나규민, 윤병동, 강창순, 유재상"},title:{en:"Vibration-based Health Feature Analysis for Fault Detection of an Industrial Robot Considering Operating Conditions",ko:"산업용 로봇의 운행 환경에 따른 진동 신호 기반 건전성 인자 특성 분석"},venue:{en:"Korean Society for Noise and Vibration Engineering (KSNVE) 2018 Autumn Conference",ko:"한국소음진동공학회 2018년도 추계학술대회"},place:{en:"Yeosu, Republic of Korea",ko:"여수, 대한민국"},date:"2018.10.17–20",year:2018},
    {id:"D7",authors:{en:"Sooho Kim, Guesuk Lee, Yunhan Kim, Byeng D. Youn",ko:"김수호, 이규석, 김윤한, 윤병동"},title:{en:"Normalizing Varied Load Condition for Health Diagnosis of Planetary Gearbox",ko:"유성기어박스의 건전성 진단을 위한 하중 조건 정규화"},venue:{en:"Korean Society of Mechanical Engineers (KSME) CAE & Applied Mechanics Division 2018 Spring Conference",ko:"대한기계학회 CAE 및 응용역학부문 2018년도 춘계학술대회"},place:{en:"Yeosu, Republic of Korea",ko:"여수, 대한민국"},date:"2018.04.26–28",year:2018},
    {id:"D6",authors:{en:"Yunhan Kim, Jungho Park, Jong M. Ha, Byeng D. Youn, Jin-Gyun Park",ko:"김윤한, 박정호, 하종문, 박진균, 윤병동"},title:{en:"Robust Fault Detection Method of an Industrial Robot under Various Operating Conditions",ko:"다양한 산업용 로봇 작동조건에 따른 강건 고장 진단 기법"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2017 Annual Meeting",ko:"대한기계학회 2017년도 학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2017.11.01–03",year:2017},
    {id:"D5",authors:{en:"Yunhan Kim, Jungho Park, Jong M. Ha, Jin-Gyun Park, Byeng D. Youn",ko:"김윤한, 박정호, 하종문, 박진균, 윤병동"},title:{en:"Experimental Assessment of Fault Detection Method for an Industrial Robot under Various Operating Conditions",ko:"산업용 로봇 작동조건에 따른 감속기 고장진단 성능 평가"},venue:{en:"Korean Society for Noise and Vibration Engineering (KSNVE) 2017 Autumn Conference",ko:"한국소음진동공학회 2017년도 추계학술대회"},place:{en:"Yesan, Republic of Korea",ko:"예산, 대한민국"},date:"2017.10.18–21",year:2017},
    {id:"D4",authors:{en:"Yunhan Kim, Jungho Park, Byeng D. Youn",ko:"김윤한, 박정호, 윤병동"},title:{en:"Comparison of Health Index with Crack Growth in a Spur Gear Model under Material Uncertainty",ko:"물성치의 불확실성을 고려한 스퍼기어 모델의 크랙 성장에 따른 건전성 인자 비교"},venue:{en:"Korean Society of Mechanical Engineers (KSME) CAE & Applied Mechanics Division 2017 Spring Conference",ko:"대한기계학회 CAE 및 응용역학부문 2017년도 춘계학술대회"},place:{en:"Busan, Republic of Korea",ko:"부산, 대한민국"},date:"2017.05.25–27",year:2017},
    {id:"D3",authors:{en:"Jungho Park, Jong M. Ha, Yunhan Kim, Byeng D. Youn",ko:"박정호, 하종문, 김윤한, 윤병동"},title:{en:"Fault Diagnostics of a Planetary Gear under a Variable Speed Condition",ko:"가변 속도 유성기어의 고장진단법 개발"},venue:{en:"Korean Society of Mechanical Engineers (KSME) Reliability Division 2017 Spring Conference",ko:"대한기계학회 신뢰성부문 2017년도 춘계학술대회"},place:{en:"Jeju, Republic of Korea",ko:"제주, 대한민국"},date:"2017.02.22–24",year:2017,award:"Best Student Paper Award"},
    {id:"D2",authors:{en:"Joung T. Yoon, Byeng D. Youn, Minji Yoo, Yunhan Kim",ko:"윤정택, 윤병동, 유민지, 김윤한"},title:{en:"Engineering Resilience Quantification Considering False Alarms",ko:"오경보를 고려한 공학적 회복탄력성 정량화"},venue:{en:"Korean Society for Computational Mechanics (KSCM) 2017 Conference",ko:"한국전산역학회 2017년도 학술대회"},place:{en:"Seoul, Republic of Korea",ko:"서울, 대한민국"},date:"2017.02.10–11",year:2017},
    {id:"D1",authors:{en:"Jungho Park, Jong M. Ha, Yunhan Kim, Byeng D. Youn",ko:"박정호, 하종문, 김윤한, 윤병동"},title:{en:"Vibration-Based Fault Diagnostics of Planetary Gears under Non-Stationary Conditions",ko:"비정상 운행조건하 유성기어의 진동기반 고장진단법 개발"},venue:{en:"Korean Society of Mechanical Engineers (KSME) 2016 Annual Meeting",ko:"대한기계학회 2016년도 학술대회"},place:{en:"Jeongseon, Republic of Korea",ko:"정선, 대한민국"},date:"2016.12.14–16",year:2016}
  ],

  patentsRegistered: [
    {id:"PR9",inventors:{en:"Byeng D. Youn, Yunhan Kim, Kyumin Na",ko:"윤병동, 김윤한, 나규민"},title:{en:"Apparatus and method for detecting fault of planetary gearbox using cepstrum-based signal analysis",ko:"셉스트럼 기반 유성 기어박스의 고장 감지 장치 및 방법"},no:"10-2598458",date:"2023.11.01",kr:"KR102598458B1"},
    {id:"PR8",inventors:{en:"Byeng D. Youn, Kyumin Na, Yunhan Kim",ko:"나규민, 김윤한, 윤병동"},title:{en:"Motion Signal Extraction System and Method Based on Vibration Signal",ko:"진동 신호 기반 모션 신호 추출 시스템 및 방법"},no:"10-2566810",date:"2023.08.09",kr:"KR102566810B1"},
    {id:"PR7",inventors:{en:"Byeng D. Youn, Yunhan Kim",ko:"김윤한, 윤병동"},title:{en:"Industrial Gearbox Failure Diagnosis Apparatus and Method Using CNN Based on Adaptive Time-frequency Representation",ko:"적응적 시간-주파수 표현 기반 합성곱 신경망을 활용한 산업용 기어박스 고장진단 장치 및 방법"},no:"10-2404498",date:"2022.05.27",kr:"KR102404498B1"},
    {id:"PR6",inventors:{en:"Byeng D. Youn, Yunhan Kim, Kyumin Na, Jungho Park",ko:"김윤한, 윤병동, 나규민, 박정호"},title:{en:"Apparatus and Method for Detecting Fault of Gearbox Using Phase Information",ko:"위상 정보를 활용한 기어박스의 고장 감지 장치 및 방법"},no:"10-2382628",date:"2022.03.30",kr:"KR102382628B1"},
    {id:"PR5",inventors:{en:"Byeng D. Youn, Yunhan Kim, Sung-Hoon Ahn, Taekyum Kim",ko:"김윤한, 윤병동, 안성훈, 김태겸"},title:{en:"Machining Quality Monitoring Method Based on Transfer Learning with Multi-layer Recurrence Plot",ko:"다층 리커런스 플롯을 활용한 전이학습 기반 가공 품질 모니터링 방법"},no:"10-2362971",date:"2022.02.10",kr:"KR102362971B1"},
    {id:"PR4",inventors:{en:"Byeng D. Youn, Yunhan Kim, Sung-Hoon Ahn, Taekyum Kim",ko:"김윤한, 윤병동, 안성훈, 김태겸"},title:{en:"Machining Quality Monitoring Apparatus and Method Based on Transfer Learning with Multi-layer Recurrence Plot",ko:"다층 리커런스 플롯을 활용한 전이학습 기반 가공 품질 모니터링 장치 및 방법"},no:"10-2324979",date:"2021.11.05",kr:"KR102324979B1"},
    {id:"PR3",inventors:{en:"Byeng D. Youn, Jungho Park, Yunhan Kim, Kyumin Na",ko:"윤병동, 박정호, 김윤한, 나규민"},title:{en:"Apparatus and Method for Detecting Fault using Time-frequency Image",ko:"시간-주파수 이미지를 이용하여 회전체의 고장을 감지하는 장치 및 방법"},no:"10-2161577",date:"2020.09.24",kr:"KR102161577B1"},
    {id:"PR2",inventors:{en:"Byeng D. Youn, Jungho Park, Yunhan Kim, Kyumin Na",ko:"윤병동, 박정호, 김윤한, 나규민"},title:{en:"Fault Detection Apparatus and Method for Gears under Variable-speed Condition using Short-time Fourier Transform",ko:"단시간 푸리에 변환을 이용한 변속 조건 기어의 고장 감지 장치 및 방법"},no:"10-2077298",date:"2020.02.07",kr:"KR102077298B1"},
    {id:"PR1",inventors:{en:"Byeng D. Youn, Jong M. Ha, Jungho Park, Yunhan Kim, Kyumin Na",ko:"윤병동, 하종문, 박정호, 김윤한, 나규민"},title:{en:"Vibration Characteristics Data Map Processing Apparatus for Diagnosing a Fault of Planetary Gear Box",ko:"유성 기어박스의 고장 진단을 위한 진동 특성 데이터 맵 처리장치"},no:"10-2026065",date:"2019.09.23",kr:"KR102026065B1"}
  ],

  patentsApplied: [
    {id:"PA3",inventors:{en:"Yunhan Kim, Beomjoon Kim",ko:"김윤한, 김범준"},title:{en:"Imitation Learning Method and System Using Joint Position and Grasping Force of a Humanoid Robot with Multi-fingered Hand",ko:"다지 핸드를 갖는 휴머노이드 로봇의 관절 위치 및 파지력 정보를 이용한 모방학습 방법 및 시스템"},no:"10-2026-0053571",date:"2026.03.25"},
    {id:"PA2",inventors:{en:"Yunhan Kim",ko:"김윤한"},title:{en:"Vision-language Model Based Robot Arm Control System and Method",ko:"비전-언어 모델 기반 로봇 팔 제어 시스템 및 방법"},no:"10-2025-0057363",date:"2025.04.30"},
    {id:"PA1",inventors:{en:"Yunhan Kim, Saemyung Oh, Seungwook Nam",ko:"김윤한, 오세명, 남승욱"},title:{en:"Automated Method and System for Generating OPC-UA Information Models Based on Large Language Model",ko:"대규모 언어 모델 기반 OPC-UA 정보모델 생성 자동화 방법 및 시스템"},no:"10-2024-0140795",date:"2024.10.16"}
  ],

  software: [
    {id:"SW3",authors:{en:"Beomjoon Kim, Yunhan Kim",ko:"김범준, 김윤한"},title:{en:"Integrated Continuous-Motion Control Program for Humanoid Robots",ko:"휴머노이드 로봇의 연속동작 통합 제어 프로그램"},no:"C-2026-013424",date:"2026.03.16"},
    {id:"SW2",authors:{en:"Beomjoon Kim, Yunhan Kim",ko:"김범준, 김윤한"},title:{en:"Imitation Learning & Control Program for a Humanoid Robot with Multi-fingered Hand",ko:"다지 핸드를 갖는 휴머노이드 로봇 모방학습 및 제어 프로그램"},no:"C-2026-013423",date:"2026.03.16"},
    {id:"SW1",authors:{en:"Yunhan Kim",ko:"김윤한"},title:{en:"Object Recognition Method Using a Perception-to-Language Model",ko:"시각 정보 언어화 모델을 활용한 객체 인식 방법"},no:"C-2025-020312",date:"2025.05.29"}
  ],

  talks: [
    {id:"T6",title:{en:"Advancing Autonomous Manufacturing with Humanoid Robotics: Practical Applications and Future Directions",ko:"Advancing Autonomous Manufacturing with Humanoid Robotics: Practical Applications and Future Directions"},venue:{en:"Online Invited Seminar, G.R.I.D. (Global Researchers in Dialogue), KIAT U.S. Office",ko:"Online Invited Seminar, G.R.I.D. (Global Researchers in Dialogue), KIAT U.S. Office"},date:{en:"Jun. 12, 2026",ko:"2026.06.12"},
     materials:[{label:{en:"Poster",ko:"포스터"},img:"assets/talks/T6_poster.jpg"}]},
    {id:"T5",title:{en:"Toward Autonomous Manufacturing: Factory AI Agents Powered by Foundation Models",ko:"자율제조를 위한 파운데이션 모델 기반 Factory AI Agent 개발"},venue:{en:"Online Invited Seminar, BK21 Program, Dongguk University",ko:"동국대 BK21 자율지능기계시스템 미래인재양성사업 온라인 초청 세미나"},date:{en:"May 29, 2026",ko:"2026.05.29"},
     materials:[{label:{en:"Poster",ko:"포스터"},img:"assets/talks/T5_poster.jpg"}]},
    {id:"T4",title:{en:"Toward Autonomous Manufacturing: Factory AI Agents Powered by Foundation Models",ko:"자율제조를 위한 파운데이션 모델 기반 Factory AI Agent 개발"},venue:{en:"Invited Course Seminar, Dept. of Mechanical Engineering, Seoul National University",ko:"서울대 기계공학부 수업 초청 세미나"},date:{en:"Apr. 22, 2026",ko:"2026.04.22"}},
    {id:"T3",title:{en:"Toward Autonomous Manufacturing: Factory AI Agents Powered by Foundation Models",ko:"자율제조를 위한 파운데이션 모델 기반 Factory AI Agent 개발"},venue:{en:"Invited Seminar, College of Engineering, Pukyong National University",ko:"부경대 공과대학 초청 세미나"},date:{en:"Jan. 28, 2026",ko:"2026.01.28"}},
    {id:"T2",title:{en:"Development of Factory AI Agent Powered by Manufacturing Foundation Model",ko:"제조 파운데이션 모델 기반 Factory AI Agent 개발"},venue:{en:"AI Factory Hackathon 2025",ko:"AI Factory Hackathon 2025"},date:{en:"Dec. 16, 2025",ko:"2025.12.16"},
     materials:[{label:{en:"Poster",ko:"포스터"},img:"assets/talks/T2_poster.jpg"},{label:{en:"Schedule",ko:"시간표"},img:"assets/talks/T2_schedule.jpg"}]},
    {id:"T1",title:{en:"Autonomous Manufacturing Powered by Humanoid Robotics Technologies",ko:"Autonomous Manufacturing Powered by Humanoid Robotics Technologies"},venue:{en:"2024 Symposium on KR-SG R&D Matchmaking (SKSRM), Singapore",ko:"2024 Symposium on KR-SG R&D Matchmaking (SKSRM), Singapore"},date:{en:"Oct. 29, 2024",ko:"2024.10.29"},
     materials:[{label:{en:"Poster",ko:"포스터"},img:"assets/talks/T1_poster.jpg"},{label:{en:"Schedule",ko:"시간표"},img:"assets/talks/T1_schedule.jpg"}]}
  ],

  /* Awards with certificate images */
  awards: [
    {title:{en:"Best Presentation Award, KSMTE",ko:"논문 우수발표상, 한국생산제조학회"},date:{en:"Dec. 2025",ko:"2025.12"},img:"assets/awards/2025_ksmte_presentation.jpg"},
    {title:{en:"Best Presentation Award, CDE",ko:"우수발표상, 한국CDE학회"},date:{en:"Feb. 2025",ko:"2025.02"},noimg:true},
    {title:{en:"Outstanding Dissertation Award, Reliability Division, KSME",ko:"우수학위논문상, 신뢰성부문, 대한기계학회"},date:{en:"Mar. 2022",ko:"2022.03"},img:"assets/awards/2022_ksme_dissertation.jpg"},
    {title:{en:"Outstanding Doctoral Dissertation Award, Dept. of ME, Seoul National University",ko:"우수박사학위논문상, 기계공학부, 서울대학교"},date:{en:"Feb. 2022",ko:"2022.02"},img:"assets/awards/2022_snu_dissertation.jpg"},
    {title:{en:"Best Student Award – Bronze, PHM Asia Pacific 2021",ko:"Best Student Award – 동상, PHM Asia Pacific 2021"},date:{en:"Sep. 2021",ko:"2021.09"},img:"assets/awards/2021_phmap_bronze.jpg"},
    {title:{en:"Best Presentation Award, KSPHM",ko:"우수발표상, 한국PHM학회"},date:{en:"Jul. 2020",ko:"2020.07"},img:"assets/awards/2020_phmk_presentation.jpg"},
    {title:{en:"Best Student Paper Award, Reliability Division, KSME",ko:"우수 학생 논문상, 신뢰성부문, 대한기계학회"},date:{en:"Jul. 2020",ko:"2020.07"},img:"assets/awards/2020_ksme_best_student.jpg"},
    {title:{en:"Encouragement Prize, FACTORY HACK KOREA, MOTIE",ko:"장려상, 산업AI해커톤 Factory Hack Korea, 산업통상자원부"},date:{en:"Jan. 2020",ko:"2020.01"},img:"assets/awards/2020_factoryhack.jpg"},
    {title:{en:"Best Paper Award, ICMR 2019",ko:"Best Paper Award, ICMR 2019"},date:{en:"Dec. 2019",ko:"2019.12"},img:"assets/awards/2019_icmr_bestpaper.jpg"},
    {title:{en:"Winner – 1st place, 2019 PHM Data Challenge, PHM Society",ko:"우승 – 1위, 2019 PHM Data Challenge, PHM Society"},date:{en:"Sep. 2019",ko:"2019.09"},img:"assets/awards/2019_phmsociety_winner.jpg"},
    {title:{en:"Best Presentation Award, KSPHM",ko:"우수발표상, 한국PHM학회"},date:{en:"Apr. 2019",ko:"2019.04"},img:"assets/awards/2019_phmk_presentation.jpg"},
    {title:{en:"Poster Award – 1st prize, UKC 2018",ko:"Best Poster Award – 1위, UKC 2018"},date:{en:"Aug. 2018",ko:"2018.08"},img:"assets/awards/2018_ukc_poster.jpg"},
    {title:{en:"Best Student Paper Award, Reliability Division, KSME",ko:"우수 학생 논문상, 신뢰성부문, 대한기계학회"},date:{en:"Feb. 2017",ko:"2017.02"},img:"assets/awards/2017_ksme_best_student.jpg"}
  ],

  reviewing: [
    "Mechanical Systems and Signal Processing",
    "IEEE Transactions on Industrial Electronics",
    "ISA Transactions",
    "Reliability Engineering & System Safety",
    "Science China Technological Sciences",
    "Int. J. of Precision Engineering and Manufacturing-Green Technology",
    "Scientific Reports",
    "Applied Sciences",
    "Machines",
    "Advances in Mechanical Engineering",
    "Mathematical Problems in Engineering",
    "Int. Workshop on Materials Science and Mechanical Engineering"
  ],

  skills: {
    programming: ["Python", "MATLAB", "JavaScript", "C#"],
    tools: ["PyTorch", "Unity3D", "LabVIEW", "Microsoft Office"],
    lab: {en:"Testbed installation (industrial robot; transmission error of gear testbed)",
          ko:"테스트베드 구축 (산업용 로봇, 기어 전달오차 테스트베드)"},
    languages: {en:"Korean (Native) · English (Fluent)", ko:"한국어 (모국어) · 영어 (유창)"}
  }
};

/* UI strings for i18n */
const I18N = {
  nav_about:        {en:"About",         ko:"소개"},
  nav_education:    {en:"Education",     ko:"학력"},
  nav_experience:   {en:"Experience",   ko:"경력"},
  nav_projects:     {en:"Projects",     ko:"프로젝트"},
  nav_publications: {en:"Publications", ko:"논문"},
  nav_patents:      {en:"Patents",      ko:"특허"},
  nav_awards:       {en:"Awards",       ko:"수상"},
  nav_talks:        {en:"Talks",        ko:"초청강연"},
  nav_more:         {en:"More",         ko:"기타"},

  sec_about:        {en:"About",                    ko:"소개"},
  sec_research:     {en:"Research Interests",       ko:"연구 분야"},
  sec_education:    {en:"Education",                ko:"학력"},
  sec_experience:   {en:"Professional Experience",  ko:"경력"},
  sec_projects:     {en:"Project Experience",       ko:"프로젝트 수행"},
  sec_publications: {en:"Publications",             ko:"논문 및 발표"},
  sec_patents:      {en:"Patents & Software",       ko:"특허 및 프로그램"},
  sec_awards:       {en:"Awards & Honors",          ko:"수상 실적"},
  sec_talks:        {en:"Invited Talks",            ko:"초청 강연"},
  sec_more:         {en:"Service & Skills",         ko:"학회 활동 및 역량"},

  tab_journal:    {en:"Journal",              ko:"국제 학술지"},
  tab_intl:       {en:"Int'l Conference",     ko:"국제 학술대회"},
  tab_domestic:   {en:"Domestic Conference",  ko:"국내 학술대회"},

  lbl_registered: {en:"Registered Patents",   ko:"등록 특허"},
  lbl_applied:    {en:"Patent Applications",  ko:"출원 특허"},
  lbl_software:   {en:"Software Registrations",ko:"프로그램 등록"},

  lbl_reviewing:  {en:"Reviewing Activities", ko:"논문 심사 활동"},
  lbl_skills:     {en:"Skills",               ko:"보유 역량"},
  lbl_programming:{en:"Programming",          ko:"프로그래밍"},
  lbl_tools:      {en:"Tools",                ko:"도구"},
  lbl_lab:        {en:"Lab",                  ko:"실험"},
  lbl_languages:  {en:"Languages",            ko:"언어"},
  lbl_reviewer_intro:{en:"Journal / conference reviewer for:", ko:"다음 학술지 및 학회의 심사위원:"},

  doi:            {en:"DOI ↗",   ko:"DOI ↗"},
  patent_link:    {en:"View ↗",  ko:"보기 ↗"},
  first_author:   {en:"First author", ko:"제1저자"},
  corr_author:    {en:"Corresponding author", ko:"교신저자"},
  status_ongoing:   {en:"Ongoing",   ko:"진행중"},
  status_completed: {en:"Completed", ko:"완료"},
  status_upcoming:  {en:"Upcoming",  ko:"예정"},
  project_summary:  {en:"1-page summary", ko:"한 장 요약"},
  talk_poster:      {en:"Poster", ko:"포스터"},
  role_sole:        {en:"Sole PI",         ko:"단독 PI"},
  role_lead:        {en:"Lead Researcher", ko:"실무책임자"},
  role_copi:        {en:"Co-PI",           ko:"공동기관책임자"},
  cert:           {en:"Certificate", ko:"상장"},
  scroll:         {en:"Scroll", ko:"아래로"},
  hero_focus:     {en:"Focus", ko:"연구 키워드"},
  stat_journals:  {en:"Journal Papers", ko:"국제 학술지"},
  stat_conf:      {en:"Conference Papers", ko:"학술대회 발표"},
  stat_patents:   {en:"Patents", ko:"특허"},
  stat_awards:    {en:"Awards", ko:"수상"}
};
