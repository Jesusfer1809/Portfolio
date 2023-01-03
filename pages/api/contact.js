import { generateEmailContent } from "utils/generateMail";
import { mailOptions, transporter } from "utils/nodemailer";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "POST": {
        const mail = req.body;

        if (
          mail.name === "" ||
          mail.email === "" ||
          mail.subject === "" ||
          mail.message === ""
        ) {
          return res.status(400).json({ msg: "Some fields are empty!!" });
        }

        try {
          await transporter.sendMail({
            ...mailOptions,
            subject: mail.subject,
            ...generateEmailContent(mail),
            subject: mail.subject,
          });

          return res
            .status(200)
            .json({ status: "success", msg: "Email sent successfully!!" });
        } catch (err) {
          console.log(err);
          return res.status(400).json({ msg: err.message });
        }
      }

      default:
        return res.status(400).json({ msg: "this method is not suported" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
}
