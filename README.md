# grunt-balmung

> Grunt task to run balmung image optimizer.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-balmung --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-balmung');
```

## The "balmung" task

### Overview
In your project's Gruntfile, add a section named `balmung` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  balmung: {
    dist: {
      config: {
        src: 'content/images',
        dst: 'output/images'
      }
    }
  },
});
```

To execute grunt task, run

```
grunt balmung
```

### Configurations

#### config.settings
Type: `String`|`Object`
Default value: `null`

Setting file path or URL. It can also use Object to set settings directly in Gruntfile.

### Usage Examples

#### Use balmung server to retrieve settings.

```js
grunt.initConfig({
  balmung: {
    dist: {
      config: {
        src: 'content/images',
        dst: 'content/images',
        settings: 'http://server:7700/export'
      }
    }
  },
});
```

#### Use JSON file as settings.

```js
grunt.initConfig({
  balmung: {
    dist: {
      config: {
        src: 'content/images',
        dst: 'content/images',
        settings: '/etc/balmung/settings.json'
      }
    }
  },
});
```

#### Use Object as settings.

```js
grunt.initConfig({
  balmung: {
    dist: {
      config: {
        src: 'content/images',
        dst: 'content/images',
        settings: {
          optipng: { level: 5 },
          pngquant: { color: 128, speed: 3 },
          files: {
            content: {
              settings: {
                pngquant: { color: 196 }
              }
            }
          }
        }
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

