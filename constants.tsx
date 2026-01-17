
import React from 'react';
import { NavItem, Service, ClientLogo, Testimonial, Project, BlogPost } from './types';

// SVG Icons
export const Icons = {
  Software: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  Web: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
  Cloud: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  Security: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  Testing: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Marketing: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
  DevOps: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  Mobile: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  // Fix: Added closing tag for the Database SVG
  Database: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
  // Add: ArrowRight icon for consistent usage across components
  ArrowRight: <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>,
};

// Add: Placeholder data for NAVIGATION
export const NAVIGATION: NavItem[] = [
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    columns: [
      {
        title: 'Core Development',
        items: [
          { title: 'Software Development', description: 'Custom software solutions for your business needs.', path: '/services/software-dev', icon: Icons.Software },
          { title: 'Web Development', description: 'Responsive and robust web applications.', path: '/services/web-dev', icon: Icons.Web },
          { title: 'Mobile App Development', description: 'Native and cross-platform mobile apps.', path: '/services/mobile-dev', icon: Icons.Mobile },
        ]
      },
      {
        title: 'Cloud & Infrastructure',
        items: [
          { title: 'Cloud Solutions', description: 'Scalable cloud architecture and migration.', path: '/services/cloud', icon: Icons.Cloud },
          { title: 'DevOps & Automation', description: 'Streamlined development and operations.', path: '/services/devops', icon: Icons.DevOps },
          { title: 'IT Services & Support', description: 'Comprehensive IT management and support.', path: '/services/it-services', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg> },
        ]
      },
      {
        title: 'Security & Quality',
        items: [
          { title: 'Security Engineering', description: 'Protecting your digital assets from threats.', path: '/services/security', icon: Icons.Security },
          { title: 'QA & Testing', description: 'Ensuring flawless performance and reliability.', path: '/services/testing', icon: Icons.Testing },
          { title: 'Digital Marketing', description: 'Strategies to enhance your online presence.', path: '/services/marketing', icon: Icons.Marketing },
        ]
      }
    ]
  },
  {
    id: 'work',
    label: 'Our Work',
    path: '/work',
  },
  {
    id: 'technologies',
    label: 'Technologies',
    path: '/technologies',
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about',
  },
  {
    id: 'blog',
    label: 'Blog',
    path: '/blog',
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/contact',
  },
];

// Add: Placeholder data for SERVICES_DATA
export const SERVICES_DATA: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    shortDesc: 'Crafting custom software solutions tailored to your unique business needs, driving efficiency and innovation.',
    fullDesc: 'HexaTrue specializes in full-cycle software development, from conceptualization and design to deployment and ongoing maintenance. Our expertise spans enterprise resource planning (ERP) systems, customer relationship management (CRM) platforms, and bespoke applications that address specific operational challenges.',
    icon: Icons.Software,
    features: [
      'Custom ERP & CRM Systems',
      'Scalable Backend Development',
      'API Integration & Development',
      'Legacy System Modernization',
      'Microservices Architecture',
    ],
    detailedOverview: 'Our software development process is meticulously designed to deliver robust, scalable, and high-performance applications. We leverage agile methodologies to ensure flexibility, transparency, and timely delivery. Our team excels in various programming languages and frameworks, building solutions that seamlessly integrate with your existing ecosystem and evolve with your business needs.',
    keyBenefits: [
      'Tailored solutions for unique challenges',
      'Increased operational efficiency',
      'Future-proof, scalable architecture',
      'Reduced total cost of ownership',
      'Enhanced competitive advantage',
    ],
    process: [
      { step: '01', title: 'Requirement Analysis', description: 'In-depth analysis of your business requirements and objectives.' },
      { step: '02', title: 'System Design', description: 'Creating a robust and scalable architectural blueprint.' },
      { step: '03', title: 'Development Sprints', description: 'Iterative development in agile sprints with regular feedback.' },
      { step: '04', title: 'Quality Assurance', description: 'Rigorous testing to ensure bug-free and high-performance software.' },
      { step: '05', title: 'Deployment & Support', description: 'Seamless deployment and continuous post-launch support.' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    shortDesc: 'Building engaging, high-performance web applications and platforms that deliver exceptional user experiences.',
    fullDesc: 'From complex e-commerce platforms to interactive web portals and content management systems, HexaTrue designs and develops web solutions that are visually appealing, highly functional, and optimized for performance across all devices.',
    icon: Icons.Web,
    features: [
      'Frontend & Backend Development',
      'E-commerce Solutions (Shopify, Magento, Custom)',
      'CMS Development (WordPress, Drupal, Custom)',
      'Progressive Web Apps (PWAs)',
      'Responsive Design & UI/UX',
    ],
    detailedOverview: 'Our web development expertise encompasses the entire spectrum of web technologies. We create dynamic and interactive web experiences using modern frameworks and libraries, ensuring fast loading times, SEO optimization, and intuitive user interfaces. Our focus is on building web applications that not only look great but also drive business growth and user engagement.',
    keyBenefits: [
      'Enhanced online presence',
      'Improved user engagement',
      'Scalable and secure web platforms',
      'Seamless cross-device experience',
      'Faster time to market for web products',
    ],
    process: [
      { step: '01', title: 'Strategy & Planning', description: 'Defining goals, target audience, and functional requirements.' },
      { step: '02', title: 'Design & Prototyping', description: 'Creating wireframes, mockups, and interactive prototypes.' },
      { step: '03', title: 'Development & Integration', description: 'Building frontend and backend, integrating APIs and third-party services.' },
      { step: '04', title: 'Testing & Optimization', description: 'Comprehensive testing for functionality, performance, and security.' },
      { step: '05', title: 'Launch & Maintenance', description: 'Website deployment, monitoring, and ongoing support.' },
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    shortDesc: 'Developing native and cross-platform mobile applications that captivate users and extend your reach.',
    fullDesc: 'HexaTrue offers comprehensive mobile app development services for iOS and Android platforms. Whether you need a native app for optimal performance or a cross-platform solution for broader reach, we deliver engaging and intuitive mobile experiences that align with your business objectives.',
    icon: Icons.Mobile,
    features: [
      'Native iOS & Android Development',
      'Cross-Platform (React Native, Flutter)',
      'UI/UX Design for Mobile',
      'API Integrations',
      'App Store Optimization (ASO)',
    ],
    detailedOverview: 'Our mobile app development team is proficient in crafting high-quality applications that provide seamless performance and exceptional user experience. We follow a user-centric design approach, combined with cutting-edge technologies, to build apps that stand out in crowded app stores and drive user loyalty.',
    keyBenefits: [
      'Increased customer engagement',
      'Expanded market reach',
      'New revenue streams',
      'Improved operational flexibility',
      'Competitive mobile presence',
    ],
    process: [
      { step: '01', title: 'Concept & Discovery', description: 'Defining app features, user stories, and technical specifications.' },
      { step: '02', title: 'UI/UX Design', description: 'Creating intuitive interfaces and engaging user experiences.' },
      { step: '03', title: 'Development & Testing', description: 'Building the app, integrating backend, and rigorous QA.' },
      { step: '04', title: 'Deployment & Marketing', description: 'Assisting with app store submission and launch strategies.' },
      { step: '05', title: 'Updates & Maintenance', description: 'Regular updates, bug fixes, and performance monitoring.' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    shortDesc: 'Leveraging leading cloud platforms to build scalable, secure, and cost-effective infrastructure for your business.',
    fullDesc: 'HexaTrue helps businesses harness the power of cloud computing through strategic consulting, migration, and management services. We work with AWS, Azure, and Google Cloud Platform to design and implement cloud-native architectures that enhance agility, reduce operational costs, and improve resilience.',
    icon: Icons.Cloud,
    features: [
      'Cloud Migration & Consulting',
      'Infrastructure as Code (IaC)',
      'Serverless Architectures',
      'Containerization (Docker, Kubernetes)',
      'Cloud Security & Compliance',
    ],
    detailedOverview: 'Our cloud solutions enable businesses to innovate faster, scale on demand, and operate more efficiently. We provide end-to-end services, from assessing your current infrastructure and planning migration strategies to implementing advanced cloud-native services like serverless functions and managed databases. Our goal is to create a robust, secure, and highly available cloud environment tailored to your specific needs.',
    keyBenefits: [
      'Scalability & flexibility',
      'Cost efficiency & optimization',
      'Enhanced security & compliance',
      'Improved disaster recovery',
      'Faster innovation cycles',
    ],
    process: [
      { step: '01', title: 'Cloud Strategy', description: 'Assessing needs, defining cloud roadmap, and platform selection.' },
      { step: '02', title: 'Migration Planning', description: 'Detailed planning for data, application, and infrastructure migration.' },
      { step: '03', title: 'Implementation', description: 'Setting up cloud infrastructure, deploying applications, and data transfer.' },
      { step: '04', title: 'Optimization', description: 'Performance tuning, cost management, and security enhancements.' },
      { step: '05', title: 'Managed Services', description: 'Ongoing monitoring, maintenance, and support for cloud environments.' },
    ],
  },
  {
    id: 'security',
    title: 'Security Engineering',
    shortDesc: 'Protecting your digital assets with robust security frameworks, threat detection, and compliance solutions.',
    fullDesc: 'In an era of increasing cyber threats, HexaTrue provides comprehensive security engineering services to safeguard your applications and infrastructure. We focus on proactive security measures, vulnerability assessments, penetration testing, and implementing compliance frameworks to protect your sensitive data and maintain business continuity.',
    icon: Icons.Security,
    features: [
      'Vulnerability Assessment & Pen Testing',
      'Security Architecture Design',
      'Compliance (GDPR, HIPAA, ISO 27001)',
      'Identity & Access Management (IAM)',
      'DevSecOps Implementation',
    ],
    detailedOverview: 'Our security engineering practice integrates security into every stage of the software development lifecycle. We employ a multi-layered approach to protect against evolving threats, ensuring that your systems are resilient and compliant with industry regulations. From secure code reviews to incident response planning, we help you build a strong security posture.',
    keyBenefits: [
      'Reduced risk of data breaches',
      'Compliance with industry regulations',
      'Improved business continuity',
      'Enhanced customer trust',
      'Proactive threat mitigation',
    ],
    process: [
      { step: '01', title: 'Security Audit', description: 'Assessing current security posture and identifying vulnerabilities.' },
      { step: '02', title: 'Strategy & Design', description: 'Developing a tailored security roadmap and architecture.' },
      { step: '03', title: 'Implementation', description: 'Deploying security tools, controls, and best practices.' },
      { step: '04', title: 'Monitoring & Response', description: 'Continuous monitoring and rapid incident response.' },
      { step: '05', title: 'Compliance & Training', description: 'Ensuring regulatory adherence and team training.' },
    ],
  },
  {
    id: 'testing',
    title: 'Quality Assurance & Testing',
    shortDesc: 'Ensuring flawless software performance, reliability, and an exceptional user experience through rigorous testing.',
    fullDesc: 'HexaTrue offers comprehensive Quality Assurance (QA) and testing services, covering functional, performance, security, and automation testing. We integrate testing throughout the development lifecycle to identify and resolve issues early, ensuring your software meets the highest standards of quality and performance.',
    icon: Icons.Testing,
    features: [
      'Automated Testing',
      'Manual & Exploratory Testing',
      'Performance & Load Testing',
      'Security Testing',
      'Test Strategy & Planning',
    ],
    detailedOverview: 'Our QA and testing approach is designed to deliver bug-free, robust, and user-friendly software. We utilize a blend of manual and automated testing techniques, tailored to your specific project needs. Our dedicated QA engineers work closely with development teams to ensure continuous quality improvement and faster release cycles.',
    keyBenefits: [
      'Higher software quality',
      'Reduced development costs',
      'Faster time to market',
      'Improved user satisfaction',
      'Enhanced brand reputation',
    ],
    process: [
      { step: '01', title: 'Test Strategy', description: 'Defining test scope, objectives, and methodologies.' },
      { step: '02', title: 'Test Plan Creation', description: 'Developing detailed test cases and scenarios.' },
      { step: '03', title: 'Test Execution', description: 'Executing manual and automated tests across environments.' },
      { step: '04', title: 'Defect Reporting', description: 'Logging, tracking, and verifying bug fixes.' },
      { step: '05', title: 'Performance Metrics', description: 'Analyzing test results and generating quality reports.' },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    shortDesc: 'Crafting data-driven digital marketing strategies to enhance your brand visibility and drive growth.',
    fullDesc: 'HexaTrue helps businesses maximize their online presence and reach target audiences through effective digital marketing strategies. Our services include SEO, content marketing, social media management, and paid advertising campaigns designed to boost engagement, generate leads, and increase conversions.',
    icon: Icons.Marketing,
    features: [
      'Search Engine Optimization (SEO)',
      'Content Marketing',
      'Social Media Management',
      'Paid Advertising (PPC)',
      'Email Marketing Campaigns',
    ],
    detailedOverview: 'Our digital marketing team combines creative strategies with analytical insights to deliver measurable results. We understand the nuances of various digital channels and tailor campaigns to resonate with your target demographic, ensuring maximum ROI and brand impact. From building compelling content to optimizing ad spend, we cover all aspects of your digital footprint.',
    keyBenefits: [
      'Increased brand awareness',
      'Higher website traffic',
      'Improved lead generation',
      'Better conversion rates',
      'Stronger customer relationships',
    ],
    process: [
      { step: '01', title: 'Audience Research', description: 'Identifying target demographics and market trends.' },
      { step: '02', title: 'Strategy Development', description: 'Creating comprehensive digital marketing plans.' },
      { step: '03', title: 'Content Creation', description: 'Developing engaging content for various platforms.' },
      { step: '04', title: 'Campaign Execution', description: 'Launching and managing SEO, PPC, social media campaigns.' },
      { step: '05', title: 'Performance Analysis', description: 'Monitoring KPIs, reporting, and campaign optimization.' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    shortDesc: 'Streamlining your software delivery pipeline with continuous integration, deployment, and automation.',
    fullDesc: 'HexaTrue implements DevOps practices to foster collaboration, automate processes, and accelerate software delivery. We help organizations build robust CI/CD pipelines, containerize applications, and manage infrastructure as code, leading to faster release cycles and improved system reliability.',
    icon: Icons.DevOps,
    features: [
      'CI/CD Pipeline Setup',
      'Container Orchestration (Kubernetes)',
      'Infrastructure as Code (Terraform, Ansible)',
      'Cloud Provisioning',
      'Monitoring & Logging',
    ],
    detailedOverview: 'Our DevOps and automation services are designed to enhance agility and efficiency across your development and operations teams. By automating repetitive tasks, establishing continuous feedback loops, and leveraging modern cloud tools, we help you achieve faster, more reliable software releases and ensure optimal system performance.',
    keyBenefits: [
      'Faster release cycles',
      'Improved system reliability',
      'Reduced operational costs',
      'Enhanced team collaboration',
      'Scalable infrastructure management',
    ],
    process: [
      { step: '01', title: 'Assessment & Strategy', description: 'Evaluating current processes and defining DevOps roadmap.' },
      { step: '02', title: 'Toolchain Selection', description: 'Choosing appropriate CI/CD, monitoring, and automation tools.' },
      { step: '03', title: 'Pipeline Implementation', description: 'Setting up automated build, test, and deployment pipelines.' },
      { step: '04', title: 'Infrastructure Automation', description: 'Implementing IaC for consistent and scalable environments.' },
      { step: '05', title: 'Continuous Improvement', description: 'Ongoing optimization, monitoring, and security enhancements.' },
    ],
  },
  {
    id: 'it-services',
    title: 'IT Services & Support',
    shortDesc: 'Comprehensive IT management, support, and consulting to keep your business operations running smoothly.',
    fullDesc: 'HexaTrue offers a range of IT services including network management, data backup and recovery, cybersecurity, and helpdesk support. We ensure your IT infrastructure is robust, secure, and always available, allowing you to focus on your core business activities.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>,
    features: [
      'Network Management',
      'Data Backup & Recovery',
      'Helpdesk & Technical Support',
      'Cybersecurity Solutions',
      'IT Consulting & Strategy',
    ],
    detailedOverview: 'Our IT services are designed to provide reliable and efficient support for your entire technology landscape. From proactive maintenance and monitoring to rapid problem resolution, we ensure your systems are performing optimally and securely. We act as an extension of your team, providing expert guidance and support whenever you need it.',
    keyBenefits: [
      'Minimized downtime',
      'Enhanced data security',
      'Optimized IT infrastructure',
      'Access to expert support',
      'Predictable IT costs',
    ],
    process: [
      { step: '01', title: 'Infrastructure Audit', description: 'Assessing existing IT systems and identifying pain points.' },
      { step: '02', title: 'Service Planning', description: 'Customizing IT service packages based on business needs.' },
      { step: '04', title: 'Proactive Monitoring', description: 'Continuous monitoring of systems for performance and security.' },
      { step: '05', title: 'Reporting & Review', description: 'Regular performance reports and strategic IT reviews.' },
      { step: '03', title: 'On-Demand Support', description: 'Providing immediate technical assistance and problem resolution.' },
    ],
  },
];


// Add: Placeholder data for CLIENT_LOGOS
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Client A', url: 'https://cdn.svgporn.com/logos/google.svg' },
  { name: 'Client B', url: 'https://cdn.svgporn.com/logos/amazon.svg' },
  { name: 'Client C', url: 'https://cdn.svgporn.com/logos/microsoft.svg' },
  { name: 'Client D', url: 'https://cdn.svgporn.com/logos/apple.svg' },
  { name: 'Client E', url: 'https://cdn.svgporn.com/logos/facebook.svg' },
  { name: 'Client F', url: 'https://cdn.svgporn.com/logos/netflix.svg' },
  { name: 'Client G', url: 'https://cdn.svgporn.com/logos/slack.svg' },
  { name: 'Client H', url: 'https://cdn.svgporn.com/logos/uber.svg' },
];

// Add: Placeholder data for TESTIMONIALS
export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Jane Doe',
    role: 'CTO',
    company: 'InnovateCorp',
    content: 'HexaTrue delivered an exceptional custom software solution that exceeded our expectations. Their team was professional, highly skilled, and responsive to our needs. The project was completed on time and within budget, and the impact on our business has been transformative. We highly recommend their services!',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    author: 'John Smith',
    role: 'CEO',
    company: 'GlobalTech',
    content: 'The web application developed by HexaTrue has revolutionized our customer engagement. The design is intuitive, and the performance is outstanding. Their expertise in modern web technologies is truly impressive, and they were a pleasure to work with from start to finish.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    author: 'Emily White',
    role: 'Product Manager',
    company: 'MobileSolutions',
    content: 'Our new mobile app is a game-changer, thanks to HexaTrue. They understood our vision perfectly and brought it to life with beautiful design and robust functionality. The feedback from our users has been overwhelmingly positive, and we are already seeing significant growth.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    author: 'David Green',
    role: 'Operations Director',
    company: 'CloudWorks',
    content: 'HexaTrue guided us through a complex cloud migration with ease. Their strategic planning and execution were flawless, resulting in a more scalable and cost-efficient infrastructure. Their ongoing support ensures our systems are always running at peak performance.',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    author: 'Sarah Brown',
    role: 'Head of Security',
    company: 'SecureNet',
    content: 'The security engineering services from HexaTrue were top-notch. They identified critical vulnerabilities and implemented robust solutions that significantly strengthened our security posture. Their team is knowledgeable and dedicated to protecting digital assets.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    author: 'Michael Lee',
    role: 'CTO',
    company: 'QualitySoft',
    content: 'We partnered with HexaTrue for QA and testing, and the results speak for themselves. Their thorough approach ensured our software was released bug-free and performed flawlessly. Their attention to detail and commitment to quality are truly remarkable.',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
];

// Add: Placeholder data for PROJECTS_DATA
export const PROJECTS_DATA: Project[] = [
  {
    id: 'fintech-platform',
    title: 'Enterprise FinTech Platform',
    category: 'FinTech',
    client: 'GlobalBank Inc.',
    image: 'https://images.unsplash.com/photo-1543286386-2e659306eb21?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1543286386-2e659306eb21?q=80&w=2070&auto=format&fit=crop',
    shortDesc: 'Developed a high-performance, secure trading platform for institutional investors, integrating real-time market data and advanced analytics.',
    challenge: 'The client needed to replace an aging legacy trading system with a modern, scalable, and highly secure platform capable of handling millions of transactions daily with sub-millisecond latency. Key challenges included integrating diverse data sources, ensuring regulatory compliance, and maintaining continuous operation during migration.',
    solution: 'We designed and implemented a microservices-based architecture leveraging cloud-native technologies (AWS). The solution included real-time data streaming with Kafka, a low-latency order matching engine, and a scalable API gateway. We adopted a DevSecOps approach to embed security throughout the development lifecycle and ensure compliance with financial regulations.',
    results: [
      '40% reduction in transaction latency',
      'Increased system scalability by 5x',
      'Achieved 99.99% uptime',
      'Improved developer velocity by 30%',
    ],
    techStack: ['React', 'Node.js', 'Kafka', 'AWS Lambda', 'DynamoDB', 'Kubernetes'],
    sections: [
      {
        title: 'Real-time Analytics Integration',
        content: 'Integrated advanced real-time analytics dashboards, providing institutional traders with immediate insights into market trends, portfolio performance, and risk exposure. This allowed for quicker, more informed decision-making.'
      },
      {
        title: 'Enhanced Security Protocols',
        content: 'Implemented multi-factor authentication, end-to-end encryption, and continuous security monitoring to protect sensitive financial data. Regular penetration testing and vulnerability assessments were performed to maintain a robust security posture.'
      },
    ]
  },
  {
    id: 'health-app',
    title: 'Telemedicine & Patient Care App',
    category: 'Healthcare',
    client: 'MediConnect Health',
    image: 'https://images.unsplash.com/photo-1576091160550-fd428ce4a7e5?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-fd428ce4a7e5?q=80&w=2070&auto=format&fit=crop',
    shortDesc: 'Developed a HIPAA-compliant telemedicine platform with video consultations, appointment scheduling, and secure health record management.',
    challenge: 'MediConnect Health required a secure, user-friendly, and HIPAA-compliant telemedicine platform to connect patients with healthcare providers. The primary challenges involved ensuring data privacy, integrating with existing EHR systems, and providing a seamless user experience for both patients and doctors across different devices.',
    solution: 'We built a cross-platform mobile application (React Native) and a web portal for providers, featuring secure video conferencing, prescription management, and a robust appointment booking system. Adhering to HIPAA regulations was paramount, so we implemented stringent data encryption, access controls, and audited cloud infrastructure (Azure).',
    results: [
      'Reduced patient wait times by 60%',
      'Increased patient satisfaction by 25%',
      'Streamlined doctor workflows',
      'Achieved full HIPAA compliance',
    ],
    techStack: ['React Native', 'Azure', 'Node.js', 'PostgreSQL', 'Twilio (Video API)'],
    sections: [
      {
        title: 'Intuitive User Experience',
        content: 'Focused on creating an intuitive and accessible interface for patients, allowing them to easily schedule appointments, join video calls, and access their health records. For providers, a streamlined dashboard facilitated efficient patient management.'
      },
      {
        title: 'EHR System Integration',
        content: 'Successfully integrated the telemedicine platform with the client\'s existing Electronic Health Record (EHR) systems, enabling real-time synchronization of patient data and reducing manual data entry for healthcare professionals.'
      },
    ]
  },
  {
    id: 'e-commerce-engine',
    title: 'Next-Gen E-commerce Engine',
    category: 'Retail',
    client: 'FashionForward',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa67e2f1?q=80&w=2070&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1522204523234-8729aa67e2f1?q=80&w=2070&auto=format&fit=crop',
    shortDesc: 'Designed and implemented a scalable headless e-commerce platform capable of handling high traffic and multi-channel sales.',
    challenge: 'FashionForward, a rapidly growing online retailer, needed an e-commerce platform that could support aggressive scaling, provide flexibility for new sales channels, and offer a highly personalized shopping experience. Their existing monolithic system was a bottleneck for innovation and performance during peak seasons.',
    solution: 'We developed a headless e-commerce solution using a GraphQL API, React storefront, and a microservices backend running on Google Cloud Platform. This decoupled architecture allowed for rapid feature development, easy integration with various frontends (web, mobile, social commerce), and superior performance under heavy load.',
    results: [
      '30% increase in conversion rates',
      '2x faster page load times',
      'Enabled expansion to new markets',
      'Seamless integration with new sales channels',
    ],
    techStack: ['React', 'GraphQL', 'Node.js', 'Google Cloud Platform', 'MongoDB', 'Redis'],
    sections: [
      {
        title: 'Personalized Shopping Experience',
        content: 'Implemented AI-driven recommendation engines and personalized content delivery to enhance the customer journey, leading to increased average order value and customer loyalty.'
      },
      {
        title: 'Omnichannel Integration',
        content: 'The headless architecture facilitated easy integration with various sales channels, including web, mobile apps, social media platforms, and physical store kiosks, providing a consistent brand experience across all touchpoints.'
      },
    ]
  },
];

// Add: Placeholder data for BLOG_POSTS
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-in-enterprise',
    title: 'The Future of AI in Enterprise Software: Beyond Automation',
    category: 'Artificial Intelligence',
    date: 'October 26, 2025',
    author: 'Dr. Evelyn Reed',
    image: 'https://images.unsplash.com/photo-1574717046049-923f66304910?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Artificial Intelligence is rapidly evolving beyond simple task automation, becoming a transformative force in enterprise software. This article explores the next wave of AI applications that promise to redefine business operations, from hyper-personalized customer experiences to predictive analytics that anticipate market shifts.',
    content: `
      ## The AI Revolution in Business
      Artificial Intelligence is no longer just a buzzword; it's a fundamental shift in how businesses operate. We're moving past basic automation to sophisticated AI systems that can learn, adapt, and even innovate. This transformation is set to redefine enterprise software as we know it.

      ### Hyper-Personalization
      One of the most exciting frontiers is hyper-personalization. AI can analyze vast amounts of customer data to offer truly bespoke experiences, tailoring products, services, and communication at an individual level.
      - Dynamic content generation
      - Predictive customer service
      - Tailored product recommendations

      ### Predictive Analytics and Forecasting
      AI-powered predictive analytics are enabling businesses to anticipate future trends with unprecedented accuracy. This isn't just about forecasting sales; it's about predicting operational bottlenecks, market shifts, and even potential security threats.
      - Supply chain optimization
      - Financial market prediction
      - Proactive maintenance scheduling

      ### Augmented Human Intelligence
      Rather than replacing human workers, the next generation of enterprise AI will augment human intelligence. AI will handle the data crunching and pattern recognition, freeing up human employees to focus on creative problem-solving, strategic thinking, and complex decision-making.
      - AI assistants for complex tasks
      - Automated report generation
      - Decision support systems

      ### Ethical AI and Governance
      As AI becomes more integral to business, ethical considerations and robust governance frameworks are paramount. Ensuring fairness, transparency, and accountability in AI systems is not just a regulatory requirement but a moral imperative.
      - Data privacy by design
      - Algorithmic transparency
      - Bias detection and mitigation

      HexaTrue is at the forefront of this revolution, building AI solutions that are not only powerful but also responsible. Our goal is to empower enterprises to leverage AI for sustainable growth and innovation.
    `,
  },
  {
    id: 'cloud-security-best-practices',
    title: 'Cloud Security Best Practices for 2026: A Proactive Approach',
    category: 'Cybersecurity',
    date: 'November 15, 2025',
    author: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1563207153-f40b37981541?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'As cloud adoption continues to accelerate, ensuring robust security remains a top priority for enterprises. This article outlines the essential cloud security best practices for 2026, focusing on proactive strategies to protect data and infrastructure in an evolving threat landscape.',
    content: `
      ## The Evolving Landscape of Cloud Security
      Cloud computing offers immense flexibility and scalability, but it also introduces new security challenges. In 2026, a proactive and multi-layered approach to cloud security is more critical than ever.

      ### Zero Trust Architecture
      The principle of "never trust, always verify" is becoming the cornerstone of modern cloud security. Implementing Zero Trust ensures that no user or device is granted access without strict authentication and authorization, regardless of their location.
      - Micro-segmentation of networks
      - Least privilege access
      - Continuous verification

      ### Advanced Threat Detection and Response
      Leveraging AI and machine learning for advanced threat detection allows organizations to identify and respond to threats in real-time. This includes anomaly detection, behavioral analytics, and automated incident response workflows.
      - SIEM integration
      - Endpoint Detection and Response (EDR)
      - Automated remediation

      ### Data Encryption and Key Management
      Protecting data at rest and in transit through robust encryption is non-negotiable. Effective key management strategies are crucial to ensuring the confidentiality and integrity of sensitive information in the cloud.
      - Encryption for databases and storage
      - Hardware Security Modules (HSMs)
      - Centralized key management systems

      ### Cloud Security Posture Management (CSPM)
      Automated CSPM tools are essential for continuously monitoring cloud environments for misconfigurations, compliance violations, and potential security gaps. This ensures a consistent security posture across diverse cloud services.
      - Continuous compliance checks
      - Automated remediation of misconfigurations
      - Real-time threat alerts

      ### DevSecOps Integration
      Integrating security practices into every stage of the DevOps pipeline (DevSecOps) ensures that security is 'shifted left.' This approach embeds security early in the development process, reducing vulnerabilities and accelerating secure deployments.
      - Secure code reviews
      - Automated security testing
      - Vulnerability scanning in CI/CD

      HexaTrue’s cybersecurity experts help enterprises design, implement, and manage secure cloud environments, ensuring compliance and peace of mind in the digital age.
    `,
  },
  {
    id: 'quantum-computing-impact',
    title: 'Quantum Computing: Implications for Enterprise IT by 2030',
    category: 'Emerging Tech',
    date: 'December 01, 2025',
    author: 'Dr. Alex Chen',
    image: 'https://images.unsplash.com/photo-1627439589926-78a7b65377f0?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Quantum computing promises to revolutionize various industries, but its implications for enterprise IT by 2030 are just beginning to be understood. This article delves into the potential impacts, challenges, and preparatory steps businesses should consider as quantum technologies mature.',
    content: `
      ## The Dawn of the Quantum Era
      Quantum computing, once a theoretical concept, is steadily moving towards practical applications. While widespread commercial deployment is still some years away, its potential impact on enterprise IT by 2030 is immense and requires strategic foresight.

      ### Cryptographic Vulnerabilities
      One of the most immediate concerns is the threat quantum computers pose to current cryptographic standards. Quantum algorithms could break widely used encryption methods, necessitating a shift to post-quantum cryptography.
      - RSA and ECC vulnerabilities
      - Need for quantum-resistant algorithms
      - Cryptographic agility

      ### Optimization and Simulation
      Quantum computers excel at solving complex optimization problems and performing simulations far beyond the capabilities of classical computers. This opens up new possibilities for industries like finance, logistics, and pharmaceutical research.
      - Drug discovery and material science
      - Financial modeling
      - Supply chain optimization

      ### AI and Machine Learning Enhancement
      Quantum machine learning (QML) could significantly enhance AI capabilities, enabling faster training of complex models and unlocking new forms of data analysis. This has implications for predictive analytics, personalized medicine, and autonomous systems.
      - Faster data processing
      - Enhanced pattern recognition
      - New AI algorithm development

      ### Challenges and Readiness
      Despite the promise, significant challenges remain, including hardware stability, error correction, and the scarcity of quantum programming talent. Enterprises need to start building internal expertise and exploring quantum-safe solutions now.
      - Workforce development
      - Hybrid classical-quantum architectures
      - Quantum-safe migration strategies

      HexaTrue is actively researching and developing strategies to prepare enterprises for the quantum future, ensuring our clients remain at the technological forefront.
    `,
  },
];
