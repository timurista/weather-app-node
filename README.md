# weather-app-node
A weather app built in node

## Apis used
- uses axios promised based architecture to call google maps api for valid location information
- then calls forecast.io to get the current temperature for that location

## How to run
```bash
> node app-promise.js --address="85742"
Tucson, AZ 85742, USA
Weather is: Clear. It is 91.25 and feels like 91.25
```

### Save A Default Address
```bash
>node app-promise.js --adress="85742" --default
Default address saved: 85742
Tucson, AZ 85742, USA
Weather is: Clear. It is 91.25 and feels like 91.25
```
### Then use them again...
```
using default address...
Tucson, AZ 85742, USA
Weather is: Clear. It is 92.23 and feels like 92.23
```

## Packages used:
1) axios
2) yargs
3) json stringify / fs