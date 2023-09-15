using Microsoft.EntityFrameworkCore;
using ServerAPI.Data;
using ServerAPI.Models;

namespace ServerAPI.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DataContext _context;

        public OrderRepository(DataContext context)
        {
           
            _context = context;
        }

        public async Task<List<OrderModel>> GetAllOrders()
        {

            var records = await _context.orders.Select(x => new OrderModel()
            {
                OrderId = x.OrderId,
                OrderDate = x.OrderDate,
                OrderNo = x.OrderNo,
                Email = x.Email,
                Quantity = x.Quantity,
                UnitPrice = x.UnitPrice,
                TotalAmount = x.TotalAmount,

            }).ToListAsync();

            return records;
        }

        public async Task<List<OrderModel>> GetAllOrdersId(string email)
        {

            var records = await _context.orders.Where(x => x.Email == email).Select(x => new OrderModel()
            {
                OrderId = x.OrderId,
                OrderDate = x.OrderDate,
                OrderNo = x.OrderNo,
                Email = x.Email,
                Quantity = x.Quantity,
                UnitPrice = x.UnitPrice,
                TotalAmount = x.TotalAmount,

            }).ToListAsync();

            return records;
        }


        public async Task<int> AddOrder(OrderModel obj)
        {
            var order = new OrderModel()
            {
                Email = obj.Email,
                OrderNo = obj.OrderNo,
                OrderDate = obj.OrderDate,
                Quantity = obj.Quantity,
                UnitPrice = obj.UnitPrice,
                TotalAmount = obj.TotalAmount,
            };

            _context.orders.Add(order);
           await _context.SaveChangesAsync();

            return order.OrderId;
        }

        public async Task UpdateOrderAsync(int orderId, OrderModel obj)
        {
            var order = await _context.orders.FindAsync(orderId);
            if(order != null)
            {
                order.OrderNo = obj.OrderNo;
                order.OrderDate = obj.OrderDate;
                order.Quantity = obj.Quantity;
                order.UnitPrice = obj.UnitPrice;
                order.TotalAmount = obj.TotalAmount;

               await _context.SaveChangesAsync();
                 
            }

        }


        public async Task DeleteOrder(int orderId)
        {
            var order = _context.orders.Where(x => x.OrderId == orderId).FirstOrDefault();

            if(order != null)
            {
                _context.orders.Remove(order);

                await _context.SaveChangesAsync();
               
            }


        }
       

    }
}
