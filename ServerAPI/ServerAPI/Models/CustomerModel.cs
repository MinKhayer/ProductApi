using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace ServerAPI.Models
{
    public class CustomerModel : IdentityUser
    {
        
        [Required]
        public string CustomerName { get; set; }

        [Required]
        public string ContactNo { get; set; }

        [Required]

        public string State { get; set; }

        [Required]
        public string City { get; set; }


    }
}
