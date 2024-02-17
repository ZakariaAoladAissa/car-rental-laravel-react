import { useTable,useGlobalFilter } from 'react-table';

const Table =({columns,data})=>{
    const {
        getTableProps,
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        setGlobalFilter,
        state: {globalFilter }, 

    } 
    = useTable({ columns, data },useGlobalFilter);  
    return(
        <>
            <div className="search">
              <input
                type="text"
                value={globalFilter || ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search..."
                style={{padding:"4px",paddingLeft:"7px",borderRadius:"3px",border:"solid 1px grey"}}
              />
            </div>
            <div className="table-container">
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        </>
    )
}
export default Table