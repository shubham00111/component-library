"use client";
import { NeobrutalismTooltip, ShadcnTooltip, FlowbiteTooltip, GlassmorphismTooltip, Md3Tooltip, NmTooltip } from "@lib/components/Tooltip";

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

export function GlassmorphismTooltipPreview() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", paddingTop: 32, paddingBottom: 32, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: "8px" }}>
      <GlassmorphismTooltip content="Top tooltip" placement="top">
        <button className="px-3 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl text-sm font-medium hover:bg-white/30 transition-all">Top</button>
      </GlassmorphismTooltip>
      <GlassmorphismTooltip content="Bottom tooltip" placement="bottom">
        <button className="px-3 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl text-sm font-medium hover:bg-white/30 transition-all">Bottom</button>
      </GlassmorphismTooltip>
    </div>
  );
}

export function Md3TooltipPreview() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", paddingTop: 32, paddingBottom: 32 }}>
      <Md3Tooltip content="Top tooltip" placement="top">
        <button className="px-4 py-2 bg-[#6750a4] text-white rounded-[20px] text-sm font-medium hover:shadow-md transition-shadow">Top</button>
      </Md3Tooltip>
      <Md3Tooltip content="Bottom tooltip" placement="bottom">
        <button className="px-4 py-2 bg-[#6750a4] text-white rounded-[20px] text-sm font-medium hover:shadow-md transition-shadow">Bottom</button>
      </Md3Tooltip>
    </div>
  );
}

export function NmTooltipPreview() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", paddingTop: 32, paddingBottom: 32, background: "#e0e5ec", borderRadius: "8px" }}>
      <NmTooltip content="Top tooltip" placement="top">
        <button className="px-3 py-2 bg-[#e0e5ec] text-[#6c7a9c] rounded-xl text-sm font-semibold shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] active:shadow-[inset_-2px_-2px_4px_#ffffff,_inset_2px_2px_4px_rgba(163,177,198,0.4)] transition-all">Top</button>
      </NmTooltip>
      <NmTooltip content="Bottom tooltip" placement="bottom">
        <button className="px-3 py-2 bg-[#e0e5ec] text-[#6c7a9c] rounded-xl text-sm font-semibold shadow-[-3px_-3px_6px_#ffffff,_3px_3px_6px_rgba(163,177,198,0.5)] active:shadow-[inset_-2px_-2px_4px_#ffffff,_inset_2px_2px_4px_rgba(163,177,198,0.4)] transition-all">Bottom</button>
      </NmTooltip>
    </div>
  );
}
