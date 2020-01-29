import file from '../Data/status.real'

const fileToString = () => {
    fetch(file)
      .then((response) => response.text())
      .then(data => {
          console.log(data)
      })
}

export default fileToString;