const frontmatter = require('frontmatter')
const { readFileSync } = require('fs')

const defaults = { extensions: ['md', 'svx'] }

module.exports = (options) => ({
    name: 'routify-plugin-frontmatter',

    build: ({ instance }) => {
        options = Object.assign(defaults, options)

        for (const node of instance.nodeIndex) {
            if (node.file.stat.isDirectory()) continue

            const content = readFileSync(node.file.path, 'utf-8')
            const { data } = frontmatter(content)

            node.meta.frontmatter = data
        }
    },
})
