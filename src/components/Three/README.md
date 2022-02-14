# UseImmer vs UseState

## Use State example

```
const [product, updateProduct] = useState({
    name: "Product 1",
    SKU: "SKU-001",
    availability: 30,
    stock: [
      {
        id: 1,
        store: "Store 1",
        quantity: 10
      },
      {
        id: 2,
        store: "Store 2",
        quantity: 20
      }
    ]
});
```

To update the name, you would do `updateProduct({ ...product, name: "Product 1 - Updated" })`

## Use Immer example

```
  const [product, updateProduct] = useImmer({
    name: "Product 1",
    SKU: "SKU-001",
    availability: 30,
    stock: [
      {
        id: 1,
        store: "Store 1",
        quantity: 10
      },
      {
        id: 2,
        store: "Store 2",
        quantity: 20
      }
    ]
  });
```

To update the name you would:

```
updateProduct((draft) => {
   draft.name = "Product Updated" };
})
```

To update 2nd object in stock array:

```
updateProduct((draft) => {
    draft.stock[1].quantity = 30;
})
```
