import jeenLogo from '../assets/logos/jeen_ai_logo.jpg';
import dailyDevLogo from '../assets/logos/daily_dev_logo.png';
import cambridgeLogo from '../assets/logos/caimbridge_logo.png';
import reichmanLogo from '../assets/logos/rehicman_logo.jpg';
import hatalLogo from '../assets/logos/hatal_logo.png';
import milabLogo from '../pages/Kitchef_Page/Images/milab_logo.jpg';
import nftLogo from '../pages/NFT_Page/Images/NFT_logo.png';

const LOGOS = {
  awarelabs: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="8" fill="#0d0d1a" stroke="rgba(255,255,255,0.2)"/>
    <path d="M20 10l9 5.5v9L20 30l-9-5.5v-9L20 10z" stroke="#fff" stroke-width="1.3" fill="none"/>
    <circle cx="20" cy="20" r="3.5" fill="#00d1ff"/>
    <path d="M20 10v5M29 15.5l-4.5 2.5M11 15.5l4.5 2.5M20 30v-5M29 24.5l-4.5-2.5M11 24.5l4.5-2.5" stroke="#00d1ff" stroke-opacity="0.5" stroke-width="1"/>
  </svg>`,
  highschool: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="34" height="34" rx="6" fill="#0d0d1a" stroke="rgba(255,255,255,0.2)"/>
    <path d="M11 16h18v12H11zM9 16l11-6 11 6M15 28v-8h4v8M23 22h3v3h-3z" stroke="#fff" stroke-opacity="0.7" stroke-width="1.2" fill="none" stroke-linejoin="round"/>
  </svg>`,
};

const EXPERIENCE = [
  {
    id: 'jeen',
    logo: 'jeen',
    logoImage: jeenLogo,
    year: '2025',
    yearRange: '2025 - Present',
    role: 'Full Stack Developer',
    company: 'Jeen.ai',
    location: 'Tel Aviv',
    color: '#c84a97',
    featured: true,
    description: 'Leading AI-focused development at a growing enterprise platform - owning architecture, delivery, and technical strategy end-to-end.',
    highlights: [
      'Own major product areas end-to-end - planning, architecture, delivery',
      'Lead company-wide AI efforts: agents, model integrations, internal workflows',
      'Designed auth, authorization and enterprise access architecture',
      'Strategic integrations: AI services, Microsoft platforms, comms systems',
      'Won product competition across the company by presenting a future design for a new pivot',
      'Technical leadership: mentoring, onboarding, engineering best practices',
      'Partner with Product and Design on roadmap and UX decisions',
    ],
    chips: ['React', 'Node.js', 'TypeScript', 'AI Agents', 'OAuth', 'Microsoft Graph', 'Leadership'],
  },
  {
    id: 'cambridge',
    logo: 'cambridge',
    logoImage: cambridgeLogo,
    year: '2024',
    yearRange: '2024',
    role: 'Blockchain Research Assistant',
    company: 'Cambridge Frontier Technologies',
    location: 'Remote - UK',
    color: '#00d1ff',
    description: 'Collaborated with Cambridge University\'s Blockchain department on research projects at the frontier of decentralized systems.',
    highlights: [
      'Conducted applied blockchain research with Cambridge University',
      'Contributed to innovative solutions for frontier tech projects',
      'Bridged academic research and practical engineering',
    ],
    chips: ['Blockchain', 'Research', 'Solidity', 'Web3', 'Academic Writing'],
  },
  {
    id: 'milab',
    logo: 'milab',
    logoImage: milabLogo,
    year: '2022',
    yearRange: '2022 - 2024',
    role: 'IoT Developer and Research Assistant',
    company: 'MiLab Innovation Lab',
    location: 'Reichman University',
    color: '#00d1ff',
    description: 'Product-oriented HCI research integrating wearables, smart objects, and IoT for collaborative experiences.',
    highlights: [
      'Published at CHI 2024 conference in Hawaii',
      'Led Kitchef from concept to working IoT prototype',
      'Designed hardware, firmware and UX for family cooking experiences',
      'Worked in multidisciplinary teams focused on HCI and user design',
    ],
    chips: ['Arduino', 'C++', 'BLE', 'IoT', 'HCI Research', 'UX'],
  },
  {
    id: 'dailydev',
    logo: 'dailydev',
    logoImage: dailyDevLogo,
    year: '2023',
    yearRange: '2023 - 2024',
    role: 'Community Specialist',
    company: 'daily.dev',
    location: 'Remote',
    color: '#c84a97',
    description: 'Supported a global developer community focused on AI and software engineering, bridging product insights with content strategy.',
    highlights: [
      'Provided technological insights and feedback to product teams',
      'Drove developer community engagement and content creation',
      'Analyzed tech trends to optimize personalization and engagement',
    ],
    chips: ['Community', 'Content Strategy', 'Developer Tools', 'AI Trends'],
  },
  {
    id: 'awarelabs',
    logo: 'awarelabs',
    year: '2023',
    yearRange: '2023',
    role: 'Full Stack Developer (Internship)',
    company: 'Aware Labs',
    location: 'Tel Aviv',
    color: '#00d1ff',
    description: 'Built the glue between on-chain blockchain data and AI systems - shipping pipelines and integrations from day one.',
    highlights: [
      'Developed Python and JavaScript solutions integrating blockchain with AI',
      'Optimized client-server interactions for real-time data',
      'Designed data processing pipelines using REST APIs',
    ],
    chips: ['Python', 'JavaScript', 'Blockchain', 'REST APIs', 'AI Integration'],
  },
  {
    id: 'royalcats',
    logo: 'royalcats',
    logoImage: nftLogo,
    year: '2021',
    yearRange: '2021 - 2022',
    role: 'Founder and Engineer',
    company: 'Royal Cats NFT',
    location: 'Independent',
    color: '#c84a97',
    description: 'Founded and led an independent blockchain project from concept to a large engaged community.',
    highlights: [
      'Wrote and deployed ERC-721 smart contracts',
      'Generated 10,000 unique NFT assets',
      'Built and grew a strong project community',
      'Project was featured on Times Square digital billboards',
    ],
    chips: ['Solidity', 'ERC-721', 'Web3', 'Community', 'Product'],
  },
  {
    id: 'army',
    logo: 'army',
    logoImage: hatalLogo,
    year: '2017',
    yearRange: '2017 - 2019',
    role: 'Experiment Commander - Hatal',
    company: 'IDF - Home Front Command',
    location: 'Israel',
    color: '#ffffff',
    description: 'Led experimental work combining image processing, IoT, and software while earning excellence certifications for performance.',
    highlights: [
      'Earned Excellence Certificates: Electro-Optics Course and Unit Performance',
      'Led experiments: image processing, data analysis, web dev, CAD, IoT',
      'Designed the official unit logo and server interface (UI/UX)',
      'Combined technical leadership with graphic design skills',
    ],
    chips: ['Leadership', 'Image Processing', 'CAD', 'IoT', 'UI/UX', 'Adobe Suite'],
  },
];

const EDUCATION = [
  {
    logo: 'reichman',
    logoImage: reichmanLogo,
    school: 'Reichman University (IDC Herzliya)',
    degree: 'B.Sc. Computer Science',
    years: '2021 - 2025',
    notes: 'AI App Dev, Computer Graphics, ML, Blockchain, Unreal Engine, Algorithms',
    clubs: 'Tech-Talk, Product-Hub, Israel Space Community',
  },
  {
    logo: 'highschool',
    school: 'Hayovel High School',
    degree: 'Expansion: Chemistry, Arabic, Mathematics, English',
    years: '2013 - 2016',
  },
];

const SKILLS = {
  Languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'Solidity', 'C++'],
  'Frameworks and Tools': ['React', 'Node.js', 'FastAPI', 'Ionic', 'Next.js', 'Three.js', 'pandas', 'Git', 'Langflow'],
  'Generative AI': ['OpenAI API', 'Stable Diffusion', 'Midjourney', 'RVC', 'Agentic Workflows', 'RAG', 'RAG Pipelines', 'Workflow Automation'],
  'Infra and Auth': ['OAuth 2.0', 'SSO', 'Azure AD', 'Microsoft Graph', 'REST APIs', 'API Design', 'Integrations', 'Twilio', 'Docker'],
  'Product and Systems': ['Product Strategy', 'AI Product Thinking', 'Sharing Systems', 'Cross-team Delivery', 'System Architecture'],
  Other: ['Arduino', 'Unreal Engine', 'Adobe Suite', 'Figma', 'Data Analysis', 'Product Dev'],
};

const LANGUAGES = [
  { name: 'Hebrew', level: 'Native' },
  { name: 'English', level: 'High Proficiency' },
];

const ACHIEVEMENTS = [
  { html: '<strong>CHI 2024 Publication</strong> - Kitchef presented at ACM CHI, Hawaii' },
  { html: '<strong>Tech12 Feature</strong> - Kitchef innovation featured in Tech12 national tech media' },
  { html: '<strong>Cambridge Collaboration</strong> - conducted blockchain research with Cambridge while working directly with Reeve Collins, USDT inventor and Tether co-founder & CEO' },
  { html: '<strong>Excellence Certificates</strong> - Electro-Optics Course and Unit Performance (IDF)' },
  { html: '<strong>Royal Cats NFT</strong> - founded project with a strong community presence; featured in Times Square' },
  { html: '<strong>Jeen Product Competition</strong> - won first place in a company-wide product redesign challenge by proposing an AI-first direction across agents, UX/UI, product strategy, and technical analysis' },
];

export { LOGOS, EXPERIENCE, EDUCATION, SKILLS, LANGUAGES, ACHIEVEMENTS };
