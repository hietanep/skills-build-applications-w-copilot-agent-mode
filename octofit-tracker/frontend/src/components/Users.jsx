import ResourceTable from './ResourceTable.jsx'

const columns = [
  {
    key: 'firstName',
    label: 'Member',
    render: (value, row) => `${value} ${row.lastName}`,
  },
  { key: 'username', label: 'Username', render: (value) => `@${value}` },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'teamName', label: 'Team' },
  { key: 'goal', label: 'Goal' },
]

export default function Users() {
  return <ResourceTable title="Users" resource="users" columns={columns} />
}