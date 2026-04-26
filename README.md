# Multi-Design-Language Component Library

A component showcase where every UI component is implemented across three design languages — **Neobrutalism**, **Shadcn-inspired**, and **Flowbite-inspired** — with live previews, React source code, and standalone HTML/CSS snippets for copy-paste use.

## Running Storybook

```bash
npm install
npm run storybook
```

Storybook opens at `http://localhost:6006`. Use the **light/dark toggle** in the toolbar to switch themes.

## Project Structure

```
src/
├── tokens/               # CSS custom property tokens per design language
│   ├── neobrutalism.css
│   ├── shadcn.css
│   └── flowbite.css
├── components/
│   └── Button/
│       ├── variants/     # React + plain CSS implementation per design language
│       │   ├── NeobrutalismButton.tsx + .css
│       │   ├── ShadcnButton.tsx + .css
│       │   └── FlowbiteButton.tsx + .css
│       ├── snippets/     # Standalone paste-and-go HTML/CSS files
│       │   ├── neobrutalism.html + .css
│       │   ├── shadcn.html + .css
│       │   └── flowbite.html + .css
│       ├── Button.stories.tsx
│       ├── Button.mdx
│       ├── types.ts      # Shared props interface
│       └── index.ts
├── components/ui/
│   ├── CodeSnippet/      # Tabbed code viewer with copy button
│   └── VariantShowcase/  # Side-by-side comparison renderer
├── hooks/
│   ├── useModal.ts
│   └── useDropdown.ts
└── styles/ (legacy global styles)
```

## Adding a New Component

1. Create the folder: `src/components/MyComponent/`

2. Define the shared props interface in `types.ts`:
   ```ts
   export interface MyComponentProps { ... }
   ```

3. Create three variant files in `variants/`:
   ```
   NeobrutalismMyComponent.tsx  +  NeobrutalismMyComponent.css
   ShadcnMyComponent.tsx        +  ShadcnMyComponent.css
   FlowbiteMyComponent.tsx      +  FlowbiteMyComponent.css
   ```
   Each CSS file imports only its token file:
   ```css
   @import "../../../tokens/neobrutalism.css";
   /* use --nb-* variables only */
   ```

4. Create six standalone snippet files in `snippets/`:
   ```
   neobrutalism.html / neobrutalism.css
   shadcn.html       / shadcn.css
   flowbite.html     / flowbite.css
   ```
   Snippet CSS files **inline the tokens at the top** (no `@import`) so they work paste-and-go.

5. Create `MyComponent.stories.tsx` with these exports:
   - `Neobrutalism` — renders the NB variant + `<CodeSnippet>`
   - `Shadcn` — renders the Shadcn variant + `<CodeSnippet>`
   - `Flowbite` — renders the Flowbite variant + `<CodeSnippet>`
   - `CompareAll` — uses `<VariantShowcase>` to render all three side-by-side

6. Create `index.ts` exporting all three variants and types.

7. Add the export to `src/index.ts`.

## Adding a New Design Language

1. Create `src/tokens/my-language.css` with `--ml-*` custom properties and a `.dark {}` block for dark mode overrides.

2. Import it in `.storybook/preview.tsx`.

3. For each component, create a `MyLanguageButton.tsx` + `MyLanguageButton.css` in its `variants/` folder. The CSS file starts with `@import "../../../tokens/my-language.css"`.

4. Add a standalone snippet pair to each component's `snippets/` folder with tokens inlined.

5. Update each component's stories to add a `MyLanguage` story and include it in `CompareAll`.

## Design Language Quick Reference

| Language | Key traits | CSS prefix | Token prefix |
|---|---|---|---|
| **Neobrutalism** | Hard shadow `4px 4px 0 #000`, thick border, saturated colors | `.nb-` | `--nb-` |
| **Shadcn-inspired** | Refined neutral palette, soft shadow, 6px radius, accessible rings | `.shadcn-` | `--shadcn-` |
| **Flowbite-inspired** | Blue `#1c64f2`, 8px radius, smooth transitions, blue focus glow | `.fb-` | `--fb-` |

## Available Components

| Component | Design languages | Storybook path |
|---|---|---|
| Button | NB, Shadcn, Flowbite | Components/Button |
| Input | NB, Shadcn, Flowbite | Components/Input |
| Card | NB, Shadcn, Flowbite | Components/Card |
| Badge | NB, Shadcn, Flowbite | Components/Badge |
| Toggle | NB, Shadcn, Flowbite | Components/Toggle |
| Toast | NB, Shadcn, Flowbite | Components/Toast |
| Accordion | Base (Tailwind) | Components/Accordion |
| Modal | Base (Tailwind) | Components/Modal |
| Dropdown | Base (Tailwind) | Components/Dropdown |
| Tabs | Base (Tailwind) | Components/Tabs |

## Running Tests

```bash
npm test
```

Tests use Vitest + Storybook portable stories via Playwright.
