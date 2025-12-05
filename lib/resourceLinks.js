export const RESOURCE_ORDER = ['website', 'github', 'pdf'];

export const RESOURCE_LABELS = {
  website: 'Website',
  github: 'GitHub',
  pdf: 'PDF',
};

export const RESOURCE_ICONS = {
  website: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9Z" />
    </svg>
  ),
  github: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.217.68-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.109-1.463-1.109-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.908-1.295 2.747-1.026 2.747-1.026.547 1.376.204 2.393.1 2.646.64.698 1.028 1.59 1.028 2.682 0 3.842-2.338 4.688-4.566 4.936.359.308.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.58.688.482A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
    </svg>
  ),
  pdf: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
};

export const detectResourceType = (href = '') =>
  href.includes('github.com') ? 'github' : 'website';
