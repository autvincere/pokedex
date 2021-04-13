export const firstLetterCapital = (s) => {
     if (typeof s !== 'string') return ''
     return s.charAt(0).toUpperCase() + s.slice(1)
}

export const equivalency = [
     {
          type: 'normal',
          color:'#a9a973'
     },
     {
          type: 'ground',
          color:'#b26500'
     },
     {
          type: 'flying',
          color:'#a890f0'
     },
     {
          type: 'fighting',
          color:'#bd322b'
     },
     {
          type: 'grass',
          color:'#77c064'
     },
     {
          type: 'fire',
          color:'#ec822e'
     },
     {
          type: 'water',
          color:'#6991e6'
     },
     {
          type: 'poison',
          color:'#c183c2'
     },
     {
          type: 'bug',
          color:'#a8ba18'
     },
     {
          type: 'fairy',
          color:'#f398aa'
     },
     {
          type: 'psychic',
          color:'#f65888'
     },
     {
          type: 'ice',
          color:'#72afe1'
     },
     {
          type: 'rock',
          color:'#4d4b4a'
     },
     {
          type: 'electric',
          color:'#E4C21F'
     },
     {
          type: 'dark',
          color:'#240600'
     },
     {
          type: 'ghost',
          color:'#989898'
     },
     {
          type: 'dragon',
          color:'#989898'
     },
     {
          type: 'steel',
          color:'#989898'
     }
]