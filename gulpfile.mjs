import gulp from 'gulp';
import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import imagemin from 'gulp-imagemin';
import responsive from 'gulp-responsive';

const argv = yargs(hideBin(process.argv)).argv;

// Define paths
const paths = {
    images: {
        src: 'assets/img/**/*.{jpg,jpeg,png}',
        dest: 'assets/img/thumbnails/'
    },
    featureImages: {
        src: 'assets/img/feature-img/*.{jpg,jpeg,png}',
        dest: 'assets/img/thumbnails/feature-img/'
    }
};

// Task to optimize images
gulp.task('optimize-images', () => {
    return gulp.src(paths.images.src)
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest(paths.images.dest));
});

// Task to create thumbnails for all images in assets/images
gulp.task('create-thumbnails', () => {
    return gulp.src(paths.images.src)
        .pipe(responsive({
            '*.{jpg,jpeg,png}': [
                {
                    width: 150,
                    rename: { suffix: '-thumbnail' },
                    format: 'jpeg'
                }
            ]
        }, {
            quality: 70,
            progressive: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest(paths.images.dest));
});

// Task to create thumbnails for images in assets/images/feature-img
gulp.task('create-feature-thumbnails', () => {
    return gulp.src(paths.featureImages.src)
        .pipe(responsive({
            '*.{jpg,jpeg,png}': [
                {
                    width: 150,
                    rename: { suffix: '-thumbnail' },
                    format: 'jpeg'
                }
            ]
        }, {
            quality: 70,
            progressive: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest(paths.featureImages.dest));
});

// Task to create a thumbnail for a specific image
gulp.task('create-thumbnail', (done) => {
    if (!argv.image) {
        console.error('Please specify an image using --image <path/to/image>');
        done();
        return;
    }

    const imagePath = argv.image;
    const imageDir = path.dirname(imagePath);
    const imageName = path.basename(imagePath);
    const outputDir = argv.output || path.join(imageDir, 'thumbnails');

    gulp.src(imagePath)
        .pipe(responsive({
            [imageName]: [
                {
                    width: 150,
                    rename: { suffix: '-thumbnail' },
                    format: 'jpeg'
                }
            ]
        }, {
            quality: 70,
            progressive: true,
            withMetadata: false,
        }))
        .pipe(gulp.dest(outputDir))
        .on('end', done);
});

// Define your post task
gulp.task('post', (done) => {
    const title = argv.n || 'New Post';
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Pad month with leading zero
    const day = ('0' + (date.getDate())).slice(-2); // Pad day with leading zero

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

// Combined task to optimize and create thumbnails
gulp.task('optimize-and-thumbnails', gulp.series('optimize-images', 'create-thumbnails', 'create-feature-thumbnails'));