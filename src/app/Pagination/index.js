import {Pagination} from 'react-instantsearch'

function MyPagination (props) {
  return (
    <div>
      <p>The current page is {props.page}.</p>
      <p>The total number of page is {props.nbPages}.</p>
      <a
        onClick={e => {
          e.preventDefault()
          props.refine(props.page - 1)
        }}
        href={props.createURL(props.page - 1)}
      >
        Previous page
      </a>
      <a
        onClick={e => {
          e.preventDefault()
          props.refine(props.page + 1)
        }}
        href={props.createURL(props.page + 1)}
      >
        Next page
      </a>
    </div>
  )
}

// `Pagination.connect` accepts the same `id` prop as `Pagination`.
export default Pagination.connect(MyPagination)
