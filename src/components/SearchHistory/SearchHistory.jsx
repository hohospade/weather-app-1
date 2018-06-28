import React from 'react';

class SearchHistory extends React.Component {
    render() {
        const items = this.props.searchItems;
        return (
            <div className='card border-primary mb-3'>
                <div className='card-header text-white bg-primary'>Search History</div>
                <div className='card-body'>
                    <table className='table table-sm table-striped'>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th style={{ width: 120 }}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                return (
                                    <tr key={item.time}>
                                        <td>{item.city}</td>
                                        <td><p style={{ 'marginBottom': '0px' }}>{item.date}</p><p style={{ 'marginBottom': '0px' }}>{item.time}</p></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default SearchHistory;