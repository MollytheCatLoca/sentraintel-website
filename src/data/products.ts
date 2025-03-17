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
}

export const productCategories: ProductCategory[] = [
  {
    name: "Sentra Route",
    iconName: "radio",
    description: "Advanced Tactical Solutions",
    color: "from-blue-500 to-blue-700",
    slug: "sentra-route",
    image: "/images/sentra-route-category.jpg",
    products: [
      {
        name: "Sentra Route X1",
        description: "Comprehensive solution for identification and advanced analysis of mobile communications across multiple technologies (2G, 3G, 4G, 5G NSA).",
        slug: "sentra-route-x1",
        image: "/images/sentra-route-x1.jpg",
        features: [
          "Multi-band and simultaneous analysis",
          "Secure remote access",
          "AI for target recognition and classification",
          "Portable system for tactical use in critical operations"
        ],
        details: {
          overview: "The Sentra Route X1 represents our flagship tactical communication analysis platform, designed for advanced intelligence operations in the field. With multi-technology support and AI-powered analysis capabilities, it provides unparalleled insights in critical situations.",
          specifications: [
            { "Frequency Range": "700MHz - 3.5GHz" },
            { "Supported Technologies": "2G, 3G, 4G, 5G NSA" },
            { "Analysis Channels": "6 simultaneous" },
            { "Power": "Battery operated, 8+ hours runtime" },
            { "Weight": "Under 15kg complete system" }
          ],
          useCases: [
            "Field intelligence operations",
            "Critical infrastructure protection",
            "Counter-terrorism operations",
            "Border security"
          ]
        }
      },
      {
        name: "Sentra Route Tactical",
        description: "Robust portable equipment designed for rapid deployment in tactical land and air operations, offering precise location and quick operational response.",
        slug: "sentra-route-tactical",
        image: "/images/sentra-route-tactical.jpg",
        features: [
          "High precision geolocation",
          "Easy transport",
          "Extended autonomy",
          "Operable in hostile conditions"
        ],
        details: {
          overview: "Sentra Route Tactical is designed for mobility and reliability in the most demanding field conditions. Its rugged construction and advanced location capabilities make it the tool of choice for rapid response scenarios.",
          specifications: [
            { "Deployment Time": "Under 5 minutes" },
            { "Location Accuracy": "Within 2 meters" },
            { "Battery Life": "12+ hours continuous operation" },
            { "Environmental Rating": "IP67, MIL-STD-810G" },
            { "Weight": "8.5kg with batteries" }
          ],
          useCases: [
            "Rapid response operations",
            "Mobile surveillance",
            "Disaster response coordination",
            "Field reconnaissance"
          ]
        }
      },
      {
        name: "Sentra Route Mobile",
        description: "Ultra-compact unit specialized for discreet, covert operations and strategic surveillance in urban and rural environments, ensuring maximum discretion.",
        slug: "sentra-route-mobile",
        image: "/images/sentra-route-mobile.jpg",
        features: [
          "Discreet form factor",
          "Compact design",
          "High autonomy",
          "Secure transmissions"
        ],
        details: {
          overview: "The Sentra Route Mobile offers unparalleled discretion without compromising on capability. Its compact design masks powerful monitoring and analysis features suitable for the most sensitive operations.",
          specifications: [
            { "Size": "280mm x 180mm x 40mm" },
            { "Weight": "1.2kg" },
            { "Operational Range": "Up to 500m" },
            { "Battery Life": "24+ hours" },
            { "Transmission Security": "AES-256 encryption" }
          ],
          useCases: [
            "Covert surveillance operations",
            "Urban monitoring",
            "VIP protection",
            "Sensitive facility security"
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
    products: [
      {
        name: "Sentra Shield Blocker",
        description: "Advanced system for selective control and blocking of unauthorized mobile communications in critical areas.",
        slug: "sentra-shield-blocker",
        image: "/images/sentra-shield-blocker.jpg",
        features: [
          "Selective blocking",
          "Centralized management",
          "Automatic monitoring",
          "Customizable security policies"
        ],
        details: {
          overview: "Sentra Shield Blocker provides targeted communication control capabilities, allowing authorized communications while preventing unauthorized access. Perfect for secure facilities and sensitive environments.",
          specifications: [
            { "Coverage Area": "Up to 1000 sq meters" },
            { "Selectivity": "Individual device/technology targeting" },
            { "Management": "Remote web interface" },
            { "Power Consumption": "120W typical" },
            { "Regulatory Compliance": "Available for authorized use only" }
          ],
          useCases: [
            "Secure meeting rooms",
            "Classified facilities protection",
            "Exam environments",
            "Sensitive corporate spaces"
          ]
        }
      },
      {
        name: "Sentra Shield Guardian",
        description: "Proactive digital and mobile defense solution adaptable to different environments, providing advanced security against digital and physical threats.",
        slug: "sentra-shield-guardian",
        image: "/images/sentra-shield-guardian.jpg",
        features: [
          "Automated comprehensive defense",
          "Operational scalability",
          "Real-time threat detection",
          "Adaptive security protocols"
        ],
        details: {
          overview: "The Guardian system combines physical and digital security into a unified defense platform, automatically identifying and responding to potential threats before they manifest.",
          specifications: [
            { "Detection Range": "Physical: 200m, Digital: Site-wide" },
            { "Response Time": "< 500ms to threats" },
            { "Integration Capability": "Standard security systems, CCTV, access control" },
            { "Analytics": "Machine learning-based anomaly detection" },
            { "Scalability": "From single office to campus-wide deployment" }
          ],
          useCases: [
            "Critical infrastructure protection",
            "Corporate headquarters security",
            "Government facilities",
            "Data centers"
          ]
        }
      },
      {
        name: "Sentra GeoLock",
        description: "Intelligent geofences for perimeter protection and predictive access control.",
        slug: "sentra-geolock",
        image: "/images/sentra-geolock.jpg",
        features: [
          "Proactive monitoring",
          "Automatic alerts",
          "Integration with surveillance systems",
          "Advanced behavioral analytics"
        ],
        details: {
          overview: "Sentra GeoLock creates intelligent virtual boundaries with advanced monitoring capabilities. The system not only detects boundary crossings but predicts potential intrusions based on behavioral patterns.",
          specifications: [
            { "Geofence Precision": "±1.5 meters" },
            { "Maximum Perimeter": "Unlimited with distributed nodes" },
            { "Alert Channels": "SMS, Email, API, PSIM integration" },
            { "Analytics": "Pattern recognition, anomaly detection" },
            { "False Positive Rate": "< 0.1% with tuned system" }
          ],
          useCases: [
            "Airport perimeter security",
            "Ports and maritime facilities",
            "Correctional facilities",
            "Industrial complexes"
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
    products: [
      {
        name: "Sentra Analytics",
        description: "Strategic platform for deep data analysis for anticipation and effective management of operational risks.",
        slug: "sentra-analytics",
        image: "/images/sentra-analytics.jpg",
        features: [
          "Predictive analysis",
          "Real-time visualizations",
          "Advanced data processing",
          "Pattern recognition algorithms"
        ],
        details: {
          overview: "Sentra Analytics transforms vast quantities of operational data into actionable intelligence. The platform identifies patterns and anomalies that human analysts might miss, presenting findings through intuitive visualizations.",
          specifications: [
            { "Data Processing": "Up to 10TB/day" },
            { "Analysis Models": "550+ pre-trained, customizable" },
            { "Visualization Types": "40+ interactive dashboards" },
            { "Integration": "Standard APIs for major data sources" },
            { "Deployment": "Cloud, on-premises, or hybrid" }
          ],
          useCases: [
            "Threat intelligence processing",
            "Operational risk assessment",
            "Performance optimization",
            "Anomaly detection in complex systems"
          ]
        }
      },
      {
        name: "Sentra Track & Trace",
        description: "Advanced technology for dynamic and predictive tracking, ideal for real-time risk management.",
        slug: "sentra-track-trace",
        image: "/images/sentra-track-trace.jpg",
        features: [
          "Precise tracking",
          "Predictive analysis",
          "Automation",
          "Integrated monitoring systems"
        ],
        details: {
          overview: "Sentra Track & Trace provides unparalleled visibility into the movement of assets, personnel, and information flows. The system not only tracks current positions but predicts future states based on behavioral models.",
          specifications: [
            { "Tracking Accuracy": "GPS: ±2m, Indoor: ±0.5m" },
            { "Prediction Horizon": "Up to 30 minutes with 85% accuracy" },
            { "Supported Tags": "Active/passive RFID, BLE, GPS, cellular" },
            { "Mapping": "Real-time 2D/3D with historical playback" },
            { "API": "REST, GraphQL for integrations" }
          ],
          useCases: [
            "High-value asset tracking",
            "Personnel safety in hazardous environments",
            "Supply chain security",
            "Emergency response coordination"
          ]
        }
      },
      {
        name: "Sentra AI Intel",
        description: "Artificial intelligence platform for automatic and predictive analysis of large volumes of operational data.",
        slug: "sentra-ai-intel",
        image: "/images/sentra-ai-intel.jpg",
        features: [
          "Deep analysis",
          "Reduction of operational times",
          "Simple integration",
          "Advanced machine learning"
        ],
        details: {
          overview: "Sentra AI Intel is our most advanced intelligence platform, leveraging cutting-edge AI techniques to process and analyze vast amounts of structured and unstructured data. The system continuously learns and improves its models based on operational feedback.",
          specifications: [
            { "AI Models": "Deep learning, reinforcement learning, NLP" },
            { "Data Sources": "Structured, unstructured, imagery, signals" },
            { "Processing Speed": "Real-time analysis of streaming data" },
            { "Learning Capability": "Continuous improvement with minimal supervision" },
            { "Explainability": "Transparent AI with decision justification" }
          ],
          useCases: [
            "Signals intelligence processing",
            "Autonomous threat detection",
            "Pattern-of-life analysis",
            "Predictive security operations"
          ]
        }
      }
    ]
  }
];