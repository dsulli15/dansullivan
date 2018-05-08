import React, { Component } from 'react'
import {Button, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";


class NavBar extends Component{
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        return (
            <Menu>
                <Menu.Item
                    as = {NavLink}
                    to = '/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as = {NavLink}
                    to = '/about'
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default NavBar