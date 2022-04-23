const { cpSync } = require('fs');

module.exports = async (options, context) => {
    cpSync(context.workspace.projects[context.projectName].root, options.outDir, { recursive: true });

    console.log(context.workspace.projects[context.projectName].root, '=>', options.outDir);

    return {
        success: true
    }
};
