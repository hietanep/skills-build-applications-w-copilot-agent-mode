import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'activityType', label: 'Activity' },
  { key: 'username', label: 'Athlete' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'caloriesBurned', label: 'Calories' },
  {
    key: 'activityDate',
    label: 'Date',
    render: (value) => value ? new Date(value).toLocaleDateString() : 'Not recorded',
  },
  { key: 'notes', label: 'Notes' },
]

export default function Activities() {
  return <ResourceTable title="Activities" resource="activities" columns={columns} />
}