using Microsoft.AspNetCore.Identity;
using ServerAPI.Models;

namespace ServerAPI.Repository
{
    public interface IAccountRepository
    {

        Task<IdentityResult> SignUp(SignUpModel signUpModel);

        Task<string> Login(SignInModel sigInModel);

       
    }
}
