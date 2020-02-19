import fileToString from './FetchData'

const parseData = () => { 
  return fileToString().then(function(result) {
    var data = result.split('\n\n').map(entry => {
      const obj = {}
      entry.split('\n').forEach(keyValue => {
        const split = keyValue.split(': ')
        const key = split[0]
        const value = split[1]
        obj[key] = key === 'Depends' ? value.replace(/ *\([^)]*\) */g, '').split(', ') : value
      })
      return obj
    })
    return data
  })
}

export default parseData