import React from "react";

class Excel extends React.Component{
    _renderToolbar() {

    }

    _renderTable() {

    }

    render() {
        return (
            <div className="Excel">
                {this._renderToolbar()}
                {this._renderTable()}
                Excel TEST
            </div>
        );
    }
}

export default Excel