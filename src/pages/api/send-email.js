import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fname, lname, email, message } = req.body;

    const sendMessage = `Message from: ${fname} ${lname}\nContact Details: ${email}\nMessage: ${message}`;

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email options
    let mailOptions = {
      to: process.env.EMAIL_USER,
      subject: `Message from ${fname} ${lname}`,
      text: sendMessage,
    };

    // Email options for the acknowledgement email
    let ackMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Acknowledgement of Your Message",
      text: `Dear ${fname},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nRaveesha Pathirana\nDigitalDreamers.`,
    };

    try {
      // Send the original email
      await transporter.sendMail(mailOptions);
      // Send the acknowledgement email
      await transporter.sendMail(ackMailOptions);

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
