'use client';

import RegisterFrom from '@/app/register/compoenents/RegisterForm';
import { IRegister } from '@/app/register/types';
import { register } from '@/app/register/register';

export default function Register() {
  const submitForm = (data: IRegister) => {
    console.log(register(data));
  };
  return (
    <main className={'bg-background flex h-screen items-center justify-center'}>
      <div>
        <RegisterFrom
          className="w-112.5 gap-3"
          onSubmit={(e) => submitForm(e)}
        />
      </div>
    </main>
  );
}
