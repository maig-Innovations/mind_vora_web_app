import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const projects = [
    {
      title: "FinTech Dashboard Overhaul",
      client: "FinanceFlow",
      desc: "Redesigned a complex financial analytics dashboard for better usability and speed.",
      tags: ["React", "D3.js", "UX Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "AI-Powered Customer Support",
      client: "GlobalRetail",
      desc: "Implemented a chatbot system that reduced support ticket volume by 40%.",
      tags: ["Python", "OpenAI API", "Node.js"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
    },
    {
      title: "Cloud Migration Strategy",
      client: "HealthPlus",
      desc: "Migrated on-premise servers to AWS, ensuring HIPAA compliance and 99.99% uptime.",
      tags: ["AWS", "DevOps", "Security"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
    },
    {
      title: "E-Commerce Mobile App",
      client: "ShopTrend",
      desc: "Native iOS and Android app with AR product preview features.",
      tags: ["React Native", "ARKit", "Mobile"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    }
  ];

  return (
    <Layout 
      seoTitle="Our Portfolio" 
      seoDescription="Browse our case studies and success stories. See how Mindvora delivers results."
    >
      <PageHeader 
        title="Our Work" 
        description="We take pride in solving complex problems. Here are a few of our success stories." 
      />

      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-video mb-6 border border-border/50 shadow-sm">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div>
                  <div className="flex gap-2 mb-3">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="rounded-full">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
