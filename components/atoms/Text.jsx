import useCreateComponent from "../../hooks/useCreateComponent"

export default function Text(props) {
  const finalProps = useCreateComponent(props, { className: "text " + props.className })

  return <p {...finalProps}>{props.children}</p>
}
