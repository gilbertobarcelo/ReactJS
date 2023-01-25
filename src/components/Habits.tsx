interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return (
    <div className="bg-zinc-900 w-10 h-10 m-6 bottom-10 top-5 text-justify text-slate-50 font-serif px-10  float-left">{props.completed}</div>
    
    )
}