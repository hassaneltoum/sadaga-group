const { Resend } = require('resend');

const SUBJECT_LABELS = {
  join:        'Join an Activity',
  volunteer:   'Volunteering',
  partnership: 'Partnership',
  general:     'General Enquiry',
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON.' }) };
  }

  const { fname, lname, email, subject, message, time } = body || {};

  if (!fname || !lname || !email || !subject || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields.' }) };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid email address.' }) };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const subjectLabel = SUBJECT_LABELS[subject] || subject;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to:   ['info@sadaga.co.uk'],
      reply_to: email,
      subject: `Website Enquiry — ${subjectLabel}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#7c4f8e;padding:24px 32px;border-radius:8px 8px 0 0">
            <h2 style="margin:0;color:#fff;font-size:20px">New Enquiry — Sadaga Group Website</h2>
          </div>
          <div style="background:#f9f6fc;padding:28px 32px;border:1px solid #e5ddf0;border-top:none;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:8px 0;font-weight:600;width:130px;color:#7c4f8e">Name</td><td style="padding:8px 0">${fname} ${lname}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#7c4f8e">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#7c4f8e">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#7c4f8e">Subject</td><td style="padding:8px 0">${subjectLabel}</td></tr>
              <tr><td style="padding:8px 0;font-weight:600;color:#7c4f8e">Date / Time</td><td style="padding:8px 0">${time || 'Not provided'}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e0d5f0;margin:20px 0">
            <p style="font-weight:600;color:#7c4f8e;margin:0 0 10px">Message</p>
            <p style="background:#fff;padding:16px;border-radius:6px;border:1px solid #e5ddf0;margin:0;white-space:pre-wrap;line-height:1.6">${message}</p>
          </div>
          <p style="font-size:12px;color:#999;text-align:center;margin-top:16px">Sent via sadaga.co.uk contact form</p>
        </div>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error('Resend error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send email.' }) };
  }
};
