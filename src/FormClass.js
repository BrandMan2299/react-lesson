import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    componentDidMount() {
        this.emailRef.current.focus();
    }

    inputChange = (e) => {
        alert(this.firstNameRef.current.value)
    }

    render() {
        return (
            <>
                <input onChange={this.inputChange} ref={this.emailRef} placeholder="First Name" />
                <input ref={this.passwordRef} placeholder="Last Name" />
            </>
        )
    }
}

export default Form;