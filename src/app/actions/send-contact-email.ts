'use server';

import { z } from 'zod';
import * as nodemailer from 'nodemailer';

export const runtime = 'nodejs';

// Schema for validation, should match the client-side form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendContactEmail(data: { name: string, email: string, message: string }) {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  const { name, email, message } = result.data;

  // Create a transporter object using SMTP transport
  // The user needs to set these environment variables.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your email provider username
      pass: process.env.SMTP_PASS, // your email provider password
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`, // sender address (must be the same as the authenticated user)
    to: 'info@enshayncepartners.com', // list of receivers
    replyTo: email, // Set the reply-to to the user's email
    subject: `New Message from ${name} via Contact Form`, // Subject line
    text: message, // plain text body
    html: `
      <h1>New Message from Contact Form</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `, // html body
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
}
