import emails from "../../email.json";
import EmailListItem from "./EmailListItem";

export default function EmailList({ setOpenEmail }) {
  return (
    <div className="relative overflow-y-scroll flex-grow pt-1">
      {emails.map((email) => (
        <EmailListItem
          key={email.id}
          email={email}
          onClick={() => setOpenEmail(email)}
        />
      ))}
    </div>
  );
}
