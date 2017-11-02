//Component example

class App extends React.Component {
    render() {
       var heading = <h1>Hello World from Component!</h1>;
       return heading;
    }
}

var mountRoot = document.querySelector("#app");
ReactDOM.render(<App />, mountRoot);