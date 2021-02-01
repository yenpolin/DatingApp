using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Helpers
{
    public static class Extensions
    {
        public static void AddApplicationError(this HttpResponse response, string message){
            response.Headers.Add("Applicaiton-Error", message);
            response.Headers.Add("Access-Control-Expose-Error", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}