import TypeIt from 'typeit';
import React, {Component} from 'react';
import './TypeItStatement.css'

class TypeItStatement extends Component {
    constructor (props) {
        super(props);
      }

      componentDidMount () {
        new TypeIt(this.el, this.props);
      }

      render(){
        return <span className="type-it" ref={(el) => { this.el = el; }}>{this.props.children}</span>;
    }
}

export default TypeItStatement;
