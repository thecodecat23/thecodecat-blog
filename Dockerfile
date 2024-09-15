# Base image
FROM jekyll/jekyll:pages

# Set working directory
WORKDIR /usr/src/app

# Install necessary packages for building native extensions
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    g++ \
    musl-dev \
    make \
    libc6-compat \
    libffi-dev \
    yaml-dev \
    zlib-dev \
    nodejs \
    npm \
    ruby-dev \
    linux-headers

# Copy Gemfile and package.json together for better caching
COPY Gemfile Gemfile.lock package.json package-lock.json* ./

# Install bundler and Ruby dependencies, as well as npm dependencies
RUN gem install bundler -v 2.4.12 && \
    bundle _2.4.12_ install && \
    npm install --production

# Fix permissions for the Jekyll user
RUN chown -R jekyll:jekyll /usr/src/app

# Switch to the jekyll user
USER jekyll

# Copy the rest of the application code
COPY . .

# Expose port 4000 for Jekyll server
EXPOSE 4000

# Run Jekyll in production mode
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]