using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ServerAPI.Models
{
    public class OrderModel
    {
        [Key]
        public int OrderId { get; set; }
        [Required]
        public int OrderNo { get; set; }
        [Required]
        public DateTime OrderDate { get; set; } = DateTime.Now;
        [Required]
        public int Quantity { get; set; }
        [Required]
        public int UnitPrice {get; set;}
        [Required]
        public int TotalAmount { get; set; }

        [Required]
        public string Email { get; set; }

        [ForeignKey("Id")]
        public CustomerModel? Customer { get; set; }
    }
}
