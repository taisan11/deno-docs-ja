import React from "react";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import { useLocation } from "@docusaurus/router";

export default function HomeBreadcrumbItem() {
  const currentPath = useLocation().pathname;
  const getDocsLocation = () => {
    if (currentPath.startsWith("/deploy")) {
      return {
        href: "/deploy/manual",
        name: "Deploy",
      };
    } else if (currentPath.startsWith("/kv")) {
      return {
        href: "/kv/manual",
        name: "KV",
      };
    } else if (currentPath.startsWith("/runtime")) {
      return {
        href: "/runtime/manual",
        name: "Runtime",
      };
    }
    return {
      href: "/",
      name: "All docs",
    };
  };

  const { href, name } = getDocsLocation();
  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "ホームページ",
          description: "パンくずリストのトップページのARIAラベル",
        })}
        className="breadcrumbs__link"
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
