# Notice

## Trademarks

"Microsoft" and "Windows" are trademarks of the Microsoft Corporation. This project is **not
affiliated with, endorsed by, or sponsored by Microsoft** in any way. The `ms*`-prefixed layout
names (e.g. `msGerman`, `msArabic101`) are used solely to identify which published Windows
keyboard layout each one corresponds to, for the practical benefit of consumers who already know
Windows's own naming for these layouts.

## Keyboard layout data

The 150 bundled keyboard layouts (`src/core/ms-keyboards/`) describe the physical key-to-character
mappings of the corresponding Windows keyboard layouts, as documented publicly by Microsoft at
[learn.microsoft.com/en-us/globalization/windows-keyboard-layouts](https://learn.microsoft.com/en-us/globalization/windows-keyboard-layouts).
This is functional, factual data (which key produces which character) rather than creative
expression, and is provided here purely as a practical convenience so consumers don't need to
transcribe it themselves.

## Software license

The software in this repository (everything other than the factual layout data described above)
is licensed under the MIT License - see [`LICENSE`](./LICENSE).

## Questions

If you have a specific concern about any of the above, please open an issue, or use the private
reporting channel described in [`SECURITY.md`](./SECURITY.md) if it's sensitive.
