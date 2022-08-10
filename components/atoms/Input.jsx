import useCreateComponent from '../../hooks/useCreateComponent'

export default function Input(props) {
  const finalProps = useCreateComponent(props, {
    className: `${props.className} input`
  })

  return (
    <input {...finalProps} />
  )
}
