import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useNewsletter } from "@/hooks/use-contact";
import { Input } from "./ui/input";
import { insertSubscriberSchema } from "@shared/schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: ReactNode;
  seoTitle?: string;
  seoDescription?: string;
}

export function Layout({ children, seoTitle, seoDescription }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const services = [
    { name: "Web & Mobile App Development", href: "/services/development" },
    { name: "AI & Machine Learning", href: "/services/ai-ml" },
    { name: "Cloud Consulting", href: "/services/cloud" },
    { name: "Business Process Automation", href: "/services/automation" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "VR / AR / XR", href: "/services/xr" },
  ];

  const newsletterMutation = useNewsletter();
  const form = useForm<z.infer<typeof insertSubscriberSchema>>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" },
  });

  const onSubscribe = (data: z.infer<typeof insertSubscriberSchema>) => {
    newsletterMutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-foreground">
      <Helmet>
        <title>{seoTitle ? `${seoTitle} | Mindvora Solutions` : "Mindvora Solutions - Future Tech, Today"}</title>
        <meta 
          name="description" 
          content={seoDescription || "Mindvora Solutions transforms businesses with cutting-edge technology, AI, and cloud solutions."} 
        />
      </Helmet>

      {/* Navigation */}
      <header className="glass-nav">
        <div className="container-width flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">Mindvora</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
              Home
            </Link>
            <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/about' ? 'text-primary' : 'text-muted-foreground'}`}>
              About
            </Link>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-background/95 backdrop-blur-md rounded-xl shadow-2xl border border-border overflow-hidden p-2">
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/portfolio' ? 'text-primary' : 'text-muted-foreground'}`}>
              Portfolio
            </Link>
            <Link href="/careers" className={`text-sm font-medium transition-colors hover:text-primary ${location === '/careers' ? 'text-primary' : 'text-muted-foreground'}`}>
              Careers
            </Link>
            <Link href="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background p-4 absolute w-full shadow-xl">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-muted rounded-md">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-muted rounded-md">About</Link>
              <div className="space-y-2 pl-4 border-l-2 border-border ml-2">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Services</p>
                {services.map(s => (
                  <Link key={s.href} href={s.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm py-1 hover:text-primary">{s.name}</Link>
                ))}
              </div>
              <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-muted rounded-md">Portfolio</Link>
              <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium p-2 hover:bg-muted rounded-md">Careers</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16">
        <div className="container-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Mindvora</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Transforming businesses through innovative technology solutions. We build the future, today.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/legal" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>123 Innovation Drive,<br/>Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:hello@mindvora.com" className="hover:text-white">hello@mindvora.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest tech insights.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubscribe)} className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="bg-slate-900 border-slate-800 focus:border-primary text-white"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={newsletterMutation.isPending}
                  className="w-full"
                >
                  {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </Form>
          </div>

        </div>
        <div className="container-width mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Mindvora Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
