import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";

import collaborationImg from "@assets/AI_collaboration_in_a_tech_office_1767506920980.png";

export default function About() {
  return (
    <Layout 
      seoTitle="About Us" 
      seoDescription="Learn about Mindvora's mission, vision, and the expert team driving digital transformation."
    >
      <PageHeader 
        title="Who We Are" 
        description="A collective of innovators, engineers, and strategists dedicated to your success."
      />

      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower organizations with transformative technology that simplifies complexity, drives efficiency, and creates new opportunities for growth. We believe software should be an enabler, not a bottleneck.
                </p>
              </div>
              <div className="bg-slate-100 rounded-2xl h-64 overflow-hidden shadow-lg border border-border/50">
                <img src={collaborationImg} alt="Mindvora Collaboration" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="order-2 md:order-1 bg-slate-100 rounded-2xl h-64 overflow-hidden">
                 {/* unspash: tech code on screen */}
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" alt="Code" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every business, regardless of size, has access to enterprise-grade technology solutions that allow them to compete on a global scale.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 border-t border-border">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We constantly explore new technologies to keep our clients ahead of the curve." },
              { title: "Integrity", desc: "We build trust through transparency, honesty, and delivering on our promises." },
              { title: "Excellence", desc: "We don't settle for 'good enough'. We strive for perfection in every line of code." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl shadow-sm border border-border/50 text-center"
              >
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
