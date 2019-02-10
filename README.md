# fortnite-publicapi

Simple package built for fortniteapi.com(https://fortniteapi.com)

## Installation

```sh
npm i --save fortnite-publicapi
```

## Example Usage

```javascript
const Fortnite = require("fortnite-publicapi");

//Search fortnite username
Fortnite.Search('Ninja', (data) => {
    console.log(data)
})
```
<details><summary>Expected Output</summary><p>

```json
{"uid":"4735ce9132924caf8a5b17789b40f79c","username":"Ninja","platforms":["pc"],"seasons":["season7","season6","season5","season4"]}
```
</p></details>

## Functions
### Fortnite.Search(Username, Callback)
```javascript
Fortnite.Search('Ninja', (data) => {
    console.log(data)
})
//Returns query for username
```

### Fortnite.Stats(UID, Platform, Callback)
```javascript
Fortnite.Stats('4735ce9132924caf8a5b17789b40f79c', 'pc', (data) => {
    console.log(data)
})
//Returns player's stats
```

### Fortnite.FortniteStatus(Callback)
```javascript
Fortnite.FortniteStatus((data) => {
    console.log(data)
})
//Returns Fortnite's Status
```

### Fortnite.FortniteStore(Language, Callback)
```javascript
Fortnite.FortniteStore('en', (data) => {
    console.log(data)
})
//Returns Fortnite's Store Items
```

### Fortnite.FortniteNews(Language, Callback)
```javascript
Fortnite.FortniteNews('en', (data) => {
    console.log(data)
})
//Returns Fortnite's News
```

### Fortnite.AllWeapons(Callback)
```javascript
Fortnite.AllWeapons((data) => {
    console.log(data)
})
//Returns all of Fortnite's Weapons
```

### Fortnite.AllItems(Callback)
```javascript
Fortnite.AllItems((data) => {
    console.log(data)
})
//Returns all of Fortnite's Items
```

### Fortnite.UpcomingItems(Callback)
```javascript
Fortnite.UpcomingItems((data) => {
    console.log(data)
})
//Returns all of Fortnite's Upcoming Items
```

### Fortnite.Item(ItemID, Callback)
```javascript
Fortnite.Item('61ea3e9-8438e42-f53d351-e53a5ce', (data) => {
    console.log(data)
})
//Returns weapon's information
```