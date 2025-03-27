type GreetProps = {
    name?: String
}

export const Greetings = (props: GreetProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}
