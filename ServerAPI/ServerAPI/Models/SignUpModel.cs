using System.ComponentModel.DataAnnotations;

namespace ServerAPI.Models
{
    public class SignUpModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        [Compare("ConfirmPassword")]
        public string ConfirmPassword { get; set; }

        [Required]
        public string ContactNo { get; set; }

        [Required]
       public string State { get; set; }

        [Required]
        public string City { get; set; }

    }
}
