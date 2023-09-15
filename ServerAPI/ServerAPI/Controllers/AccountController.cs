using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerAPI.Models;
using ServerAPI.Repository;

namespace ServerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _accountRepository;

        public AccountController(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp([FromBody] SignUpModel signUpModel )
        {
            var result = await _accountRepository.SignUp(signUpModel);

            if(result.Succeeded)
            {
                return Ok(result.Succeeded);
            }

            return Unauthorized();

        }


        [HttpPost("login")]
        public async Task<IActionResult> LogIn([FromBody] SignInModel signInpModel)
        {
            var result = await _accountRepository.Login(signInpModel);

            if (string.IsNullOrEmpty(result))
            {
                return Unauthorized();
            }

            return Ok(result);

        }
        
        
    }
}
