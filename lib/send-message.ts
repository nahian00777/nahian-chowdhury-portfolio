'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: { name: string; email: string; message: string }) {
  try {
    const { name, email, message } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: 'nahianchowdhury00777@gmail.com',
      subject: `New Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal server error." };
  }
}