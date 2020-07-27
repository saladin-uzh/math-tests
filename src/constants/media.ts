const buildStyles = (
  templateStringsArray: TemplateStringsArray,
  ...args: any[]
) => {
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
  small: (templateStringsArray: TemplateStringsArray, ...args: any[]) => `
    @media only screen and (min-width: 480px) {
      ${buildStyles(templateStringsArray, ...args)}
    }
  `,
  medium: (templateStringsArray: TemplateStringsArray, ...args: any[]) => `
    @media only screen and (min-width: 756px) {
      ${buildStyles(templateStringsArray, ...args)}
    }
  `,
}
