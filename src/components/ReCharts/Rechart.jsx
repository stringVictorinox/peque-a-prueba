import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, Bar, YAxis } from "recharts"

const data = [
    { id: "1", primero: 1950, segundo: 900 },
    { id: "2", primero: 1550, segundo: 950 },
    { id: "3", primero: 200, segundo: 300 },
    { id: "4", primero: 900, segundo: 1600 },
    { id: "5", primero: 1400, segundo: 2000 }
]

export default function Rechart() {
    return (
        <div className="flex ml-5 mt-8">

            <ResponsiveContainer width="100%" aspect={4}>
                <BarChart data={data} width={500} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="4 4 4" />
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="primero" fill="#1A3D7D" />
                    <Bar dataKey="segundo" fill="#367DFD" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
