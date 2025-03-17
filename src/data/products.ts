// src/data/products.ts
import { IconType } from 'react-icons';

export interface Product {
  name: string;
  description: string;
  features: string[];
  slug?: string;
  image?: string;
  details?: {
    overview?: string;
    specifications?: Record<string, string>[];
    useCases?: string[];
    benefits?: string[];
    compatibleWith?: string[];
  };
  badge?: {
    text: string;
    color: string;
  };
}

export interface ProductCategory {
  name: string;
  iconName: string;
  description: string;
  color: string;
  slug?: string;
  image?: string;
  products: Product[];
  tagline?: string;
}

export const productCategories: ProductCategory[] = [
  {
    name: "Sentra Route",
    iconName: "radio",
    description: "Advanced Tactical Solutions",
    color: "from-blue-500 to-blue-700",
    slug: "sentra-route",
    image: "/images/sentra-route-category.jpg",
    tagline: "Strategic Communication Excellence",
    products: [
      {
        name: "Sentra Route X1",
        description: "Advanced RF control system for selective mobile communication management, preventing unauthorized cell phone usage in secure environments.",
        slug: "sentra-route-x1",
        image: "/images/sentra-route-x1.jpg",
        badge: {
          text: "Flagship",
          color: "bg-blue-600"
        },
        features: [
          "Supports 2G, 3G, 4G, 4.5G, 5G NSA",
          "16 simultaneous downlink channels",
          "Independent amplifiers per band",
          "RF power per channel: 30W (2G/3G/4G)",
          "Total RF amplification power up to 240W"
        ],
        details: {
          overview: "The Sentra Route X1 provides advanced selective routing capabilities designed for seamless integration with cellular networks. It supports multi-band technologies and enables selective rerouting of mobile communications without service disruption, optimized for complex operational scenarios.",
          specifications: [
            { "Supported Technologies": "2G, 3G, 4G, 4.5G, 5G NSA" },
            { "Downlink Bands": "700MHz, 850MHz, 1900MHz, 2100MHz, 2600MHz" },
            { "Total Channels": "16 simultaneous channels" },
            { "RF Power per Channel": "30W for 2G/3G/4G" },
            { "Total RF Power": "Up to 240W" },
            { "Weight": "35kg +/- 2kg" },
            { "Dimensions": "62.9 x 49.7 x 35.3 cm" },
            { "Power Supply": "12VDC vehicular, 110/220VAC" }
          ],
          useCases: [
            "Secure communications rerouting",
            "Tactical field deployments",
            "Critical infrastructure protection",
            "Sensitive operational environments"
          ],
          benefits: [
            "Non-disruptive communication management",
            "High-power RF amplification for broad coverage",
            "Rapid deployment in tactical operations",
            "Optimized for field and stationary scenarios"
          ],
          compatibleWith: [
            "Sentra Analytics Platform",
            "Third-party tactical systems",
            "Standard API integrations"
          ]
        }
      },
      {
        name: "Sentra IMSI Catcher",
        description: "Mobile signal interception and RF control technology for secure environments, preventing unauthorized cellular activity.Real-time monitoring",
        slug: "sentra-route-mobile",
        image: "/images/sentra-imsi-catcher.jpg",
        badge: {
          text: "Covert",
          color: "bg-blue-400"
        },
        features: [
          "Capture IMSI and IMEI across 2G, 3G, 4G, 4.5G, 5G NSA",
          "8 simultaneous capture channels",
          "Automatic location triangulation",
          "Portable DF (Direction Finding) module",
          "Real-time remote monitoring and management"
        ],
        details: {
          overview: "The Sentra IMSI Catcher is engineered to capture and analyze IMSI and IMEI data from mobile devices. It provides extensive coverage of mobile signals with advanced localization capabilities, ideal for tactical operations requiring discrete device monitoring.",
          specifications: [
            { "Technologies Supported": "2G, 3G, 4G, 4.5G, 5G NSA" },
            { "Bands Supported": "850MHz, 1900MHz, 700MHz, 2100MHz, 2600MHz" },
            { "Simultaneous Channels": "8" },
            { "RF Power per Channel": "30W (2G/3G), 20W (4G)" },
            { "Capture Capabilities": "IMSI, IMEI, TMSI, RSSI, location" },
            { "Weight": "45kg +/- 2kg" },
            { "Dimensions": "62.9 x 49.7 x 35.3 cm" },
            { "Power Supply": "12VDC to 28VDC, 110/220VAC" }
          ],
          useCases: [
            "Covert surveillance and tracking",
            "Field intelligence gathering",
            "High-value asset protection",
            "Border control operations"
          ],
          benefits: [
            "Real-time capture and localization of mobile devices",
            "Discrete monitoring without network disruption",
            "Easy-to-deploy portable design",
            "Enhanced situational awareness"
          ],
          compatibleWith: [
            "Sentra Route X1",
            "Sentra Analytics Platform",
            "Standard tactical communication systems"
          ]
        }
      },
      {
        name: "Sentra Route Tactical",
        description: "Compact, ruggedized solution optimized for rapid deployment in dynamic operational environments, delivering precise location capabilities and immediate actionable intelligence.",
        slug: "sentra-route-tactical",
        image: "/images/sentra-route-tactical.jpg",
        badge: {
          text: "Field-Ready",
          color: "bg-blue-500"
        },
        features: [
          "Ultra-precise geolocation capabilities",
          "Rapid deployment under 3 minutes",
          "Extended operational autonomy",
          "All-weather, all-terrain functionality",
          "Secure, encrypted data transmission"
        ],
        details: {
          overview: "Sentra Route Tactical is engineered for mobility and reliability in the most demanding field conditions. Its ruggedized construction, rapid deployment capability, and advanced location technologies make it the preferred solution for time-sensitive operations where accuracy and reliability are paramount.",
          specifications: [
            { "Deployment Time": "Under 3 minutes from transport to operational" },
            { "Location Accuracy": "Within 1.5 meters in optimal conditions" },
            { "Battery Life": "14+ hours continuous operation" },
            { "Environmental Rating": "IP68, MIL-STD-810H compliant" },
            { "Weight": "7.4kg with batteries" },
            { "Operation Temperature": "-30°C to +60°C" },
            { "Connectivity": "Multi-band encrypted communications" },
            { "User Interface": "Simplified field-optimized controls" }
          ],
          useCases: [
            "Rapid response tactical deployments",
            "Mobile security operations",
            "Time-critical field assessments",
            "Remote site monitoring",
            "Dynamic security perimeters"
          ],
          benefits: [
            "Minimized setup time in critical situations",
            "Enhanced operational capability in challenging environments",
            "Reduced equipment footprint for tactical teams",
            "Seamless integration with existing security frameworks"
          ],
          compatibleWith: [
            "Sentra Route X1 (as extended node)",
            "Sentra GeoLock",
            "Tactical command systems",
            "Encrypted field communications networks"
          ]
        }
      }
      
    ]
  },
  {
    name: "Sentra Shield",
    iconName: "shield",
    description: "Protection and Comprehensive Management",
    color: "from-purple-600 to-purple-800",
    slug: "sentra-shield",
    image: "/images/sentra-shield-category.jpg",
    tagline: "Proactive Defense Solutions",
    products: [
      {
        name: "Sentra Shield Blocker",
        description: "Advanced selective control system that ensures communication security in sensitive environments through intelligent monitoring and targeted intervention.",
        slug: "sentra-shield-blocker",
        image: "/images/sentra-shield-blocker.jpg",
        badge: {
          text: "Secure Zone",
          color: "bg-purple-600"
        },
        features: [
          "Precision-targeted communication control",
          "Centralized management dashboard",
          "Real-time threat monitoring and response",
          "Customizable security policies and protocols",
          "Regulatory compliance management"
        ],
        details: {
          overview: "Sentra Shield Blocker provides sophisticated communication control capabilities, allowing legitimate activity while preventing unauthorized access. The system employs advanced filtering algorithms to create secure environments without disrupting essential communications, making it ideal for sensitive facilities and protected discussions.",
          specifications: [
            { "Coverage Area": "Configurable from 10 to 1500 sq meters" },
            { "Selectivity": "Individual device/frequency/technology targeting" },
            { "Management Interface": "Secure web dashboard with role-based access" },
            { "Power Consumption": "90W typical, 150W peak" },
            { "Regulatory Compliance": "Available for authorized agencies and use cases" },
            { "Deployment Options": "Permanent installation or rapid deployment kit" },
            { "Audit Trail": "Comprehensive logging and reporting" },
            { "Response Time": "< 50ms from detection to mitigation" }
          ],
          useCases: [
            "Classified meeting environments",
            "Sensitive research facilities",
            "Data centers and server rooms",
            "Executive boardrooms",
            "Secure government facilities"
          ],
          benefits: [
            "Prevention of unauthorized data exfiltration",
            "Protection against remote electronic eavesdropping",
            "Customizable security zones within facilities",
            "Compliance with regulatory security requirements"
          ],
          compatibleWith: [
            "Existing security infrastructure",
            "Sentra Analytics for threat intelligence",
            "Access control systems",
            "Building management systems"
          ]
        }
      },
      {
        name: "Sentra Shield Guardian",
        description: "Comprehensive security platform that integrates digital and physical protection through AI-driven threat assessment and automated response protocols.",
        slug: "sentra-shield-guardian",
        image: "/images/sentra-shield-guardian.jpg",
        badge: {
          text: "Integrated",
          color: "bg-purple-500"
        },
        features: [
          "Unified physical and digital security",
          "AI-powered threat detection and response",
          "Scalable architecture for any environment",
          "Predictive analysis and early warning",
          "Autonomous countermeasure deployment"
        ],
        details: {
          overview: "The Guardian system represents a paradigm shift in security, seamlessly combining physical and digital protection into a unified defense platform. Using advanced AI algorithms, it continuously monitors for potential threats and automatically implements appropriate countermeasures, often neutralizing risks before they materialize.",
          specifications: [
            { "Detection Range": "Physical: 300m, Digital: Enterprise-wide" },
            { "Response Time": "< 200ms from detection to countermeasure" },
            { "Integration Capability": "All major security systems, CCTV, access control, network security" },
            { "Analytics Engine": "Deep learning with behavioral analysis" },
            { "Scalability": "From single room to multi-site deployment" },
            { "Threat Database": "Continuously updated via secure channel" },
            { "Redundancy": "Triple-redundant critical systems" },
            { "Operational Modes": "Standard, Enhanced, Lockdown" }
          ],
          useCases: [
            "Critical national infrastructure",
            "Corporate headquarters and campuses",
            "High-security government installations",
            "Financial institutions",
            "Industrial control systems protection"
          ],
          benefits: [
            "Dramatic reduction in security incidents through predictive intervention",
            "Lower operational costs through automation and integration",
            "Enhanced situational awareness for security personnel",
            "Adaptable defense posture based on current threat level"
          ],
          compatibleWith: [
            "All Sentra product ecosystem",
            "Industry-standard security protocols",
            "Legacy security systems",
            "Third-party threat intelligence feeds"
          ]
        }
      },
      {
        name: "Sentra GeoLock",
        description: "Next-generation perimeter security solution that combines advanced geofencing, behavioral analytics, and predictive algorithms to identify threats before traditional breach occurs.",
        slug: "sentra-geolock",
        image: "/images/sentra-geolock.jpg",
        badge: {
          text: "Perimeter",
          color: "bg-purple-400"
        },
        features: [
          "Multi-layer virtual boundary system",
          "Behavior-based anomaly detection",
          "Automated alert escalation",
          "Integration with physical security systems",
          "Environmental adaptation algorithms"
        ],
        details: {
          overview: "Sentra GeoLock establishes intelligent virtual boundaries with sophisticated monitoring capabilities. The system goes beyond simple perimeter alerting by employing behavioral analytics to distinguish between routine activities and potential threats, dramatically reducing false alerts while increasing early detection of genuine security concerns.",
          specifications: [
            { "Geofence Precision": "±1.0 meter with differential correction" },
            { "Maximum Perimeter": "Unlimited with distributed node architecture" },
            { "Alert Channels": "SMS, Email, API, PSIM integration, Mobile App" },
            { "Analytics Engine": "Machine learning with pattern recognition" },
            { "False Positive Rate": "< 0.05% with tuned system" },
            { "Deployment Options": "Fixed, mobile, or hybrid" },
            { "Weather Compensation": "Automatic adjustment for environmental factors" },
            { "Power Requirements": "Solar-capable with battery backup" }
          ],
          useCases: [
            "Critical infrastructure perimeters",
            "Transportation hubs and ports",
            "Correctional facilities and secure compounds",
            "Border and boundary monitoring",
            "Temporary secure zones for events"
          ],
          benefits: [
            "Early warning of potential intrusions before physical breach",
            "Significant reduction in false alarms through intelligent filtering",
            "Optimized resource allocation through threat prioritization",
            "Comprehensive situational awareness for security teams"
          ],
          compatibleWith: [
            "Sentra Route Tactical for mobile deployments",
            "Sentra Shield Guardian for unified security",
            "Physical access control systems",
            "Video surveillance platforms"
          ]
        }
      }
    ]
  },
  {
    name: "Sentra Insight",
    iconName: "cpu",
    description: "Intelligence and Predictive Analysis",
    color: "from-teal-500 to-teal-700",
    slug: "sentra-insight",
    image: "/images/sentra-insight-category.jpg",
    tagline: "Actionable Intelligence Solutions",
    products: [
      {
        name: "Sentra Analytics",
        description: "Enterprise intelligence platform that transforms complex data streams into actionable insights through advanced processing algorithms and intuitive visualization.",
        slug: "sentra-analytics",
        image: "/images/sentra-analytics.jpg",
        badge: {
          text: "Strategic",
          color: "bg-teal-600"
        },
        features: [
          "Multi-source data fusion and correlation",
          "Advanced predictive modeling",
          "Interactive 3D visualization interface",
          "Automated pattern recognition",
          "Custom reporting and intelligence briefings"
        ],
        details: {
          overview: "Sentra Analytics transforms vast quantities of operational data into actionable intelligence using sophisticated processing algorithms. The platform identifies subtle patterns and anomalies that would otherwise remain hidden, presenting findings through an intuitive visualization system that enables rapid decision-making and strategic planning.",
          specifications: [
            { "Data Processing": "Up to 15TB/day with distributed architecture" },
            { "Analysis Models": "700+ pre-trained models with custom training options" },
            { "Visualization Types": "60+ interactive dashboards with custom builder" },
            { "Integration": "Universal connector framework for all major data sources" },
            { "Deployment": "Cloud, on-premises, air-gapped, or hybrid options" },
            { "User Roles": "Configurable with granular access controls" },
            { "Export Formats": "All standard intelligence report formats" },
            { "Compliance": "Built-in regulatory and security frameworks" }
          ],
          useCases: [
            "Threat intelligence processing and dissemination",
            "Strategic risk assessment and mitigation planning",
            "Operational efficiency optimization",
            "Complex system monitoring and anomaly detection",
            "Pattern-of-life analysis and behavioral modeling"
          ],
          benefits: [
            "Transformation of raw data into actionable intelligence",
            "Significant time savings in analysis workflows",
            "Early identification of emerging patterns and threats",
            "Enhanced decision support for leadership teams"
          ],
          compatibleWith: [
            "All Sentra products for enhanced intelligence",
            "Standard intelligence platforms and databases",
            "Third-party visualization tools",
            "Custom API integrations for specialized systems"
          ]
        }
      },
      {
        name: "Sentra Track & Trace",
        description: "Sophisticated asset monitoring platform that combines real-time tracking with predictive analytics to deliver unprecedented visibility and control across operations.",
        slug: "sentra-track-trace",
        image: "/images/sentra-track-trace.jpg",
        badge: {
          text: "Visibility",
          color: "bg-teal-500"
        },
        features: [
          "Multi-modal tracking technologies",
          "Behavioral prediction algorithms",
          "Automated workflow integration",
          "Geo-temporal analysis capabilities",
          "Custom alerting and notification system"
        ],
        details: {
          overview: "Sentra Track & Trace provides unparalleled visibility into the movement and status of assets, personnel, and information flows. The system combines precise real-time tracking with advanced predictive modeling to anticipate future states, enabling proactive management and enhanced security for all monitored elements.",
          specifications: [
            { "Tracking Accuracy": "GPS: ±1.5m, Indoor: ±0.3m with beacon network" },
            { "Prediction Horizon": "Up to 45 minutes with 90% accuracy under standard conditions" },
            { "Supported Technologies": "Active/passive RFID, BLE, UWB, GPS, cellular, custom tags" },
            { "Mapping Engine": "Real-time 3D with historical playback and future state modeling" },
            { "API Support": "REST, GraphQL, MQTT for integrations" },
            { "Scalability": "From 10 to 100,000+ tracked entities" },
            { "Geofencing": "Unlimited dynamic zones with behavioral rules" },
            { "Data Retention": "Configurable with compliance frameworks" }
          ],
          useCases: [
            "Critical asset security and monitoring",
            "Personnel safety in high-risk environments",
            "Supply chain integrity verification",
            "Secure logistics management",
            "Emergency response resource coordination"
          ],
          benefits: [
            "Complete operational visibility across distributed assets",
            "Proactive risk management through predictive alerts",
            "Optimized resource allocation based on movement patterns",
            "Enhanced security through anomalous behavior detection"
          ],
          compatibleWith: [
            "Sentra Shield ecosystem",
            "Sentra GeoLock for enhanced perimeter awareness",
            "Enterprise resource planning systems",
            "Emergency management platforms"
          ]
        }
      },
      {
        name: "Sentra AI Intel",
        description: "Next-generation intelligence platform powered by advanced artificial intelligence that autonomously processes massive data volumes to extract critical insights and predictive intelligence.",
        slug: "sentra-ai-intel",
        image: "/images/sentra-ai-intel.jpg",
        badge: {
          text: "Advanced AI",
          color: "bg-teal-400"
        },
        features: [
          "Autonomous multi-source intelligence processing",
          "Cognitive computing with deep learning",
          "Continuous self-improvement algorithms",
          "Natural language processing and generation",
          "Explainable AI with decision transparency"
        ],
        details: {
          overview: "Sentra AI Intel represents our most sophisticated intelligence platform, leveraging state-of-the-art artificial intelligence to autonomously process and analyze vast amounts of structured and unstructured data. The system continuously evolves its capabilities through machine learning, delivering increasingly valuable insights while maintaining full transparency in its decision processes.",
          specifications: [
            { "AI Architecture": "Hybrid neural networks with knowledge graph integration" },
            { "Data Processing": "Structured, unstructured, imagery, signals, multi-language" },
            { "Analysis Speed": "Real-time with dynamic prioritization" },
            { "Learning Capability": "Continuous improvement with supervised validation" },
            { "Explainability Framework": "Full transparency with decision path visualization" },
            { "Processing Power": "Distributed computing with cloud/edge optimization" },
            { "Model Library": "2000+ pre-trained models with domain specificity" },
            { "Security": "Fully air-gappable with secure processing options" }
          ],
          useCases: [
            "Complex intelligence analysis and synthesis",
            "Automated threat detection and classification",
            "Pattern recognition in massive datasets",
            "Predictive operational planning",
            "Strategic decision support for leadership"
          ],
          benefits: [
            "Dramatic reduction in analysis time for complex intelligence",
            "Discovery of non-obvious connections and patterns",
            "Enhanced decision quality through comprehensive analysis",
            "Consistent processing methodology with transparent reasoning"
          ],
          compatibleWith: [
            "Entire Sentra ecosystem",
            "Standard intelligence platforms",
            "Custom data sources and specialized sensors",
            "Human analyst workflows and methodologies"
          ]
        }
      }
    ]
  }
];