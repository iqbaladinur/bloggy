const fs = require('fs');
const pageTitle = process.argv[2] || null;
const pageLocationFolder = `${process.cwd()}/content/page/`;

function createPage(title, locationFolder) {
  const pageTemplate = '---\n'
                     + `navTitle: ${title}\n`
                     + `title: ${title.replace(/-/g, " ")}\n`
                     + 'description: page description here.\n'
                     + 'type: static\n'
                     + '---\n'
                     + `\n## hello world from ${title.replace(/-/g, " ")}'s page`;
  if (title) {
    if (!fs.existsSync(`${locationFolder}${title}.md`)) {
      fs.writeFileSync(`${locationFolder}${title}.md`, pageTemplate);
      console.log(`${title}.md created.`);
    } else {
      console.error('File already exist.');
    }
  } else {
    console.error('Please write page title with kebab case.')
  }
}

createPage(pageTitle, pageLocationFolder);
