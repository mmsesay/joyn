// mainLayout.tsx
import React, { ReactNode } from "react"

interface IProps {
  children: ReactNode
}

const UserProfile = ({ children }: IProps) => {
  return (
    <div className="bg-baseGray w-full">
      <div className="bg-baseTeal w-full h-32 pt-10">{children}</div>
    </div>
  )
}

export default UserProfile
