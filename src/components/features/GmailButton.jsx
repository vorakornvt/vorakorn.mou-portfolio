import { FaGoogle } from "react-icons/fa";

export default function GmailButton() {
  const handleClick = (e) => {
    e.preventDefault();
    const gmailLink =
      "https://mail.google.com/mail/?view=cm&fs=1&to=vorakorn.vt@gmail.com";
    const mailtoLink = "mailto:youremail@example.com";

    const win = window.open(gmailLink, "_blank");

    if (!win) {
      window.location.href = mailtoLink;
    }
  };

  return (
    <a href="#" onClick={handleClick} rel="noopener noreferrer">
      <FaGoogle fill="white" size={"35px"} />
    </a>
  );
}
