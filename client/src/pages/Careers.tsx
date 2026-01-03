import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Careers() {
  const positions = [
    { title: "Senior Full Stack Engineer", dept: "Engineering", loc: "Remote / Hybrid", type: "Full-time" },
    { title: "Product Designer (UI/UX)", dept: "Design", loc: "Remote", type: "Full-time" },
    { title: "DevOps Specialist", dept: "Infrastructure", loc: "New York, NY", type: "Full-time" },
    { title: "AI Research Scientist", dept: "R&D", loc: "San Francisco, CA", type: "Full-time" },
  ];

  return (
    <Layout 
      seoTitle="Careers" 
      seoDescription="Join the Mindvora team. Build the future of technology with us."
    >
      <PageHeader 
        title="Join Our Team" 
        description="We're looking for passionate problem solvers to help us build the future." 
      />

      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {positions.map((pos, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-primary transition-colors group">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{pos.title}</h3>
                    <p className="text-sm text-muted-foreground">{pos.dept} • {pos.loc} • {pos.type}</p>
                  </div>
                  <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                    Apply <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Don't see your role?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talent. Send your resume to careers@mindvora.com and let's talk.
              </p>
              <Button variant="outline">Email Us</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
