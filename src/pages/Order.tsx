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
import customOrderArrangement from "@/assets/images/custom-order-arrangement.jpg";

const budgetOptions = ["$200 – $400", "$400 – $600", "$600 – $1,000", "$1,000+"];

const Order = () => {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (backend email integration later)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Layout>
      <section className="min-h-[calc(100vh-5rem)] px-6 md:px-12 max-w-7xl mx-auto pt-16 md:pt-24 pb-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-light mb-8 tracking-wide">
              Custom Orders
            </h1>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-6">
              Every LATEP arrangement is made to order using the freshest seasonal flowers available.
              Because we work with what's in season, each piece is truly one-of-a-kind.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground mb-10">
              Tell us what you're envisioning — the occasion, the colors, the mood — and we'll craft 
              something beautiful. We will review every order and respond within 24 hours.
            </p>
            <img
              src={customOrderArrangement}
              alt="Custom blue hydrangea, white peony, and trailing greenery floral arrangement by LATEP"
              className="w-full h-auto object-contain"
            />
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
                  Natasha will respond within 48 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-display font-light mb-10">Let's Create Your Arrangement</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Full Name</Label>
                    <Input id="name" name="name" required className="mt-2 bg-transparent" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Email</Label>
                    <Input id="email" name="email" type="email" required className="mt-2 bg-transparent" />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Describe what you'd like</Label>
                    <Textarea id="description" name="description" rows={4} required className="mt-2 bg-transparent resize-none" />
                  </div>
                  <div>
                    <Label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Budget Range</Label>
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
                  <div>
                    <Label className="text-xs tracking-[0.1em] uppercase text-muted-foreground">Preferred Delivery Date</Label>
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
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground tracking-[0.15em] uppercase font-light text-sm py-6 hover:opacity-90"
                  >
                    {loading ? "Sending..." : "Submit Order Request"}
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

export default Order;
