# yi-product-card

Este es un paquete de prueba para desplegar en NPM

## Yinner Chilito

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'yi-product-card'
```

```
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 15,
        }}
      >
        {({ reset, increaseBy, count, isMaxReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
