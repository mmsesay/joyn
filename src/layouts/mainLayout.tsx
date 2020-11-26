// mainLayout.tsx 
import React, { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

const Layout = ({ children }: IProps) => {

    return (
        <div className="bg-baseGray w-full h-screen static">
            <div className="bg-baseTeal w-full h-32 pt-10">
                {children}
            </div>
        </div>
    )
}

export default Layout
