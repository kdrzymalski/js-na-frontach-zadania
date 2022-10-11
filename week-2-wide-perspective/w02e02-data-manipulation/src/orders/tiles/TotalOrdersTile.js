import { getOrders } from '../../api/getOrders';

const componentId = 'total-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

const orders = await getOrders()

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
content.innerHTML = orders.length