import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'focusArea', label: 'Focus' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Minutes' },
  { key: 'suggestedFor', label: 'Suggested for' },
  {
    key: 'exercises',
    label: 'Exercises',
    render: (value) => Array.isArray(value) ? value.join(', ') : value,
  },
]

export default function Workouts() {
  return <ResourceTable title="Workouts" resource="workouts" columns={columns} />
}