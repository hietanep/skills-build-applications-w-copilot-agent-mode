import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'coach', label: 'Coach' },
  { key: 'city', label: 'City' },
  { key: 'memberCount', label: 'Members' },
  { key: 'motto', label: 'Motto' },
]

export default function Teams() {
  return <ResourceTable title="Teams" resource="teams" columns={columns} />
}