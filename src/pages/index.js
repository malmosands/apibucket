import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import data from "../components/apis"

var moment = require('moment');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex">
          <div className="flex items-center">
            <span>{data.length} entries found.</span>
          </div>
          <div className="ml-auto flex items-center">
            <span className="font-semibold mr-3 text-sm text-gray-700">Filter by</span>
            <form>
              <select className="bg-white border bg-opacity-50 px-3 py-2 rounded-lg">
                <option>Newest first</option>
                <option>Oldest first</option>
                <option>Most popular first</option>
              </select>
            </form>
          </div>
        </div>
    </div>
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-12 gap-4">
        {
          data.map((item, index) => (
            <div key={index} className="col-span-3">
              <div className="bg-white rounded shadow-sm hover:shadow">
                <div className="p-6 h-32 flex bg-gray-200 rounded-t">
                  <h4 className="font-medium truncate mt-auto">{item.title}</h4>
                </div>
                <div className="p-6">
                  <p>{item.description}</p>
                  <div className="grid grid-cols-6 gap-px border-t mt-4">
                    <div className="col-span-3 pt-4 leading-none">
                      <span className="block text-xs font-semibold">Category</span>
                      <span className="text-xs">{item.category}</span>
                    </div>
                    <div className="col-span-3 pt-4 leading-none">
                      <span className="block text-xs font-semibold">Last updated</span>
                      <span className="text-xs">{moment(item.added).fromNow()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </Layout>
)

export default IndexPage
