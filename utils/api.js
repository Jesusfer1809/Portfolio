import axios from "axios";
import { toast } from "react-hot-toast";

export const sendContactForm = async (data) => {
  try {
    toast.promise(
      axios.post("/api/contact", data),
      {
        loading: "Sending email...",
        success: (data) => `Email sent successfully!`,
        error: (err) => `Could not send the email!`,
      },
      {
        style: {
          fontWeight: "500",
          border: "2px solid #064e3b",
          padding: "8px 16px",
          color: "#064e3b",
        },
        success: {
          duration: 3000,
          icon: "📩",
        },
        error: {
          duration: 3000,
          icon: "💥",
        },
      }
    );
    // const res = await axios.post("/api/contact", data);
    // toast("Email sent successfully!", {
    //   icon: "📩",
    //   style: {
    //     border: "2px solid #6d28d9",
    //     padding: "8px 16px",
    //     color: "#064e3b",
    //   },
    // });
  } catch (err) {
    console.log("ERROR", err);
  }
};
