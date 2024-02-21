import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../src/components';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
};

const App = () => {
  return (
    <div>
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
