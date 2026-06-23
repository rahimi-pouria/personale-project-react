import { useEffect, useState } from 'react'
const Counter = () => {

    const [count, setCount] = useState(0)
    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)
    const reset = () => setCount(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className="w-full min-h-screen flex flex-col justify-center items-center gap-3">
                <div className="flex flex-col justify-center items-center gap-2.5">
                    <h1 className="title-counter text-5xl">Counter App</h1>
                    <p className='flex text-6xl'>{ count }</p>
                </div>
                <div className="w-[20%] flex justify-between">
                    <button onClick={increment} className='bg-[#4eb14a] text-white px-4 py-1.5 rounded-xl'>Increment</button>
                    <button onClick={reset} className='bg-[#f4433a] text-white px-4 py-1.5 rounded-xl'>reset</button>
                    <button onClick={decrement} className='bg-[#1e99f0] text-white px-4 py-1.5 rounded-xl'>Decrement</button>
                </div>
            </section>
        </>
    )
}

export default Counter