import React, { Component } from 'react'
import Printer, { print } from 'react-pdf-print'

const ids = ['1']

export default class print extends Component {
    render() {
        return (
            <table>
        <thead>
          <th>column 1</th>
          <th>column 2</th>
          <th>column 3</th>
        </thead>
        <tbody>
          <tr>
            <td>data 1</td>
            <td>data 2</td>
            <td>data 3</td>
          </tr>
        </tbody>
      </table>
        )
    }
}


