import React, { useState } from 'react'
import { Tabs } from '../components/tabs/Tabs';
import { FormSing } from '../components/forms/FormSing';
import { FormReg } from '../components/forms/FormReg';

export const Auth = () => {

   const dataTabs = [
      {
         id: 1,
         name: 'Sing In',
         form: <FormSing />
      },
      {
         id: 2,
         name: 'Register',
         form: <FormReg />
      }
   ]
   return (
      <>
         <Tabs dataTabs={dataTabs} />
      </>
   )
}
