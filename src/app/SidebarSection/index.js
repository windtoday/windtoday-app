import React from 'react'

function SidebarSection ({title, item}) {
  return (
    <article data-app={`facet-${title}`} className='ph3 ph4-l pb4'>
      <div className='f6 fw6 ttu tracked pb2 light-silver'>{title}</div>
      {item}
    </article>
  )
}

export default SidebarSection
