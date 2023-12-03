import React from 'react'

const Footer = ({items}) => {
  return (
    <footer>
       {items.length} List {items.length ===1 ? 'item': 'items'}
    </footer>
  )
}

export default Footer
