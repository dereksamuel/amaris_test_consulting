import useCreateComponent from '../../hooks/useCreateComponent'

export default function SubTitle(props) {
  const finalProps = useCreateComponent(props, { className: `subtitle ${props?.className || ''}` })

  return <h3 {...finalProps}>{props.children}</h3>
}
