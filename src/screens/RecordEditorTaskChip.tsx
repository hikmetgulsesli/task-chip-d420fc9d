// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Task Chip
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, CalendarDays, ChevronDown, ChevronRight, CircleAlert, CircleHelp, Database, Info, Pencil, Plus, Save, Settings } from "lucide-react";


export type RecordEditorTaskChipActionId = "add-1" | "settings-2" | "dismiss-3" | "save-record-4" | "cancel-edit-5" | "records-1" | "editor-2" | "insights-3" | "records-4" | "editor-5" | "insights-6" | "settings-7" | "help-8" | "records-9" | "status-10" | "documentation-11" | "feedback-12";

export interface RecordEditorTaskChipProps {
  actions?: Partial<Record<RecordEditorTaskChipActionId, () => void>>;

}

export function RecordEditorTaskChip({ actions }: RecordEditorTaskChipProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="docked full-width top-0 bg-background border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop h-16 z-50">
      <div className="flex items-center gap-md">
      <span className="font-headline-sm text-headline-sm font-bold text-primary">Task Chip</span>
      </div>
      {/* Center Nav for Web */}
      <nav className="hidden md:flex gap-lg h-full items-end">
      <a className="h-full flex items-center px-sm text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <span className="font-label-md text-label-md">Records</span>
      </a>
      <a className="h-full flex items-center px-sm text-primary font-bold border-b-2 border-primary hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      <a className="h-full flex items-center px-sm text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      <div className="flex items-center gap-sm">
      <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant cursor-pointer active:opacity-80" type="button" aria-label="Add" data-action-id="add-1" onClick={actions?.["add-1"]}>
      <Plus  style={{fontSize: "20px"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container-low text-on-surface-variant cursor-pointer active:opacity-80" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings  style={{fontSize: "20px"}} aria-hidden={true} focusable="false" />
      </button>
      <img alt="User profile" className="w-8 h-8 rounded-full ml-sm object-cover border border-outline-variant" data-alt="A detailed digital avatar for a professional user profile in a minimal, utilitarian style, featuring simple geometric shapes, clean lines, and a subdued blue and slate color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_6TVQbOmvb1VVqe2uwpJ_BrnGrozFOTFshHnEZSFJv4IobCvNCpag-t3HKFgFMypM3TUay0PGlfxfV_aljr959CJUUHdS9GqGckh5j21u_tRkhbEiKqIoyO5pVv4z8BfEgLPAZzIg2t5h6DSIeLqKP8jylxy_cmVKI_AfIGms7gempKQ-6oJhDKLESBVNYcqNy7EFMImMRsKCjXRnw2dRs2Ra2ZTuPPcCJaH_vNJ5Zin_m946a-yyqC9_jtAX502dQnMOPqT8u8bN" />
      </div>
      </header>
      <div className="flex flex-1">
      {/* SideNavBar (Desktop only, contextual) */}
      <aside className="hidden md:flex bg-surface border-r border-outline-variant w-[240px] flex-col py-lg px-md gap-sm z-40 fixed h-[calc(100vh-64px)] top-16">
      <div className="mb-lg px-sm">
      <div className="font-headline-sm text-headline-sm font-black text-primary">Task Chip</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant mt-xs">Utility v1.0</div>
      </div>
      <nav className="flex flex-col gap-xs flex-1">
      <a className="flex items-center gap-sm px-sm py-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200" href="#" data-action-id="records-4" onClick={(event) => { event.preventDefault(); actions?.["records-4"]?.(); }}>
      <Database  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Records</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-xl bg-secondary-container text-on-secondary-container hover:bg-surface-container-high transition-colors active:scale-95 duration-200" href="#" data-action-id="editor-5" onClick={(event) => { event.preventDefault(); actions?.["editor-5"]?.(); }}>
      <Pencil  data-weight="fill" style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200" href="#" data-action-id="insights-6" onClick={(event) => { event.preventDefault(); actions?.["insights-6"]?.(); }}>
      <BarChart3  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </nav>
      <div className="flex flex-col gap-xs mt-auto pt-lg border-t border-outline-variant">
      <a className="flex items-center gap-sm px-sm py-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200" href="#" data-action-id="settings-7" onClick={(event) => { event.preventDefault(); actions?.["settings-7"]?.(); }}>
      <Settings  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-sm py-sm rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200" href="#" data-action-id="help-8" onClick={(event) => { event.preventDefault(); actions?.["help-8"]?.(); }}>
      <CircleHelp  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Help</span>
      </a>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-[240px] px-margin-mobile md:px-margin-desktop py-lg mt-16 mb-16 max-w-4xl">
      {/* Contextual Banner: Unsaved Changes */}
      <div className="hidden mb-lg bg-surface-container-high border border-outline-variant rounded-lg p-sm flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.04)]" id="unsaved-banner">
      <div className="flex items-center gap-sm text-on-surface">
      <Info  style={{fontSize: "18px"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">You have unsaved changes.</span>
      </div>
      <button className="font-label-md text-label-md text-primary hover:bg-surface-container-highest px-sm py-xs rounded transition-colors" type="button" data-action-id="dismiss-3" onClick={actions?.["dismiss-3"]}>Dismiss</button>
      </div>
      {/* Page Header */}
      <div className="mb-lg">
      <div className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md mb-xs">
      <a className="hover:text-primary transition-colors" href="#" data-action-id="records-9" onClick={(event) => { event.preventDefault(); actions?.["records-9"]?.(); }}>Records</a>
      <ChevronRight  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
      <span>New Record</span>
      </div>
      <h1 className="font-headline-sm text-headline-sm text-on-surface">Create Record</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Define a new operational task requiring execution.</p>
      </div>
      {/* Bento-style Form Layout */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-gutter" id="record-editor-form">
      {/* Main Form Area */}
      <div className="md:col-span-2 flex flex-col gap-gutter">
      {/* Basic Info Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
      <div className="flex items-center justify-between mb-md">
      <h2 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Basic Details</h2>
      </div>
      <div className="flex flex-col gap-md">
      {/* Task Name Field (Error State Example) */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-xs" htmlFor="task-name">
                                          Task Name
                                          <span aria-hidden={true} className="text-error">*</span>
      </label>
      <input aria-describedby="task-name-error" aria-invalid="true" className="w-full bg-surface-container-lowest border border-error rounded px-sm py-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-error focus:ring-2 focus:ring-error-container transition-colors" id="task-name" name="task-name" placeholder="e.g., Q3 Server Maintenance" required={true} type="text" />
      <p className="font-label-xs text-label-xs text-error flex items-center gap-xs" id="task-name-error">
      <CircleAlert  style={{fontSize: "14px"}} aria-hidden={true} focusable="false" />
                                          Task name is required
                                      </p>
      </div>
      {/* Description Field */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant flex items-center justify-between" htmlFor="task-desc">
      <span>Description</span>
      <span className="text-outline font-label-xs text-label-xs font-normal">Optional</span>
      </label>
      <textarea className="w-full bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container/20 transition-colors resize-none" id="task-desc" name="task-desc" placeholder="Provide operational context..." rows={4}></textarea>
      </div>
      </div>
      </div>
      </div>
      {/* Metadata Sidebar Area */}
      <div className="flex flex-col gap-gutter">
      {/* Execution Params Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
      <h2 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider mb-md">Execution</h2>
      <div className="flex flex-col gap-md">
      {/* Due Date Field */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-xs" htmlFor="due-date">
                                          Due Date
                                          <span aria-hidden={true} className="text-error">*</span>
      </label>
      <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none text-on-surface-variant">
      <CalendarDays  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      </div>
      <input className="w-full bg-surface-container-lowest border border-surface-variant rounded pl-[36px] pr-sm py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container/20 transition-colors" id="due-date" name="due-date" required={true} type="date" />
      </div>
      </div>
      {/* Priority Field */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-xs" htmlFor="priority">
                                          Priority
                                          <span aria-hidden={true} className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full appearance-none bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-container/20 transition-colors" id="priority" name="priority" required={true}>
      <option disabled={true} selected={true} value="">Select priority level</option>
      <option value="low">Low (P3)</option>
      <option value="medium">Medium (P2)</option>
      <option value="high">High (P1)</option>
      <option value="critical">Critical (P0)</option>
      </select>
      <div className="absolute inset-y-0 right-0 pr-sm flex items-center pointer-events-none text-on-surface-variant">
      <ChevronDown  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Actions Card */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-sm">
      <button className="w-full bg-primary-container text-on-primary border border-transparent rounded px-md py-sm font-label-md text-label-md font-bold flex items-center justify-center gap-xs hover:bg-surface-tint transition-colors active:scale-95 duration-200" type="submit" data-action-id="save-record-4" onClick={actions?.["save-record-4"]}>
      <Save  style={{fontSize: "16px"}} aria-hidden={true} focusable="false" />
                                  Save Record
                              </button>
      <button className="w-full bg-transparent border border-surface-variant text-secondary rounded px-md py-sm font-label-md text-label-md flex items-center justify-center gap-xs hover:bg-surface-container-low transition-colors active:scale-95 duration-200" type="button" data-action-id="cancel-edit-5" onClick={actions?.["cancel-edit-5"]}>
                                  Cancel Edit
                              </button>
      </div>
      </div>
      </form>
      </main>
      </div>
      {/* Footer */}
      <footer className="docked full-width bottom-0 bg-surface-container-lowest border-t border-outline-variant flex justify-between items-center w-full px-margin-desktop py-xs fixed bottom-0 z-40">
      <div className="flex items-center gap-sm">
      <span className="font-label-xs text-label-xs font-bold text-on-surface">Task Chip</span>
      <span className="font-label-xs text-label-xs text-on-surface-variant">v1.0.4 - System Stable</span>
      </div>
      <nav className="flex gap-md">
      <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="status-10" onClick={(event) => { event.preventDefault(); actions?.["status-10"]?.(); }}>Status</a>
      <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="documentation-11" onClick={(event) => { event.preventDefault(); actions?.["documentation-11"]?.(); }}>Documentation</a>
      <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-primary transition-colors" href="#" data-action-id="feedback-12" onClick={(event) => { event.preventDefault(); actions?.["feedback-12"]?.(); }}>Feedback</a>
      </nav>
      </footer>
      
    </>
  );
}
