'use client';

import Input from '@/app/ui/design-system/inputs/Input';
import { useState } from 'react';
import { inputTypes, registerFields } from '@/app/register/lib';
import { IRegister } from '@/app/register/types';
import { cn } from '@/app/utils/cn';

interface RegisterFormProps {
  onSubmit: (data: IRegister) => void;
  className: string;
}

export default function RegisterFrom({
  onSubmit,
  className,
}: RegisterFormProps) {
  const [formData, setFormData] = useState<IRegister>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <main
      className={cn(
        className,
        'flex flex-col border bg-accent/5 border-accent/30 rounded-xl justify-center py-6',
      )}
    >
      <form
        className={'grid gap-6'}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        <Input
          title={'Firstname'}
          type={inputTypes.TEXT}
          placeholder={'firstname'}
          onChange={(e) => {
            handleChange(registerFields.FIRSTNAME, e);
          }}
        />
        <Input
          title={'Lastname'}
          type={inputTypes.TEXT}
          placeholder={'lastname'}
          onChange={(e) => {
            handleChange(registerFields.LASTNAME, e);
          }}
        />
        <Input
          title={'Email'}
          type={'email'}
          placeholder={'email'}
          value={formData.email}
          onChange={(e) => {
            handleChange('email', e);
          }}
        />
        <Input
          title={'Password'}
          type={'password'}
          placeholder={'password'}
          value={formData.password}
          onChange={(e) => {
            handleChange('password', e);
          }}
        />
        <div className={'flex justify-end'}>
          <Input
            type={'submit'}
            value={'Login'}
            className={'bg-white text-black w-30 h-10'}
          />
        </div>
      </form>
    </main>
  );
}
