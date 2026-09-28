import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { useState } from 'react'

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function CalenderSection() {
  const [viewDate, setViewDate] = useState(new Date(2026, 9, 1)) // October 2026
  const [selectedRange, setSelectedRange] = useState({ start: new Date(2026, 9, 18), end: new Date(2026, 9, 23) })

  const isSameDay = (a, b) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

  const isInRange = (date) => {
    if (!selectedRange.start || !selectedRange.end) return false
    return date >= selectedRange.start && date <= selectedRange.end
  }

  const isStart = (date) => selectedRange.start && isSameDay(date, selectedRange.start)
  const isEnd = (date) => selectedRange.end && isSameDay(date, selectedRange.end)

  const renderMonth = (monthOffset) => {
    const year = viewDate.getFullYear()
    const monthIndex = viewDate.getMonth() + monthOffset
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
    const firstDayIndex = new Date(year, monthIndex, 1).getDay()
    const lastMonthDays = new Date(year, monthIndex, 0).getDate()

    const prevMonthDays = []
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      prevMonthDays.push(lastMonthDays - i)
    }

    const cells = []
    for (let i = 1; i <= daysInMonth; i++) {
      cells.push(i)
    }
    const totalCells = prevMonthDays.length + daysInMonth
    const remaining = 42 - totalCells
    const nextMonthDays = []
    for (let i = 1; i <= remaining; i++) {
      nextMonthDays.push(i)
    }

    return (
      <div className="calendar-month w-full">
        <div className="month-header flex items-center justify-between mb-3">
          {monthOffset === 0 ? (
            <button onClick={() => setViewDate(new Date(year, monthIndex - 1, 1))} aria-label="Previous month" className="p-1">
              <ChevronLeft className="w-4 h-4" />
            </button>
          ) : <span className="w-6" />}
          <div className="text-base font-semibold text-gray-900">
            {MONTHS[monthIndex]} {year}
          </div>
          {monthOffset === 1 ? (
            <button onClick={() => setViewDate(new Date(year, monthIndex + 1, 1))} aria-label="Next month" className="p-1">
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : <span className="w-6" />}
        </div>
        <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 mb-1">
          {WEEKDAYS.map((d, i) => (
            <div key={i} className="text-center">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-sm">
          {prevMonthDays.map((day, idx) => (
            <div key={`prev-${day}-${idx}`} className="text-center text-gray-300 h-8 flex items-center justify-center">
              {day}
            </div>
          ))}
          {cells.map((day) => {
            const date = new Date(year, monthIndex, day)
            const start = isStart(date)
            const end = isEnd(date)
            const inRange = isInRange(date)
            const today = isSameDay(date, new Date())
            return (
              <div
                key={day}
                onClick={() => {
                  if (selectedRange.start && selectedRange.end) {
                    setSelectedRange({ start: date, end: null })
                  } else if (selectedRange.start && !selectedRange.end) {
                    if (date < selectedRange.start) {
                      setSelectedRange({ start: date, end: selectedRange.start })
                    } else {
                      setSelectedRange({ start: selectedRange.start, end: date })
                    }
                  } else {
                    setSelectedRange({ start: date, end: null })
                  }
                }}
                className={`relative h-9 flex items-center justify-center cursor-pointer select-none
                  ${start ? 'rounded-full bg-primary text-white bg-black' : ''}
                  ${end ? 'rounded-full bg-primary text-white bg-black' : ''}
                  ${inRange && !start && !end ? 'bg-gray-100 text-gray-900' : ''}
                  ${today && !inRange ? 'text-primary' : ''}
                `}
              >
                {day}
              </div>
            )
          })}
          {nextMonthDays.map((day, idx) => (
            <div key={`next-${day}-${idx}`} className="text-center text-gray-300 h-8 flex items-center justify-center">
              {day}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-5 mb-6">
        <div>
            <div className='text-2xl font-semibold'>
                5 nights in Candolim
            </div>
            <div className="flex items-start gap-2">
                <div>
                    <div className="text-sm font-medium text-gray-500">
                    {selectedRange.start ? `${selectedRange.start?.getDate()} ${MONTHS[selectedRange.start.getMonth()]}` : ''} {selectedRange.start?.getFullYear()} – {selectedRange.end ? `${selectedRange.end?.getDate()} ${MONTHS[selectedRange.end.getMonth()]}` : ''} {selectedRange.end?.getFullYear()}
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="flex items-center gap-10">
        {renderMonth(0)}
        {renderMonth(1)}
      </div>
      <div className='mt-2 flex justify-end'>
        <button
            onClick={() => setSelectedRange({ start: null, end: null })}
            className="text-xs text-gray-500 underline flex items-center gap-1"
            aria-label="Clear dates"
            >
          Clear dates
        </button>
      </div>
    </div>
  )
}