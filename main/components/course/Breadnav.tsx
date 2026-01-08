import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadPath } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Breadnav({
  paths,
  className,
}: {
  paths: BreadPath[];
  className?: string;
}) {
  return (
    <Breadcrumb className={cn("px-[25px]", className)}>
      <BreadcrumbList>
        {paths.map((item, index) =>
          item.active ? (
            <BreadcrumbItem key={item.path}>
              <BreadcrumbPage>{item.path}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <div className="flex items-center gap-1.5" key={item.path}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={item.link}>{item.path}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== paths.length - 1 && <BreadcrumbSeparator />}
            </div>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
