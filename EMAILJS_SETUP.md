# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Create account with your email

## Step 2: Add Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow instructions to connect your email
5. **Copy the Service ID** (something like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template:

**Template Content:**
```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Copy the Template ID** (something like `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find "Public Key" section
3. **Copy your Public Key** (something like `xxxxxxxxx`)

## Step 5: Configure Your Project
Create a file named `.env.local` in the root of your project with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with the ones you copied.

## Step 6: Restart Dev Server
Stop your dev server (Ctrl+C) and start it again:
```bash
npm run dev
```

## Done! 🎉
Your contact form will now send emails to your inbox!

