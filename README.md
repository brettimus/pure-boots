# pure-grid cli
Easily create a responsive pure grid on the command line.

## Usage
```
pure-grid `columns` `output-directory`
```
To make an `n` column responsive grid and place it in the current directory:
```
pure-grid n
```

To make an `m` column responsive grid and place it in a relative directory `css/`:
```
pure-grid m css
```

## :ghost: Before you use!

:warning: Unfortunately, the `<dest>` option only works with relative filepaths.


:warning: The output filenames are not customizable. They will be `pure-grid-n.css` for an `n` column grid.