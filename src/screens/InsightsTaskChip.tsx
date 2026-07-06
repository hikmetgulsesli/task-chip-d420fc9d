// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Task Chip
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, CheckCircle2, CircleHelp, Database, Download, ListFilter, Pencil, Plus, Search, Settings, TriangleAlert } from "lucide-react";


export type InsightsTaskChipActionId = "add-1" | "settings-2" | "filter-insights-3" | "export-summary-4" | "go-to-editor-5" | "records-1" | "editor-2" | "insights-3" | "settings-4" | "help-5" | "view-all-6" | "status-7" | "documentation-8" | "feedback-9" | "records-10" | "editor-11" | "insights-12";

export interface InsightsTaskChipProps {
  actions?: Partial<Record<InsightsTaskChipActionId, () => void>>;

}

export function InsightsTaskChip({ actions }: InsightsTaskChipProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <aside className="hidden md:flex flex-col py-lg px-md gap-sm bg-surface border-r border-outline-variant fixed left-0 top-0 h-full w-[240px] z-50">
      <div className="mb-lg px-xs">
      <h1 className="font-headline-sm text-headline-sm font-black text-primary">Task Chip</h1>
      <p className="font-label-xs text-label-xs text-on-surface-variant mt-xs">Utility v1.0</p>
      </div>
      <nav className="flex-1 flex flex-col gap-xs">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200 rounded-xl font-label-md text-label-md" href="#" data-action-id="records-1" onClick={(event) => { event.preventDefault(); actions?.["records-1"]?.(); }}>
      <Database  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                      Records
                  </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200 rounded-xl font-label-md text-label-md" href="#" data-action-id="editor-2" onClick={(event) => { event.preventDefault(); actions?.["editor-2"]?.(); }}>
      <Pencil  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      <a className="flex items-center gap-sm px-sm py-sm bg-secondary-container text-on-secondary-container rounded-xl font-label-md text-label-md active:scale-95 duration-200" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      </nav>
      <div className="flex flex-col gap-xs mt-auto">
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200 rounded-xl font-label-md text-label-md" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      <a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-200 rounded-xl font-label-md text-label-md" href="#" data-action-id="help-5" onClick={(event) => { event.preventDefault(); actions?.["help-5"]?.(); }}>
      <CircleHelp  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                      Help
                  </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[240px] min-h-screen">
      {/* TopAppBar (Mobile & Desktop) */}
      <header className="flex justify-between items-center w-full px-margin-desktop h-16 bg-background border-b border-outline-variant sticky top-0 z-40">
      <div className="flex items-center gap-sm md:hidden">
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary">Task Chip</h1>
      </div>
      <div className="hidden md:flex items-center gap-sm w-1/3">
      {/* Search bar placeholder */}
      <div className="relative w-full">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-outline text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full pl-lg pr-sm py-xs bg-surface-container-lowest border border-outline-variant rounded-DEFAULT focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim transition-colors outline-none font-body-sm text-body-sm placeholder:text-outline text-on-surface" placeholder="Search tasks..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-md ml-auto">
      <button className="text-primary hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80 p-xs rounded-full flex items-center justify-center" type="button" aria-label="Add" data-action-id="add-1" onClick={actions?.["add-1"]}>
      <Plus aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80 p-xs rounded-full flex items-center justify-center" type="button" aria-label="Settings" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden flex items-center justify-center cursor-pointer">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A minimalist digital portrait avatar for a user profile, featuring a clean, professional headshot of an individual against a bright, neutral background. The lighting is high-key and soft, fitting a modern light-mode utility application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWDi1f6TjCBJx7WeySRp2yYLa3zaVpxg5NgSkrD9o7DBjnkx5spdr1Ad5I8IoWG4NF3LBOjVWGyr7hQcRgpMYfKW_1yZM6_vMrr6Kj4WvNsiMxiOE9ubNK6bqijDSqbogpg0q76T_zr1ZtLyQYtKCEZloVxNY02_16ULohZAYedhpBJnb5fMJT2iKw_T6qwLxuvFDxHuZM8cipwIz5rs3dlmlnFyO5PIFo5oWo8hxsdKs4FL_YsigF1bHhU7IY5JIdWAsV3egMZJm_" />
      </div>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface-bright flex flex-col gap-lg pb-24 md:pb-lg">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-sm">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Ecosystem Pulse</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Summary metrics and status signals.</p>
      </div>
      <div className="flex items-center gap-sm">
      <button className="flex items-center gap-xs px-sm py-xs bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md rounded-DEFAULT hover:bg-surface-container-low transition-colors ambient-shadow" type="button" data-action-id="filter-insights-3" onClick={actions?.["filter-insights-3"]}>
      <ListFilter className="text-sm" aria-hidden={true} focusable="false" />
                              Filter Insights
                          </button>
      <button className="flex items-center gap-xs px-sm py-xs bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md rounded-DEFAULT hover:bg-surface-container-low transition-colors ambient-shadow" type="button" data-action-id="export-summary-4" onClick={actions?.["export-summary-4"]}>
      <Download className="text-sm" aria-hidden={true} focusable="false" />
                              Export Summary
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Metrics Grid (Span 2) */}
      <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-gutter">
      {/* Metric Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex flex-col gap-xs ambient-shadow">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">Total Tasks</span>
      <div className="flex items-baseline gap-xs">
      <span className="font-headline-sm text-headline-sm text-on-surface">142</span>
      <span className="font-label-xs text-label-xs text-primary">+12%</span>
      </div>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex flex-col gap-xs ambient-shadow">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">Completed</span>
      <div className="flex items-baseline gap-xs">
      <span className="font-headline-sm text-headline-sm text-on-surface">89</span>
      </div>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex flex-col gap-xs ambient-shadow">
      <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">In Progress</span>
      <div className="flex items-baseline gap-xs">
      <span className="font-headline-sm text-headline-sm text-on-surface">45</span>
      </div>
      </div>
      {/* Metric Card 4 (Actionable Hint) */}
      <div className="bg-error-container border border-error rounded-lg p-sm flex flex-col gap-xs ambient-shadow">
      <span className="font-label-xs text-label-xs text-on-error-container uppercase flex items-center gap-xs">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-sm" aria-hidden={true} focusable="false" />
                                  Attention
                              </span>
      <div className="flex items-baseline gap-xs">
      <span className="font-headline-sm text-headline-sm text-on-error-container">3</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-error-container">tasks overdue</span>
      </div>
      </div>
      {/* Status Distribution (Span 1) */}
      <div className="md:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-lg p-sm flex flex-col gap-sm ambient-shadow">
      <h3 className="font-label-md text-label-md text-on-surface">Status Distribution</h3>
      <div className="flex-1 flex items-center justify-center relative min-h-[120px]">
      {/* Simple CSS Donut Chart representation */}
      <div className="w-24 h-24 rounded-full border-[8px] border-surface-container-low border-t-primary border-r-primary border-b-secondary border-l-tertiary relative">
      <div className="absolute inset-0 m-auto w-12 h-12 bg-surface-container-lowest rounded-full"></div>
      </div>
      </div>
      <div className="flex justify-between items-center px-xs">
      <div className="flex items-center gap-xs"><div className="w-2 h-2 bg-primary rounded-full"></div><span className="font-label-xs text-label-xs text-on-surface-variant">Done</span></div>
      <div className="flex items-center gap-xs"><div className="w-2 h-2 bg-secondary rounded-full"></div><span className="font-label-xs text-label-xs text-on-surface-variant">Active</span></div>
      <div className="flex items-center gap-xs"><div className="w-2 h-2 bg-tertiary rounded-full"></div><span className="font-label-xs text-label-xs text-on-surface-variant">Blocked</span></div>
      </div>
      </div>
      {/* Recent Activity Feed (Span 3) */}
      <div className="md:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-lg flex flex-col ambient-shadow mt-sm">
      <div className="p-sm border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-label-md text-label-md text-on-surface">Recent Activity</h3>
      <a className="font-label-xs text-label-xs text-primary hover:underline" href="#" data-action-id="view-all-6" onClick={(event) => { event.preventDefault(); actions?.["view-all-6"]?.(); }}>View All</a>
      </div>
      <div className="flex flex-col">
      {/* Activity Item 1 */}
      <div className="px-sm py-xs border-b border-outline-variant flex items-center gap-sm last:border-b-0 hover:bg-surface-container-low transition-colors mx-xs">
      <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
      <CheckCircle2 className="text-xs text-on-secondary-container" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <p className="font-body-sm text-body-sm text-on-surface truncate">Task <span className="font-label-md">#TC-104</span> marked as completed.</p>
      <span className="font-label-xs text-label-xs text-on-surface-variant">2 mins ago</span>
      </div>
      </div>
      {/* Activity Item 2 */}
      <div className="px-sm py-xs border-b border-outline-variant flex items-center gap-sm last:border-b-0 hover:bg-surface-container-low transition-colors mx-xs">
      <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
      <Pencil className="text-xs text-on-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <p className="font-body-sm text-body-sm text-on-surface truncate">Schema updated for <span className="font-label-md">User Database</span>.</p>
      <span className="font-label-xs text-label-xs text-on-surface-variant">1 hour ago</span>
      </div>
      </div>
      {/* Activity Item 3 */}
      <div className="px-sm py-xs flex items-center gap-sm hover:bg-surface-container-low transition-colors mx-xs">
      <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0">
      <Plus className="text-xs text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex flex-col justify-center">
      <p className="font-body-sm text-body-sm text-on-surface truncate">New task <span className="font-label-md">#TC-105</span> created by System.</p>
      <span className="font-label-xs text-label-xs text-on-surface-variant">3 hours ago</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Empty State Concept (Hidden by default, shown for demonstration logic) */}
      {/* <div className="flex-1 flex flex-col items-center justify-center text-center p-lg border border-dashed border-outline-variant rounded-lg bg-surface-container-lowest mt-lg">
                      <BarChart3  style={{fontVariationSettings: "'FILL' 0"}} className="text-4xl text-outline-variant mb-sm" aria-hidden={true} focusable="false" />
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">No Insights Available</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mx-auto mb-md">There is currently no task data to analyze. Start creating tasks in the Editor to generate metrics.</p>
                      <button className="bg-primary text-on-primary font-label-md text-label-md px-md py-xs rounded-DEFAULT hover:bg-primary-fixed-dim transition-colors" type="button" data-action-id="go-to-editor-5" onClick={actions?.["go-to-editor-5"]}>
                          Go to Editor
                      </button>
                  </div> */}
      </main>
      </div>
      {/* Footer (Desktop) */}
      <footer className="hidden md:flex justify-between items-center w-full px-margin-desktop py-xs fixed bottom-0 z-40 bg-surface-container-lowest border-t border-outline-variant md:ml-[240px] md:w-[calc(100%-240px)]">
      <span className="font-label-xs text-label-xs font-bold text-on-surface">Task Chip v1.0.4 - System Stable</span>
      <div className="flex items-center gap-sm">
      <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-primary transition-colors cursor-default" href="#" data-action-id="status-7" onClick={(event) => { event.preventDefault(); actions?.["status-7"]?.(); }}>Status</a>
      <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-primary transition-colors cursor-default" href="#" data-action-id="documentation-8" onClick={(event) => { event.preventDefault(); actions?.["documentation-8"]?.(); }}>Documentation</a>
      <a className="font-label-xs text-label-xs text-on-surface-variant hover:text-primary transition-colors cursor-default" href="#" data-action-id="feedback-9" onClick={(event) => { event.preventDefault(); actions?.["feedback-9"]?.(); }}>Feedback</a>
      </div>
      </footer>
      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant flex justify-around items-center h-16 z-50">
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#" data-action-id="records-10" onClick={(event) => { event.preventDefault(); actions?.["records-10"]?.(); }}>
      <Database  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs mt-1">Records</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:bg-surface-container-low transition-colors" href="#" data-action-id="editor-11" onClick={(event) => { event.preventDefault(); actions?.["editor-11"]?.(); }}>
      <Pencil  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs mt-1">Editor</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-primary border-t-2 border-primary bg-secondary-container" href="#" data-action-id="insights-12" onClick={(event) => { event.preventDefault(); actions?.["insights-12"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs mt-1 font-bold">Insights</span>
      </a>
      </nav>
    </>
  );
}
