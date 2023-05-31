import EmailCloseButton from "./emailCloseButton";
import EmailData from "./emailData";
import EmailTitle from "./emailTitle";

export default function EmailContent({ email, setOpenEmail }) {
  if (!email) {
    return null;
  }

  const sendDate = new Date(email.createAt);
  const openEmailDate = `${sendDate.toLocaleDateString()}, ${sendDate.toLocaleTimeString()}`;
  return (
    <div className="p-2 md:p-4 absolute lg:relative h-full w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-50 grow-[2] basis-96">
      <EmailCloseButton onClick={() => setOpenEmail(null)} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailData>De: {`< ${email.from} >`}</EmailData>
      <EmailData>Para: {`<Eu>`}</EmailData>
      <EmailData>Em: {openEmailDate}</EmailData>
      <hr />
      {email.body}
    </div>
  );
}
