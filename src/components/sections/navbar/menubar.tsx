import Link from "next/link";
import cx from "classnames";

interface MenubarProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menubar(props: Partial<MenubarProps>) {
  const { title, active, href = "#" } = props;

  const classTitle = cx({
    "nav-link": true,
    active: active,
  });

  return (
    <>
      <li className="nav-item my-auto">
        <Link href={href} className={classTitle} aria-current="page">
          {title}
        </Link>
      </li>
    </>
  );
}
