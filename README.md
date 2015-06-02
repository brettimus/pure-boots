# pure-grid cli
Easily create a custom-column responsive pure grid on the command line.

## Installation
```sh
npm install -g pure-boots
```

## Usage
```
pure-grid <columns> [<output-directory>]
```
To make an `n` column responsive grid:
```shell
# Outputs to ./pure-grid-n.css
pure-grid n
```

To make an `m` column responsive grid and place it in a relative directory `css/`:
```shell
# Outputs to ./css/pure-grid-m.css
pure-grid m css
```

## :ghost: Before you use!

:warning: The output filenames are not customizable. They will be invariably `pure-grid-n.css` for an `n` column grid.