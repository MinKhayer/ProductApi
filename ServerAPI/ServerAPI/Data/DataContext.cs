using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServerAPI.Models;

namespace ServerAPI.Data
{
    public class DataContext : IdentityDbContext<CustomerModel>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<OrderModel> orders { get; set; }
        public DbSet<CustomerModel> customers { get; set; }
    }
}
