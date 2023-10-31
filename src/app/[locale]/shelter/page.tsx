"use client"
import { Authenticator, translations } from '@aws-amplify/ui-react'
import React, {  } from 'react'
import { Amplify, I18n } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';

import { awsExports } from '../authentication/Configuration'
import AuthenticatedShelter from './AuthenticatedShelter'
import { formFields } from '@/app/types';
Amplify.configure({ ...awsExports, ssr: true })
I18n.putVocabularies(translations);
I18n.putVocabularies({
    de: {
        'Enter Your Email': 'Geben Sie Ihre E-Mail ein',
        'Please confirm your Password': 'Bitte bestätigen Sie Ihr Passwort'
    },
});
const Shelter = () => {
  return (
    <div>
      <Authenticator formFields={formFields}>
        {({ user }) => {
          return <AuthenticatedShelter user={user} />
        }}
      </Authenticator>
    </div>
  )
}

export default Shelter
