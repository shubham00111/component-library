"use client";
import { NeobrutalismTooltip, ShadcnTooltip, FlowbiteTooltip } from "@lib/components/Tooltip";

export function NeobrutalismTooltipPreview() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", paddingTop: 32, paddingBottom: 32 }}>
      <NeobrutalismTooltip content="Top tooltip" placement="top">
        <button className="px-3 py-1.5 border-[3px] border-black shadow-[3px_3px_0_#000] font-extrabold text-sm bg-white hover:bg-yellow-400 transition-colors rounded-[2px]">Top</button>
      </NeobrutalismTooltip>
      <NeobrutalismTooltip content="Bottom tooltip" placement="bottom">
        <button className="px-3 py-1.5 border-[3px] border-black shadow-[3px_3px_0_#000] font-extrabold text-sm bg-white hover:bg-yellow-400 transition-colors rounded-[2px]">Bottom</button>
      </NeobrutalismTooltip>
    </div>
  );
}

export function ShadcnTooltipPreview() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", paddingTop: 32, paddingBottom: 32 }}>
      <ShadcnTooltip content="Top tooltip" placement="top">
        <button className="px-3 py-1.5 border border-zinc-200 rounded-[6px] text-sm font-medium bg-white hover:bg-zinc-50 transition-colors">Top</button>
      </ShadcnTooltip>
      <ShadcnTooltip content="Bottom tooltip" placement="bottom">
        <button className="px-3 py-1.5 border border-zinc-200 rounded-[6px] text-sm font-medium bg-white hover:bg-zinc-50 transition-colors">Bottom</button>
      </ShadcnTooltip>
    </div>
  );
}

export function FlowbiteTooltipPreview() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", paddingTop: 32, paddingBottom: 32 }}>
      <FlowbiteTooltip content="Top tooltip" placement="top">
        <button className="px-4 py-2 bg-[#1c64f2] text-white rounded-lg text-sm font-medium hover:bg-[#1a56db] transition-colors">Top</button>
      </FlowbiteTooltip>
      <FlowbiteTooltip content="Bottom tooltip" placement="bottom">
        <button className="px-4 py-2 bg-[#1c64f2] text-white rounded-lg text-sm font-medium hover:bg-[#1a56db] transition-colors">Bottom</button>
      </FlowbiteTooltip>
    </div>
  );
}
