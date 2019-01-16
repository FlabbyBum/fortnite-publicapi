# fortnite-publicapi

Simple package built for fortniteapi.com(https://fortniteapi.com)

## Installation

```sh
npm install fortnite-publicapi --save
```

## Usage

```javascript
const Fortnite = require("fortnite-publicapi");

Fortnite.Search('Ninja', (data) => {
    console.log(data)
})
//Expected output = {"uid":"4735ce9132924caf8a5b17789b40f79c","username":"Ninja","platforms":["pc"],"seasons":["season7","season6","season5","season4"]}
```

# More Examples

```javascript
Fortnite.Search('Ninja', (data) => {
    console.log(data)
})

Fortnite.Stats('4735ce9132924caf8a5b17789b40f79c', 'pc', (data) => {
    console.log(data)
})

Fortnite.FortniteStatus((data) => {
    console.log(data)
})

Fortnite.FortniteStore('en', (data) => {
    console.log(data)
})

Fortnite.FortniteNews('en', (data) => {
    console.log(data)
})

Fortnite.AllWeapons((data) => {
    console.log(data)
})

Fortnite.AllItems((data) => {
    console.log(data)
})

Fortnite.UpcomingItems((data) => {
    console.log(data)
})

Fortnite.Item('61ea3e9-8438e42-f53d351-e53a5ce', (data) => {
    console.log(data)
})
```