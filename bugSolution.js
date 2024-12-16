```javascript
// Corrected aggregation pipeline
aggregate([{
  $match: { /*some filter*/ }
}, {
  $group: {
    _id: '$field',
    count: { $sum: 1 }
  }
}, {
  $sort: { count: -1 }
},{
  $project: { _id: 1, count: 1, _v: 0}
}])
```