export interface GlossaryEntry {
  term: string;
  def: string;
  signature?: string;
  definition?: string;
  whenToUse?: string;
  example?: string;
  description?: string;   // compat/fallback
}
