import file from '../Data/status.real'

const fileToString = () => {
    fetch(file)
      .then((response) => response.text())
      .then(data => {
          console.log(JSON.stringify(data))
      })
}

export default fileToString;