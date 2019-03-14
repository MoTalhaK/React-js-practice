import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }

    // state = {
    //     value: this.props.value,
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        // console.log('Increment Clicked', this);
        console.log(product);
        this.setState({value: this.state.value + 1});
    };

    render() {
        // console.log('props', this.props);

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={(product) => this.handleIncrement(product)}
                        className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.id)}
                        className="btn btn-danger btn-sm m-2">
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
