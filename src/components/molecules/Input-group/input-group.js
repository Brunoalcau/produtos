import React, { Component } from 'react';
import Button from '../../atoms/Button/button';
import Icon from '../../atoms/Icon/icon';
import Input from '../../atoms/Input/input';
import './input-group.scss';

export default class InputGroup extends Component {
    render(){
        return(
             <div className="group">
                <Input className="input-search" placeholder="Nunca dejes de Buscar"/>
                <span>
                    <Button className="btn btn-gray btn-sm btn-group">
                        <Icon className="icon-search" />
                    </Button>
                </span>
             </div>           
        );
    }
}