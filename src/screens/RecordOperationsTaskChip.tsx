// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Task Chip
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeAlert, BadgeHelp, BarChart3, CircleHelp, Database, ListFilter, Package, Pencil, Plus, Search, Settings } from "lucide-react";


export type RecordOperationsTaskChipActionId = "add-1" | "settings-2" | "filter-3" | "create-record-4" | "edit-5" | "edit-6" | "edit-7" | "close-fullscreen-8" | "edit-record-9" | "change-status-10" | "records-1" | "editor-2" | "insights-3" | "settings-4" | "help-5";

export interface RecordOperationsTaskChipProps {
  actions?: Partial<Record<RecordOperationsTaskChipActionId, () => void>>;

}

export function RecordOperationsTaskChip({ actions }: RecordOperationsTaskChipProps) {
  return (
    <>
      {/* SideNavBar (Web Only) */}
      <nav className="hidden md:flex flex-col py-lg px-md gap-sm bg-surface dark:bg-inverse-surface border-r border-outline-variant fixed left-0 top-0 h-full w-[240px] z-50">
      {/* Header */}
      <div className="flex items-center gap-sm px-sm mb-lg">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center">
      <Package  data-weight="fill" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-black text-primary">Task Chip</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Utility v1.0</p>
      </div>
      </div>
      {/* Main Nav Items */}
      <div className="flex flex-col gap-xs flex-1">
      <a className="flex items-center gap-sm px-sm py-[8px] bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-xl font-label-md text-label-md transition-colors active:scale-95 duration-200" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <Database className="text-[18px]" aria-hidden={true} focusable="false" />
                      Records
                  </a>
      <a className="flex items-center gap-sm px-sm py-[8px] text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-xl font-label-md text-label-md transition-colors active:scale-95 duration-200" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      <a className="flex items-center gap-sm px-sm py-[8px] text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-xl font-label-md text-label-md transition-colors active:scale-95 duration-200" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-[18px]" aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </div>
      {/* Footer Nav Items */}
      <div className="flex flex-col gap-xs mt-auto pt-sm border-t border-outline-variant">
      <a className="flex items-center gap-sm px-sm py-[8px] text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-xl font-label-md text-label-md transition-colors active:scale-95 duration-200" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-sm px-sm py-[8px] text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-xl font-label-md text-label-md transition-colors active:scale-95 duration-200" href="#" data-action-id="help-5" onClick={(event) => { event.preventDefault(); actions?.["help-5"]?.(); }}>
      <CircleHelp className="text-[18px]" aria-hidden={true} focusable="false" />
                      Help
                  </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col md:ml-[240px] h-screen overflow-hidden bg-background">
      {/* TopAppBar (Mobile & Web Contextual Actions) */}
      <header className="flex justify-between items-center w-full px-margin-desktop h-16 bg-background dark:bg-on-background border-b border-outline-variant dark:border-outline shrink-0 z-40 relative">
      {/* Mobile Brand (Visible only md:hidden) */}
      <div className="md:hidden flex items-center gap-sm">
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">Task Chip</h1>
      </div>
      {/* Contextual Search (Center/Left) */}
      <div className="hidden md:flex flex-1 max-w-lg relative group mr-lg">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-[32px] pr-sm bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body-sm text-body-sm text-on-surface placeholder:text-outline transition-colors" placeholder="Search records by ID, status, or tag..." type="text" />
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-sm">
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded transition-colors active:opacity-80 cursor-pointer" type="button" aria-label="Add" data-action-id="add-1" onClick={actions?.["add-1"]}>
      <Plus className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded transition-colors active:opacity-80 cursor-pointer" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant ml-sm overflow-hidden cursor-pointer">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A minimalist digital illustration of a generic user avatar placeholder, composed of smooth geometric shapes in cool, muted blues and greys. The lighting is soft and flat, emphasizing the utilitarian and calm aesthetic of the interface. High-key light-mode styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB45zn3hoMl4vIbukjFMPB0kTUd7XSKWs8pCjUdNd7UkLgn0rsR6LQ44aMOBwgYTkiZuGJVcS6H3N5chijBLgOd-VJDanX1aYHdqp5qms1G0p7Q2HPPMaSfSEb2NjlDsDdf89aKbukFJVwykVLRvMtySExNChkITAuwZ7Fm8nRZ_LfkdN5KgGMZWB7A5pBkAJiaKbGdiR9OirHwoQ1eO5mixkW9KGIgCGYFdsO-KrP_1xP3d5M-R4enKYyd2KxkBaAoN7031Ltkd3ZK" />
      </div>
      </div>
      </header>
      {/* Record Operations Canvas */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
      {/* List & Metrics Area */}
      <div className="flex-1 flex flex-col min-w-0 border-r border-outline-variant bg-surface-bright">
      {/* Metrics Toolbar */}
      <div className="p-gutter flex flex-col sm:flex-row justify-between items-start sm:items-center gap-gutter border-b border-outline-variant bg-surface-container-lowest shrink-0">
      <div className="flex gap-gutter">
      <div className="flex flex-col">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Total Tasks</span>
      <span className="font-headline-sm text-headline-sm text-on-surface">1,248</span>
      </div>
      <div className="w-[1px] h-8 bg-outline-variant hidden sm:block self-center"></div>
      <div className="flex flex-col">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Pending</span>
      <span className="font-headline-sm text-headline-sm text-primary">42</span>
      </div>
      <div className="w-[1px] h-8 bg-outline-variant hidden sm:block self-center"></div>
      <div className="flex flex-col">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Completed</span>
      <span className="font-headline-sm text-headline-sm text-secondary">1,180</span>
      </div>
      </div>
      <div className="flex gap-sm w-full sm:w-auto">
      <button className="flex items-center justify-center gap-xs px-sm py-[6px] border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors flex-1 sm:flex-none" type="button" data-action-id="filter-3" onClick={actions?.["filter-3"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Filter
                              </button>
      <button className="flex items-center justify-center gap-xs px-sm py-[6px] bg-primary-container text-on-primary border border-primary-container rounded font-label-md text-label-md hover:opacity-90 transition-opacity shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex-1 sm:flex-none" type="button" data-action-id="create-record-4" onClick={actions?.["create-record-4"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Create Record
                              </button>
      </div>
      </div>
      {/* Dense Task List */}
      <div className="flex-1 overflow-y-auto bg-surface-container-lowest p-gutter">
      {/* Table Header */}
      <div className="grid grid-cols-[auto_1fr_100px_100px_80px_40px] gap-sm px-sm py-xs border-b border-outline-variant mb-xs text-on-surface-variant font-label-md text-label-md">
      <div className="w-4"></div> {/* Checkbox placeholder */}
      <div>Task ID / Description</div>
      <div>Status</div>
      <div>Priority</div>
      <div className="text-right">Assigned</div>
      <div></div> {/* Actions placeholder */}
      </div>
      {/* List Items */}
      <div className="flex flex-col gap-[2px]">
      {/* Row 1 (Selected) */}
      <div className="grid grid-cols-[auto_1fr_100px_100px_80px_40px] items-center gap-sm p-sm bg-surface-container-low border border-primary/20 rounded cursor-pointer group">
      <input className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary focus:ring-offset-0 bg-surface-container-lowest" type="checkbox" />
      <div className="flex flex-col min-w-0">
      <span className="font-label-md text-label-md text-on-surface truncate">TC-9042: Implement retry logic for API ingestion</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Source: System Integration</span>
      </div>
      <div>
      <span className="inline-flex items-center px-2 py-[2px] rounded-sm bg-surface-tint/10 border border-primary/20 text-primary font-label-xs text-label-xs">In Progress</span>
      </div>
      <div>
      <span className="inline-flex items-center gap-xs font-body-sm text-body-sm text-error">
      <BadgeAlert className="text-[14px]" aria-hidden={true} focusable="false" /> High
                                      </span>
      </div>
      <div className="text-right font-body-sm text-body-sm text-on-surface-variant">
                                      JS
                                  </div>
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="Edit" data-action-id="edit-5" onClick={actions?.["edit-5"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-[auto_1fr_100px_100px_80px_40px] items-center gap-sm p-sm bg-surface-container-lowest border border-transparent border-b-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer group">
      <input className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary focus:ring-offset-0 bg-surface-container-lowest" type="checkbox" />
      <div className="flex flex-col min-w-0">
      <span className="font-label-md text-label-md text-on-surface truncate">TC-9041: Update schema definitions</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Source: Data Engineering</span>
      </div>
      <div>
      <span className="inline-flex items-center px-2 py-[2px] rounded-sm bg-surface-variant border border-outline-variant text-on-surface-variant font-label-xs text-label-xs">Pending</span>
      </div>
      <div>
      <span className="inline-flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> Normal
                                      </span>
      </div>
      <div className="text-right font-body-sm text-body-sm text-on-surface-variant">
                                      Unassigned
                                  </div>
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="Edit" data-action-id="edit-6" onClick={actions?.["edit-6"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Row 3 (Error State Example) */}
      <div className="grid grid-cols-[auto_1fr_100px_100px_80px_40px] items-center gap-sm p-sm bg-error-container/20 border border-error/30 rounded cursor-pointer group relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error rounded-l"></div>
      <input className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary focus:ring-offset-0 bg-surface-container-lowest ml-1" type="checkbox" />
      <div className="flex flex-col min-w-0">
      <span className="font-label-md text-label-md text-on-surface truncate">TC-9038: Sync user metadata</span>
      <span className="font-body-sm text-body-sm text-error truncate">Failed: Connection timeout after 30s</span>
      </div>
      <div>
      <span className="inline-flex items-center px-2 py-[2px] rounded-sm bg-error-container border border-error/50 text-error font-label-xs text-label-xs">Failed</span>
      </div>
      <div>
      <span className="inline-flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" /> Normal
                                      </span>
      </div>
      <div className="text-right font-body-sm text-body-sm text-on-surface-variant">
                                      System
                                  </div>
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary" type="button" aria-label="Edit" data-action-id="edit-7" onClick={actions?.["edit-7"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Preview Panel (Right Side) */}
      <aside className="w-full md:w-[360px] lg:w-[420px] bg-surface-container-lowest flex flex-col shrink-0 border-t md:border-t-0 md:border-l border-outline-variant h-[512px] md:h-auto overflow-y-auto">
      {/* Preview Header */}
      <div className="p-gutter border-b border-outline-variant sticky top-0 bg-surface-container-lowest z-10 flex justify-between items-start">
      <div>
      <div className="flex items-center gap-sm mb-xs">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Record Details</span>
      <span className="inline-flex items-center px-2 py-[2px] rounded-sm bg-surface-tint/10 border border-primary/20 text-primary font-label-xs text-label-xs">In Progress</span>
      </div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-xs">TC-9042: Implement retry logic for API ingestion</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Created on Oct 24, 2023 at 14:30 GMT</p>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="Close Fullscreen" data-action-id="close-fullscreen-8" onClick={actions?.["close-fullscreen-8"]}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Preview Content */}
      <div className="p-gutter flex flex-col gap-gutter">
      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-sm p-sm bg-surface-container-low rounded border border-outline-variant">
      <div>
      <span className="block font-label-xs text-label-xs text-on-surface-variant mb-[2px]">Assignee</span>
      <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-xs">
      <div className="w-4 h-4 rounded-full bg-secondary text-[8px] text-on-secondary flex items-center justify-center">JS</div>
                                      Jane Smith
                                  </span>
      </div>
      <div>
      <span className="block font-label-xs text-label-xs text-on-surface-variant mb-[2px]">Priority</span>
      <span className="font-body-sm text-body-sm text-error flex items-center gap-xs">
      <BadgeAlert className="text-[14px]" aria-hidden={true} focusable="false" /> High
                                  </span>
      </div>
      <div>
      <span className="block font-label-xs text-label-xs text-on-surface-variant mb-[2px]">Source</span>
      <span className="font-body-sm text-body-sm text-on-surface">System Integration</span>
      </div>
      <div>
      <span className="block font-label-xs text-label-xs text-on-surface-variant mb-[2px]">Tags</span>
      <div className="flex gap-1">
      <span className="px-[6px] py-[2px] bg-primary/5 border border-primary/20 rounded-sm font-label-xs text-label-xs text-primary">API</span>
      <span className="px-[6px] py-[2px] bg-primary/5 border border-primary/20 rounded-sm font-label-xs text-label-xs text-primary">Core</span>
      </div>
      </div>
      </div>
      {/* Description */}
      <div>
      <h3 className="font-label-md text-label-md text-on-surface mb-xs">Description</h3>
      <div className="p-sm bg-surface-container-lowest border border-outline-variant rounded font-body-sm text-body-sm text-on-surface-variant whitespace-pre-wrap">The current ingestion pipeline fails silently when the external endpoint times out. 
      
      Required changes:
      1. Implement exponential backoff (max 3 retries).
      2. Log failure reason to centralized monitoring.
      3. Alert dev-ops channel on persistent failure.
      
      Ensure unit tests cover timeout scenarios.</div>
      </div>
      {/* Actions */}
      <div className="flex gap-sm mt-sm pt-gutter border-t border-outline-variant">
      <button className="flex-1 flex items-center justify-center px-sm py-[6px] border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="edit-record-9" onClick={actions?.["edit-record-9"]}>
                                  Edit Record
                              </button>
      <button className="flex-1 flex items-center justify-center px-sm py-[6px] border border-outline-variant rounded bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button" data-action-id="change-status-10" onClick={actions?.["change-status-10"]}>
                                  Change Status
                              </button>
      </div>
      </div>
      </aside>
      </div>
      </main>
    </>
  );
}
