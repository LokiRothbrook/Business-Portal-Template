// lib/data/services.ts

/**
 * This file contains data specific to the "Services" section and pages.
 * It defines the structure of a service and provides an array of services
 * offered by the business, along with content for the services section itself.
 *
 * === How to Customize ===
 *
 * 1.  **Service Interface (`Service`):**
 *     -   Defines the properties for each service (id, title, description, etc.).
 *     -   `iconName`: Use the exact name of an icon from `lucide-react`
 *         (e.g., "Briefcase", "Users"). These are mapped to actual components
 *         in the `ServicesSection` component.
 *
 * 2.  **Services Array (`services`):**
 *     -   This is the core list of services your business offers.
 *     -   Add, remove, or modify service objects in this array.
 *     -   Update `title`, `shortDescription`, `description`, `iconName`,
 *         `features`, `image` path, and `price`.
 *     -   Ensure `image` paths correspond to images in the `public/images` directory.
 *
 * 3.  **Services Section Content (`servicesSectionContent`):**
 *     -   Customize the `sectionTitle`, main `title`, `subtitle`, and the
 *         text/href for the "View All Services" button.
 */

// ============================================================================
// Service Interface and Data
// ============================================================================

/**
 * @interface Service
 * Defines the structure for a service object.
 *
 * @property {string} id - A unique identifier for the service.
 * @property {string} title - The title of the service.
 * @property {string} shortDescription - A brief summary of the service.
 * @property {string} description - A detailed explanation of the service.
 * @property {string} iconName - The name of the Lucide icon to use (e.g., "Briefcase").
 * @property {string[]} features - A list of key features or benefits.
 * @property {string} image - The path to the service's image (e.g., "/images/service-1.jpg").
 * @property {string} price - The starting price or pricing model (e.g., "From $XXX").
 */
export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  iconName: string // Changed from LucideIcon
  features: string[]
  image: string
  price: string
}

/**
 * @const services
 * An array of service objects that represent the services your business offers.
 * This data is used to populate the services section and individual service pages.
 *
 * === How to Customize ===
 * - Add, remove, or reorder objects in this array.
 * - Replace placeholder text with your actual service details.
 * - Change the `iconName` to any valid name from the `lucide-react` library.
 * - Update the `image` path to point to your own service images in `public/images`.
 */
export const services: Service[] = [
  {
    id: "service-one",
    title: "Service One",
    shortDescription: "Your primary service offering",
    description: "Describe your main service offering here. Explain what makes it valuable to your customers, the problems it solves, and why clients should choose your business for this service.",
    iconName: "Briefcase",
    features: [
      "Key feature or benefit",
      "Another important feature",
      "What sets you apart",
      "Quality guarantee",
      "Customer-focused approach"
    ],
    image: "/services/service-1.svg",
    price: "From $XXX"
  },
  {
    id: "service-two",
    title: "Service Two",
    shortDescription: "Your secondary service offering",
    description: "Describe your second service offering here. Detail the specific benefits, the process involved, and how it complements your other services or stands on its own.",
    iconName: "Users",
    features: [
      "Primary benefit of this service",
      "How it helps customers",
      "Professional approach",
      "Proven methodology",
      "Satisfaction guaranteed"
    ],
    image: "/services/service-2.svg",
    price: "From $XXX"
  },
  {
    id: "service-three",
    title: "Service Three",
    shortDescription: "Additional service description",
    description: "Outline your third service here. Explain the unique value proposition, target audience, and specific outcomes customers can expect when choosing this service.",
    iconName: "Lightbulb",
    features: [
      "Innovative solutions",
      "Expert implementation",
      "Customized approach",
      "Measurable results",
      "Ongoing support"
    ],
    image: "/services/service-3.svg",
    price: "From $XXX"
  },
  {
    id: "service-four",
    title: "Service Four",
    shortDescription: "Specialized service offering",
    description: "Detail your fourth service here. Focus on the specialized nature of this offering, the expertise required, and the exceptional results your clients can expect.",
    iconName: "Target",
    features: [
      "Targeted solutions",
      "Industry expertise",
      "Best practices",
      "Quality assurance",
      "Timely delivery"
    ],
    image: "/services/service-4.svg",
    price: "From $XXX"
  },
  {
    id: "service-five",
    title: "Service Five",
    shortDescription: "Premium service option",
    description: "Describe your premium service offering. Highlight the elevated experience, additional benefits, and exclusive features that make this service stand out.",
    iconName: "Award",
    features: [
      "Premium quality",
      "Exclusive benefits",
      "Priority service",
      "Dedicated support",
      "Enhanced features"
    ],
    image: "/services/service-5.svg",
    price: "From $XXX"
  },
  {
    id: "service-six",
    title: "Service Six",
    shortDescription: "Growth-focused service",
    description: "Explain your growth-oriented service. Show how this helps clients scale, improve, or achieve their business objectives through your expertise.",
    iconName: "TrendingUp",
    features: [
      "Scalable solutions",
      "Growth strategies",
      "Performance optimization",
      "Data-driven approach",
      "Long-term partnership"
    ],
    image: "/services/service-6.svg",
    price: "Custom Quote"
  },
  {
    id: "service-seven",
    title: "Service Seven",
    shortDescription: "Security and compliance",
    description: "Detail your security or compliance-focused service. Explain how you protect clients, ensure regulatory compliance, and maintain the highest standards.",
    iconName: "Shield",
    features: [
      "Comprehensive protection",
      "Compliance expertise",
      "Risk management",
      "Regular audits",
      "Peace of mind"
    ],
    image: "/services/service-7.svg",
    price: "From $XXX"
  },
  {
    id: "service-eight",
    title: "Service Eight",
    shortDescription: "Fast and efficient solutions",
    description: "Describe your efficiency-focused service. Highlight quick turnaround times, streamlined processes, and how you help clients save time and resources.",
    iconName: "Zap",
    features: [
      "Quick turnaround",
      "Streamlined process",
      "Efficient execution",
      "Cost-effective",
      "Immediate results"
    ],
    image: "/services/service-8.svg",
    price: "From $XXX"
  }
];

/**
 * @const servicesSectionContent
 * An object containing the content for the services section, typically displayed
 * on the homepage or a dedicated services overview page.
 *
 * === How to Customize ===
 * - `sectionTitle`: The small title above the main heading.
 * - `title`: The main heading for the services section.
 * - `subtitle`: The descriptive text below the main heading.
 * - `button`: Customize the text and link for the call-to-action button
 *   at the bottom of the section.
 */
export const servicesSectionContent = {
  sectionTitle: "Our Services",
  title: "Professional Solutions",
  subtitle: "From individuals to businesses, we offer comprehensive services tailored to meet your unique needs and exceed your expectations.",
  button: {
    text: "View All Services",
    href: "/services"
  }
};
