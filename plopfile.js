const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'plop-templates/Component/Component.module.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}-tablet.module.scss',
        templateFile: 'plop-templates/Component/Component-tablet.module.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}-desktop.module.scss',
        templateFile: 'plop-templates/Component/Component-desktop.module.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.ts.hbs',
      },
    ],
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{camelCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{camelCase name}}/{{pascalCase name}}.module.scss',
        templateFile: 'plop-templates/Page/Page.module.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{camelCase name}}/{{pascalCase name}}-tablet.module.scss',
        templateFile: 'plop-templates/Page/Page-tablet.module.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{camelCase name}}/{{pascalCase name}}-desktop.module.scss',
        templateFile: 'plop-templates/Page/Page-desktop.module.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{camelCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Page/Page.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{camelCase name}}/index.ts',
        templateFile: 'plop-templates/Page/index.ts.hbs',
      },
    ],
  });

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}.ts',
        templateFile: 'plop-templates/hook.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/hooks/index.ts',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
    ],
  });
};
