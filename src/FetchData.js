import file from '../Data/status.real'

var strdata = 'data'

const fileToString = () => {
    fetch(file)
      .then((response) => response.text())
      .then(data => {
          strdata = data
      })
}

export default fileToString;