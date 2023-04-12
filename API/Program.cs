using Microsoft.Extensions.Options;
using Persistence;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;
using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var DocumentStoreHolder = new DocumentStoreHolder();


builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton(DocumentStoreHolder.Store);
builder.Services.AddScoped(p => p.GetRequiredService<IDocumentStore>().OpenAsyncSession());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var session = services.GetRequiredService<IAsyncDocumentSession>();
    await Seed.SeedData(session);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occured: " + ex.Message);
}



app.UseCors();

app.UseAuthorization();


app.Run();