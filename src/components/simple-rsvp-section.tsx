import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Heart, Instagram, Facebook, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Invitation } from "@/data/guestData";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const rsvpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  attending: z.enum(["true", "false"], { required_error: "Please select if you'll be attending" }),
  guestCount: z.string().min(1, "Please select number of guests"),
  message: z.string().optional(),
});

type RsvpFormData = z.infer<typeof rsvpSchema>;

interface RsvpSectionProps {
  invitation: Invitation;
}

export default function SimpleRsvpSection({ invitation }: RsvpSectionProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      attending: undefined,
      guestCount: "",
      message: "",
    },
  });

  const onSubmit = async (data: RsvpFormData) => {
    // Simulate form submission
    console.log("RSVP Data:", data);
    
    // Show success message
    toast({
      title: "RSVP Submitted!",
      description: `Thank you ${data.firstName}! We've received your RSVP.`,
    });
    
    setIsSubmitted(true);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 px-6 md:px-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
            <h2 className="font-display text-4xl md:text-5xl text-deep-sage">
              Thank You!
            </h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Your RSVP has been received. We can't wait to celebrate with you!
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-deep-sage text-deep-sage hover:bg-deep-sage hover:text-white"
          >
            Submit Another RSVP
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-6 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-blush" />
          <h2 className="font-display text-4xl md:text-5xl text-deep-sage">
            RSVP
          </h2>
          <Heart className="h-6 w-6 text-blush" />
        </div>
        <p className="text-lg text-gray-600 font-light">
          Please let us know if you'll be joining us for our special day
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-sage/20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attending"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Will you be attending?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="attending-yes" />
                        <Label htmlFor="attending-yes">Yes, I'll be there!</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="attending-no" />
                        <Label htmlFor="attending-no">Sorry, I can't make it</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("attending") === "true" && (
              <FormField
                control={form.control}
                name="guestCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Leave a sweet message for the happy couple..."
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-deep-sage hover:bg-deep-sage/90 text-white font-semibold py-3"
            >
              Submit RSVP
            </Button>
          </form>
        </Form>
      </div>

      <div className="text-center mt-12">
        <h3 className="font-display text-2xl text-deep-sage mb-6">Stay Connected</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-deep-sage hover:text-blush transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-deep-sage hover:text-blush transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="mailto:hamza.andrea.wedding@example.com" className="text-deep-sage hover:text-blush transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}