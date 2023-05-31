import AvatarUser from "./avatar";

export default function EmailListItem({ email, onClick }) {
  return (
    <article
      className="flex items-center gap-4 [&+article]:mt-2 p-2
    hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg transition-colors
    "
      onClick={onClick}
    >
      <AvatarUser letter={email.from[0].toUpperCase()} />
      <div className="flex-grow flex-shrink basis-40">
        <strong>{email.subject}</strong>
        <p>
          {email.body.length > 64
            ? email.body.slice(0, 64) + "..."
            : email.body}
        </p>
      </div>
    </article>
  );
}
