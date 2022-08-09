import useCreateComponent from '../../hooks/useCreateComponent'

export default function Button(props) {
  const finalProps = useCreateComponent(props, { className: `button ${props?.className || ''}` })

  return <button {...finalProps}>{props.children}</button>
}
