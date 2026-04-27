"use client";
import { NeobrutalismBreadcrumb, ShadcnBreadcrumb, FlowbiteBreadcrumb } from "@lib/components/Breadcrumb";

export function NeobrutalismBreadcrumbPreview() {
  return (
    <NeobrutalismBreadcrumb>
      <NeobrutalismBreadcrumb.Item label="Home" href="#" />
      <NeobrutalismBreadcrumb.Item label="Components" href="#" />
      <NeobrutalismBreadcrumb.Item label="Breadcrumb" />
    </NeobrutalismBreadcrumb>
  );
}

export function ShadcnBreadcrumbPreview() {
  return (
    <ShadcnBreadcrumb>
      <ShadcnBreadcrumb.Item label="Home" href="#" />
      <ShadcnBreadcrumb.Item label="Components" href="#" />
      <ShadcnBreadcrumb.Item label="Breadcrumb" />
    </ShadcnBreadcrumb>
  );
}

export function FlowbiteBreadcrumbPreview() {
  return (
    <FlowbiteBreadcrumb>
      <FlowbiteBreadcrumb.Item label="Home" href="#" />
      <FlowbiteBreadcrumb.Item label="Components" href="#" />
      <FlowbiteBreadcrumb.Item label="Breadcrumb" />
    </FlowbiteBreadcrumb>
  );
}
