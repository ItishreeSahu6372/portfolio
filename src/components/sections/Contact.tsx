import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Download, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactBg } from "@/components/SectionBackgrounds";
import { GradientOrbs } from "@/components/GradientOrbs";
import { personal } from "@/data/personal";
import type { LucideIcon } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  company: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactItems: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "itishree-sahu", href: personal.linkedin },
  { icon: Github, label: "GitHub", value: "itishree-sahu", href: personal.github },
  { icon: MapPin, label: "Location", value: personal.location },
];

export function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot: if company is filled, it's a bot
    if (data.company) {
      reset();
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    setSubmitting(true);

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
         {
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
          time: new Date().toLocaleString("en-IN"),
        },
          { publicKey },
        );
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        // Fallback to mailto
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
        );
        window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
        toast({
          title: "Opening your email client",
          description: "EmailJS isn't configured, so I've prepared a pre-filled email for you.",
        });
      }
      reset();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <ContactBg className="opacity-30" />
      <GradientOrbs className="opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project, opportunity, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-card border border-border p-6 md:p-8 card-glow">
              <h3 className="text-lg font-bold font-display mb-6">Get in touch</h3>
              <ul className="space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-4 group">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/15 transition-colors group-hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-sm font-medium text-foreground mt-0.5">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-6 border-t border-border">
                <Button asChild className="w-full" variant="outline">
                  <a href={personal.resumeUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl bg-card border border-border p-6 md:p-8 card-glow space-y-5"
              noValidate
            >
              {/* Honeypot field — hidden from users */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <Label htmlFor="company">Company (leave blank)</Label>
                <Input
                  id="company"
                  {...register("company")}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  {...register("subject")}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" disabled={submitting} className="w-full" size="lg">
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
