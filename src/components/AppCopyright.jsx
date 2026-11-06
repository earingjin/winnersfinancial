export default function AppCopyright({ className = '' }) {
  return (
    <div className={`app-copyright${className ? ` ${className}` : ''}`}>
      Copyright &copy; 2026 THEHUMANAICENTER. All rights reserved.
    </div>
  );
}
