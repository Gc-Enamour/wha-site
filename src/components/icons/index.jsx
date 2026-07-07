function Icon({ size = 24, path, viewBox = "0 0 24 24", ...rest }) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" stroke="currentColor"
      strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {path}
    </svg>
  );
}

export function Lotus({ size = 24, ...p }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" aria-hidden="true" {...p}>
      <path d="M19 33c0 0-11-7-11-16 0-5 4-9 11-9s11 4 11 9c0 9-11 16-11 16Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M10 18c-3-1-7 1-7 6 0 4 3 6 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M28 18c3-1 7 1 7 6 0 4-3 6-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M13 12c-1-4 1-9 6-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M25 12c1-4-1-9-6-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function Sun({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/>
    </>} />
  );
}

export function Moon({ size = 24 }) {
  return (
    <Icon size={size} path={<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/>} />
  );
}

export function Translate({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <path d="M4 5h8M8 4v1.5c0 3-1.8 6.5-5 8M6 8c.6 2 2.4 3.8 4.5 4.8"/>
      <path d="m13 20 3.5-9 3.5 9M14.3 16.8h4.4"/>
    </>} />
  );
}

export function ChevDown({ size = 24 }) {
  return <Icon size={size} path={<path d="m6 9 6 6 6-6"/>} />;
}

export function ChevRight({ size = 24 }) {
  return <Icon size={size} path={<path d="m9 6 6 6-6 6"/>} />;
}

export function Search({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <circle cx="11" cy="11" r="7"/>
      <path d="m16.5 16.5 4 4"/>
    </>} />
  );
}

export function Shield({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <path d="M12 2 4 6v5c0 5.2 3.4 9.8 8 11 4.6-1.2 8-5.8 8-11V6Z"/>
      <path d="m9 12 2 2 4-4"/>
    </>} />
  );
}

export function Award({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <circle cx="12" cy="9" r="6"/>
      <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5"/>
    </>} />
  );
}

export function Book({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <path d="M4 4h7a4 4 0 0 1 4 4v12H4V4ZM15 8h1a4 4 0 0 1 4 4v8h-5V8Z"/>
    </>} />
  );
}

export function Users({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <circle cx="9" cy="7" r="4"/>
      <path d="M3 21v-2a6 6 0 0 1 12 0v2"/>
      <path d="M16 3.1a4 4 0 0 1 0 7.8M21 21v-2a6 6 0 0 0-5-5.95"/>
    </>} />
  );
}

export function Cert({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <rect x="3" y="4" width="18" height="14" rx="2"/>
      <path d="M7 8h10M7 12h6M9 20l3-3 3 3"/>
    </>} />
  );
}

export function Star({ size = 24 }) {
  return (
    <Icon size={size} path={<path d="m12 2 3.1 6.2L22 9.3l-5 4.9 1.2 6.8L12 18l-6.2 3 1.2-6.8-5-4.9 6.9-1.1Z"/>} />
  );
}

export function Check({ size = 24, strokeWidth }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth ?? 1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 13 4 4L19 7"/>
    </svg>
  );
}

export function Sparkle({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>
    </>} />
  );
}

export function Layers({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <path d="m2 8 10-5 10 5-10 5Z"/>
      <path d="m2 13 10 5 10-5"/>
      <path d="m2 18 10 5 10-5"/>
    </>} />
  );
}

export function Quote({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <path d="M3 21c3-2 4-5 4-8H3V6h7v7c0 3-1 6-4 8ZM14 21c3-2 4-5 4-8h-4V6h7v7c0 3-1 6-4 8Z"/>
    </>} />
  );
}

export function Ig({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none"/>
    </>} />
  );
}

export function Fb({ size = 24 }) {
  return (
    <Icon size={size} path={
      <path d="M14 8.5h2V5.5h-2.2C11.4 5.5 10 7 10 9v1.5H8v3h2V21h3v-7.5h2.2l.5-3H13V9c0-.4.3-.5.6-.5H14Z"/>
    } />
  );
}

export function Yt({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <rect x="3" y="6" width="18" height="12" rx="3.5"/>
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" fill="currentColor" stroke="none"/>
    </>} />
  );
}

export function Pencil({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"/>
    </>} />
  );
}

export function X({ size = 24 }) {
  return <Icon size={size} path={<path d="M18 6 6 18M6 6l12 12"/>} />;
}

export function List({ size = 24 }) {
  return (
    <Icon size={size} path={<>
      <line x1="8" y1="6" x2="21" y2="6"/>
      <line x1="8" y1="12" x2="21" y2="12"/>
      <line x1="8" y1="18" x2="21" y2="18"/>
      <line x1="3" y1="6" x2="3.01" y2="6"/>
      <line x1="3" y1="12" x2="3.01" y2="12"/>
      <line x1="3" y1="18" x2="3.01" y2="18"/>
    </>} />
  );
}
