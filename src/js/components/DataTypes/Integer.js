import React from 'react';
import DataTypeLabel from './DataTypeLabel';

//theme
import Theme from './../../themes/getStyle';

export default class extends React.PureComponent {

    render() {
        const {props} = this;
        const type_name = props.typeOverride || 'int';
        return (
            <div {...Theme(props.theme, 'integer')}>
                <DataTypeLabel type_name={type_name} {...props} />
                {this.props.value}
            </div>
        );
    }

}
