# Woofy

This action prints Comments the time of PR.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `Hello You`

Hello <who-to-greet>

## Example usage

uses: actions/hello-world-javascript-action@v1.1   
with:  
   who-to-greet: 'Mona the Octocat'
