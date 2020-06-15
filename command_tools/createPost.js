const fs = require('fs');
const packagejson = require(`${process.cwd()}/package.json`);
const postTitle = process.argv[2] || null;
const postLocationFolder = `${process.cwd()}/content/post/`;

function createPost(title, locationFolder) {
  const postTemplate = '---\n'
                     + `title: ${title.replace(/-/g, " ")}\n`
                     + 'description: Post description here.\n'
                     + `author: ${packagejson.author}\n`
                     + `publishedAt: ${new Date().toISOString()}\n`
                     + '---';
  if (title) {
    if (!fs.existsSync(`${locationFolder}${title}.md`)) {
      fs.writeFileSync(`${locationFolder}${title}.md`, postTemplate);
      console.log(`${title}.md created.`);
    } else {
      console.error('File already exist.');
    }
  } else {
    console.error('Please write post title with kebab case.')
  }
}

createPost(postTitle, postLocationFolder);
