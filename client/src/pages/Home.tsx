import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Brain, Cloud, Workflow } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <Layout 
      seoTitle="Home" 
      seoDescription="Mindvora Solutions delivers premium software development, AI integration, and cloud consulting for modern businesses."
    >
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[100px]" />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-8 border border-white/10 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Accepting new enterprise projects
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-8"
            >
              Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Reality</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              We are Mindvora. A premium technology partner building scalable web apps, AI solutions, and robust cloud infrastructure for forward-thinking companies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                  Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services/development">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto bg-transparent border-slate-700 text-white hover:bg-white/10 hover:text-white">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for scale, designed for impact.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Mindvora, we don't just write code; we engineer solutions. Our team of expert developers and strategists work closely with you to understand your unique challenges and deliver software that drives real business growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From startups to Fortune 500s, we've helped companies across the globe modernize their tech stack and automate complex workflows.
              </p>
              <Link href="/about">
                <Button variant="link" className="p-0 text-primary font-semibold text-lg">
                  More about us &rarr;
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              {...fadeIn} 
              className="relative h-[400px] rounded-2xl overflow-hidden bg-slate-100"
            >
              {/* unspash: modern office tech team meeting */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Mindvora Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50 border-y border-border">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg">Comprehensive technology services tailored to your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Code, 
                title: "App Development", 
                desc: "Custom web and mobile applications built with React, Node, and modern frameworks.",
                href: "/services/development"
              },
              { 
                icon: Brain, 
                title: "AI Solutions", 
                desc: "Intelligent automation and machine learning integration to power your data.",
                href: "/services/ai-ml"
              },
              { 
                icon: Cloud, 
                title: "Cloud Infrastructure", 
                desc: "Scalable AWS/Azure architecture designed for security and performance.",
                href: "/services/cloud"
              },
              { 
                icon: Workflow, 
                title: "Process Automation", 
                desc: "Streamline operations with custom tools that save time and reduce errors.",
                href: "/services/automation"
              },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{s.desc}</p>
                <Link href={s.href} className="text-primary font-medium text-sm hover:underline">
                  Learn more &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Mindvora transformed our legacy system into a modern, cloud-native platform in record time.",
                author: "Sarah Johnson",
                role: "CTO at TechFlow",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              },
              {
                quote: "The AI integration they built has saved our team hundreds of hours per month. Incredible ROI.",
                author: "Michael Chen",
                role: "Director of Ops at DataScale",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              },
              {
                quote: "Professional, responsive, and highly skilled. They acted as a true extension of our team.",
                author: "Emily Davis",
                role: "VP Product at InnovateCo",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-foreground font-medium mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm">{t.author}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-width text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to accelerate your growth?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join the forward-thinking companies building their future with Mindvora.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-lg">
              Get in Touch Today
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
