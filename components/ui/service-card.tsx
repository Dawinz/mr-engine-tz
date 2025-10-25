import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: string;
  cta: string;
}

export function ServiceCard({ title, description, slug, icon, cta }: ServiceCardProps) {
  const IconComponent = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Wrench;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-orange/10">
          <IconComponent className="h-6 w-6 text-orange" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link href={`/services/${slug}`}>
          <Button variant="outline" className="w-full">
            {cta}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
