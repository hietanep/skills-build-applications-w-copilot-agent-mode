import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'rank', label: 'Rank', render: (value) => `#${value}` },
  { key: 'username', label: 'Athlete' },
  { key: 'teamName', label: 'Team' },
  { key: 'totalPoints', label: 'Points' },
  { key: 'weeklyMinutes', label: 'Weekly minutes' },
]

export default function Leaderboard() {
  return <ResourceTable title="Leaderboard" resource="leaderboard" columns={columns} />
}