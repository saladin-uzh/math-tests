const svgr = require('@svgr/core').default
const fs = require('fs')
const rl = require('readline')
const path = require('path')

const targetDir = '../src/components/Icons/'

const OUTPUT_PATH = path.join(__dirname, targetDir)

const convertDimensions = data => {
  var svg = data.content[0]

  if (svg.isElem('svg') && svg.hasAttr('width') && svg.hasAttr('height')) {
    svg.addAttr({
      name: 'viewBox',
      value: '0 0 ' + svg.attr('width').value + ' ' + svg.attr('height').value,
      prefix: '',
      local: 'class',
    })

    svg.removeAttr('width')
    svg.removeAttr('height')
  }

  return data
}

const _svgrConfig = {
  icon: true,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  typescript: true,
  prettierConfig: {
    semi: false,
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'avoid',
    jsxBracketSameLine: true,
  },
  svgoConfig: {
    pretty: true,
    plugins: [
      { removeViewBox: false },
      { convertDimensions: convertDimensions },
      {
        addAttributesToSVGElement: {
          attributes: [{ fill: 'currentColor' }],
        },
      },
      { removeUselessStrokeAndFill: true },
    ],
  },
}

const ask = question => {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  })

  return new Promise(resolve => {
    r.question(question + ' ', answer => {
      r.close()
      resolve(answer)
    })
  })
}

const main = async () => {
  const iconName = await ask('What is the name of your icon to be?')
  const filePath = process.argv[2]

  let svgContent
  try {
    svgContent = fs.readFileSync(filePath).toString()
  } catch (e) {
    console.error(`Error loading file ${filePath}`)
    process.exit(1)
  }

  const tsxCode = await svgr(svgContent, _svgrConfig, {
    componentName: iconName,
  })

  tsxCode.replace('<svg', "<svg style={{ fill: 'currentColor' }}")

  const outputFile = path.join(OUTPUT_PATH, `Icon${iconName}.tsx`)

  if (!fs.existsSync(OUTPUT_PATH)) fs.mkdirSync(OUTPUT_PATH)

  fs.writeFileSync(outputFile, tsxCode)
  console.log(`Created file ${iconName}.tsx at ${targetDir}`)
}

main()
