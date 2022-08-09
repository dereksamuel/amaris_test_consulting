import useCreateComponent from '../../hooks/useCreateComponent'

export default function Link(props) {
  const finalProps = useCreateComponent(props, {
    className: `link ${props?.className || ''}`,
    onClick: event => {
      event.preventDefault()
      props.onClick?.(event)
    }
  })

  return <a href="" {...finalProps}>{props.children}</a>
}
