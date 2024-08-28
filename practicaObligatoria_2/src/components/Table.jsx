import PropTypes from 'prop-types';
import TableItem from './TableItem';

const Table = ({ table }) => {
    return(
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Income</th>
                </tr>
            </thead>
            <tbody>
                {table.map(item => (
                    <TableItem 
                        key={item.id} 
                        brand={item.brand} 
                        income={item.income} 
                    />
                ))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    table: PropTypes.array
};

export default Table;