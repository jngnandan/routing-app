// Write your JS code here

import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <ul className='flex flex-row justify-between items-center my-2'>
                <div className='flex flex-row justify-between items-center'>
                    <img className='w-12 mr-1' src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" />
                    <h1 className='text-xl font-bold'>Wave</h1>
                </div>
                <div className='flex flex-row justify-around items-center'>
                    <li>
                        <Link className='px-4' to="/" >Home</Link>
                    </li>
                    <li>
                        <Link className='px-4' to="/about" >About</Link>
                    </li>
                    <li>
                        <Link className='px-4' to="/contact" >Contact</Link>
                    </li>
                </div>

            </ul>
        )
    }
}

export default Header
