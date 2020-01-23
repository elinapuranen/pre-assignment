import React, { Component } from 'react';

function parseFormat(data) {
  var
    category,
    output = {};
  
  data.split('\n').forEach(function(line) {
      var item = line.split(':');
      if (item[0].match(/Package/gi)) {
          category = item[1].trim()
          output[category] = []
      } else {
          var name = item[0].trim()
          output[category].push({
              [name]: item[1].trim()
          })
      }
      return output;
  })
}

var finalOutput = []

var parseString = parseFormat('../status.real')

finalOutput.push(parseString)

console.log(JSON.stringify(finalOutput));

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
