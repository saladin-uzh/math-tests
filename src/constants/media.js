const buildStyles = (templateStringsArray, ...args) => {
  let styles = ''

  styles += templateStringsArray[0]

  if (templateStringsArray.length > 1) {
    styles += Object.values(args)
      .map((arg, index) => `${arg}${templateStringsArray[index + 1]}`)
      .join()
  }

  return styles
}

export default {
  small: (templateStringsArray, ...args) => `
    @media only screen and (min-width: 480px) {
      ${buildStyles(templateStringsArray, ...args)}
    }
  `,
  medium: (templateStringsArray, ...args) => `
    @media only screen and (min-width: 756px) {
      ${buildStyles(templateStringsArray, ...args)}
    }
  `,
}
