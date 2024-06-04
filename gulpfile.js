const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const yargs = require('yargs');

const argv = yargs.argv;

// Define your post task
gulp.task('post', (done) => {
    const title = argv.n || 'New Post';
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Pad month with leading zero
    const day = ('0' + date.getDate()).slice(-2); // Pad day with leading zero

    const fileName = `${year}-${month}-${day}-${slug}.md`;
    const dir = `_posts`;
    const filePath = path.join(dir, fileName);

    mkdirp(dir, (err) => {
        if (err) {
            console.error(`Error creating directory ${dir}`, err);
            done(err);
        } else {
            const content = `---\nlayout: post\ntitle: "${title}"\nauthor: thecodecat\nfeature-img: "assets/img/feature-img/${slug}.png"\nthumbnail: "assets/img/thumbnails/feature-img/${slug}.png"\ntags: [SOLID, OOP, Coding, Programming, InterviewPreparation, CodingTips]\ncategories: [Principles, Interviews]\nexcerpt_separator: <!--more-->\n---\n\nHello, coding kittens and tech tigers! TheCodeCat here, whiskers twitching and tail high. Today, we're going to have a quick refresher on the SOLID principles. This is perfect for those who are already familiar with the concept but want to better recall the specifics or need to prepare for an upcoming interview.\n<!--more-->\n\n# SOLID Principles: The Five Catmandments of Codeville 🏰\n\n...`;

            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    console.error(`Error writing file ${filePath}`, err);
                    done(err);
                } else {
                    console.log(`File created: ${filePath}`);
                    done();
                }
            });
        }
    });
});

// Default task
gulp.task('default', gulp.series('post'));