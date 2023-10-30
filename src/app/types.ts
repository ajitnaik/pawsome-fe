
export interface Pet {
    permalink: string,
    adoptionProcess: string,
    applicationUrl: string,
}

export interface ShelterInfo {
    username: string,
    website: string,
    adoptionProcess: string,
    applicationUrl: string,   
    locations: string[],
    remote: boolean,
}
export const PetSearchNav: string = 'Find a Pet'

export const ShelterNav: string = 'Shelter'

export const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter Your Email',
        isRequired: true,
        label: 'Email'
      },      
    },
    signUp: {
        username: {
            placeholder: 'Enter Your Email',
            isRequired: true,
            label: 'Email'
          },        
      },
  }