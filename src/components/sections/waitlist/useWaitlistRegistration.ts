
import { useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase';

export const useWaitlistRegistration = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [feedback, setFeedback] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!role) {
      toast.error("Please select your role");
      return;
    }
    
    if (!gdprConsent) {
      toast.error("Please accept the privacy policy");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Submitting waitlist registration:", { email, phoneNumber, role, feedback, gdprConsent });
      
      // Insert into database with extended timeout and error logging
      const { data, error: dbError } = await supabase
        .from('waitlist_registrations')
        .insert({
          email,
          role,
          phone_number: phoneNumber || null,
          feedback: feedback || null,
          gdpr_consent: gdprConsent,
        })
        .select(); // Use select to get more detailed error information

      if (dbError) {
        console.error("Detailed Supabase Insert Error:", dbError);
        
        if (dbError.code === '23505') { // Unique constraint violation
          toast.error("This email is already registered.");
        } else if (dbError.code === '22001') { // String data right truncation
          toast.error("One of the fields exceeds its maximum length.");
        } else {
          toast.error(`Registration failed: ${dbError.message || 'Unknown error'}`);
        }
        throw dbError;
      }

      console.log("Registration successful:", data);
      
      // Reset form after successful submission
      setEmail('');
      setPhoneNumber('');
      setRole('');
      setFeedback('');
      setGdprConsent(false);
      
      toast.success("You're in! We'll be in touch soon.");
    } catch (error: any) {
      console.error('Full registration error:', error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    role,
    setRole,
    feedback,
    setFeedback,
    gdprConsent,
    setGdprConsent,
    isSubmitting,
    handleSubmit
  };
};
