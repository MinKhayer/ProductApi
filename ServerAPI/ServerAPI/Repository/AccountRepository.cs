using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using ServerAPI.Data;
using ServerAPI.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ServerAPI.Repository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<CustomerModel> _userManager;
        private readonly SignInManager<CustomerModel> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;

        public AccountRepository(UserManager<CustomerModel>  userManager, 
                SignInManager<CustomerModel> signInManager, IConfiguration configuration,  DataContext context  )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _context = context;
        }

        public async Task<IdentityResult> SignUp(SignUpModel signUpModel)
        {
            var user = new CustomerModel()
            {
                CustomerName = signUpModel.Name,
                ContactNo = signUpModel.ContactNo,
                State = signUpModel.State,
                City = signUpModel.City,
                Email = signUpModel.Email,
                UserName = signUpModel.Email
               
            };

          return   await _userManager.CreateAsync(user, signUpModel.Password);
        }


        public async Task<string> Login(SignInModel sigInModel)
        {
            var result = await _signInManager.PasswordSignInAsync(sigInModel.Email, sigInModel.Password, false, false);
            if(!result.Succeeded)
            {
                return null;
            }

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, sigInModel.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var authSignInKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddDays(1),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSignInKey, SecurityAlgorithms.HmacSha256Signature )
                ) ;

            return new JwtSecurityTokenHandler().WriteToken(token);
        
        }

      
    }
}
