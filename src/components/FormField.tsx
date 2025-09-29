import { AlertCircle } from '@/components/Icons';

type FormFieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
};

export default function FormField({ 
  label, 
  error, 
  children, 
  required = false,
  className = ''
}: FormFieldProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <label className="block text-sm font-medium text-primary-500">
        {label}
        {required && <span className="text-danger-500 ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-sm text-danger-500 flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { 
  error?: boolean;
};

export function Input({ 
  className = '', 
  error = false, 
  ...props 
}: InputProps) {
  return (
    <input
      className={`w-full px-3 py-2 border rounded-md transition-colors
        ${error 
          ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500' 
          : 'border-slate-300 focus:ring-accent-500 focus:border-accent-500'
        }
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        placeholder:text-slate-400
        ${className}`}
      {...props}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { 
  error?: boolean;
};

export function Textarea({ 
  className = '', 
  error = false, 
  ...props 
}: TextareaProps) {
  return (
    <textarea
      className={`w-full px-3 py-2 border rounded-md transition-colors resize-vertical
        ${error 
          ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500' 
          : 'border-slate-300 focus:ring-accent-500 focus:border-accent-500'
        }
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        placeholder:text-slate-400
        ${className}`}
      {...props}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { 
  error?: boolean;
  placeholder?: string;
};

export function Select({ 
  className = '', 
  error = false,
  placeholder,
  children,
  ...props 
}: SelectProps) {
  return (
    <select
      className={`w-full px-3 py-2 border rounded-md transition-colors bg-white
        ${error 
          ? 'border-danger-500 focus:ring-danger-500 focus:border-danger-500' 
          : 'border-slate-300 focus:ring-accent-500 focus:border-accent-500'
        }
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        ${className}`}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  );
}
