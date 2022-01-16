import React, { useMemo } from "react";
import UserServices from "../api/UserServices";
import { useTable } from 'react-table'
import axios from "axios";
import { columnsdata } from "./column";
import './table.css'


export const BasicTable = ({ column, usersData }) => {

    // const datajwwhdj = React.useMemo(
    //     () => [
    //         {
    //             firstname: 'Minsk',
    //             lastname: 'henry',
    //             emailaddress: 'nink@gmail.com',
    //             description: "Hello How Are Your",
    //             testfield: "Im Testing this field"
    //         },
    //         {
    //             firstname: 'Minsk',
    //             lastname: 'henry',
    //             emailaddress: 'nink@gmail.com',
    //             description: "Hello How Are Your"
    //         },

    //     ],
    //     []
    // )

    // const columnsswsw = React.useMemo(
    //     () => [
    //         {
    //             Header: 'First Name',
    //             accessor: 'firstname'
    //         }, {
    //             Header: 'Last Name',
    //             accessor: 'lastname'
    //         },
    //         {
    //             Header: 'Email Address',
    //             accessor: 'emailaddress'
    //         },
    //         {
    //             Header: 'Description',
    //             accessor: 'description'
    //         },
    //     ],
    //     []
    // )    
    console.log("User Data")
    console.log(usersData.length)
    let useDataArray = usersData.length > 0 ? usersData[0] : usersData;
    console.log(useDataArray)

    const columns = React.useMemo(() => column, [])
    let data = React.useMemo(() => useDataArray)
    console.log(useDataArray)
    console.log(data)

    // console.log("USER DATA")
    // console.log(column)
    // console.log(data)


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    console.log("Hello")
    console.log(columns)
    console.log(data)





    return (

        <div>
            <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column)}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        color: 'black',
                                    }}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '🔽'
                                                : '🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'solid 1px gray',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

