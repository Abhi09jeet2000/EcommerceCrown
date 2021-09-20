import React from 'react'

import MenuItem from '../menu-item/menu-item'
import SECTIONS_DATA from './sections.data'
import './directory.scss'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: SECTIONS_DATA,
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    )
  }
}

export default Directory
