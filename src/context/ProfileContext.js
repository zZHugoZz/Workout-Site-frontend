import React, { useState, createContext } from "react";

export const ProfileContext = createContext();

export default function ProfileProvider({ children }) {
  const contextData = {};

  return (
    <ProfileContext.Provider value={contextData}>
      {children}
    </ProfileContext.Provider>
  );
}

// Probably not needed
