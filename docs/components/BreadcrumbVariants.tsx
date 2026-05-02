"use client";
import { NeobrutalismBreadcrumb, ShadcnBreadcrumb, FlowbiteBreadcrumb, GlassmorphismBreadcrumb, Md3Breadcrumb, NmBreadcrumb } from "@lib/components/Breadcrumb";

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

export function GlassmorphismBreadcrumbPreview() {
  return (
    <div style={{ padding: "12px 16px", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismBreadcrumb>
        <GlassmorphismBreadcrumb.Item label="Home" href="#" />
        <GlassmorphismBreadcrumb.Item label="Components" href="#" />
        <GlassmorphismBreadcrumb.Item label="Breadcrumb" />
      </GlassmorphismBreadcrumb>
    </div>
  );
}

export function Md3BreadcrumbPreview() {
  return (
    <Md3Breadcrumb>
      <Md3Breadcrumb.Item label="Home" href="#" />
      <Md3Breadcrumb.Item label="Components" href="#" />
      <Md3Breadcrumb.Item label="Breadcrumb" />
    </Md3Breadcrumb>
  );
}

export function NmBreadcrumbPreview() {
  return (
    <div style={{ padding: "12px 16px", background: "#e0e5ec", borderRadius: "8px" }}>
      <NmBreadcrumb>
        <NmBreadcrumb.Item label="Home" href="#" />
        <NmBreadcrumb.Item label="Components" href="#" />
        <NmBreadcrumb.Item label="Breadcrumb" />
      </NmBreadcrumb>
    </div>
  );
}
