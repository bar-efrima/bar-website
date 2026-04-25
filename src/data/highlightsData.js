import idfCertificate from '../assets/images/achievements/idf-certificate.jpg';
import jeenContest from '../assets/images/achievements/jeen-contest.jpg';
import timesSquare from '../assets/images/achievements/times-square.jpg';
import tech12Feature from '../assets/images/achievements/tech12.jpg';
import chiPublication from '../assets/images/achievements/publiciation in Hawai.jpg';
import caimbridge from '../assets/images/achievements/caimbridge.png';

const HIGHLIGHTS = [
  {
    year: '2024',
    title: 'Tech12 Feature',
    subtitle: 'National Tech Media',
    description:
      'Kitchef innovation was featured in Tech12, covering the project and the AI-assisted cooking direction.',
    color: '#00d1ff',
    tag: 'Press',
    icon: 'news',
    image: tech12Feature,
    link: 'https://www.tech12.co.il/index-technology_first/ai_revolution/Article-860576e73637981026.htm',
    linkLabel: 'Read feature',
  },
  {
    year: '2024',
    title: 'CHI 2024 Academic Publication',
    subtitle: 'ACM CHI - Hawaii',
    description:
      'Co-authored Kitchef, an IoT tangible user interface for collaborative parent-child cooking, and presented it at ACM CHI in Hawaii.',
    color: '#00d1ff',
    tag: 'Research',
    icon: 'publication',
    image: chiPublication,
    link: 'https://dl.acm.org/doi/10.1145/3613905.3650970',
    linkLabel: 'Read paper',
  },
  {
    year: '2024',
    title: 'Cambridge Collaboration',
    subtitle: 'Blockchain Research',
    description:
      'Conducted blockchain research with Cambridge University while working with Reeve Collins, USDT inventor and Tether co-founder.',
    color: '#9d7aff',
    tag: 'Research',
    icon: 'shield',
    logo: caimbridge,
  },
  {
    year: '2025',
    title: 'Jeen Product Competition',
    subtitle: '1st Place - Company-wide',
    description:
      'Won first place in a company-wide product redesign challenge with an AI-first direction across agents, UX/UI, product strategy, and technical analysis.',
    color: '#c84a97',
    tag: 'Award',
    featured: true,
    icon: 'trophy',
    image: jeenContest,
    link: 'https://jeen.ai',
    linkLabel: 'Visit Jeen.ai',
  },
  {
    year: '2022',
    title: 'Royal Cats NFT',
    subtitle: 'Featured in Times Square, NYC',
    description:
      'Founded an ERC-721 blockchain project with a strong community presence and a Times Square billboard feature in New York.',
    color: '#c84a97',
    tag: 'Founder',
    icon: 'cat',
    image: timesSquare,
  },
  {
    year: '2019',
    title: 'Excellence Certificates',
    subtitle: 'IDF - Home Front Command',
    description:
      'Received excellence certificates for outstanding performance in the Electro-Optics Course and unit leadership.',
    color: '#ffffff',
    tag: 'Military',
    icon: 'medal',
    image: idfCertificate,
  },
];

export { HIGHLIGHTS };