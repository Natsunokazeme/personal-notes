const useCount = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount((count) => count + 1)
  return [count, increment]
}

const CountDown = (time) => {
  const [localTime, setLocalTime] = React.useState(time)
  const timer = React.useRef()
  useEffect(() => {
    clearInterval(timer.current)
    setLocalTime(time)
    timer.current = setInterval(() => {
      console.log(localTime)
      const newTime = localTime - 1
      setLocalTime(newTime)
      if (newTime <= 0) clearInterval(timer.current)
    }, 1000)

    return () => clearInterval(timer.current)
  }, [time])

  return <>{localTime}</>
}
