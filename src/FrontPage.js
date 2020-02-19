import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import parseData from './Parse.js'

const FrontPage = () => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    parseData().then(function(result){
      setData(result)
    })
  }, [])

  data.sort(function(a, b) {
    if (a.Package < b.Package) { return -1 }
    if (a.Package > b.Package) { return 1 }
    return 0
  })

  return (
    <div>
      <ul className="List">
        {data.length > 0 &&
            <div>{data.map(item =>
              <div key={item.Package} className="packageItem">
                <Link to={`/packages/${item.Package}`}>{item.Package}</Link>
              </div>)}</div>
        }
      </ul>
    </div>
  )
}

export default FrontPage
