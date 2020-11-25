import React from "react"

interface Props {}

const Index = (_props: Props) => {

  return (
    <>
      <div className="container max-w-md mx-auto mt-10">
        <div className="overflow-hidden rounded shadow-lg">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Joyn Platform</div>
            <p className="text-base text-gray-700">
              Development in progress
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
