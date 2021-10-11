import React from 'react'

import MenuItem from '../menu-item/menu-item'
// import SECTIONS_DATA from './sections.data'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/director.selectors'

import './directory.scss'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
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

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStatetoProps)(Directory)
