import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // can be used instead of = () => {}
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = product => {
        console.log('Increment Clicked', this);
        console.log(product)
        this.setState({ value: this.state.value +1 })
    }

    render() { 
 
        console.log(this.props);

        return (
        <React.Fragment>
            {this.props.children}
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>

            <button 
            onClick={() => this.handleIncrement({ id: 1 })} 
            className='btn btn-secondary btn-sm'
            >
                Increment
            </button>
        </React.Fragment>
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.state
        return count === 0 ? 'Zero' : count
    };
}
 
export default Counter;
