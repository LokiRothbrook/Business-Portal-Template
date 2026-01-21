"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { services } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/sections/cta"
import { getIcon } from "@/lib/icon-map"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 water-pattern" />
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold mb-6"
            >
              <span className="gradient-text">Professional Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              From individuals to businesses, we offer comprehensive
              services tailored to your unique needs.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
                            {services.map((service, index) => {
                              const ServiceIcon = getIcon(service.iconName)
                              return (
                                <motion.div
                                  key={service.id}
                                  initial={{ opacity: 0, y: 30 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  <Link href={`/services/${service.id}`} className="group block h-full">
                                    <div className="relative h-full p-8 rounded-2xl glass-card hover:border-primary/50 transition-all duration-500 overflow-hidden">
                                      {/* Hover Background */}
                                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
                                      {/* Content */}
                                      <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-6">
                                          <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                                          >
                                            {ServiceIcon && <ServiceIcon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />} {/* Changed from <service.icon .../> */}
                                          </motion.div>
                                          <span className="text-lg font-bold text-primary">{service.price}</span>
                                        </div>
              
                                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                          {service.title}
                                        </h2>
                                        <p className="text-muted-foreground mb-6">
                                          {service.description}
                                        </p>
              
                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                          {service.features.slice(0, 3).map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm">
                                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                              <span>{feature}</span>
                                            </li>
                                          ))}
                                        </ul>
              
                                        {/* CTA */}
                                        <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                                          <span>Learn More</span>
                                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                      </div>
              
                                      {/* Bottom Accent */}
                                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    </div>
                                  </Link>
                                </motion.div>
                              )
                            })}            </div>
          </div>
        </section>
        {/* CTA Section */}
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
