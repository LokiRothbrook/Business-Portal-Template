// lib/icon-map.ts

/**
 * Dynamic Icon Resolver for Lucide React Icons
 *
 * This utility allows you to use any Lucide icon by its string name
 * without having to manually import and map each icon in your components.
 *
 * === Usage ===
 *
 * In your data files (e.g., services.ts):
 *   iconName: "Home"  // Any valid Lucide icon name
 *
 * In your components:
 *   import { getIcon } from "@/lib/icon-map"
 *   const ServiceIcon = getIcon(service.iconName)
 *   {ServiceIcon && <ServiceIcon className="w-6 h-6" />}
 *
 * === Finding Icon Names ===
 *
 * Browse all available icons at: https://lucide.dev/icons
 * Use the PascalCase name shown on the website (e.g., "Home", "ShoppingCart", "CloudRain")
 */

import * as LucideIcons from "lucide-react"
import { type LucideIcon } from "lucide-react"

/**
 * Retrieves a Lucide icon component by its name.
 *
 * @param iconName - The PascalCase name of the Lucide icon (e.g., "Home", "Briefcase", "CloudRain")
 * @returns The Lucide icon component, or null if not found
 *
 * @example
 * const HomeIcon = getIcon("Home")
 * if (HomeIcon) {
 *   return <HomeIcon className="w-6 h-6" />
 * }
 */
export function getIcon(iconName: string): LucideIcon | null {
  const icon = (LucideIcons as Record<string, unknown>)[iconName]

  // Verify it's a valid React component (function)
  if (typeof icon === "function") {
    return icon as LucideIcon
  }

  // Log warning in development if icon not found
  if (process.env.NODE_ENV === "development" && iconName) {
    console.warn(`Icon "${iconName}" not found in Lucide icons. Check the name at https://lucide.dev/icons`)
  }

  return null
}

/**
 * Type guard to check if an icon name is valid
 *
 * @param iconName - The icon name to check
 * @returns true if the icon exists in Lucide
 */
export function isValidIcon(iconName: string): boolean {
  return getIcon(iconName) !== null
}
