import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, name: "Book" },
      { id: 2, value: 0, name: "Pen" },
      { id: 3, value: 0, name: "Pencil" },
      { id: 4, value: 0, name: "Eraser" }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    //console.log(this.state.counters[0]);
    this.setState({ counters });

    // own
    // const counters = this.state.counters.map(c => {
    //   if (c === counter) {
    //     c.value++;
    //   }
    //   return c;
    // });
    // console.log(this.state.counters[0]);
    // this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    //console.log(this.state.counters[0]);
    this.setState({ counters });
  };

  handleReset = () => {
    //console.log(this.state.counters[0]);
    const counter = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    //console.log(this.state.counters[0]);
    this.setState({ counter });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
