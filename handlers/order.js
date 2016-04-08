/*
  body: {
  items:  [{ code: 'P14IBKSPF', quantity: 1, options: []}]
  address: {
            Street: '900 Clark Ave',
            City: 'St. Louis',
            Region: 'MO',
            PostalCode: 63102
          },
  customer: {
    firstName: 'Rene',
    lastName: 'Loperena',
    phone: '619-632-0016',
    email: 'rene.loperena.garcia@adp.com'
  },
}
*/
import pizzapi, { Address, Store, Customer, Order, Item } from 'dominos';
const STORE_ID = '3681';

export function orderPizza(request, reply) {
  const { payload } = request;

  const address = new Address(payload.address);
  const customer = new Customer({
    address,
    firstName: payload.customer.firstName,
    lastName: payload.customer.lastName,
    phone: payload.customer.phone,
    email: payload.customer.email,
  });

  const order = new Order({
    customer,
    storeID: STORE_ID,
    deliveryMethod: 'Delivery'
  });

  payload.items.forEach(item => order.addItem(new Item(item)));
  order.validate(result => reply(result));
}
/*
orderPizza({payload:
  {
    items:  [{ code: 'P14IBKSPF', quantity: 1, options: []}],
    address: {
          Street: '900 Clark Ave',
          City: 'St. Louis',
          Region: 'MO',
          PostalCode: 63102
        },
      customer: {
        firstName: 'Rene',
        lastName: 'Loperena',
        phone: '619-632-0016',
        email: 'rene.loperena.garcia@adp.com'
      }
    }
  });*/
