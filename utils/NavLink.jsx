import { useRouter } from "next/router";
import Link from "next/link";

export { NavLink };

function NavLink({ href, exact = false, children, ...props }) {
  const { pathname } = useRouter();
  
  // Special logic for the root link "/"
  const isLargeOrCommercial = pathname.includes("/large-business") || pathname.includes("/commercial");
  const isRootActive = href === "/" && !isLargeOrCommercial;

  // General active logic for other links
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  // Determine if the link should be active
  const shouldBeActive = isRootActive || (isActive && href !== "/");

  props.className = props.className || "";
  if (shouldBeActive) {
    props.className += " active";
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
