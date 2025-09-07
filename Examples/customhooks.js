const useCount = () => {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount((count) => count + 1)
  return [count, increment]
}
