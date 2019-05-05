import React, {Component} from 'react';
import './Family_Member.css'

class FamilyMember extends Component{
    render(){
        console.log(this.props)
        return (
            <div className="Family-Member">
                {this.props.crap}
                <h3>Name: {this.props.member.name}</h3>
                <h3>Age in 10 years: {this.props.member.age + 10}</h3>
                <p>Eye Color: {this.props.member.eyeColor}</p>
            </div>
        );
    }
}

export default FamilyMember