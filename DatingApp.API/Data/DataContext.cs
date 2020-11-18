using Microsoft.EntityFrameworkCore;
using Models;

namespace Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {}

        public DbSet<Value> Values { get; set; }
    }
}