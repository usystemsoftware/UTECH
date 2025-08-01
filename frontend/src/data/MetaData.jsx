const isLocal =
  typeof window !== "undefined" && window.location.hostname === "localhost";

const baseUrl = isLocal ? "http://localhost:5173" : "https://usystem.software";

export const metaData = {
  industries: [
    {
      title: "Aviation Industry Solutions | U Tech",
      description:
        "Explore our innovative solutions for the aviation industry.",
      keywords: "aviation, industry solutions, U Tech",
      thumbnail: "banner/aviation-banner.jpg",
      canonical: `${baseUrl}/industries/aviation`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Aviation", href: `${baseUrl}/industries/aviation` },
      ],
    },
    {
      title: "Banking Industry Solutions | U Tech",
      description: "Discover our tailored solutions for the banking sector.",
      keywords: "banking, industry solutions, U Tech",
      thumbnail: "banner/new-banking-banner.jpg",
      canonical: `${baseUrl}/industries/banking`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Banking", href: `${baseUrl}/industries/banking` },
      ],
    },
    {
      title: "Construction Industry Solutions | U Tech",
      description: "Innovative solutions for the construction industry.",
      keywords: "construction, industry solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/industries/construction`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Construction", href: `${baseUrl}/industries/construction` },
      ],
    },
    {
      title: "Corrections Industry Solutions | U Tech",
      description: "Solutions tailored for the corrections industry.",
      keywords: "corrections, industry solutions, U Tech",
      thumbnail: "banner/correction-banner.jpg",
      canonical: `${baseUrl}/industries/corrections`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Corrections", href: `${baseUrl}/industries/corrections` },
      ],
    },
    {
      title: "E-Learning & Education Solutions | U Tech",
      description: "Transformative solutions for e-learning and education.",
      keywords: "e-learning, education, industry solutions, U Tech",
      thumbnail: "banner/e-learning-banner.jpg",
      canonical: `${baseUrl}/industries/e-learning-education`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "E-Learning & Education",
          href: `${baseUrl}/industries/e-learning-education`,
        },
      ],
    },
    {
      title: "Energy & Utilities Industry Solutions | U Tech",
      description: "Innovative solutions for energy and utilities.",
      keywords: "energy, utilities, industry solutions, U Tech",
      thumbnail: "banner/utilities-banner.jpg",
      canonical: `${baseUrl}/industries/energy-utilities`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Energy & Utilities",
          href: `${baseUrl}/industries/energy-utilities`,
        },
      ],
    },
    {
      title: "Environmental Management Solutions | U Tech",
      description: "Solutions for effective environmental management.",
      keywords: "environmental management, industry solutions, U Tech",
      thumbnail: "banner/env-mang-banner.jpg",
      canonical: `${baseUrl}/industries/environmental-management`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Environmental Management",
          href: `${baseUrl}/industries/environmental-management`,
        },
      ],
    },
    {
      title: "Finance Industry Solutions | U Tech",
      description: "Comprehensive solutions for the finance industry.",
      keywords: "finance, industry solutions, U Tech",
      thumbnail: "banner/finance-banner.jpg",
      canonical: `${baseUrl}/industries/finance`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Finance", href: `${baseUrl}/industries/finance` },
      ],
    },
    {
      title: "Food & Beverage Industry Solutions | U Tech",
      description: "Innovative solutions for the food and beverage sector.",
      keywords: "food, beverage, industry solutions, U Tech",
      thumbnail: "banner/food-and-beverage-banner.jpg",
      canonical: `${baseUrl}/industries/food-beverage`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Food & Beverage",
          href: `${baseUrl}/industries/food-beverage`,
        },
      ],
    },
    {
      title: "Gaming Industry Solutions | U Tech",
      description: "Cutting-edge solutions for the gaming industry.",
      keywords: "gaming, industry solutions, U Tech",
      thumbnail: "banner/blockchain-social-media-platform-banner.jpg",
      canonical: `${baseUrl}/industries/gaming`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Gaming", href: `${baseUrl}/industries/gaming` },
      ],
    },
    {
      title: "Healthcare Industry Solutions | U Tech",
      description: "Innovative solutions for the healthcare sector.",
      keywords: "healthcare, industry solutions, U Tech",
      thumbnail: "banner/healthcare-banner.jpg",
      canonical: `${baseUrl}/industries/healthcare`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Healthcare", href: `${baseUrl}/industries/healthcare` },
      ],
    },
    {
      title: "Hospitality & Travel Industry Solutions | U Tech",
      description: "Solutions for the hospitality and travel industry.",
      keywords: "hospitality, travel, industry solutions, U Tech",
      thumbnail: "banner/hospitality-banner2.jpg",
      canonical: `${baseUrl}/industries/hospitality-travel`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Hospitality & Travel",
          href: `${baseUrl}/industries/hospitality-travel`,
        },
      ],
    },
    {
      title: "Human Capital Management Solutions | U Tech",
      description: "Solutions for effective human capital management.",
      keywords: "HCM, human capital management, industry solutions, U Tech",
      thumbnail: "banner/hcm-banner.jpg",
      canonical: `${baseUrl}/industries/hcm`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Human Capital Management",
          href: `${baseUrl}/industries/hcm`,
        },
      ],
    },
    {
      title: "Legal Industry Solutions | U Tech",
      description: "Comprehensive solutions for the legal sector.",
      keywords: "legal, industry solutions, U Tech",
      thumbnail: "banner/legel-banner.jpg",
      canonical: `${baseUrl}/industries/legal`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Legal", href: `${baseUrl}/industries/legal` },
      ],
    },
    {
      title: "Media & Entertainment Industry Solutions | U Tech",
      description: "Innovative solutions for media and entertainment.",
      keywords: "media, entertainment, industry solutions, U Tech",
      thumbnail: "banner/media-enterntainment-banner.jpg",
      canonical: `${baseUrl}/industries/media-entertainment`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Media & Entertainment",
          href: `${baseUrl}/industries/media-entertainment`,
        },
      ],
    },
    {
      title: "Meetings & Events Industry Solutions | U Tech",
      description: "Solutions for managing meetings and events effectively.",
      keywords: "meetings, events, industry solutions, U Tech",
      thumbnail: "banner/meetings-events-banner.jpg",
      canonical: `${baseUrl}/industries/meetings-events`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Meetings & Events",
          href: `${baseUrl}/industries/meetings-events`,
        },
      ],
    },
    {
      title: "Payments Industry Solutions | U Tech",
      description: "Innovative solutions for payment processing.",
      keywords: "payments, industry solutions, U Tech",
      thumbnail: "banner/payment-banner.jpg",
      canonical: `${baseUrl}/industries/payments`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Payments", href: `${baseUrl}/industries/payments` },
      ],
    },
    {
      title: "Political Campaigns Industry Solutions | U Tech",
      description: "Solutions for effective political campaign management.",
      keywords: "political campaigns, industry solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/industries/political-campaigns`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Political Campaigns",
          href: `${baseUrl}/industries/political-campaigns`,
        },
      ],
    },
    {
      title: "Real Estate Industry Solutions | U Tech",
      description: "Innovative solutions for the real estate sector.",
      keywords: "real estate, industry solutions, U Tech",
      thumbnail: "banner/real-banner.jpg",
      canonical: `${baseUrl}/industries/real-estate`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Real Estate", href: `${baseUrl}/industries/real-estate` },
      ],
    },
    {
      title: "Retail Industry Solutions | U Tech",
      description: "Comprehensive solutions for the retail industry.",
      keywords: "retail, industry solutions, U Tech",
      thumbnail: "banner/retail-banner.jpg",
      canonical: `${baseUrl}/industries/retail`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Retail", href: `${baseUrl}/industries/retail` },
      ],
    },
    {
      title: "Sports Industry Solutions | U Tech",
      description: "Innovative solutions for the sports industry.",
      keywords: "sports, industry solutions, U Tech",
      thumbnail: "banner/sport-banner.jpg",
      canonical: `${baseUrl}/industries/sports`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Sports", href: `${baseUrl}/industries/sports` },
      ],
    },
    {
      title: "Supply Chain Industry Solutions | U Tech",
      description: "Solutions for effective supply chain management.",
      keywords: "supply chain, industry solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/industries/supply-chain`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        { label: "Supply Chain", href: `${baseUrl}/industries/supply-chain` },
      ],
    },
    {
      title: "Telecommunications Industry Solutions | U Tech",
      description: "Innovative solutions for the telecommunications sector.",
      keywords: "telecommunications, industry solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/industries/telecommunications`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Industries", href: `${baseUrl}/industries` },
        {
          label: "Telecommunications",
          href: `${baseUrl}/industries/telecommunications`,
        },
      ],
    },
  ],
  services: [
    {
      title: "API Development Services | U Tech",
      description:
        "Get top-notch API development services to enhance your applications.",
      keywords: "API development, services, U Tech",
      thumbnail: "banner/api-development-banner.jpg",
      canonical: `${baseUrl}/services/api-development`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "API Development",
          href: `${baseUrl}/services/api-development`,
        },
      ],
    },
    {
      title: "Application Development Services | U Tech",
      description:
        "Custom application development services to meet your business needs.",
      keywords: "application development, services, U Tech",
      thumbnail: "banner/application-development-banner.jpg",
      canonical: `${baseUrl}/services/application-development`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Application Development",
          href: `${baseUrl}/services/application-development`,
        },
      ],
    },
    {
      title: "Application Maintenance Services | U Tech",
      description:
        "Reliable application maintenance services to keep your software running smoothly.",
      keywords: "application maintenance, services, U Tech",
      thumbnail: "banner/app-maintanance-banner.jpg",
      canonical: `${baseUrl}/services/application-maintenance`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Application Maintenance",
          href: `${baseUrl}/services/application-maintenance`,
        },
      ],
    },
    {
      title: "Backup & Disaster Recovery Services | U Tech",
      description:
        "Comprehensive backup and disaster recovery services to protect your data.",
      keywords: "backup, disaster recovery, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/backup-disaster-recovery`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Backup & Disaster Recovery",
          href: `${baseUrl}/services/backup-disaster-recovery`,
        },
      ],
    },
    {
      title: "Business Process Outsourcing Services | U Tech",
      description:
        "Streamline your operations with our business process outsourcing services.",
      keywords: "BPO, business process outsourcing, services, U Tech",
      thumbnail: "banner/business-process-outsourcing-banner.jpg",
      canonical: `${baseUrl}/services/bpo`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Business Process Outsourcing",
          href: `${baseUrl}/services/bpo`,
        },
      ],
    },
    {
      title: "Custom Software Services | U Tech",
      description:
        "Tailored software solutions to meet your unique business requirements.",
      keywords: "custom software, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/custom-software`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Custom Software Services",
          href: `${baseUrl}/services/custom-software`,
        },
      ],
    },
    {
      title: "Data Integration Services | U Tech",
      description: "Seamless data integration services to unify your systems.",
      keywords: "data integration, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/data-integration`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Data Integration",
          href: `${baseUrl}/services/data-integration`,
        },
      ],
    },
    {
      title: "Data Management Services | U Tech",
      description:
        "Effective data management services to optimize your data usage.",
      keywords: "data management, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/data-management`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Data Management",
          href: `${baseUrl}/services/data-management`,
        },
      ],
    },
    {
      title: "DevOps Services | U Tech",
      description:
        "Enhance your development and operations with our DevOps services.",
      keywords: "DevOps, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/devops`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        { label: "DevOps", href: `${baseUrl}/services/devops` },
      ],
    },
    {
      title: "Digital Transformation Services | U Tech",
      description:
        "Transform your business with our digital transformation services.",
      keywords: "digital transformation, services, U Tech",
      thumbnail: "banner/digital-transformation-banner.jpg",
      canonical: `${baseUrl}/services/digital-transformation`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Digital Transformation",
          href: `${baseUrl}/services/digital-transformation`,
        },
      ],
    },
    {
      title: "FinOps Services | U Tech",
      description:
        "Optimize your financial operations with our FinOps services.",
      keywords: "FinOps, financial operations, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/finops`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        { label: "FinOps Services", href: `${baseUrl}/services/finops` },
      ],
    },
    {
      title: "Implementation & Deployment Services | U Tech",
      description:
        "Expert implementation and deployment services for your software.",
      keywords: "implementation, deployment, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/implementation-deployment`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Implementation & Deployment",
          href: `${baseUrl}/services/implementation-deployment`,
        },
      ],
    },
    {
      title: "Infrastructure Support Services | U Tech",
      description:
        "Reliable infrastructure support services to keep your systems running.",
      keywords: "infrastructure support, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/infrastructure-support`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Infrastructure Support",
          href: `${baseUrl}/services/infrastructure-support`,
        },
      ],
    },
    {
      title: "Migrations & Upgrades Services | U Tech",
      description:
        "Seamless migrations and upgrades for your software systems.",
      keywords: "migrations, upgrades, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/migrations-upgrades`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Migrations & Upgrades",
          href: `${baseUrl}/services/migrations-upgrades`,
        },
      ],
    },
    {
      title: "NOC Services | U Tech",
      description: "24/7 Network Operations Center services for your business.",
      keywords: "NOC, network operations center, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/noc`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        { label: "NOC Services", href: `${baseUrl}/services/noc` },
      ],
    },
    {
      title: "Partner Product Support Services | U Tech",
      description: "Comprehensive support for partner products.",
      keywords: "partner product support, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/partner-support`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Partner Product Support",
          href: `${baseUrl}/services/partner-support`,
        },
      ],
    },
    {
      title: "Product Lifecycle Management (PLM) Services | U Tech",
      description:
        "Manage your product lifecycle effectively with our PLM services.",
      keywords: "PLM, product lifecycle management, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/plm`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Product Lifecycle Management",
          href: `${baseUrl}/services/plm`,
        },
      ],
    },
    {
      title: "QA Testing Services | U Tech",
      description: "Ensure quality with our comprehensive QA testing services.",
      keywords: "QA testing, quality assurance, services, U Tech",
      thumbnail: "banner/quality-assurance-banner.jpg",
      canonical: `${baseUrl}/services/qa-testing`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        { label: "QA Testing", href: `${baseUrl}/services/qa-testing` },
      ],
    },
    {
      title: "SLA Support Services | U Tech",
      description: "Reliable SLA support services to meet your business needs.",
      keywords: "SLA support, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/sla-support`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        { label: "SLA Support", href: `${baseUrl}/services/sla-support` },
      ],
    },
    {
      title: "Software Security Services | U Tech",
      description:
        "Protect your software with our comprehensive security services.",
      keywords: "software security, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/software-security`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Software Security",
          href: `${baseUrl}/services/software-security`,
        },
      ],
    },
    {
      title: "Startup & MVP Services | U Tech",
      description: "Launch your startup with our MVP development services.",
      keywords: "startup, MVP, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/startup-mvp`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Startup & MVP Services",
          href: `${baseUrl}/services/startup-mvp`,
        },
      ],
    },
    {
      title: "Systems Integration Services | U Tech",
      description: "Seamless systems integration services for your business.",
      keywords: "systems integration, services, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/services/systems-integration`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Services", href: `${baseUrl}/services` },
        {
          label: "Systems Integration",
          href: `${baseUrl}/services/systems-integration`,
        },
      ],
    },
  ],

  solutions: [
    {
      title: "Animation & Graphic Design Solutions | U Tech",
      description:
        "Creative animation and graphic design solutions for your projects.",
      keywords: "animation, graphic design, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/animation-graphic-design`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Animation & Graphic Design",
          href: `${baseUrl}/solutions/animation-graphic-design`,
        },
      ],
    },
    {
      title: "Artificial Intelligence Solutions | U Tech",
      description:
        "Leverage AI solutions to transform your business operations.",
      keywords: "artificial intelligence, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/ai`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Artificial Intelligence", href: `${baseUrl}/solutions/ai` },
      ],
    },
    {
      title: "Asset Tracking Solutions | U Tech",
      description:
        "Innovative asset tracking solutions to manage your resources effectively.",
      keywords: "asset tracking, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/asset-tracking`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Asset Tracking",
          href: `${baseUrl}/solutions/asset-tracking`,
        },
      ],
    },
    {
      title: "AR / VR Solutions | U Tech",
      description:
        "Cutting-edge AR and VR solutions for immersive experiences.",
      keywords: "AR, VR, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/ar-vr`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "AR / VR", href: `${baseUrl}/solutions/ar-vr` },
      ],
    },
    {
      title: "AWS Solutions | U Tech",
      description:
        "Comprehensive AWS solutions to enhance your cloud infrastructure.",
      keywords: "AWS, cloud solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/aws`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "AWS", href: `${baseUrl}/solutions/aws` },
      ],
    },
    {
      title: "Autodesk Solutions | U Tech",
      description: "Expert Autodesk solutions for design and engineering.",
      keywords: "Autodesk, design solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/autodesk`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Autodesk", href: `${baseUrl}/solutions/autodesk` },
      ],
    },
    {
      title: "Biometrics Solutions | U Tech",
      description: "Advanced biometrics solutions for secure identification.",
      keywords: "biometrics, security solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/biometrics`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Biometrics", href: `${baseUrl}/solutions/biometrics` },
      ],
    },
    {
      title: "Blockchain Solutions | U Tech",
      description: "Innovative blockchain solutions for secure transactions.",
      keywords: "blockchain, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/blockchain`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Blockchain", href: `${baseUrl}/solutions/blockchain` },
      ],
    },
    {
      title: "Business Intelligence Solutions | U Tech",
      description:
        "Transform your data into actionable insights with our BI solutions.",
      keywords: "business intelligence, BI, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/bi-analytics`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Business Intelligence",
          href: `${baseUrl}/solutions/bi-analytics`,
        },
      ],
    },
    {
      title: "CMS Solutions | U Tech",
      description: "Robust CMS solutions for effective content management.",
      keywords: "CMS, content management, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/cms`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "CMS", href: `${baseUrl}/solutions/cms` },
      ],
    },
    {
      title: "CRM Solutions | U Tech",
      description: "Enhance customer relationships with our CRM solutions.",
      keywords: "CRM, customer relationship management, solutions, U Tech",
      thumbnail: "banner/crm-development-services-banner.jpg",
      canonical: `${baseUrl}/solutions/crm`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "CRM", href: `${baseUrl}/solutions/crm` },
      ],
    },
    {
      title: "Cloud Solutions | U Tech",
      description: "Scalable cloud solutions to meet your business needs.",
      keywords: "cloud, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/cloud`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Cloud", href: `${baseUrl}/solutions/cloud` },
      ],
    },
    {
      title: "Database Solutions | U Tech",
      description: "Efficient database solutions for data management.",
      keywords: "database, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/database`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Database", href: `${baseUrl}/solutions/database` },
      ],
    },
    {
      title: "Digital Asset Management Solutions | U Tech",
      description:
        "Manage your digital assets effectively with our DAM solutions.",
      keywords: "digital asset management, DAM, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/digital-asset-management`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Digital Asset Management",
          href: `${baseUrl}/solutions/digital-asset-management`,
        },
      ],
    },
    {
      title: "Digital Marketing Solutions | U Tech",
      description:
        "Boost your online presence with our digital marketing solutions.",
      keywords: "digital marketing, solutions, U Tech",
      thumbnail: "banner/digital-marketing-banner.jpg",
      canonical: `${baseUrl}/solutions/digital-marketing`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Digital Marketing",
          href: `${baseUrl}/solutions/digital-marketing`,
        },
      ],
    },
    {
      title: "Document Management Solutions | U Tech",
      description: "Streamline your document management with our solutions.",
      keywords: "document management, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/document-management`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Document Management",
          href: `${baseUrl}/solutions/document-management`,
        },
      ],
    },
    {
      title: "Embedded Software Solutions | U Tech",
      description: "Custom embedded software solutions for your devices.",
      keywords: "embedded software, solutions, U Tech",
      thumbnail: "banner/embedded-software-banner.jpg",
      canonical: `${baseUrl}/solutions/embedded-software`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Embedded Software",
          href: `${baseUrl}/solutions/embedded-software`,
        },
      ],
    },
    {
      title: "ERP Solutions | U Tech",
      description:
        "Comprehensive ERP solutions to streamline your business processes.",
      keywords: "ERP, enterprise resource planning, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/erp`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "ERP", href: `${baseUrl}/solutions/erp` },
      ],
    },
    {
      title: "Facilities Management Solutions | U Tech",
      description: "Optimize your facilities management with our solutions.",
      keywords: "facilities management, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/facilities-management`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Facilities Management",
          href: `${baseUrl}/solutions/facilities-management`,
        },
      ],
    },
    {
      title: "Fraud Protection Solutions | U Tech",
      description: "Protect your business with our fraud protection solutions.",
      keywords: "fraud protection, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/fraud-protection`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Fraud Protection",
          href: `${baseUrl}/solutions/fraud-protection`,
        },
      ],
    },
    {
      title: "GIS Solutions | U Tech",
      description:
        "Geographic Information System solutions for better decision-making.",
      keywords: "GIS, geographic information system, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/gis`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "GIS", href: `${baseUrl}/solutions/gis` },
      ],
    },
    {
      title: "Google Cloud Solutions | U Tech",
      description: "Leverage Google Cloud solutions for your business needs.",
      keywords: "Google Cloud, cloud solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/google-cloud`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Google Cloud", href: `${baseUrl}/solutions/google-cloud` },
      ],
    },
    {
      title: "IBM Solutions | U Tech",
      description: "Expert IBM solutions for enterprise applications.",
      keywords: "IBM, enterprise solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/ibm`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "IBM", href: `${baseUrl}/solutions/ibm` },
      ],
    },
    {
      title: "IOT & M2M Solutions | U Tech",
      description: "Innovative IoT and M2M solutions for connected devices.",
      keywords: "IoT, M2M, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/iot`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "IOT & M2M", href: `${baseUrl}/solutions/iot` },
      ],
    },
    {
      title: "Kiosk Solutions | U Tech",
      description: "Custom kiosk solutions for various applications.",
      keywords: "kiosk, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/kiosk`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Kiosk", href: `${baseUrl}/solutions/kiosk` },
      ],
    },
    {
      title: "Layout / UI / UX Solutions | U Tech",
      description: "Enhance user experience with our UI/UX design solutions.",
      keywords: "UI, UX, design solutions, U Tech",
      thumbnail: "banner/ui-ux-banner.jpg",
      canonical: `${baseUrl}/solutions/ui-ux`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Layout / UI / UX", href: `${baseUrl}/solutions/ui-ux` },
      ],
    },
    {
      title: "Microsoft Solutions | U Tech",
      description: "Comprehensive Microsoft solutions for your business.",
      keywords: "Microsoft, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/microsoft`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Microsoft", href: `${baseUrl}/solutions/microsoft` },
      ],
    },
    {
      title: "NetSuite Solutions | U Tech",
      description: "Optimize your business processes with NetSuite solutions.",
      keywords: "NetSuite, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/netsuite`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "NetSuite", href: `${baseUrl}/solutions/netsuite` },
      ],
    },
    {
      title: "Oracle Solutions | U Tech",
      description: "Expert Oracle solutions for enterprise applications.",
      keywords: "Oracle, enterprise solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/oracle`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Oracle", href: `${baseUrl}/solutions/oracle` },
      ],
    },
    {
      title: "Salesforce Solutions | U Tech",
      description:
        "Enhance customer relationship management with Salesforce solutions.",
      keywords: "Salesforce, CRM solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/salesforce`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "Salesforce", href: `${baseUrl}/solutions/salesforce` },
      ],
    },
    {
      title: "SAP Solutions | U Tech",
      description:
        "Comprehensive SAP solutions for enterprise resource planning.",
      keywords: "SAP, ERP solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/sap`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "SAP", href: `${baseUrl}/solutions/sap` },
      ],
    },
    {
      title: "UiPath Solutions | U Tech",
      description: "Automate your business processes with UiPath solutions.",
      keywords: "UiPath, automation solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/uipath`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "UiPath", href: `${baseUrl}/solutions/uipath` },
      ],
    },
    {
      title: "UKG Solutions | U Tech",
      description: "Optimize your workforce management with UKG solutions.",
      keywords: "UKG, workforce management, solutions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/solutions/ukg`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        { label: "UKG", href: `${baseUrl}/solutions/ukg` },
      ],
    },
    {
      title: "Web Development Solutions | U Tech",
      description:
        "Custom web development solutions to enhance your online presence.",
      keywords: "web development, solutions, U Tech",
      thumbnail: "banner/web-development-banner.jpg",
      canonical: `${baseUrl}/solutions/web-development`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Solutions", href: `${baseUrl}/solutions` },
        {
          label: "Web Development",
          href: `${baseUrl}/solutions/web-development`,
        },
      ],
    },
  ],
  company: [
    {
      title: "About Us | U Tech",
      description: "Learn more about U Tech, our mission, and our values.",
      keywords: "about us, U Tech, company information",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/about-us`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "About Us", href: `${baseUrl}/company/about-us` },
      ],
    },
    {
      title: "Awards | U Tech",
      description: "Discover the awards and recognitions received by U Tech.",
      keywords: "awards, recognitions, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/awards`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "Awards", href: `${baseUrl}/company/awards` },
      ],
    },
    {
      title: "Careers at U Tech | Join Our Team",
      description: "Explore career opportunities and join the U Tech team.",
      keywords: "careers, jobs, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/careers`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "Careers", href: `${baseUrl}/company/careers` },
      ],
    },
    {
      title: "Events | U Tech",
      description: "Stay updated on upcoming events and activities at U Tech.",
      keywords: "events, U Tech, company events",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/events`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "Events", href: `${baseUrl}/company/events` },
      ],
    },
    {
      title: "Company History | U Tech",
      description: "Learn about the history and milestones of U Tech.",
      keywords: "history, U Tech, company milestones",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/history`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "History", href: `${baseUrl}/company/history` },
      ],
    },
    {
      title: "Locations | U Tech",
      description: "Find out about U Tech's locations and offices worldwide.",
      keywords: "locations, U Tech, company offices",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/locations`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "Locations", href: `${baseUrl}/company/locations` },
      ],
    },
    {
      title: "Newsroom | U Tech",
      description: "Access the latest news and press releases from U Tech.",
      keywords: "newsroom, press releases, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/newsroom`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "Newsroom", href: `${baseUrl}/company/newsroom` },
      ],
    },
    {
      title: "Partners & Affiliations | U Tech",
      description: "Learn about U Tech's partners and affiliations.",
      keywords: "partners, affiliations, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/partners-affiliations`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        {
          label: "Partners & Affiliations",
          href: `${baseUrl}/company/partners-affiliations`,
        },
      ],
    },
    {
      title: "People and Culture at U Tech | Join Us",
      description: "Discover the people and culture that make U Tech unique.",
      keywords: "people, culture, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/people-and-culture`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        {
          label: "People And Culture",
          href: `${baseUrl}/company/people-and-culture`,
        },
      ],
    },
    {
      title: "Reviews of U Tech | Customer Feedback",
      description: "Read reviews and feedback from our customers.",
      keywords: "reviews, customer feedback, U Tech",
      thumbnail: "banner/aec-banner.jpg",
      canonical: `${baseUrl}/company/reviews`,
      breadcrumbs: [
        { label: "Home", href: baseUrl },
        { label: "Company", href: `${baseUrl}/company` },
        { label: "Reviews", href: `${baseUrl}/company/reviews` },
      ],
    },
  ],
};
