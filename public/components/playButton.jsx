import React from 'react'

export default class PlayButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <svg width={this.props.width ?? "30"} height={this.props.height ?? "48"} viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.2468 21.7871L1.19805 0.892474C0.70332 0.523931 0 0.877019 0 1.49393V46.3719C0 47.0123 0.750727 47.3581 1.23741 46.9419L29.2861 22.9586C29.6519 22.6459 29.6327 22.0745 29.2468 21.7871Z" fill={this.props.fill ?? "#741384"} />
      </svg>
    )
  }
}