import { article, p } from '../framework/dom-creators';
import { cartItemSum } from './cart-item-sum.component';
import { cartItem } from './cart-item.component';
import { Item } from '../models/item';

export function cartPanel({ heading = 'Cart Items', items }: { heading?: string; items: Item[] }) {
  const $article = article('panel is-primary my-6 w-75 mx-auto');
  const $heading = p('panel-heading');
  $heading.textContent = heading;
  $article.append($heading);

  let value = 0;
  items.forEach((item) => {
    value += item.price.value;
    $article.appendChild(cartItem(item));
  });

  $article.append(cartItemSum({ value, currency: 'PLN' }));

  return $article;
}
