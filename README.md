## `@skyrim-platform/po3-papyrus-extender`

(Unofficial) TypeScript library for the powerofthree Papyrus Extender Skyrim modding utility

- powerofthree Papyrus Extender on GitHub: https://github.com/powerof3/PapyrusExtenderSSE
- powerofthree Papyrus Extender on Nexus: https://www.nexusmods.com/skyrimspecialedition/mods/22854

## Getting Started

You can find an example Skyrim Platform plugin with documentation on how to get started using this library: https://github.com/skyrim-platform/example-plugin-using-libraries

> Papyrus source code conversion to TypeScript originally generated using [Papyrus-2-Typescript](https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript)

## Example

```ts
import { once, Game, Debug, Spell, Actor } from '@skyrim-platform/skyrim-platform'
import { RemoveBaseSpell } from '@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions'

// Remove the 'Flames' spell from the player!
once('update', () => {
    const flamesFormID = parseInt('00012FCD', 16)
    const flames = Spell.from(Game.getForm(flamesFormID))
    if (flames) {
        const player = Game.getPlayer()
        if (RemoveBaseSpell(player, flames))
            Debug.messageBox(`Removed base spell ${flames.getName()} from the player`)
    }
})
```
