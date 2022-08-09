export default function useCreateComponent(props, defaultAttrs = {}) {
  const propsCopied = Object.assign({}, props)
  let finalProps = {}

  delete propsCopied.children

  if (defaultAttrs.length) {
    for (const defaultAttr of defaultAttrs) {
      if (propsCopied[defaultAttr])
        delete propsCopied[defaultAttr]
    }
  }

  finalProps = {
    ...propsCopied,
    ...defaultAttrs
  }

  return finalProps
}
