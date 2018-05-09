import React, { Component } from 'react'
import {Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import './styles/NavBar.css'


class NavBar extends Component{
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        console.log(this.state.activeItem)
        const { activeItem } = this.state.activeItem
        return (
            <Menu secondary>
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