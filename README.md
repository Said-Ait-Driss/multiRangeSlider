# multiRangeSlider
![blue](https://github.com/Said-Ait-Driss/multiRangeSlider/blob/main/assets/range-package.png)
![red](https://github.com/Said-Ait-Driss/multiRangeSlider/blob/main/assets/range-package2.png)
## Installation
```shell
npm i @saidaitdriss/multirangeslider
```
## usage
### import
```javascript
import MultiRangeSlider from "@saidaitdriss/multirangeslider";
```
### set up
``` javascript
<MultiRangeSlider
        min={0}
        max={100}
        onChange={(min, max) => {
            console.log("min : ",min)
            console.log("max : ",max)
        }}
        leftValue={29}
        rightValue={100}
        currency={"€"}
      />
```
min : the minimum value of the range
max : the maximum value of the range
onChange : method to execute when the value of min or max changed
leftValue : the left value of the range
rightValue : the right value of the range
currency : the symbol of the price


## Other options
|Name|description|default|
|----|-----|-------|
|containerStyle|the style of the container|{ display: "flex",  alignItems: "center", justifyContent: "center", paddingBottom: "14px",  paddingTop: "14px", width: "300px", }|
|rangeStyle| the style of the range| { backgroundColor: "red" }|
|valuesStyle|the style of left and right values | { color: "red", fontSize: "12px" }|
