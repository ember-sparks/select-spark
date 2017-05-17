# {{select-spark}}

A simple way to use \<select\>

<http://ember-sparks.com/>

----

## Installation and usage

Install the Ember Sparks addon (this component is part of the standard library):
```bash
ember install ember-sparks
```

Now restart your Ember app and drop the component in there!
```handlebars
{{select-spark}}
```

## Properties

| Name        | Type            | Default | Description                                                      |
|-------------|-----------------|---------|------------------------------------------------------------------|
| `options`   | `array`         | `null`  | A list of options that the user can select. The array can either contain just strings, or objects with the keys `value` and `label` (recommended). |
| `selected`  | `string`        | `null`  | The default selected option. Must match one of your options' `value`. |
| `disabled`  | `boolean`       | `false` | Determine whether the user can interact with the select box or not. |
| `title`     | `string`        | `null`  | An optional "title" for the select box, which is simply a disabled `<option>`. |


## Actions

| Name        | Description                                      |
|-------------|--------------------------------------------------|
| `onChange`  | Triggers when the user selects a new value.      | 


## Block version

If you use the component as a block, you can set an icon for it (this icon could also change depending on what the user selects)

```handlebars
{{#select-spark}}
  <svg></svg>
{{/select-spark}}
```


## Theming

To see these examples in action, check out the interactive documentation.

<em>**Important!** All classes are local in order to avoid naming collisions and unintended CSS side effects. To understand how to style them, check out the [Ember Sparks documentation](http://ember-sparks.com/docs#theming).</em>

- `.select`

  Style the select box. When using the block version of the components, the class `.has-icon` will be appended to it.

  **Example:**
  ```css
  .select {
    background: linear-gradient(to bottom, white, #F1F5F9);
    border: 1px solid #AEBEC8;
    border-radius: 6px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
    color: #586576;
  }
  ```

- `.arrow`

  Style the arrow on the right side of the select box.

  **Example:**
  ```css
  .select {
    border-width: 9px;
    border-top-color: red;
  }
  ```
  

## Contributing

Check out the guidelines at http://ember-sparks.com/docs#contribute

