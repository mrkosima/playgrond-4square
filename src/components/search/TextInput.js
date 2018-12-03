import * as React from "react";

export class TextInputComponent extends React.PureComponent {
    render() {
        const { text, placeholder } = this.props;
        return (
            <input
                placeholder={placeholder}
                value={text}
                onChange={this.onChange}
                className="text-input"
            />
        );
    }
    onChange = event => {
        this.props.onChange(event.target.value);
    };
}
