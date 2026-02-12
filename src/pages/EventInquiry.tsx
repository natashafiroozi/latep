import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import eventHydrangeasBlue from "@/assets/images/event-hydrangeas-blue.jpg";
import eventTablescapePink from "@/assets/images/event-tablescape-pink.jpg";
import eventCenterpieceLong from "@/assets/images/event-centerpiece-long.jpg";
import eventCenterpieceClose from "@/assets/images/event-centerpiece-close.jpg";

const eventImages = [
  { src: eventHydrangeasBlue, alt: "Blue and purple hydrangea table arrangement by LATEP" },
  { src: eventTablescapePink, alt: "Pink peony garden dinner tablescape by LATEP" },
  { src: eventCenterpieceLong, alt: "Long table centerpiece with pink dogwood flowers by LATEP" },
  { src: eventCenterpieceClose, alt: "Close-up of pink dogwood and peony centerpiece by LATEP" },
];

const budgetOptions = ["$1,000 – $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000+"];

const EventInquiry = () => {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % eventImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + eventImages.length) % eventImages.length);

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
            {/* Photo carousel — one at a time */}
            <div className="relative group">
              <img
                src={eventImages[currentImage].src}
                alt={eventImages[currentImage].alt}
                className="w-full h-[300px] sm:h-[400px] md:h-[480px] object-contain bg-muted transition-opacity duration-500"
              />
              <button
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/70 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/70 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight size={20} />
              </button>
              <div className="flex justify-center gap-2 mt-4">
                {eventImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      i === currentImage ? "bg-foreground" : "bg-foreground/25"
                    )}
                    aria-label={`View photo ${i + 1}`}
                  />
                ))}
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
