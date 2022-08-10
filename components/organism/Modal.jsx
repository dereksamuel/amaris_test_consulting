import useCreateComponent from '../../hooks/useCreateComponent'

export default function Modal(props) {
  const finalProps = useCreateComponent(props)

  delete finalProps.closeMe

  return (
    <>
      <div className="overlay" onClick={props.closeMe}></div>
      <div className="modal" {...finalProps}>
        {props.children}
      </div>
    </>
  )
}
