
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
  Database: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
  ArrowRight: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>,
};

export const NAVIGATION: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  {
    id: 'company',
    label: 'Company',
    path: '/about',
    columns: [
      {
        title: 'The Company',
        items: [
          { title: 'About Us', path: '/about', icon: null },
          { title: 'Industries', path: '/industries', icon: null },
        ]
      },
      {
        title: 'Resource',
        items: [
          { title: 'Blog', path: '/blog', icon: null },
          { title: 'Case Studies', path: '/case-studies', icon: null },
        ]
      }
    ]
  },
  {
    id: 'services',
    label: 'Services',
    path: '/services',
    columns: [
      {
        title: 'Core Development',
        items: [
          { title: 'Software Development', path: '/services/software-dev', icon: Icons.Software, description: 'Bespoke enterprise software solutions.' },
          { title: 'Web Development', path: '/services/web-dev', icon: Icons.Web, description: 'Modern, responsive web applications.' },
          { title: 'Mobile App Development', path: '/services/mobile-dev', icon: Icons.Mobile, description: 'Native and cross-platform mobile apps.' },
        ]
      },
      {
        title: 'Cloud & Infrastructure',
        items: [
          { title: 'Cloud Solutions', path: '/services/cloud', icon: Icons.Cloud, description: 'Scalable cloud infrastructure & migration.' },
          { title: 'DevOps Engineering', path: '/services/devops', icon: Icons.DevOps, description: 'Automated CI/CD pipelines and monitoring.' },
          { title: 'IT Services', path: '/services/it-services', icon: Icons.Software, description: 'Full-cycle IT support and consulting.' },
        ]
      },
      {
        title: 'Quality & Security',
        items: [
          { title: 'Security Engineering', path: '/services/security', icon: Icons.Security, description: 'Robust cybersecurity and compliance.' },
          { title: 'QA & Testing', path: '/services/testing', icon: Icons.Testing, description: 'Rigorous automated and manual testing.' },
          { title: 'Digital Marketing', path: '/services/marketing', icon: Icons.Marketing, description: 'Data-driven growth and SEO strategies.' },
        ]
      }
    ]
  },
  {
    id: 'solutions',
    label: 'Solutions',
    path: '/solutions',
    columns: [
      {
        title: 'Enterprise',
        items: [
          { title: 'ERP Solutions', path: '/solutions/erp', icon: Icons.Database, description: 'Streamline business operations.' },
          { title: 'CRM Systems', path: '/solutions/crm', icon: Icons.Software, description: 'Customer relationship management.' },
        ]
      },
      {
        title: 'Industry Specific',
        items: [
          { title: 'E-commerce', path: '/solutions/ecommerce', icon: Icons.Web, description: 'Scalable online retail platforms.' },
          { title: 'EdTech', path: '/solutions/edtech', icon: Icons.Software, description: 'Next-gen learning management systems.' },
        ]
      }
    ]
  },
  { id: 'work', label: 'Our Work', path: '/work' },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'software-dev',
    title: 'Custom Software Development',
    shortDesc: 'Build powerful, scalable software tailored to your specific business needs.',
    fullDesc: 'HexaTrue delivers high-end custom software engineering that transforms business ideas into robust digital realities. We specialize in complex enterprise-grade solutions that are built to scale.',
    detailedOverview: 'In today\'s rapidly changing digital landscape, off-the-shelf software often fails to meet the unique complexities of high-growth enterprises. HexaTrue\'s Custom Software Development service bridges this gap by providing tailored solutions that are engineered for performance, security, and scalability. Our approach combines deep technical expertise with industry-leading methodologies to ensure your software is not just a tool, but a competitive advantage. We leverage modern tech stacks including Java, .NET, Python, and Node.js to build everything from core enterprise backbones to specialized analytical platforms. Our development cycle focuses on modularity, ensuring that your investment is future-proof and capable of evolving alongside your business demands.',
    keyBenefits: [
      'Engineered for 99.9% uptime and high concurrency',
      'Proprietary security framework implementation',
      'Seamless integration with legacy and third-party systems',
      'Modular architecture for future-proof scalability',
      'Significant reduction in technical debt through clean code practices',
      'Faster ROI through prioritized feature delivery'
    ],
    process: [
      { step: '01', title: 'Deep Discovery', description: 'Comprehensive requirement gathering, stakeholder interviews, and technical feasibility analysis.' },
      { step: '02', title: 'Architecture Design', description: 'Designing a robust, scalable technical blueprint and selecting the optimal tech stack.' },
      { step: '03', title: 'Agile Sprints', description: 'Iterative development with bi-weekly demos and continuous feedback loops.' },
      { step: '04', title: 'Rigorous Testing', description: 'Automated and manual QA cycles ensuring bug-free deployments and performance.' },
      { step: '05', title: 'Seamless Go-Live', description: 'Strategic rollout with zero-downtime deployment strategies and post-launch support.' }
    ],
    icon: Icons.Software,
    features: [
      'Bespoke Enterprise Solutions',
      'Legacy System Modernization',
      'SaaS Platform Development',
      'API & Third-party Integration',
      'Microservices Architecture',
      'Ongoing Technical Support'
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development Services',
    shortDesc: 'High-performance websites and web applications built for the modern digital landscape.',
    fullDesc: 'We build fast, secure, and SEO-optimized web experiences using React, Angular, and Vue. Our web solutions are designed to engage users and convert visitors into loyal customers.',
    detailedOverview: 'The web is your most powerful storefront. At HexaTrue, we go beyond simple coding to create immersive, high-performance web applications that provide a native-like experience in the browser. Whether you need a sophisticated customer portal, a complex dashboard, or a high-traffic e-commerce platform, our web development services ensure your digital presence is cutting-edge. We focus on Core Web Vitals, accessibility (a11y), and responsive design to ensure a flawless experience across all devices and network conditions. Our expertise covers the full spectrum of modern web technologies, from Server Side Rendering (SSR) to Single Page Applications (SPA). We ensure that every line of code is optimized for speed, security, and search engine visibility, giving you a competitive edge from day one.',
    keyBenefits: [
      'Lighting-fast load times for improved Core Web Vitals',
      'Mobile-first architecture for cross-device consistency',
      'Advanced SEO optimization for higher organic rankings',
      'Robust security hardening against common web vulnerabilities',
      'Interactive and intuitive UI/UX that boosts engagement',
      'Scalable backend architectures supporting millions of requests'
    ],
    process: [
      { step: '01', title: 'UX Research', description: 'Analyzing user personas and mapping out the optimal digital journey.' },
      { step: '02', title: 'Visual Design', description: 'Crafting modern, pixel-perfect interfaces that align with your brand identity.' },
      { step: '03', title: 'Front-end Engineering', description: 'Developing responsive interfaces using modern frameworks like React and Vue.' },
      { step: '04', title: 'Back-end Orchestration', description: 'Building secure APIs and data layers to power your front-end experiences.' },
      { step: '05', title: 'Optimization & SEO', description: 'Fine-tuning performance and ensuring your site is fully crawlable and fast.' }
    ],
    icon: Icons.Web,
    features: [
      'Custom React/Angular Apps',
      'Progressive Web Applications (PWA)',
      'Enterprise E-commerce Portals',
      'Headless CMS Solutions',
      'Performance Optimization',
      'Full-stack JavaScript Development'
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform mobile apps that provide seamless user experiences.',
    fullDesc: 'Leverage our expertise in iOS, Android, and Flutter to reach your customers wherever they are. We create apps that are fast, intuitive, and feature-rich.',
    detailedOverview: 'Mobile is no longer a secondary screen—it is the primary interface for the digital world. HexaTrue specializes in building high-performance mobile applications that users love. Whether you require the unmatched speed of Native iOS and Android or the efficiency of Cross-Platform solutions like Flutter and React Native, our team delivers excellence. We integrate advanced mobile features such as biometric authentication, offline synchronization, and push notification systems to keep your users engaged. Our design philosophy centers on ergonomics and intuitive navigation, ensuring high retention rates for your mobile products. We handle everything from initial design and prototyping to App Store submission and post-launch maintenance, providing a truly comprehensive mobile solution.',
    keyBenefits: [
      'Native-level performance and smooth animations',
      'Offline-first capabilities for consistent functionality',
      'Highly secure data storage and encrypted communication',
      'Seamless integration with mobile hardware (GPS, Camera, Sensors)',
      'Single codebase for iOS & Android (Cross-platform) for faster launch',
      'App Store and Play Store compliance and management'
    ],
    process: [
      { step: '01', title: 'Mobile Strategy', description: 'Defining the app purpose, platform selection, and feature prioritization.' },
      { step: '02', title: 'Interactive Wireframing', description: 'Prototyping the mobile user experience for fast validation.' },
      { step: '03', title: 'Coding & Integration', description: 'Writing clean, testable code and integrating with cloud backends.' },
      { step: '04', title: 'Multi-device QA', description: 'Testing across a wide range of devices and screen resolutions.' },
      { step: '05', title: 'App Store Launch', description: 'Handling the submission and approval process for global distribution.' }
    ],
    icon: Icons.Mobile,
    features: [
      'Native iOS (Swift) Development',
      'Native Android (Kotlin) Development',
      'React Native Cross-platform Apps',
      'Flutter High-performance Apps',
      'Mobile UI/UX Design',
      'App Store Optimization (ASO)'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    shortDesc: 'Scalable cloud infrastructure and migration services for modern enterprises.',
    fullDesc: 'Unlock the power of AWS, Azure, and Google Cloud. We help you migrate, manage, and optimize your cloud presence for maximum cost-efficiency and performance.',
    detailedOverview: 'The cloud is the engine of modern business growth. HexaTrue\'s Cloud Solutions empower your organization to leave behind the constraints of traditional hardware. We provide comprehensive cloud consulting, architecture design, and managed migration services. Our team specializes in Cloud-Native architectures, ensuring your applications are elastic, resilient, and cost-effective. We don\'t just move your servers; we modernize your infrastructure using Serverless, Microservices, and Auto-scaling technologies to ensure you only pay for what you use while maintaining world-class performance. Our cloud experts ensure that your security posture is hardened and your data is protected across multi-cloud or hybrid environments.',
    keyBenefits: [
      'Up to 40% reduction in infrastructure overhead costs',
      'Elastic scalability to handle sudden traffic spikes',
      'Enhanced security through cloud-native guardrails',
      'Global availability with multi-region deployment strategies',
      'Faster innovation cycles through cloud-automated tools',
      'Zero-downtime migration from on-premise to cloud'
    ],
    process: [
      { step: '01', title: 'Cloud Readiness Audit', description: 'Evaluating current infrastructure and defining migration priorities.' },
      { step: '02', title: 'Architecture Planning', description: 'Designing a secure, high-availability cloud blueprint (AWS/Azure/GCP).' },
      { step: '03', title: 'Migration Execution', description: 'Phased, low-risk migration of data and applications to the new environment.' },
      { step: '04', title: 'Managed Services', description: '24/7 monitoring, patching, and operational management of your cloud.' },
      { step: '05', title: 'Cost Optimization', description: 'Continuous tuning of cloud resources to minimize monthly spend.' }
    ],
    icon: Icons.Cloud,
    features: [
      'Cloud Migration Strategy',
      'Serverless Architectures',
      'Managed Cloud Services',
      'Infrastructure as Code (IaC)',
      'Cloud Cost Optimization',
      'Disaster Recovery Planning'
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Engineering',
    shortDesc: 'Automated CI/CD pipelines and monitoring for rapid, reliable software delivery.',
    fullDesc: 'Accelerate your development lifecycle with our DevOps expertise. We automate everything from testing to deployment, reducing errors and increasing speed.',
    detailedOverview: 'DevOps is the culture of collaboration and automation. HexaTrue helps you break down silos between development and operations teams. By implementing robust Continuous Integration and Continuous Deployment (CI/CD) pipelines, we enable your organization to release software faster and with significantly fewer defects. Our DevOps engineers are experts in containerization (Docker, Kubernetes) and Infrastructure as Code (Terraform), ensuring your environments are reproducible, stable, and secure. We focus on building a "feedback loop" that allows for rapid fixes and constant improvement. Our DevSecOps approach ensures that security is integrated into every stage of the pipeline, from code to cloud.',
    keyBenefits: [
      'Release software 10x faster with automated pipelines',
      'Significant reduction in deployment-related failures',
      'Faster mean time to recovery (MTTR) through monitoring',
      'Improved collaboration and developer productivity',
      'Consistency across Dev, Staging, and Production environments',
      'Automated security checks within the delivery pipeline'
    ],
    process: [
      { step: '01', title: 'Culture Assessment', description: 'Reviewing current workflows and identifying automation opportunities.' },
      { step: '02', title: 'Toolchain Integration', description: 'Setting up Git, Jenkins/GitHub Actions, and automated testing tools.' },
      { step: '03', title: 'Containerization', description: 'Architecting applications for Docker and Kubernetes orchestration.' },
      { step: '04', title: 'Pipeline Automation', description: 'Building the end-to-end flow from code commit to production release.' },
      { step: '05', title: 'Observability', description: 'Implementing logging and monitoring for full-stack visibility.' }
    ],
    icon: Icons.DevOps,
    features: [
      'CI/CD Pipeline Automation',
      'Containerization (Docker & K8s)',
      'Automated Monitoring & Alerting',
      'Site Reliability Engineering (SRE)',
      'Security Integration (DevSecOps)',
      'Environment Provisioning'
    ]
  },
  {
    id: 'it-services',
    title: 'Enterprise IT Services',
    shortDesc: 'Full-cycle IT support and consulting to optimize your business operations.',
    fullDesc: 'Professional IT management and consulting for the modern enterprise. We handle the technology so you can focus on your core business.',
    detailedOverview: 'Technology should be an asset, not a burden. HexaTrue\'s Enterprise IT Services provide the strategic management and technical support your organization needs to thrive. We offer a full spectrum of managed services, including network design, help desk support, and IT strategic planning. Our goal is to ensure your technical infrastructure is invisible—always working, always secure, and always optimized. We act as your fractional CTO or extended IT department, providing expert guidance on everything from hardware procurement to long-term digital strategy. Our multi-layered support model ensures that technical issues are resolved rapidly, minimizing downtime and maximizing organizational efficiency.',
    keyBenefits: [
      'Eliminate the overhead of managing internal IT teams',
      'Proactive monitoring to prevent issues before they occur',
      'Strategic technology roadmap aligned with business goals',
      'Guaranteed Service Level Agreements (SLAs) for uptime',
      'Access to a deep pool of specialized technical talent',
      'Compliance with industry standards and regulations'
    ],
    process: [
      { step: '01', title: 'IT Audit', description: 'Comprehensive review of your current hardware, software, and networks.' },
      { step: '02', title: 'Strategy Setup', description: 'Defining IT goals, budget, and a 3-year technology roadmap.' },
      { step: '03', title: 'Migration & Support', description: 'Implementing new systems and providing 24/7 technical assistance.' },
      { step: '04', title: 'Network Hardening', description: 'Ensuring your internal systems are secure and high-performing.' },
      { step: '05', title: 'Quarterly Reviews', description: 'Regular strategy sessions to ensure IT continues to drive business.' }
    ],
    icon: Icons.Software,
    features: [
      'Strategic IT Consulting',
      'Network Infrastructure Support',
      'Managed IT Operations',
      'IT Audit & Risk Management',
      'Technical Staff Augmentation',
      'Service Desk Operations'
    ]
  },
  {
    id: 'security',
    title: 'Security Engineering',
    shortDesc: 'Robust cybersecurity and compliance services to protect your digital assets.',
    fullDesc: 'Protect your brand and your data with our advanced security services. We implement multi-layered defenses and perform rigorous vulnerability testing.',
    detailedOverview: 'In a world of evolving cyber threats, "good enough" security is no longer an option. HexaTrue\'s Security Engineering service provides a proactive, defense-in-depth approach to protecting your digital ecosystem. We specialize in identifying vulnerabilities before they are exploited and implementing hardened security controls that deter attackers. Our team covers the entire security lifecycle, from initial risk assessment to real-time incident response. We also ensure your organization meets global compliance standards like GDPR, SOC2, and ISO 27001, protecting you from both breaches and regulatory fines. Our approach is holistic, covering people, processes, and technology to build a truly resilient security culture.',
    keyBenefits: [
      'Identification of 100% of critical security vulnerabilities',
      'Protection against advanced persistent threats (APT)',
      'Full compliance with global data protection regulations',
      'Reduced risk of costly data breaches and brand damage',
      'Encrypted and secure communication across all platforms',
      'Peace of mind for stakeholders and customers'
    ],
    process: [
      { step: '01', title: 'Threat Modeling', description: 'Identifying potential attackers and their likely methods of entry.' },
      { step: '02', title: 'Vulnerability Scan', description: 'Automated and manual testing of all applications and infrastructure.' },
      { step: '03', title: 'Remediation Plan', description: 'Prioritized list of fixes to close security gaps immediately.' },
      { step: '04', title: 'Defense Hardening', description: 'Implementing Firewalls, MFA, IAM, and Encryption controls.' },
      { step: '05', title: 'Continuous Monitoring', description: '24/7 SOC operations to detect and respond to live threats.' }
    ],
    icon: Icons.Security,
    features: [
      'Penetration Testing',
      'Vulnerability Assessments',
      'Compliance (GDPR, SOC2, HIPAA)',
      'Identity & Access Management',
      'Threat Intelligence & Response',
      'Data Encryption Strategies'
    ]
  },
  {
    id: 'testing',
    title: 'QA & Testing Services',
    shortDesc: 'Rigorous automated and manual testing to ensure a bug-free user experience.',
    fullDesc: 'Quality is non-negotiable. Our QA experts ensure your applications are performant, reliable, and bug-free across all platforms.',
    detailedOverview: 'A single bug can ruin a user\'s perception of your brand. HexaTrue\'s QA & Testing services are designed to ensure your software is bulletproof. We employ a "Shift Left" testing philosophy, integrating quality checks early in the development lifecycle. Our team utilizes advanced automation frameworks to perform regression, performance, and load testing at scale. We simulate thousands of concurrent users and test on real devices to ensure your product performs flawlessly under pressure. Our comprehensive reports provide clear insights into your software\'s reliability and performance metrics, allowing your team to release with confidence and speed.',
    keyBenefits: [
      'Significant reduction in post-launch bug reports',
      'Improved user satisfaction and higher app store ratings',
      'Lower maintenance costs through early bug detection',
      'Guaranteed performance under peak load conditions',
      'Cross-browser and cross-device compatibility assurance',
      'Comprehensive documentation of testing results'
    ],
    process: [
      { step: '01', title: 'Test Planning', description: 'Defining test coverage, tools, and pass/fail criteria.' },
      { step: '02', title: 'Manual Exploration', description: 'Human testing to catch UX issues and logic flaws.' },
      { step: '03', title: 'Automation Setup', description: 'Writing scripts for regression and repetitive test cases.' },
      { step: '04', title: 'Load & Stress Testing', description: 'Pushing systems to their limit to ensure stability.' },
      { step: '05', title: 'Quality Sign-off', description: 'Final verification and detailed reporting before deployment.' }
    ],
    icon: Icons.Testing,
    features: [
      'Automated Regression Testing',
      'Performance & Load Testing',
      'Security Testing',
      'Mobile Device Compatibility',
      'User Acceptance Testing (UAT)',
      'Continuous Testing in CI/CD'
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing Services',
    shortDesc: 'Data-driven growth and SEO strategies to scale your online presence.',
    fullDesc: 'Reach more customers with a results-oriented digital strategy. We combine data science with creative marketing to drive conversions and growth.',
    detailedOverview: 'Visibility is the currency of the digital age. HexaTrue\'s Digital Marketing services help your business cut through the noise. We don\'t just "run ads"; we build a data-driven growth engine that aligns with your bottom line. Our expertise in SEO, PPC, and Content Marketing is backed by advanced analytics, allowing us to track every dollar spent and every conversion earned. We focus on high-intent traffic, ensuring your marketing efforts reach the people who are most likely to become your best customers. Our technology-first approach to marketing means we use AI and automation to optimize campaigns in real-time, delivering maximum efficiency and ROI for your marketing budget.',
    keyBenefits: [
      'Higher rankings for high-value organic search terms',
      'Significant improvement in lead generation and sales',
      'Lower cost-per-acquisition (CPA) through optimization',
      'Measurable ROI with transparent, real-time reporting',
      'Better brand authority and digital trust',
      'Targeted reach to your specific ideal customer profile'
    ],
    process: [
      { step: '01', title: 'Market Audit', description: 'Analyzing competitors, keywords, and current search visibility.' },
      { step: '02', title: 'Strategy Design', description: 'Defining the optimal mix of SEO, Paid Search, and Content.' },
      { step: '03', title: 'Campaign Launch', description: 'Deploying optimized ads and high-quality SEO content.' },
      { step: '04', title: 'Data Analysis', description: 'Tracking performance metrics and user behavior patterns.' },
      { step: '05', title: 'Optimization Loop', description: 'Constant tuning of creative and spend for maximum ROI.' }
    ],
    icon: Icons.Marketing,
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Management',
      'Content Marketing Strategy',
      'Social Media Advertising',
      'Conversion Rate Optimization',
      'Marketing Data Analytics'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'fintech-ecosystem',
    title: 'Global FinTech Ecosystem Migration',
    category: 'Software Development',
    client: 'TransWorld Finance',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    shortDesc: 'A massive core-banking modernization for 10M+ active users across APAC and Europe.',
    challenge: 'TransWorld Finance was operating on a 20-year-old monolithic mainframe architecture that had reached its architectural ceiling. Technical debt was causing weekly outages, and the time-to-market for simple features like "Split Bill" exceeded 12 months. They needed a zero-downtime migration to a cloud-native ecosystem while adhering to strict PSD2 and GDPR regulatory requirements.',
    solution: 'HexaTrue designed a multi-phased "Strangler Fig" migration plan. We orchestrated over 150 independent microservices using Spring Boot, deployed on a global AWS EKS (Kubernetes) cluster. To ensure data consistency during the transition, we implemented a dual-write event-driven architecture powered by Apache Kafka, ensuring that the legacy mainframe and the new microservices remained in sync in sub-millisecond real-time.',
    results: [
      '99.999% uptime during the 18-month migration period',
      '85% reduction in infrastructure operating costs',
      'Feature deployment frequency increased from quarterly to daily',
      'Total transaction capacity increased by 1,200%'
    ],
    techStack: ['Java', 'Spring Boot', 'Kubernetes', 'AWS', 'Apache Kafka', 'PostgreSQL', 'Redis'],
    sections: [
      { 
        title: 'Microservices Architecture Design & Domain-Driven Development', 
        content: 'Our team divided the monolithic system into functional domains: Identity, Ledger, Payments, and Notifications. Each domain was assigned a dedicated engineering pod, allowing for parallel development. We utilized Istio Service Mesh to handle complex traffic routing, service discovery, and fine-grained security policies between these new services. This allowed us to implement canary deployments, where new features were tested on 1% of users before a full rollout.' 
      },
      { 
        title: 'RegTech Integration & Global Compliance Standards', 
        content: 'Financial security was non-negotiable. We integrated an automated compliance layer that performs real-time AML (Anti-Money Laundering) checks on every transaction using machine learning models trained on historical fraud patterns. All sensitive data was encrypted at the field level using AWS KMS and envelope encryption, ensuring that even in the event of a total infrastructure breach, user financial records remain indecipherable. We also implemented localized tax calculation modules for 12 different European jurisdictions.' 
      },
      { 
        title: 'Extreme Performance Tuning & Database Sharding', 
        content: 'To support peak loads of 50,000+ concurrent requests per second, we implemented a sophisticated multi-layered caching strategy using Redis and Edge CDNs. Database operations were optimized through horizontal sharding and the use of read-replicas. By moving from a single centralized database to a distributed model, we eliminated the bottleneck that caused outages during high-traffic salary payment days. We also utilized Grafana and Prometheus for deep observability, allowing engineers to identify and fix performance regressions before they reached production.' 
      }
    ]
  },
  {
    id: 'edutech-platform',
    title: 'EduGlobal LMS Modernization',
    category: 'Web Development',
    client: 'EduGlobal Academies',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    shortDesc: 'A high-performance virtual classroom ecosystem for 500,000+ students globally.',
    challenge: 'EduGlobal\'s existing tools were a fragmented mix of legacy video software and manual grading spreadsheets. As they scaled to half a million students, the lack of a unified platform led to a 30% drop in course completion rates. They required a singular, high-engagement environment that integrated real-time video, automated grading, and collaborative coding for their STEM departments.',
    solution: 'We engineered a bespoke, multi-tenant SaaS platform using React and Node.js. The centerpiece was a custom WebRTC implementation for ultra-low latency virtual classrooms that supports 1,000+ simultaneous participants per session. We also integrated a proprietary AI grading engine that uses Natural Language Processing (NLP) with BERT-based models to evaluate open-ended essay questions, providing instant feedback and saving instructors thousands of hours.',
    results: [
      'Course completion rates improved by 42% in the first quarter',
      'Server costs reduced by 60% via serverless auto-scaling',
      '94% student satisfaction rating for the mobile-responsive interface',
      'Teacher workload reduced by 15 hours per week on average'
    ],
    techStack: ['React', 'Node.js', 'WebRTC', 'AWS Lambda', 'Python (NLP)', 'MongoDB Atlas'],
    sections: [
      { 
        title: 'Real-time State Synchronization & Collaborative Tools', 
        content: 'The platform features a shared "Infinite Canvas" where students and teachers can collaborate in real-time. Using Socket.io for low-latency state synchronization, we ensured that every drawing, code snippet, and comment appears instantly across all devices. We solved the "concurrent edit" problem by implementing Operational Transformation (OT) algorithms, ensuring that even on unstable networks, student contributions never overwrite each other.' 
      },
      { 
        title: 'Adaptive Learning via Behavioral Analytics', 
        content: 'We developed a recommendation engine that analyzes student performance and engagement metrics in real-time. If the system detects a student is repeatedly pausing a specific physics video, it automatically surfaces remedial "prerequisite" content. This AI-driven personalization has directly contributed to the massive increase in course completion rates, as it effectively acts as a digital 1-on-1 tutor that adapts to each student\'s unique learning pace.' 
      },
      { 
        title: 'Global Delivery & Video Quality Optimization', 
        content: 'By deploying a globally distributed mesh of TURN/STUN servers, we achieved a 99.9% connection success rate even in regions with strict government network firewalls. The custom video engine automatically scales bitrate based on the user\'s real-time network jitter and packet loss, ensuring a high-quality 1080p experience for fiber users while maintaining a stable audio-first experience for students on legacy 3G connections.' 
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-enterprise-2025',
    title: 'AI in Enterprise 2025: Beyond the Generative Hype',
    category: 'AI & Data',
    date: 'January 15, 2025',
    author: 'Dr. Elena Vance',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'As we enter 2025, enterprise AI is shifting from conversational tools to autonomous decision engines that drive core business logic.',
    content: `
      ## The Strategic Shift Toward Autonomous Agents
      In 2024, Generative AI (GenAI) was the star of the show. Businesses everywhere rushed to implement chatbots and internal knowledge bases to boost productivity. However, as we move through 2025, the narrative is shifting from AI that "suggests" to AI that "acts." We call this the era of **Autonomous Agentic Workflows**.

      Autonomous Agents are the new frontier of enterprise efficiency. These systems don't just generate text; they orchestrate complex, multi-step workflows with minimal human intervention. Imagine an AI agent that doesn't just draft a response to a supply chain delay but actively negotiates with alternative vendors, re-routes logistics, and updates the ERP system in real-time.

      ### Key Trends Defining AI in 2025:
      1. **Agentic Workflows & Multi-Agent Systems:** We are seeing the rise of "digital swarms"—groups of specialized AI agents that collaborate on a single goal. For example, a "Researcher Agent" gathers data, a "Strategist Agent" builds a plan, and a "Reviewer Agent" checks for compliance.
      2. **Small Language Models (SLMs) over LLMs:** While GPT-5 and its peers are impressive, enterprises are increasingly moving toward SLMs. These models are trained on narrow, high-quality proprietary data. They are faster, cheaper to run, and far more accurate for specialized tasks like legal analysis or medical coding.
      3. **The Rise of RAG (Retrieval-Augmented Generation):** RAG is becoming the standard for reducing hallucinations. By connecting AI to a live, authoritative database, companies ensure that the AI's output is grounded in truth rather than probability.
      4. **Edge AI Integration:** Bringing intelligence directly to the point of data collection—whether it's a sensor on a factory floor or a handheld device in a hospital. This eliminates the latency of cloud round-trips.

      ## The RAG vs. Fine-Tuning Debate: Which is Right for You?
      A common question we face at HexaTrue is whether a client should fine-tune a model or implement RAG. 
      - **RAG** is ideal when your data changes frequently. It's essentially giving the AI an "open-book" to look up the latest information. 
      - **Fine-Tuning** is better when the AI needs to learn a very specific style, vocabulary, or internal methodology that isn't easily captured in a search query.
      Most successful 2025 implementations are actually **Hybrid Models**, using RAG for knowledge and fine-tuning for specialized reasoning.

      ## Privacy-Preserving Computation & AI Ethics
      With increased autonomy comes increased responsibility. Global regulations like the EU AI Act are now in full force. Enterprises must now implement **Explainable AI (XAI)** frameworks.
      - **Data Anonymization:** AI models are now being trained on synthetic data to prevent the exposure of PII (Personally Identifiable Information).
      - **Differential Privacy:** Adding "noise" to datasets so that individual records cannot be reverse-engineered from model outputs.

      ## The Economics of AI: ROI in 2025
      The era of "AI experimentation" is over. Boards are now demanding clear ROI. We've found that the highest returns are not in replacing staff, but in **Cognitive Augmentation**—freeing up high-value employees from the "administrative tax" of their roles. In legal firms, we've seen a 40% reduction in contract review time, and in engineering, a 25% boost in code quality through AI pair-programming.

      The future of enterprise AI isn't just about being smarter; it's about being integrated, autonomous, and ethically grounded.
    `
  },
  {
    id: 'quantum-resistant-encryption',
    title: 'Preparing for Q-Day: The Rise of Quantum-Resistant Encryption',
    category: 'Security',
    date: 'March 10, 2025',
    author: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Quantum computing is approaching the "Shor threshold." Is your enterprise data ready for the post-quantum era?',
    content: `
      ## The Looming Threat of "Q-Day"
      Quantum computers are no longer a theoretical concept. With companies like IBM and Google rapidly increasing qubit counts and stability, the day when quantum computers can crack current encryption standards—RSA and ECC—is drawing closer. This hypothetical moment is known as **Q-Day**. 

      RSA and ECC rely on the mathematical difficulty of factoring large prime numbers, a task that takes classical computers thousands of years. A quantum computer running **Shor’s Algorithm** could theoretically do this in seconds.

      ### Why "Store Now, Decrypt Later" is a Real Threat
      The most pressing risk isn't just future data; it's the data you are sending *today*. Malicious actors and nation-states are currently capturing encrypted high-value communications. They are storing this "dark data" with the intention of decrypting it the moment a powerful enough quantum computer exists. For long-term assets like trade secrets, diplomatic cables, and genomic data, the threat is immediate.

      ## Post-Quantum Cryptography (PQC): The New Standard
      The National Institute of Standards and Technology (NIST) has already finalized the first set of PQC standards. These are algorithms designed to be secure against both classical and quantum computers.

      ### Key PQC Technologies:
      - **Lattice-based Cryptography:** These algorithms (like CRYSTALS-Kyber and Dilithium) rely on the hardness of finding short vectors in a high-dimensional lattice. They are currently the leading candidates for general-purpose PQC.
      - **Hash-based Signatures:** Highly secure for digital signatures but can be less efficient for general encryption.
      - **Isogeny-based Cryptography:** Uses the properties of elliptic curves in a way that is quantum-resistant.

      ## The HexaTrue Framework for Quantum Readiness
      Transitioning an enterprise to PQC is not a "flip the switch" operation. It requires a systematic approach:

      1. **The Cryptographic Inventory:** Most enterprises don't actually know where their encryption lives. We start by auditing every application, database, and network link to identify which ones rely on vulnerable RSA/ECC algorithms.
      2. **Hardware Security Modules (HSM) Modernization:** Legacy HSMs often lack the processing power to handle the larger key sizes required by PQC. Upgrading your physical security infrastructure is a critical first step.
      3. **Hybrid Key Exchange:** During the transition, we recommend a hybrid approach where data is encrypted using *both* classical and quantum-resistant algorithms. This ensures that even if a flaw is found in the new PQC algorithms, the data remains as secure as it is today.
      4. **Agility as a Priority:** "Cryptographic Agility" means building systems that can swap out algorithms without requiring a full code rewrite. This is essential as the PQC landscape continues to evolve.

      ## Regulatory Compliance and Deadlines
      Governments are already moving. In the US, the Quantum Computing Cybersecurity Preparedness Act requires federal agencies to prioritize the migration to PQC. Similar mandates are expected in the financial and healthcare sectors by 2026.

      Is your data protected for the next 50 years, or just for the next 5? The time to begin the audit is now.
    `
  },
  {
    id: 'sustainability-green-it',
    title: 'The Green Code: Driving Sustainability in Enterprise IT',
    category: 'Cloud',
    date: 'May 22, 2025',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'IT infrastructure accounts for a growing portion of global energy consumption. Here is how we build sustainable software.',
    content: `
      ## The Environmental Cost of the Digital Age
      As enterprise IT infrastructure scales to support AI and Big Data, its environmental impact has become a boardroom priority. Data centers now account for nearly 2% of global electricity consumption. Sustainable IT is no longer just a Corporate Social Responsibility (CSR) checkbox; it is an operational and financial imperative.

      ## Carbon-Aware Software Engineering
      At HexaTrue, we believe that sustainability starts with the code. "Green Coding" is the practice of building software that minimizes the energy required for its execution.

      ### Strategic Pillars of Sustainable IT:
      1. **Serverless & Micro-Architectures:** Traditional servers consume power even when idle. Serverless architectures (like AWS Lambda) follow a "Pay-per-Execution" model, which also translates to "Power-per-Execution." By eliminating idle compute time, we've seen clients reduce their infrastructure carbon footprint by up to 60%.
      2. **Carbon-Aware Scheduling:** Not all compute tasks need to happen instantly. We implement intelligent schedulers that push heavy batch-processing jobs (like ML training) to times of day when the local power grid is being supplied by a higher percentage of renewable energy (e.g., peak solar hours).
      3. **Edge Pruning & Data Retention:** We've found that up to 30% of enterprise data is "dark data"—captured but never used. By implementing aggressive data pruning and moving cold data to energy-efficient tape storage, energy consumption for cooling and spinning disks is drastically reduced.

      ## Scope 3 Emissions: The Next Frontier
      For many enterprises, the majority of their IT emissions fall under **Scope 3**—the emissions produced by their cloud providers and hardware manufacturers.
      - **Liquid Cooling vs. Air Cooling:** We are advising clients to select data center providers that utilize advanced liquid cooling, which is up to 3000 times more efficient than traditional air cooling at removing heat from high-density AI chips.
      - **The Lifecycle of Silicon:** We advocate for "Circular IT"—extending the life of hardware through modular design and ensuring that old servers are recycled responsibly to recover rare-earth metals.

      ## The Business Case: Efficiency = Profit
      Green IT isn't just about saving the planet; it's about saving money. 
      - **Cloud Optimization:** Every redundant API call or inefficient database query is literally burning money. 
      - **Brand Equity:** Modern consumers and talent are increasingly choosing companies that can prove their sustainability credentials with hard data, not just vague promises.

      Our "Sustainability Audit" doesn't just look at your carbon footprint; it looks at your technical debt. Usually, they are the same thing.
    `
  },
  {
    id: 'devsecops-at-scale',
    title: 'DevSecOps at Scale: Making Security Inevitable',
    category: 'DevOps',
    date: 'July 05, 2025',
    author: 'Dr. Elena Vance',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Security should be a feature of your pipeline, not a hurdle. Learn how to automate compliance at scale.',
    content: `
      ## The Collapse of the Perimeter
      The traditional "walled garden" approach to enterprise security is dead. With remote work, multi-cloud environments, and third-party API integrations, the perimeter is now everywhere. Security can no longer be a final check before launch; it must be an inherent property of the development process. This is **DevSecOps**.

      ## Security as Code (SaC)
      DevSecOps is the practice of treating security policies and tests exactly like application code—version-controlled, automated, and peer-reviewed.

      ### The "Shift Left" Implementation Strategy:
      1. **Pre-Commit Hooks:** Catching secrets (like API keys) and insecure code patterns before they ever leave the developer's machine.
      2. **Automated Vulnerability Scanning (SAST/DAST):** 
         - **SAST (Static Analysis):** Analyzes source code for structural flaws.
         - **DAST (Dynamic Analysis):** Tests the running application for common web vulnerabilities like SQL injection or Cross-Site Scripting (XSS).
      3. **Software Composition Analysis (SCA):** Modern apps are 80% open-source libraries. SCA tools automatically audit your dependency tree for known vulnerabilities (CVEs) and licensing risks.
      4. **Policy as Code (OPA):** Using tools like Open Policy Agent to define infrastructure rules (e.g., "No S3 buckets can be public") that are automatically enforced at the deployment stage.

      ## Building a "Paved Road" for Developers
      The most common mistake in DevSecOps is making security a bottleneck. If security tools are slow or produce too many false positives, developers will find ways to bypass them. 
      At HexaTrue, we focus on building a **Paved Road**—a set of pre-approved templates, libraries, and deployment pipelines that are inherently secure. When a developer follows the paved road, they get "Security for Free."

      ## The Human Element: Cultivating a Security Culture
      Tools only solve 50% of the problem. The other 50% is people. 
      - **Security Champions:** Identifying developers in every squad who are passionate about security and giving them specialized training.
      - **Gamified Training:** Moving away from boring annual compliance videos to hands-on "Capture the Flag" (CTF) events.

      ## Compliance at the Speed of Deployment
      For regulated industries (FinTech, HealthTech), DevSecOps provides an automated audit trail. Every scan, test, and approval is recorded in Git, making "Compliance Audits" a matter of generating a report rather than a month-long manual effort.

      Security shouldn't be a hurdle; it should be the invisible guardrail that allows your team to move faster with total confidence.
    `
  },
  {
    id: 'edge-computing-industrial',
    title: 'Edge Computing: The Future of Industrial Automation',
    category: 'Engineering',
    date: 'September 18, 2025',
    author: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'In critical industrial environments, latency is the enemy. Edge computing brings the brain to the machine.',
    content: `
      ## The Latency Crisis in Industry 4.0
      The cloud has been a game-changer for data storage, but it has one fatal flaw for industrial automation: **Latency**. In a precision manufacturing environment, a robotic arm may need to adjust its movement in sub-5-millisecond increments based on sensor feedback. A round-trip to a cloud data center—even over 5G—can take 50 to 100 milliseconds. This delay is the difference between a perfect product and a catastrophic collision.

      ## Bringing the Brain to the Machine
      **Edge Computing** solves this by moving processing power directly to the "edge" of the network—on the factory floor, inside the vehicle, or next to the sensor.

      ### Core Advantages of Industrial Edge:
      1. **Ultra-Low Latency:** Decisions are made locally. If an acoustic sensor detects the high-frequency vibration of a bearing failure, the machine can be safely shut down in real-time, preventing secondary damage.
      2. **Bandwidth Optimization:** A single factory can generate terabytes of raw sensor data daily. Sending all of this to the cloud is cost-prohibitive. Edge gateways perform "Data Summarization," only sending anomalies or high-level health metrics to the cloud for long-term storage.
      3. **Disconnected Resilience:** Edge systems can continue to operate and collect data even if the primary internet connection is severed. Once the connection is restored, data is automatically synchronized.

      ## Real-World Application: Edge Digital Twins
      At HexaTrue, we've implemented "Edge Digital Twins" for a global automotive manufacturer. 
      - **The Implementation:** Each assembly robot has a local high-fidelity virtual model running on an industrial PC. 
      - **The AI Layer:** We deployed lightweight computer vision models at the edge that analyze the quality of every weld as it happens. 
      - **The Result:** We reduced post-production manual inspection by 80% and practically eliminated "Scrap Rate" costs, as errors are corrected the moment they occur.

      ## Security Challenges at the Edge
      The edge also expands the attack surface. Unlike a centralized data center, edge devices are often physically accessible. 
      - **Hardware-Root-of-Trust:** Every edge gateway must have a TPM (Trusted Platform Module) chip to ensure only signed, verified code can run.
      - **Containerized Orchestration:** Using lightweight Kubernetes (like K3s) to manage edge deployments ensures that if one node is compromised, it can be isolated from the rest of the network.

      The future of industrial intelligence isn't just in the cloud; it's right on the factory floor.
    `
  },
  {
    id: 'future-of-remote-engineering',
    title: 'The Future of Remote Engineering Culture',
    category: 'Company',
    date: 'November 12, 2025',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'How we maintain high-velocity engineering pods in a distributed world.',
    content: `
      ## The End of the "Office First" Paradigm
      The debate over "Remote vs. In-Office" is maturing into a more sophisticated understanding of **Asynchronous Excellence**. At HexaTrue, we've found that high-velocity engineering isn't about where you sit; it's about how you document, how you communicate, and how you trust.

      ## The Pillars of Asynchronous Engineering
      In a global firm with hubs in Delhi, Sydney, Berlin, and San Francisco, we can't rely on meetings. We rely on systems.

      ### Our Engineering Principles for 2025:
      1. **Documentation as a First-Class Citizen:** If it isn't in the Wiki, it doesn't exist. Every architectural decision is recorded in an **ADR (Architectural Decision Record)**. This allows a developer in Sydney to understand exactly why a choice was made by a team in Berlin eight hours earlier.
      2. **Deep Work Blocks:** We protect 4-hour windows of "meeting-free" time for every engineer. Coding is a creative act that requires "flow." Constant Slack notifications are the enemy of flow.
      3. **Outcome-Based Performance:** We have eliminated "time at desk" as a metric. We measure "Velocity," "PR Cycle Time," and "Mean Time to Recovery." This gives engineers the freedom to manage their own schedules.

      ## The Tools of the Distributed Pod
      We leverage a high-end technical stack to bridge the physical gap:
      - **AI Pair-Programming:** Tools like GitHub Copilot act as a "junior partner" that is always available, reducing the isolation of remote coding.
      - **Virtual Whiteboards:** For system design, we use real-time collaborative tools that allow for infinite canvas brainstorming.
      - **Synchronous vs. Asynchronous Video:** We use Loom for 90% of status updates, reserving live Zoom calls for high-empathy brainstorming or complex conflict resolution.

      ## Global Collaboration: The "Follow-the-Sun" Advantage
      Being remote-native allows us to offer **24/7 Project Momentum**. A feature started in our Indian hub is picked up by the European team and finished by the US team. For mission-critical bug fixes, this model reduces "Down-Time" from days to hours.

      ## Maintaining Empathy and Connection
      The risk of remote work is "Transactional Isolation"—feeling like a cog in a machine rather than part of a team. 
      - **Coffee Roulettes:** Automated 15-minute casual chats between random team members to maintain the "water cooler" social fabric.
      - **Regional Meetups:** While we work remotely, we gather our regional pods once a quarter for intense, high-impact social and technical bonding.

      The future of engineering is distributed, asynchronous, and deeply human.
    `
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain: The New Trust Layer for Supply Chains',
    category: 'Engineering',
    date: 'January 25, 2026',
    author: 'Dr. Elena Vance',
    image: 'https://images.unsplash.com/photo-1512756783939-ad756f3f0a3d?q=80&w=2071&auto=format&fit=crop',
    excerpt: 'Eliminating silos and fraud in global logistics with immutable ledgers.',
    content: `
      ## The Crisis of Fragmented Data
      Global supply chains are notoriously opaque. A single shipment of grain or electronics can involve dozens of intermediaries—shippers, ports, customs agents, banks, and carriers. Each has their own fragmented database, often relying on paper-based records and manual emails. This leads to massive inefficiencies, frequent disputes, and billions of dollars in lost value through fraud.

      ## Blockchain: Beyond the Cryptocurrency Hype
      In 2026, blockchain has found its true calling as the "Immutable Truth Layer" for global logistics. We aren't talking about public, volatile tokens, but about **Private Permissioned Ledgers**.

      ### Core Values for Logistics:
      1. **Immutable Traceability:** Every scan of a container, every temperature reading from an IoT sensor, and every customs approval is recorded on the blockchain. Once recorded, it cannot be altered. This creates an audit trail that regulators and insurance companies trust implicitly.
      2. **Smart Contract Automation:** We implement smart contracts that automatically trigger payments the moment a container's GPS coordinates enter a port's geofence and its Bill of Lading is cryptographically signed. This eliminates the "30-day payment lag" common in the industry.
      3. **Provenance & Sustainability:** For luxury goods and ethical raw materials (like conflict-free minerals), blockchain provides a "Digital Birth Certificate," proving to consumers exactly where their product came from and that it wasn't swapped for a counterfeit along the way.

      ## The HexaTrue Blockchain Stack
      We primarily build on **Hyperledger Besu** and **Quorum**.
      - **IPFS Integration:** Large documents (like 50-page manifestos) are stored on IPFS (InterPlanetary File System), with only their cryptographic "fingerprint" stored on the blockchain to maintain high network speed.
      - **IoT Oracles:** We've built specialized "Oracles" that securely bridge data from physical IoT sensors (temperature, humidity, shock) directly into smart contracts without human intervention.

      ## Case Study: The "Cold Chain" for Pharmaceuticals
      For a major medical client, we implemented a blockchain-verified cold chain. 
      - **The Problem:** 20% of vaccines were arriving at their destination compromised due to temperature fluctuations during transport, but no one knew *where* the failure happened.
      - **The Solution:** Every transport unit was fitted with an IoT sensor reporting to a blockchain ledger.
      - **The Result:** Insurance disputes were reduced by 90% because the data clearly showed exactly which carrier was responsible for the temperature breach.

      Blockchain isn't just a technology; it's a new way for competitors to collaborate through a shared foundation of trust.
    `
  },
  {
    id: 'web-4-semantic-iot',
    title: 'Web 4.0: Where the Semantic Web Meets the Internet of Things',
    category: 'Web Development',
    date: 'March 05, 2026',
    author: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Web 4.0 is about machines understanding machines. Learn how this shift will redefine business connectivity.',
    content: `
      ## The Evolution of the Web
      - **Web 1.0 (The Read-Only Web):** Static pages, directories, and basic information delivery.
      - **Web 2.0 (The Social Web):** User-generated content, interaction, and the rise of the platform giants.
      - **Web 3.0 (The Decentralized Web):** Blockchain, ownership, and the removal of the "Middleman."
      - **Web 4.0 (The Symbiotic Web):** This is the web of 2026. It is a web where machines, humans, and objects are all nodes in a hyper-intelligent, self-organizing network.

      ## What is the Semantic Web?
      At the heart of Web 4.0 is the **Semantic Web**—the idea that data should be labeled so that computers can understand the *meaning* of the information, not just the text. 
      In Web 2.0, a computer sees the word "Apple" and doesn't know if it's a fruit or a tech company. In Web 4.0, the data is tagged with metadata that defines its context.

      ### Redefining Business Connectivity:
      1. **Machine-to-Machine (M2M) Negotiation:** Imagine your office's smart lighting system "talking" to the regional power grid. It doesn't just ask for power; it negotiates the lowest rate based on your building's current occupancy and predicted weather.
      2. **The "Ubiquitous Brain":** Information is no longer confined to browsers. It's integrated into every object. A shipping pallet can "tell" a forklift that its cargo is fragile and needs to be moved to a specific temperature zone, without any human intervention.
      3. **Natural Language Knowledge Extraction:** We are moving from "searching for documents" to "asking for facts." Web 4.0 systems can synthesize information across thousands of semantic sources to give you a definitive answer.

      ## The HexaTrue Role: Building the Connective Tissue
      Our engineering teams are currently building the **Interoperability APIs** required for this shift. 
      - **Knowledge Graphs:** We build complex graph databases for our clients that map the relationships between their customers, products, and supply chains.
      - **Neural Search Integration:** Moving beyond keyword matching to "Conceptual Matching."

      ## Why Your Business Needs a Semantic Strategy Now
      If your data is currently siloed in legacy SQL databases without metadata, you are invisible to the Web 4.0 ecosystem. To benefit from the automated intelligence of the next three years, you must begin the process of "Semantic Normalization"—cleaning and tagging your data so that it can participate in the symbiotic web.

      The era of the "dumb object" is over. Welcome to the decade of intelligence everywhere.
    `
  },
  {
    id: 'low-code-enterprise-agility',
    title: 'Low-Code/No-Code: Accelerating Enterprise Agility',
    category: 'Software Development',
    date: 'May 14, 2026',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Democratizing software development without sacrificing architectural integrity.',
    content: `
      ## The Developer Bottleneck
      Global demand for software is currently outpacing the supply of professional engineers by 5 to 1. For years, this meant that internal business tools and departmental "nice-to-haves" were perpetually at the bottom of the IT backlog. **Low-Code and No-Code (LCNC)** platforms are finally breaking this deadlock.

      ## Democratization vs. Governance
      In 2026, the most successful enterprises aren't just letting everyone build apps; they are creating a **Center of Excellence (CoE)**. This is a model where professional engineers (like the team at HexaTrue) build the robust, high-security "Core Services," while "Citizen Developers" (business analysts, HR, marketing) build the "Last Mile" user interfaces.

      ### The Benefits of a Hybrid LCNC Strategy:
      1. **Rapid Prototyping:** A marketing team can build and test a new loyalty campaign dashboard in a weekend using drag-and-drop tools, rather than waiting for a 3-month development cycle.
      2. **Empowered Subject Matter Experts:** Who knows an HR process better than the HR team? By giving them the tools to build their own workflows, the software is far more aligned with their actual daily needs.
      3. **Reduced Shadow IT:** When business teams feel empowered by official IT tools, they stop using unapproved and insecure third-party SaaS apps.

      ## The HexaTrue Framework: LCNC for the Enterprise
      We don't just "buy a platform." we build an ecosystem:
      - **The API Backbone:** We build high-performance, secure REST and GraphQL APIs that expose your core business data in a way that is "LCNC-friendly."
      - **Security Guardrails:** We implement automated governance. If a citizen developer builds an app that tries to export sensitive customer data, our system blocks it instantly.
      - **The "Graduate" Path:** When a low-code app becomes mission-critical, we have a clear path to "graduate" it into a professionally managed, high-performance custom application.

      ## Case Study: Regional Sales Intelligence
      A retail client had 50 regional managers who all wanted different ways to visualize their local sales. 
      - **The Old Way:** The central IT team spent 100% of their time making small tweaks to 50 different dashboards.
      - **The HexaTrue Way:** We built a centralized "Sales Data API" and trained the managers on a low-code visualization tool. 
      - **The Result:** The managers built their own unique dashboards in days, and the IT team went back to building a new high-end AI recommendation engine.

      Low-code is not the death of the developer; it is the liberation of the developer.
    `
  },
  {
    id: 'immersive-ux-design',
    title: 'The Evolution of UX: Designing Immersive Interfaces',
    category: 'Web Development',
    date: 'July 22, 2026',
    author: 'Dr. Elena Vance',
    image: 'https://images.unsplash.com/photo-1600607687960-4a2263467041?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Moving beyond the screen: Spatial UI and the future of human-computer interaction.',
    content: `
      ## The Screen-Based Era is Ending
      For forty years, our digital interaction has been confined to two dimensions—the glass of a monitor or a smartphone. But in 2026, as high-fidelity Augmented Reality (AR) glasses and Spatial Computing platforms become the new desktop, UX design is undergoing its most radical transformation since the invention of the mouse.

      ## What is Spatial UX?
      Spatial UX is the art of designing interfaces that live *with* the user in their physical environment. It isn't just about putting a screen in front of your face; it's about context, depth, and ergonomic intuition.

      ### Key Design Principles for the Immersive Era:
      1. **Z-Axis Hierarchy:** In a 2D world, we use size and color for priority. In a 3D world, we use distance. Important notifications can "float" 50cm in front of you, while background logs can stay "on the wall" 3 meters away.
      2. **Gaze and Gesture Interaction:** Moving away from clicks to "Look and Pinch." Designing for eye-tracking requires a new understanding of cognitive load; we can't have buttons that trigger just because a user happened to look at them.
      3. **Contextual Persistence:** A spatial UI should remember its location. If a maintenance engineer "leaves" a virtual schematic floating over a physical machine on Friday, it should be in the exact same spot on Monday morning.

      ## The HexaTrue Spatial Pod
      Our design and engineering teams are at the forefront of this shift.
      - **Three.js & WebXR:** We are building high-performance 3D interfaces that run directly in the browser, no installation required.
      - **Physics-Based Interaction:** We use complex physics engines so that when you "grab" a virtual object, it feels like it has weight and resistance, providing essential haptic-like feedback to the user.

      ## Application: The "Command Center" of the Future
      For a global logistics firm, we've replaced their 20-monitor command center with a single AR environment. 
      - **The UX:** Operators can walk through a "Virtual Fleet," seeing real-time weather and traffic data overlaid on a 3D map that fills the room. 
      - **The Impact:** Decision speed has increased by 30% because the "mental mapping" of complex 2D data onto the 3D world is now handled automatically by the UI.

      The future of design isn't on a screen; it's in the room with you. Is your brand ready to take up space?
    `
  },
  {
    id: 'cybersecurity-gen-ai',
    title: 'Cybersecurity in the Age of Generative AI',
    category: 'Security',
    date: 'September 02, 2026',
    author: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'AI is being used to create hyper-realistic phishing attacks. Here is how to defend your enterprise.',
    content: `
      ## The Democratization of Cyber-Crime
      In the past, high-end "Spear-Phishing" (targeting a specific executive with a perfectly crafted email) was a manual, time-consuming process for a human attacker. In 2026, Generative AI has automated this at scale. Malicious actors are now using LLMs to scan LinkedIn profiles, recent news articles, and leaked corporate emails to generate thousands of hyper-realistic, culturally nuanced phishing messages in seconds.

      ## The Rise of the Deepfake Employee
      We are now seeing the first wave of **AI Social Engineering**. Attackers are using real-time voice and video cloning to impersonate CFOs and CEOs during virtual meetings, authorizing "urgent" wire transfers. If a colleague's voice and face look correct on a screen, how do you know it's really them?

      ### Defensive AI Strategies:
      1. **Behavioral Biometrics & "Human Rhythms":** We implement security layers that don't just check passwords, but check *patterns*. How does this user type? How do they navigate a menu? AI can detect when the "rhythm" of an interaction doesn't match the historical profile of the user, even if they have the correct MFA code.
      2. **AI-Powered Synthetic Content Detection:** Every incoming email, audio clip, and video call is automatically audited by a defensive AI trained to detect the "tell-tale" artifacts of synthetic generation.
      3. **Zero-Trust for Everything:** We are moving toward a world where "Visual Verification" is no longer enough. Every high-value transaction must be verified through out-of-band, cryptographically signed hardware keys.

      ## Fighting Fire with Fire: Automated Remediation
      The speed of an AI-driven attack means that human security analysts are often too slow to react. HexaTrue is deploying **Autonomous SOC (Security Operations Center)** units.
      - **The Function:** When an anomaly is detected, the AI doesn't just send an alert. It automatically isolates the affected server, revokes the user's credentials across all cloud platforms, and begins a forensic scan—all in milliseconds.

      ## The New Training Paradigm
      The old annual "Phishing Test" is obsolete. We provide our clients with **Continuous Red-Teaming**. Our AI-powered security bots constantly "attack" your employees with simulated Deepfakes and AI-phishing, providing immediate, personalized coaching to those who are most vulnerable.

      In 2026, your best security analyst isn't a human; it's a defensive AI that never sleeps.
    `
  },
  {
    id: 'cloud-native-2026',
    title: 'Cloud-Native Transformation: A 2026 Roadmap',
    category: 'Cloud',
    date: 'October 15, 2026',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Moving beyond "Lift and Shift" to true cloud-native maturity.',
    content: `
      ## The Maturity Model for the Modern Cloud
      Five years ago, most enterprises were proud of their "Cloud Migration." In reality, most had simply performed a "Lift and Shift"—moving their clunky, monolithic virtual machines from an on-premise data center to AWS or Azure. 
      By 2026, this approach has become a liability. Monoliths in the cloud are expensive, slow to update, and difficult to scale.

      ## What Does "Cloud-Native" Actually Mean?
      Cloud-native isn't about *where* your app lives; it's about *how* it's built. 

      ### The Pillars of Cloud-Native Maturity:
      1. **Microservices & Service Mesh:** Breaking the app into small, independent services that talk to each other through a "Service Mesh" (like Istio). This allows you to update one feature (like "Search") without touching the rest of the app.
      2. **Immutable Infrastructure & GitOps:** We no longer "patch" servers. We define the entire environment in code (Terraform/Kubernetes). If we need to change something, we update the code and redeploy the entire environment. This ensures 100% consistency between Dev, Staging, and Production.
      3. **Elasticity & Serverless:** Your infrastructure should grow and shrink automatically based on real-time user demand. You shouldn't be paying for a 64GB RAM server at 3 AM when no one is using it.

      ## The 2026 Roadmap: FinOps as a Discipline
      As cloud bills have soared, a new discipline has emerged: **FinOps**. This is the practice of real-time cloud cost management.
      - **Automated Pruning:** Our systems automatically identify and delete "Zombie Resources"—load balancers or storage volumes that are no longer connected to anything but are still billing you.
      - **Spot Instance Orchestration:** Using "spare capacity" from providers at up to 90% discount for non-critical batch tasks.

      ## The Sovereign Cloud Challenge
      With the rise of data sovereignty laws (like GDPR and the Data Act), global enterprises must now manage a **Multi-Region Sovereign Cloud**. We help our clients build architectures that can stay perfectly in sync while ensuring that a German citizen's data never leaves a physical server located in Germany.

      Moving to the cloud was the first step. Becoming native to the cloud is the final transformation.
    `
  },
  {
    id: 'predictive-maintenance-5-0',
    title: 'Predictive Maintenance in Industry 5.0',
    category: 'Engineering',
    date: 'November 20, 2026',
    author: 'Dr. Elena Vance',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'Combining human intuition with AI precision to eliminate industrial downtime.',
    content: `
      ## The Human-Centric Factory of 2026
      If Industry 4.0 was defined by total automation and the "Lights-Out Factory," Industry 5.0 is the return of the human. We have realized that while AI is great at spotting patterns, humans are essential for high-stakes problem-solving and ethical oversight. **Predictive Maintenance 5.0** is the perfect example of this synergy.

      ## Beyond the "Red Light"
      In older systems, predictive maintenance just meant a dashboard that turned red when a sensor hit a threshold. In 2026, it is a collaborative, immersive experience.

      ### The Tech Stack of Maintenance 5.0:
      1. **Acoustic Fingerprinting:** We use high-fidelity microphones on the factory floor. Our AI is trained to recognize the "Micro-Squeak" of a ball bearing that is beginning to fail—a sound totally inaudible to humans and invisible to traditional temperature sensors.
      2. **Dynamic Digital Twins:** A real-time virtual model of the machine that doesn't just show data, but allows for "What-If" simulations. An engineer can ask, "If we run this motor at 110% for the next 48 hours to meet this deadline, what is the probability of failure?"
      3. **AR-Guided Repair:** When a part does need replacing, the technician wears AR glasses that overlay the exact internal structure of the machine onto the physical hardware, highlighting the specific bolt that needs to be turned.

      ## The Business Impact: Zero Unplanned Downtime
      For a global aerospace manufacturer, HexaTrue implemented a 5.0 framework.
      - **The Implementation:** We deployed a mesh of 5,000 sensors integrated with a custom AI model.
      - **The Result:** We achieved **Zero Unplanned Downtime** over a 12-month period. Maintenance is no longer performed on a schedule (e.g., "every 3 months") but on a **Condition-Based** model. This extended the total lifespan of their multimillion-dollar machinery by an average of 22%.

      ## The ESG Angle
      Sustainable manufacturing is now a legal requirement. Predictive maintenance reduces waste by ensuring machines are always running at their most energy-efficient "Sweet Spot" and by preventing catastrophic failures that often result in toxic leaks or massive material waste.

      Industry 5.0 isn't about machines replacing humans; it's about giving humans the "X-Ray Vision" they need to manage the machines perfectly.
    `
  },
  {
    id: 'fintech-financial-inclusion',
    title: 'The Role of FinTech in Global Financial Inclusion',
    category: 'Software Development',
    date: 'December 05, 2026',
    author: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    excerpt: 'Banking the unbanked: How technology is transforming emerging economies.',
    content: `
      ## The Global Banking Gap
      In 2026, nearly a billion people globally still lack access to a traditional bank account. Without banking, they cannot save safely, they cannot get credit to start a business, and they pay massive fees for simple money transfers. This "Inclusion Gap" is the single greatest hurdle to global economic growth.

      ## FinTech as the Great Equalizer
      Technology is bypassing the need for physical infrastructure (like branches and vaults). In many emerging markets, people have skipped the "Desktop Era" and the "Credit Card Era" entirely, moving straight from cash to mobile ecosystems.

      ### Key Technologies Driving Inclusion:
      1. **Mobile-First Wallets:** Using a smartphone as a complete bank. For many, their phone number *is* their bank account number.
      2. **Alternative Credit Scoring:** Traditional banks require a credit history. We are building AI models for our FinTech clients that use "Alternative Data"—airtime top-up patterns, utility bill payments, and even educational milestones—to build a reliable credit profile for someone who has never had a loan.
      3. **DeFi & Micropayments:** Using blockchain to enable sub-cent transactions. This allows for new business models like "Pay-As-You-Go" solar power for rural villages.

      ## The Challenges: Security & Trust
      Financial inclusion also brings new risks. People with limited digital literacy are highly vulnerable to fraud. 
      - **Biometric Identity:** We've built "Face and Fingerprint" authentication for mobile apps in regions where literacy is a hurdle for complex passwords.
      - **Offline Mode:** Building apps that can process small transactions via USSD (simple text codes) for users who only have access to 2G networks.

      ## HexaTrue's Social Impact Engineering
      We are proud to partner with global NGOs and local micro-lenders. 
      - **Our Role:** We build the high-security backend that handles millions of small transactions with the same level of integrity as a Tier-1 global bank. 
      - **The Goal:** To reduce the cost of a cross-border remittance from the current 6% average to less than 0.5%.

      Banking is a human right. We are building the tools to make it a global reality.
    `
  },
  {
    id: 'ethical-ai-regulations',
    title: 'Ethical AI: Navigating Global Regulations and Frameworks',
    category: 'AI & Data',
    date: 'December 28, 2026',
    author: 'Sarah Chen',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    excerpt: 'As AI matures, so does the regulatory landscape. Learn how to stay compliant while innovating.',
    content: `
      ## The Era of Managed AI
      The "Wild West" of AI development ended on December 31, 2025. In 2026, every enterprise AI project is subject to a complex, multi-jurisdictional web of laws—led by the EU AI Act, but closely followed by similar mandates from the US, China, and India. Compliance is no longer optional; it is a condition for market entry.

      ## The "High-Risk" AI Categorization
      Most regulations now categorize AI based on risk. If your AI handles hiring, credit scoring, medical diagnostics, or critical infrastructure, it is "High-Risk" and subject to the most stringent audits.

      ### Building an Ethical AI Framework:
      1. **Bias Mitigation & Data Auditing:** You cannot have a fair AI if your training data is biased. We implement "Dataset Nutrition Labels"—a framework for auditing training data for historical prejudice, ensuring that AI outcomes are equitable across all demographics.
      2. **The "Right to Explanation":** If an AI denies a loan or a job application, the law now requires that you can explain *why*. We build "Post-Hoc Interpretability" layers that translate the complex weights of a neural network into a human-readable reason.
      3. **Human-in-the-Loop (HITL):** For critical decisions, the AI provides a recommendation, but a human must sign off. We design UIs that clearly show the AI's "Confidence Score" to help the human make an informed choice.

      ## Data Sovereignty & AI Training
      Can you use customer data from Singapore to train a model used in the US? In 2026, usually the answer is "No" without massive legal overhead.
      - **Federated Learning:** We build systems where the model travels to the data, rather than the data traveling to the model. This allows for global training without ever moving sensitive data across borders.
      - **Synthetic Data Generation:** We are increasingly using AI to create "Fake but Realistic" datasets for training, which eliminates the risk of PII exposure during the development phase.

      ## The HexaTrue AI Ethics Audit
      Our audit doesn't just check for legal compliance. We look at **Technical Trustworthiness**. 
      - **Robustness Testing:** Can your AI be "fooled" by adversarial inputs?
      - **Stability Analysis:** Does the AI's answer change radically if the input is changed slightly?

      Ethics isn't a barrier to innovation; it's the foundation of a product that users will actually trust.
    `
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Microsoft', url: 'https://cdn.simpleicons.org/microsoft/5E5E5E' },
  { name: 'Google', url: 'https://cdn.simpleicons.org/google/5E5E5E' },
  { name: 'Amazon', url: 'https://cdn.simpleicons.org/amazonaws/5E5E5E' },
  { name: 'IBM', url: 'https://cdn.simpleicons.org/ibm/5E5E5E' },
  { name: 'Cisco', url: 'https://cdn.simpleicons.org/cisco/5E5E5E' },
  { name: 'Oracle', url: 'https://cdn.simpleicons.org/oracle/5E5E5E' },
  { name: 'Salesforce', url: 'https://cdn.simpleicons.org/salesforce/5E5E5E' },
  { name: 'Adobe', url: 'https://cdn.simpleicons.org/adobe/5E5E5E' },
  { name: 'Intel', url: 'https://cdn.simpleicons.org/intel/5E5E5E' },
  { name: 'HP', url: 'https://cdn.simpleicons.org/hp/5E5E5E' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Sarah Jenkins',
    role: 'CTO',
    company: 'FinTech Solutions',
    content: "HexaTrue transformed our legacy systems into a modern, cloud-native architecture. Their expertise in DevOps and security is unmatched. They delivered exactly what they promised, on time and under budget.",
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    author: 'Rajesh Iyer',
    role: 'Lead Architect',
    company: 'Reliance Digital',
    content: "HexaTrue's deep expertise in SAP integration and cloud migration helped us streamline our pan-India operations significantly. Their commitment to engineering excellence is visible in every sprint.",
    avatar: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    author: 'Michael Chen',
    role: 'Product Director',
    company: 'HealthLine SF',
    content: "The team at HexaTrue delivered our mobile application ahead of schedule and with impeccable quality. Their agile approach allowed us to pivot quickly based on user feedback.",
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    author: 'Priya Sharma',
    role: 'CISO',
    company: 'SecureBank Mumbai',
    content: "As a major financial institution in India, security is our top priority. HexaTrue delivered a world-class security audit and hardened our infrastructure against advanced threats. Highly professional partner.",
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    author: 'Elena Rodriguez',
    role: 'Head of Engineering',
    company: 'EduGrow Madrid',
    content: "Working with HexaTrue felt like having an in-house team. Their engineers took ownership of the product as if it were their own. Our EdTech platform now supports 1M+ users seamlessly.",
    avatar: 'https://i.pravatar.cc/150?u=elena'
  },
  {
    author: 'Ananya Das',
    role: 'Product Head',
    company: 'Tata Consultancy Services',
    content: "Their collaborative approach and deep technical bench were crucial in delivering our flagship digital banking module. The attention to UI/UX detail exceeded our corporate standards.",
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  }
];
