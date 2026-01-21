import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnjjogeq");

  if (state.succeeded) {
    return (
      <Layout 
        seoTitle="Contact" 
        seoDescription="Mindvora Solutions provides end-to-end software development, AI solutions, and business automation. Get in touch with our team..."
      >
        <PageHeader 
          title="Get In Touch" 
          description="Have a project in mind? We'd love to hear about it." 
        />
        <section className="section-padding">
          <div className="container-width">
            <div className="text-center">
              <p className="text-xl">Thanks for your message! We'll get back to you soon.</p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout 
      seoTitle="Contact" 
      seoDescription="Mindvora Solutions provides end-to-end software development, AI solutions, and business automation. Get in touch with our team..."
    >
      <PageHeader 
        title="Get In Touch" 
        description="Have a project in mind? We'd love to hear about it." 
      />

      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground">Fill out the form or reach us via these channels.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <p className="text-muted-foreground">
                    5900 Balcones Drive STE 100,<br/>Austin TX, USA 78731</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-muted-foreground">info@mindvorasolution.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input id="name" type="text" name="name" placeholder="John Doe" />
                    
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" type="email" name="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company (Optional)</label>
                    <Input id="company" type="text" name="company" placeholder="Your Company Ltd" />
                  </div>
                   <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
