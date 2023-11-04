export default function Box({text, value, percent, color}) {
  return (
    <div className="flex flex-col rounded-3xl border border-[#D6D5D5] py-4 px-4">

        <h1 className="font-bold">{text}</h1>
        <h1 className="mt-4 text-[#1A3D7D] font-semibold text-3xl">{value}</h1>

        <div className="flex flex-row mt-2">

            <div className={`rounded-xl py-2 px-2 font-semibold ${color === 'green' ? 'bg-[#D5FFD4]' : 'bg-[#FFD4D4]'}`}>
              <h1 className={`font-semibold ${color === 'green' ? 'text-[#0D970A]' : 'text-[#A1140B]'}`}>{percent}%</h1>
            </div>

            <div className="px-2 py-2">
                <h1 className="text-[#777777] text-sm">En el último mes</h1>
            </div>
        </div>

    </div>
  )
}
