import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Link, useRoute } from "wouter";
import { CheckCircle2 } from "lucide-react";

// This is a dynamic page component that handles all service routes
export default function Services() {
  const [match, params] = useRoute("/services/:slug");
  const slug = params?.slug || "development";

  const servicesData: Record<string, {
    title: string;
    desc: string;
    content: string;
    benefits: string[];
    image: string;
  }> = {
    "development": {
      title: "Web & Mobile App Development",
      desc: "Custom software tailored to your specific business needs.",
      content: "We build robust, scalable applications using the latest technologies. Whether you need a customer-facing mobile app or a complex internal dashboard, our team delivers high-performance code that stands the test of time.",
      benefits: ["Scalable Architecture", "Cross-Platform Compatibility", "High Performance", "Secure by Design"],
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
    },
    "ai-ml": {
      title: "AI & Machine Learning",
      desc: "Unlock the power of your data with intelligent algorithms.",
      content: "From predictive analytics to natural language processing, we help you integrate AI into your workflow. Automate decision-making and uncover insights that drive profitability.",
      benefits: ["Predictive Analytics", "Process Automation", "Natural Language Processing", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
    },
    "cloud": {
      title: "Cloud Consulting",
      desc: "Secure, scalable infrastructure on AWS, Azure, and Google Cloud.",
      content: "Migrate legacy systems to the cloud or optimize your existing infrastructure. We ensure your systems are reliable, cost-effective, and secure.",
      benefits: ["Cost Optimization", "High Availability", "Security Compliance", "DevOps Automation"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    "automation": {
      title: "Business Process Automation",
      desc: "Streamline operations and reduce manual workload.",
      content: "We identify bottlenecks in your processes and build custom automation tools to fix them. Save time, reduce errors, and let your team focus on high-value work.",
      benefits: ["Reduced Operational Costs", "Increased Accuracy", "Faster Turnaround", "24/7 Operations"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80"
    },
    "design": {
      title: "UI/UX Design",
      desc: "User-centric design that delights and converts.",
      content: "Our design team creates intuitive, beautiful interfaces. We start with user research and wireframing to ensure the final product meets real user needs.",
      benefits: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
    },
    "xr": {
      title: "VR / AR / XR Experiences",
      desc: "Immersive technologies for the next generation of web.",
      content: "Step into the future with our Extended Reality solutions. We build immersive training modules, product visualizations, and virtual showrooms.",
      benefits: ["Immersive Training", "Product Visualization", "Virtual Showrooms", "Interactive Marketing"],
      image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?w=800&q=80"
    }
  };

  const service = servicesData[slug] || servicesData["development"];

  return (
    <Layout 
      seoTitle={service.title} 
      seoDescription={service.desc}
    >
      <PageHeader 
        title={service.title} 
        description={service.desc} 
      />

      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.content}
              </p>
              
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-4 mb-10">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg">Discuss Your Project</Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-primary/5 rounded-2xl -rotate-3"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
