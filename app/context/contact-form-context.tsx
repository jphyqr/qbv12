'use client';

import React from 'react';

const ContactFormContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
    const [contactMeDialog, setContactMeDialog] = React.useState(false);
  return (
    <ContactFormContext.Provider value={[contactMeDialog, setContactMeDialog]}>
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = React.useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}