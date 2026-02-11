import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import eventHydrangeas from "@/assets/images/event-hydrangeas.jpg";
import eventTablescape from "@/assets/images/event-tablescape.jpg";

const budgetOptions = ["$1,000 – $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000+"];

const EventInquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] px-6 md:px-12 max-w-7xl mx-auto pt-16 md:pt-24 pb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Info + Images */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-light mb-8 tracking-wide">
              Events & Installations
            </h1>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
              From intimate dinners to large-scale celebrations, LATEP brings a refined floral vision 
              to every event. We work closely with you to design florals that elevate your space and 
              reflect the spirit of the occasion.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-4">
              Please note: our minimum for event florals is $1,000. We'll respond to all inquiries within 48 hours.
            </p>
            <p className="text-sm font-light text-muted-foreground mb-10">
              For other inquiries, email us at{" "}
              <a href="mailto:natasha@latep.co" className="underline hover:text-foreground transition-colors">
                natasha@latep.co
              </a>
            </p>
            {/* Editorial staggered image grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-7">
                <img
                  src={eventTablescape}
                  alt="Garden dinner tablescape with pink peonies by LATEP"
                  className="w-full h-[240px] sm:h-[320px] md:h-[400px] object-cover"
                />
              </div>
              <div className="sm:col-span-5 sm:pt-8">
                <img
                  src={eventHydrangeas}
                  alt="Blue and purple hydrangea table arrangement by LATEP"
                  className="w-full h-[240px] sm:h-[280px] md:h-[360px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-6">
                  <Check className="text-secondary" size={28} />
                </div>
                <h2 className="text-2xl font-display font-light mb-4">Thank you!</h2>
                <p className="text-muted-foreground font-light">
                  We'll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-display font-light mb-10">Plan Your Event</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">First Name</Label>
                      <Input id="firstName" name="firstName" required className="mt-2 bg-transparent" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Last Name</Label>
                      <Input id="lastName" name="lastName" required className="mt-2 bg-transparent" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Email</Label>
                    <Input id="email" name="email" type="email" required className="mt-2 bg-transparent" />
                  </div>
                  <div>
                    <Label htmlFor="eventDescription" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Event Description</Label>
                    <Textarea id="eventDescription" name="eventDescription" rows={5} required className="mt-2 bg-transparent resize-none" />
                  </div>
                  <div>
                    <Label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full mt-2 justify-start text-left font-light bg-transparent",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(d) => d < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Event Floral Budget</Label>
                    <Select name="budget" required>
                      <SelectTrigger className="mt-2 bg-transparent">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetOptions.map((b) => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground tracking-[0.15em] uppercase font-light text-sm py-6 hover:opacity-90"
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventInquiry;
