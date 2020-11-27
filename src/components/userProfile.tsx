// mainLayout.tsx
import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

interface User {
  name: string
  status: string
  image?: string
}

export const query = graphql`
  {
    MyNodes {
      profilePic {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const UserProfile = (props: User) => {
  return <div className=""></div>
}

export default UserProfile
