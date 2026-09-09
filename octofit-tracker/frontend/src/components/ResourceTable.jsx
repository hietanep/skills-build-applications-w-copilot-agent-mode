import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function ResourceTable({ title, resource, columns }) {
  const [rows, setRows] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    fetchCollection(resource, controller.signal)
      .then((data) => {
        setRows(data)
        setStatus('success')
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
          setStatus('error')
        }
      })

    return () => controller.abort()
  }, [resource])

  return (
    <section className="resource-view" aria-labelledby={`${resource}-title`}>
      <header className="view-heading">
        <p className="eyebrow">OctoFit directory</p>
        <h1 id={`${resource}-title`}>{title}</h1>
        <span className="record-count">
          {status === 'success' ? `${rows.length} records` : 'Live data'}
        </span>
      </header>

      {status === 'loading' && <p className="status-message">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && (
        <div className="alert alert-danger" role="alert">
          Unable to load {title.toLowerCase()}: {error}
        </div>
      )}
      {status === 'success' && rows.length === 0 && (
        <p className="status-message">No {title.toLowerCase()} found.</p>
      )}
      {status === 'success' && rows.length > 0 && (
        <div className="table-responsive data-table-wrap">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row._id ?? `${resource}-${index}`}>
                  {columns.map((column) => (
                    <td key={column.key} data-label={column.label}>
                      {column.render ? column.render(row[column.key], row) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceTable