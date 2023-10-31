"use client"
import { Authenticator } from '@aws-amplify/ui-react'
import React, {  } from 'react'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';

import { awsExports } from '../authentication/Configuration'
import AuthenticatedShelter from './AuthenticatedShelter'
import { formFields } from '@/app/types';
Amplify.configure({ ...awsExports, ssr: true })

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
