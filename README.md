# ember-cli-list-addons

This Ember addon provides a new command `ember list-addons` that outputs a list of each ember addon that is loaded into ember-cli, including each of their versions.

This is useful for getting the complete list of addons, including any addons that are included as dependencies of dependencies.

## Installation

```
ember install ember-cli-list-addons
```


## Usage

The basic usage of the command will output a CSV formatted list of all the addons: 

`ember list-addons`

will output: 

```
ember-cli-list-addons,1.0.0
ember-cli-inject-live-reload,2.1.0
@ember/optional-features,2.0.0
ember-compatibility-helpers,1.2.6
@glimmer/component,1.1.2
ember-cli-typescript,3.0.0,2.0.2
// shortened - the list is usually quite long
```

you can also provide a `--format` argument to get the output as a JSON

`ember list-addons --format=json`

will output:

```json
{
  "ember-cli-list-addons": [
    "1.0.0"
  ],
  "ember-cli-inject-live-reload": [
    "2.1.0"
  ],
  "@ember/optional-features": [
    "2.0.0"
  ],
  "ember-compatibility-helpers": [
    "1.2.6"
  ],
  "@glimmer/component": [
    "1.1.2"
  ],
  "ember-cli-typescript": [
    "3.0.0",
    "2.0.2"
  ],
  ...
}
```

## Compatibility

* Ember CLI v3.28 or above (likely a much wider range, but we should test them on CI)

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
