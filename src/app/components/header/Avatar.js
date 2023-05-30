import Image from "next/image";

export default function Avatar() {
  return (
    <Image
      className="rounded-full border-2 border-gray-100 "
      src="/user.svg"
      alt="User"
      width={48}
      height={48}
    />
  );
}
