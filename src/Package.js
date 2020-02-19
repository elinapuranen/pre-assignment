import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import parseData from './Parse.js'

const Package = (props) => {

  const {name} = props.match.params

  const [ data, setData ] = useState([])

  useEffect(() => {
    parseData().then(function(result){
      setData(result)
    })
  }, [])

  const index = data.findIndex(element => element.Package === name)

  const dataWithDependencies = data.filter(element => element.Depends !== undefined)

  let reverseDependencies = findReverseDependencies()

  function findReverseDependencies(){
    let array = []
    if (dataWithDependencies.length > 0) {
      dataWithDependencies.map(item => {
        if (item.Depends.includes(name)) {
          array.push(item.Package)
        }   
        item.Depends.map(itemName => {
          if (itemName.includes('|')) {
            const splittedName = itemName.split('| ')
            if (splittedName.includes(name)) {
              array.push(item.Package)
            }
          }
        })
      })
    }
    return array
  }

  let dependencies = findDependencies()
 
  function findDependencies() {
    let array = []
    if (data.length > 0 && data[index].Depends !== undefined) {
      data[index].Depends.map(name => {
        if (name.includes('|')){
          array.push(...name.split('| '))
        }
        else array.push(name)
      }
      )
    }
    return array
  }

  return (
    <div className="packageInfo">
      {data.length > 0 &&
      <div>
        <h3 className="packageName">
        Package Name: {name}
        </h3>
        <div className="description">
        Description: {data[index].Description}
        </div>
        <div className="dependencies">
        Dependencies: {dependencies.length > 0 &&
        <div>
          {dependencies.map(name =>
            <div key={name}>
              {(data.findIndex(element => element.Package === name)) !== -1 ?
                <Link to={`/packages/${name}`}>{name}</Link>
                : name
              }
            </div>  
          )}
        </div>
          }
        </div>
        <div className="reverseDependencies">
        Reverse Dependencies: {reverseDependencies.length > 0 &&
        <div>
          {reverseDependencies.map(name => 
            <div key={name}>
              <Link to={`/packages/${name}`}>{name}</Link>
            </div>
          )}
        </div>
          }
        </div>
      </div>
      }
    </div>
  )
}

export default Package