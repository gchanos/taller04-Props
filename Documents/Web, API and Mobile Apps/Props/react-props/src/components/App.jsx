import React from "react";
import EmployeeList from "./EmployeeList";

class App extends React.Component {
    render() {
        console.log('render');
        return (
            <div className="App">
                <EmployeeList />
            </div>
        )
    }
}

export default App;