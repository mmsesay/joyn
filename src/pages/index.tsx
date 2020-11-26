import React from "react"

// local imports
import Layout from '../layouts/mainLayout'

interface Props {}

const Index = (_props: Props) => {

  return (
    <Layout>
      <div className="card-container">
        <div className="bg-white card-dim shadow rounded-sm absolute">
          <div className="flex">
            <div className="w-2/5 p-6 h-full bg-baseGrayLight border-r-2 border-gray-300">
              <p>Left side</p>
            </div>
            <div className="w-3/5 p-6">
              <p>right side</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
