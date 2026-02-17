'use client';

import { ChangeEvent, useState } from 'react';
import { cn } from '@/app/utils/cn';
import { getPasswordStrength } from '@/app/utils/passwor-strength';
import { inputTypes } from '@/app/register/lib';

interface Props {
  placeholder?: string;
  type?: string;
  value?: string;
  error?: boolean;
  className?: string;
  required?: boolean;
  onChange?: (value: string) => void;
  title?: string;
}

export default function Input({
  placeholder = ' ',
  type = 'text',
  error = false,
  value,
  className = '',
  required = true,
  onChange,
  title = '',
}: Props) {
  const [content, setContent] = useState<string>('');

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const submit = type === inputTypes.SUBMIT;

  return (
    <>
      <div
        className={cn(
          className,
          'relative rounded-lg flex flex-col gap-3 mx-6',
        )}
      >
        {!submit && <div className={'text-sm'}>{!submit && title}</div>}
        <input
          // On met TOUT dans le cn() pour éviter les concaténations bizarres
          className={cn(
            // Styles de base communs
            'flex flex-col items-center justify-center border px-3 py-px border-accent/10 focus-visible:outline-none hover:opacity-80',

            // État d'erreur
            error &&
              'border-red-500/50 ring-red-500/10 focus-visible:ring-red-500/30 outline-2 outline-red-600',

            // Cas spécifique au submit
            submit && 'cursor-pointer',
          )}
          type={type}
          placeholder={placeholder}
          value={type === 'submit' ? value : content}
          onChange={(e) => {
            changeValue(e);
            onChange?.(e.target.value);
          }}
          required={required}
        />
        {/* La barre de force : seulement si c'est un password et qu'il y a du texte */}
        {type === 'password' && (
          <div
            className={cn(
              'absolute bottom-px translate-x-1 h-0.5',
              'shadow-[0_0_8px_rgba(34,197,94,0.6)]',
              'rounded-full transition-all duration-500 ease-out',
            )}
            // Ici on gère la largeur dynamiquement
            style={{
              width: `${(getPasswordStrength(content) * 80) / 5}%`,
              background: `rgba(${255 - (getPasswordStrength(content) * 255) / 5}, ${(getPasswordStrength(content) * 200) / 5}, 0)`,
            }}
          />
        )}
      </div>
    </>
  );
}
