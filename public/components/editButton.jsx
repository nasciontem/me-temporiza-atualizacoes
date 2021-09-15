import React from 'react'

export default class EditButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width={this.props.width ?? "16"} height={this.props.height ?? "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.21249 11.4652L4.67696 7.92965L11.6066 0.999999L15.1421 4.53553L8.21249 11.4652Z" stroke="#453E69" stroke-width="0.65" />
        <path d="M4.53554 8.07107L2.76777 13.3744L8.07107 11.6066" stroke="#453E69" stroke-width="0.65" />
      </svg>
    )
  }
}