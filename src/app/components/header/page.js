import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <>
      <header
        className="
    px-4 h-16 flex items-center justify-between gap-6 md:gap-16 xl:gap-32 bg-gray-100 dark:bg-gray-900
    xl:px-12  lg:h-18 
    "
      >
        <Logo />
        <SearchForm />
        <Avatar />
      </header>
    </>
  );
}
